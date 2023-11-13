import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/types';
import { IAuth, IResponseError, IErrorDetail, IFilm, IFilmShort, IFilmPromo, IReview, IUser, IReviewData } from '../types/interfaces';
import { APIRoute, AuthorizationStatus, ReducerName } from '../types/enums';
import { setFilmsLoadingStatus, setFilms, setPromoFilm, setGenres, setAuthorizationStatus, setAuthorizationErrors, setFilm, setFilmComments, setFavorites, setSimilarFilms, setFavoritesLoadingStatus, setCommentUploadingStatus, setCommentAddErrors } from './action';
import { dropToken, saveToken } from '../services/token';

export const getFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setFilmsLoadingStatus(true));
      const {data} = await api.get<IFilmShort[]>(APIRoute.Films);
      dispatch(setFilmsLoadingStatus(false));
      dispatch(setFilms(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },
);

export const getSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<IFilmShort[]>(`${APIRoute.Films}/${filmId}/${APIRoute.SimilarFilms}`);
      dispatch(setSimilarFilms(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },
);

export const getPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<IFilmPromo>(APIRoute.PromoFilm);
      dispatch(setPromoFilm(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },
);

export const getGenresAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getGenres',
  (_arg, {dispatch, getState}) => {
    try {
      dispatch(setGenres(getState()[ReducerName.Films].films));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },
);

export const getAuthorizationStatusAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/getAuthorizationStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, IAuth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<IUser>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch (error) {
      if (error instanceof AxiosError) {
        const errors: IResponseError[] = [];
        if (!error?.response) {
          errors.push({'property': 'server', messages: ['Server unavailable']});
        } else if (error.response?.status === 400) {
          error.response?.data?.details?.forEach((errorDetail: IErrorDetail) => {
            errors.push({property: errorDetail.property, messages: errorDetail.messages});
          });
          dispatch(setAuthorizationErrors(errors));
        } else {
          errors.push({'property': 'app', messages: ['Sign in failed']});
        }
      }
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },
);

export const getFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getFilm',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<IFilm>(`${APIRoute.Films}/${filmId}`);
      dispatch(setFilm(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },
);

export const getFilmCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/getFilmComments',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<IReview[]>(`${APIRoute.Comments}/${filmId}`);
      dispatch(setFilmComments(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },
);

export const addFilmCommentAction = createAsyncThunk<void, IReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/addFilmComment',
  async ({filmId, comment, rating}, {dispatch, getState, extra: api}) => {
    try {
      dispatch(setCommentUploadingStatus(true));
      const {data} = await api.post<IReview>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
      dispatch(setCommentUploadingStatus(false));
      dispatch(setFilmComments(getState()[ReducerName.Comments].comments.concat([data])));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setCommentUploadingStatus(false));
        const errors: IResponseError[] = [];
        if (!error?.response) {
          errors.push({'property': 'server', messages: ['Server unavailable']});
        } else if (error.response?.status === 400) {
          error.response?.data?.details?.forEach((errorDetail: IErrorDetail) => {
            errors.push({property: errorDetail.property, messages: errorDetail.messages});
          });
          dispatch(setCommentAddErrors(errors));
        } else {
          errors.push({'property': 'app', messages: ['Comment add failed']});
        }
      }
    }
  },
);

export const getFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/getFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setFavoritesLoadingStatus(true));
      const {data} = await api.get<IFilmShort[]>(APIRoute.Favorites);
      dispatch(setFavoritesLoadingStatus(false));
      dispatch(setFavorites(data));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  },
);

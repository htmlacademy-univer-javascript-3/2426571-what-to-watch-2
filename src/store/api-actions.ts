import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';
import { APIRoute, AuthorizationStatus, ReducerName } from '../types/enums';
import { IAuth, IFavoriteStatusSet, IFilm, IFilmPromo, IFilmShort, IResponseError, IResponseErrorDetails, IResponseErrorMessage, IReview, IReviewData, IUser } from '../types/interfaces';
import { AppDispatch, State } from '../types/types';
import { setAuthorizationErrors, setAuthorizationStatus, setCommentAddErrors, setCommentUploadingStatus, setFavorites, setFavoritesLoadingStatus, setFilm, setFilmComments, setFilmLoadingError, setFilmLoadingStatus, setFilms, setFilmsLoadingStatus, setGenres, setPromoFilm, setSimilarFilms, setSimilarFilmsLoadingStatus } from './action';

export const getFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<IFilmShort[]>(APIRoute.Films);
    dispatch(setFilms(data));
    dispatch(setFilmsLoadingStatus(false));
  },
);

export const getSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(setSimilarFilmsLoadingStatus(true));
    const {data} = await api.get<IFilmShort[]>(`${APIRoute.Films}/${filmId}/${APIRoute.SimilarFilms}`);
    dispatch(setSimilarFilms(data));
    dispatch(setSimilarFilmsLoadingStatus(false));
  },
);

export const getPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<IFilmPromo>(APIRoute.PromoFilm);
    dispatch(setPromoFilm(data));
  },
);

export const getGenresAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getGenres',
  (_arg, {dispatch, getState}) => {
    dispatch(setGenres(getState()[ReducerName.Films].films));
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
      dispatch(setFilmLoadingStatus(true));
      const {data} = await api.get<IFilm>(`${APIRoute.Films}/${filmId}`);
      dispatch(setFilm(data));
      dispatch(setFilmLoadingStatus(false));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errors: IResponseError[] = [];
        if (!error?.response) {
          errors.push({'property': 'server', messages: ['Server unavailable']});
        } else if (`${error.response?.status}`.startsWith('4')) {
          dispatch(setFilmLoadingError((<IResponseErrorMessage>error.response?.data).message));
        } else {
          errors.push({'property': 'app', messages: ['Sign in failed']});
        }
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
      if (axios.isAxiosError(error)) {
        const errors: IResponseError[] = [];
        if (!error?.response) {
          errors.push({'property': 'server', messages: ['Server unavailable']});
        } else if (error.response?.status === 400) {
          (<IResponseErrorDetails>error.response?.data).details?.forEach((errorDetail) => {
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
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const getFilmCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/getFilmComments',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<IReview[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(setFilmComments(data));
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
      dispatch(setFilmComments(getState()[ReducerName.Comments].comments.concat([data])));
      dispatch(setCommentUploadingStatus(false));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setCommentUploadingStatus(false));
        const errors: IResponseError[] = [];
        if (!error?.response) {
          errors.push({'property': 'server', messages: ['Server unavailable']});
        } else if (error.response?.status === 400) {
          (<IResponseErrorDetails>error.response?.data).details?.forEach((errorDetail) => {
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
  async (_arg, {dispatch, getState, extra: api}) => {
    dispatch(setFavoritesLoadingStatus(true));
    if (getState().userReducer.authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(setFavorites([]));
    } else {
      const {data} = await api.get<IFilmShort[]>(APIRoute.Favorites);
      dispatch(setFavorites(data));
    }
    dispatch(setFavoritesLoadingStatus(false));
  },
);

export const setFavoriteStatusAction = createAsyncThunk<void, IFavoriteStatusSet, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/setFavoriteStatus',
  async ({filmId, status}, {dispatch, extra: api}) => {
    dispatch(setFavoritesLoadingStatus(true));
    await api.post(`${APIRoute.Favorites}/${filmId}/${status}`);
    dispatch(setFavoritesLoadingStatus(false));
  },
);

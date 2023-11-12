import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/types';
import { IAuth, IAuthorizationError, IErrorDetail, IFilmPreview, IFilmPromo, IUser } from '../types/interfaces';
import { APIRoute, AuthorizationStatus } from '../types/enums';
import { setFilmsLoadingStatus, setFilms, setPromoFilm, setGenres, setAuthorizationStatus, setAuthorizationErrors } from './action';
import { dropToken, saveToken } from '../services/token';

export const getFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/getFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<IFilmPreview[]>(APIRoute.Films);
    dispatch(setFilmsLoadingStatus(false));
    dispatch(setFilms(data));
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
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<IFilmPreview[]>(APIRoute.Films);
    dispatch(setFilmsLoadingStatus(false));
    dispatch(setGenres(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
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
        const errors: IAuthorizationError[] = [];
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

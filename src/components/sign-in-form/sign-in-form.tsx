import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setAuthorizationErrors } from '../../store/action';
import { loginAction } from '../../store/api-actions';
import { ReducerName } from '../../types/enums';
import { IAuth } from '../../types/interfaces';
import { capitalize } from '../../utils/utils';

export const SignInForm = () => {
  const authorizationErrors = useAppSelector((state) => state[ReducerName.User].authorizationErrors);
  const dispatch = useAppDispatch();
  const [signInForm, setSignInForm] = useState<IAuth>({
    email: '',
    password: '',
  });

  useEffect(() => () => {
    dispatch(setAuthorizationErrors([]));
  }, [dispatch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setSignInForm({...signInForm, [name]: value});
  };

  const handleSignInClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(loginAction(signInForm));
  };

  const propertyHasError = (property: string) => authorizationErrors.find((error) => error.property === property);

  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form">
        {authorizationErrors.length !== 0 ?
          <div className="sign-in__message">
            {authorizationErrors.map((property) => property.messages.map((message) => <p key={message}>{capitalize(message)}</p>))}
          </div> :
          null}
        <div className="sign-in__fields">
          <div className={`sign-in__field ${propertyHasError('email') ? 'sign-in__field--error' : ''}`}>
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="email"
              id="user-email"
              value={signInForm.email}
              onChange={handleInputChange}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className={`sign-in__field ${propertyHasError('password') ? 'sign-in__field--error' : ''}`}>
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="password"
              id="user-password"
              value={signInForm.password}
              onChange={handleInputChange}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit" onClick={handleSignInClick}>Sign in</button>
        </div>
      </form>
    </div>
  );
};

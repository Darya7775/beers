import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchAuthorization } from "/src/features/session-slice";
import InputLogin from "/src/components/ui/input-login";
import Form from "/src/components/blocks/form";
import Test from "/src/components/blocks/test";

function Login() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    "login": name,
    "password": password,
    "remember": true
  }

  const callbacks = {
    // запрос на авторзацию и перенаправление на страницу с которой пришли или на главную
    onSubmit: useCallback(async (e) => {
      e.preventDefault();
      const result = await dispatch(fetchAuthorization(user)).unwrap();

      if(!result.error) {
        const back =  location.state?.back && location.state?.back !== location.pathname
                      ? location.state?.back
                      : '/';
        navigate(back);
      }
    }, [user, location.state]),
    // изменение логина
    onChangeLogin: useCallback((value) => {
      setName(value);
    }, []),
    // изменение пароля
    onChangePassword: useCallback((value) => {
      setPassword(value);
    }, []),
  }

  const select = useSelector(state => ({
    authorization: state.session.authorization,
    error: state.session.error,
  }));

  return(
    <>
      <Form action="/api/v1/users/sign" method="POST" onSubmit={callbacks.onSubmit} textButton="Sign In">
        <InputLogin type="text" value={name} text="Login" onChange={callbacks.onChangeLogin} />
        <InputLogin type="password" value={password} text="Password" onChange={callbacks.onChangePassword}/>
        {select.error || <div>{select.error}</div>}
      </Form>
      <Test />
    </>
  );
}

export default Login;

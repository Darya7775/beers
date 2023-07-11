import React, { useCallback, useState } from "react";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import useTranslate from "../../../hooks/use-translate";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchAuthorization } from "../../../features/session-slice";
import InputLogin from "../../ui/input-login";
import Form from "../../blocks/form";
import Test from "../../blocks/test";

const Login: React.FC = () => {
  const {t} = useTranslate();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    login: name,
    password: password,
    remember: true
  }

  const callbacks = {
    // запрос на авторзацию и перенаправление на страницу с которой пришли или на главную
    onSubmit: useCallback(async (e: React.SyntheticEvent) => {
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
    onChangeLogin: useCallback((value: string) => {
      setName(value);
    }, []),
    // изменение пароля
    onChangePassword: useCallback((value: string) => {
      setPassword(value);
    }, []),
  }

  const select = useAppSelector(state => ({
    authorization: state.session.authorization,
    error: state.session.error,
  }));

  return(
    <>
      <Form action="/api/v1/users/sign" method="POST" onSubmit={callbacks.onSubmit} textButton={t("authorization.signIn")}>
        <>
          <InputLogin type="text" value={name} text={t("login")} onChange={callbacks.onChangeLogin} />
          <InputLogin type="password" value={password} text={t("password")} onChange={callbacks.onChangePassword}/>
          {select.error || <div>{select.error}</div>}
        </>
      </Form>
      <Test />
    </>
  );
}

export default Login;

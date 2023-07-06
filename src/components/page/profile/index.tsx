import React, { useEffect } from "react";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import { fetchUser } from "../../../features/user-slice";
import Spinner from "../../ui/spinner";
import ProfileCard from "../../blocks/profile-card";
import { Navigate } from "react-router-dom";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();

  const select = useAppSelector(state => ({
    token: state.session.token,
    authorization: state.session.authorization,
    status: state.user.status,
    error: state.user.error,
    name: state.user.name,
    email: state.user.email,
    telephone: state.user.telephone
  }));

  useEffect(() => {
    if(select.token) dispatch(fetchUser(select.token));
    console.log("eff profile")
  }, [select.token]);

  let content;

  if(select.status === "loading") {
    content = <Spinner text="Loading..." />
  } else if(select.status === "succeeded") {
    content = select.authorization
              ? <ProfileCard name={select.name} email={select.email} telephone={select.telephone} />
              : <Navigate to={"/login"} />;
  } else if(select.status === "failed") {
    content = <div>{select.error}</div>
  }

  return(
    <>{content}</>
  );
}

export default Profile;

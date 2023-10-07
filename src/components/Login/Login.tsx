import React from "react";
import { FieldsForm, LoginView } from "./Login.view";
import { POST_LOGIN } from "../../apollo/login";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { MainRoute, ScreenRoute } from "../../types/Screen.routes.enum";
import { UserResponse } from "../../apollo/models/AuthResponse";
import { User } from "../../apollo/models";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [submitLogin, { data, error }] =
    useMutation<UserResponse<User>>(POST_LOGIN);

  const submit = ({ login, pass }: FieldsForm) => {
    submitLogin({
      variables: {
        username: login,
        password: pass,
      },
    }).catch((err) => console.log(err));
  };

  const token = data?.login.token;

  if (token) {
    localStorage.setItem("token", token);
    navigate(`/${MainRoute.EXCHANGE}/${ScreenRoute.DASHBOARD}`, {
      replace: true,
    });
  }

  return <LoginView submit={submit} error={error} />;
};

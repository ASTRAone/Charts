import React, { ChangeEvent, FormEvent, useState } from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from "./styles.module.scss";
import { ApolloError } from "@apollo/client";

type Props = {
  submit: (data: FieldsForm) => void;
  error: ApolloError | undefined;
};

type FieldsForm = {
  login: string;
  pass: string;
};

export const LoginView: React.FC<Props> = ({ submit, error }) => {
  const cx = useStyles(styles);
  const [state, setState] = useState<FieldsForm>({
    login: "",
    pass: "",
  });

  const btnDisabled = !state.login || !state.pass;

  const changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setState((prev) => ({
      ...prev,
      login: value,
    }));
  };

  const changePass = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setState((prev) => ({
      ...prev,
      pass: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={cx("container")}>
        <h2 className={cx("title")}>Вход</h2>
        <p className={cx("text")}>
          Уникальная технология доступная для вашего бизнеса уже сейчас!
        </p>
        <div className={cx("content")}>
          <input
            value={state.login}
            onChange={changeLogin}
            type="text"
            placeholder="Логин"
            className={cx("input")}
          />
          <input
            value={state.pass}
            onChange={changePass}
            type="password"
            placeholder="Пароль"
            className={cx("input")}
          />
          {error && <span className={cx("error")}>Ошибка входа</span>}
        </div>
        <div className={cx("btn")}>
          <button className={cx("btn")} type="submit" disabled={btnDisabled}>
            Войти
          </button>
        </div>
      </div>
    </form>
  );
};

export type { FieldsForm };

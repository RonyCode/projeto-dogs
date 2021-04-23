import React from "react";
import Input from "../../Form/Input/Input";
import Button from "../../Form/Button/Button";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../../api/api";
import Error from "../../../Helper/Error/Error";
import Head from "../../../Helper/Head/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: "http://localhost:3000/login/resetar",
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section className="container mainContainer animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
        </form>
      )}
      {<Error error={error} />}
    </section>
  );
};

export default LoginPasswordLost;

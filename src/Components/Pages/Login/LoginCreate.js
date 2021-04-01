import React from "react";
import Input from "../../Form/Input/Input";
import Button from "../../Form/Button/Button";
import useForm from "../../../Hooks/UseForm";
import { USER_POST } from "../../../api/api";
import { UserContext } from "../../../Hooks/UserContext";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="usename" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;

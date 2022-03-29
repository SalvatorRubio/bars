import React from "react";
import Api from "../../ClassApi";

const Login = () => {
  const handelForm = (e) => {
    e.preventDefault();
    let form = e.target;
    Api.authorization(form.login.value, form.pas.value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handelForm}>
      <input type="text" name="login" />
      <input type="text" name="pas" />
      <button type="submit">Click</button>
    </form>
  );
};

export default Login;

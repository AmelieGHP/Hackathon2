import React, { useState } from "react";
import VisualLogin from "../components/VisualLogin";
import LoginForm from "../components/LoginForm";
import SubscribeForm from "../components/SubscribeForm";

function Login() {
  const [userExist, setUserExist] = useState(false);
  return (
    <div className="loginPage">
      <VisualLogin />
      <div className="loginSubscribe">
        <p>Login / subscribe</p>
        {userExist ? <LoginForm /> : <SubscribeForm />}
        <p>{userExist ? "Not a Member ?" : "Already a member ?"}</p>
        <button type="button" onClick={() => setUserExist(!userExist)}>
          {userExist ? "Sign in" : "Log in"}
        </button>
      </div>
    </div>
  );
}

export default Login;

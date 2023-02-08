import React, { useState } from "react";
import VisualLogin from "../components/VisualLogin";
import LoginForm from "../components/LoginForm";
import SubscribeForm from "../components/SubscribeForm";
import blackLogo from "../assets/black-mount-logo-black.svg";
import whiteLogo from "../assets/black-mount-logo-white.svg";

function Login() {
  const [userExist, setUserExist] = useState(true);
  return (
    <div className="loginPage">
      <VisualLogin />
      <div className="heroBanner">
        <img
          className="blackMountWhiteLogo"
          src={whiteLogo}
          alt="Black Mount Logo White"
          width="220px"
        />
      </div>
      <div className="loginSubscribe">
        <img
          className="blackMountBlackLogo"
          src={blackLogo}
          alt="Black Mount Logo Black"
          width="220px"
        />
        <h1>{userExist ? "Hello rider!" : "Welcome!"}</h1>
        <p className="accentText">
          {userExist ? "Welcome back! " : "Create your account! "}Please enter
          your details.
        </p>
        {userExist ? <LoginForm /> : <SubscribeForm />}
        <div className="switchContainer">
          <p className="accentText">
            {userExist ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            type="button"
            className="clearButton"
            onClick={() => setUserExist(!userExist)}
          >
            {userExist ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

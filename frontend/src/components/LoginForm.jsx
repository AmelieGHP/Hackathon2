import React, { useState, useContext } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "./context/UserContext";

// style in pages/loginPage.scss

function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePwdClick = (e) => {
    e.preventDefault();
    setVisiblePassword(!visiblePassword);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post("http://localhost:5000/login", {
          email,
          password,
        })
        .then((res) => {
          const { token } = res.data;
          console.log(res.data.user);
          setUser({
            phone: res.data.user.phone,
            type_of_license: res.data.user.type_of_license,
            firstname: res.data.user.firstname,
            lastname: res.data.user.lastname,
            email: res.data.user.email,
            id_user: res.data.user.id_user,
          });
          navigate("/home", {
            state: {
              token,
            },
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  return (
    <div className="loginForm">
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="jane.doe@example.com"
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label htmlFor="password">Password</label>
        <div className="passwordInput">
          <input
            type={!visiblePassword ? "password" : "text"}
            name="pwd"
            id="pwd"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            onKeyPress={handleKeyPress}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="button" onClick={handlePwdClick}>
            {visiblePassword ? (
              <AiOutlineEye
                color="#B5C5F4"
                size={20}
                style={{ backgroundColor: "#F3F6FF" }}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={20}
                color="#B5C5F4"
                style={{ backgroundColor: "#F3F6FF" }}
              />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="primaryButton"
          disabled={!email || !password}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

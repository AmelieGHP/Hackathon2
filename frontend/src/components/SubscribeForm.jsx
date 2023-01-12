import React, { useState, useContext } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// style in pages/loginPage.scss

function SubscribeForm() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [license, setLicense] = useState("");
  const navigate = useNavigate();

  const handlePwdClick = (e) => {
    e.preventDefault();
    setVisiblePassword(!visiblePassword);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (email && password && firstname && lastname && phone && license) {
      axios.post("http://localhost:5000/signin", {
        email,
        password,
        firstname,
        lastname,
        phone,
        license
      })
        .then((result) => {
          const { token } = result.data;
          const user = result.data;
          console.log(user)
          navigate("/home", {
            state: {
              token,
            },
          })
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <div className="subscribeForm">
      <form>
        <div className="identity">
          <div>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Jane"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Doe"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jane.doe@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="passwordInput">
          <label htmlFor="password">Password</label>
          <input
            type={!visiblePassword ? "password" : "text"}
            name="pwd"
            id="pwd"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="button" onClick={handlePwdClick}>
            {visiblePassword ? (
              <AiOutlineEye
                color={password ? "#5871bd" : "#B5C5F4"}
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
        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="07 00 00 00 00"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>
        <div>

          <label htmlFor="license">License type - BHS stage</label>
          <input
            type="number"
            name="license"
            id="license"
            min="0"
            max="4"
            placeholder="1 - 4 / Enter 0 if you don't have any"
            onChange={(e) => {
              setLicense(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="primaryButton"
          disabled={
            !email || !password || !firstname || !lastname || !phone || !license
          }
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SubscribeForm;

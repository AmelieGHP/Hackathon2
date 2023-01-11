import React, { useState } from "react";
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
      //   axios.post("http://localhost:5000/inscription", {
      //     email,
      //     password,
      //     firstname,
      //     lastname,
      //     phone,
      //     license
      //   })
      //     .then(() => {
      navigate("/home");
      //     })
      //     .catch((err) => {
      //       console.error(err);
      //     });
    }
  };
  return (
    <div className="subscribeForm">
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
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
            value={password}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="button" onClick={handlePwdClick}>
            {visiblePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <label htmlFor="firstname">Firstname</label>

        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        />
        <label htmlFor="lastname">Lastname</label>

        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
        <label htmlFor="license">License type - BHS stage</label>
        <input
          type="number"
          name="license"
          id="license"
          min="0"
          max="4"
          onChange={(e) => {
            setLicense(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="btnSubmit"
          disabled={
            !email || !password || !firstname || !lastname || !phone || !license
          }
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default SubscribeForm;

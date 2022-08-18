import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import {CgFacebook,CgGoogle} from 'react-icons/cg'
import Signup from "./SignUp";
import Footer from '../Footer';

const Login = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPss] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr(false);
  };
  const handlePass = (e) => {
    setPss(e.target.value);
    setpassErr(false);
  };
  const handleClick = () => {
    if (name && pass) {
      const data = {
        username: name,
        password: pass,
      };
      if (name === "admin" && pass === "1234") {
        axios
          .post("http://localhost:8080/user/login", data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                navigate("/Admin");
              } else {
                alert("wrong credentials.");
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:8080/user/login", data)
          .then(function (response) {
            if (response && response.data) {
              if (response.data === "logged in") {
                navigate("/Userhome");
              } else {
                alert("wrong credentials.");
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else if (name) {
      setpassErr(true);
      setNameErr(false);
    } else if (pass) {
      setNameErr(true);
      setpassErr(false);
    } else {
      setpassErr(true);
      setNameErr(true);
    }
  };

  return (
    <div className="input">
      <h1 className="title1a">USER LOGIN</h1>
      <div className="just-for-flex">
      <div className="loginForm">
        <div className="name">
          <div className="input-form-section">
          <div><label>Username</label></div>
          <div><input
            type="text"
            placeholder="Enter Username"
            value={name}
            onChange={handleName}
          /></div></div>
          <span className="form-error">{nameErr && <span>Enter valid name</span>}</span>
          <div className="input-form-section">
          <div><label>Password</label></div>
          <div><input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={handlePass}
          /></div></div>
          <span className="form-error">{passErr && <span>Enter valid password</span>}</span>
        </div>
        <button className="submit-btn" onClick={handleClick}>
          Submit
        </button>
        <div className="just-for-flex">
          {"or Login With "}
        <div>
          <button 
          className="submit-btn social"
          ><CgGoogle size={20} style={{marginBottom:"4px",verticalAlign:"middle"}}/> Google</button>
        </div>
        <div>
        <button
          className="submit-btn social"
        ><CgFacebook size={20} style={{marginBottom:"4px",verticalAlign:"middle"}}/> Facebook</button>
        </div></div>
        {" don't have an account?"}
        <button
          className="submit-btn"
          onClick={() => {
            navigate("/Signup");
          }}
        >
          SignUp
        </button>
      </div></div>
      <Footer />
    </div>
  );
};

export default Login;

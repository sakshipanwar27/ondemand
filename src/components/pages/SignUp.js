import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

/**To Show Add Toastify Text */
const notify = () => {
  toast.success('Registered Successfully!!',
    {
      position: "top-center",
      autoClose: 3000
    });

}

export default class UserRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      contactno: "",
      username: "",
      password: "",
      confirmpassword: "",
      nameError: "",
      emailError: "",
      contactnoError: "",
      usernameError: "",
      passwordError: "",
      confirmpasswordError: "",
    };
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  valid() {
    if (
      this.state.name.length < 4 &&
      this.state.email.length < 6 &&
      this.state.contactno.length <= 10 &&
      this.state.username.length < 6 &&
      this.state.password.length < 6 &&
      this.state.confirmpassword.length < 6
    ) {
      this.setState({
        nameError: "Invalid Name",
        emailError: "Please Enter a Valid Email Id",
        contactnoError: "Please Enter 10 Digit Mobile Number",
        usernameError: "UserName length shoud be more than 6",
        passwordError: "Password length should be more than 6",
        confirmpasswordError: "Password length should be more than 6",
      });
    } else if (this.state.name.length < 1) {
      this.setState({
        nameError: "Name length should be more than 1",
      });
    } else if (this.state.email.length < 9) {
      this.setState({
        emailError: "Email length should be more than 8",
      });
    } else if (this.state.contactno.length < 9) {
      this.setState({
        contactnoError: "Mobile number should be 10 digits",
      });
    } else if (this.state.username.length < 4) {
      this.setState({
        usernameError: "Invalid Username",
      });
    } else if (this.state.password.length < 6) {
      this.setState({
        passwordError: "Password length should be more than 6",
      });
    } else if (this.state.confirmpassword.length < 6) {
      this.setState({
        confirmpasswordError: "Password length should be more than 6",

      });

    } else {
      return true;
    }
  }

  register(e) {
    this.setState({
      nameError: "",
      emailError: "",
      contactnoError: "",
      usernameError: "",
      passwordError: "",
      confirmpasswordError: "",
    });
    e.preventDefault();
    if (this.valid()) {
      fetch("http://localhost:8080/user/adduser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          contactno: this.state.contactno,
          username: this.state.username,
          password: this.state.password,
          confirmpassword: this.state.confirmpassword,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          toast.success('User Added Successfully!!',
            {
              position: "top-center",
              autoClose: 3000
            });
        })
        .catch((err) => {
          notify();
        });
    }
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  render() {
    return (
      <form>
        <div className="input">
          <h2 className="title1a">USER REGISTRATION</h2>
          <div className="just-for-flex">
          <div className="loginForm">
          <div className="name">
          <div className="input-form-section">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => this.handleChange({ name: e.target.value })}
            />
            <p style={{ color: "red" }}>{this.state.usernameError}</p>
          </div>

          <div className="input-form-section">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => this.handleChange({ email: e.target.value })}
            />
            <p style={{ color: "red" }}>{this.state.emailError}</p>
          </div>

          <div className="input-form-section">
            <label>Contact</label>
            <input
              type="text"
              placeholder="Enter contact"
              onChange={(e) => this.handleChange({ contactno: e.target.value })}
            />
            <p style={{ color: "red" }}>{this.state.contactnoError}</p>
          </div>

          <div className="input-form-section">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              onChange={(e) => this.handleChange({ username: e.target.value })}
            />
            <p style={{ color: "red" }}>{this.state.usernameError}</p>
          </div>

          <div className="input-form-section">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => this.handleChange({ password: e.target.value })}
            />
            <p style={{ color: "red" }}>{this.state.passwordError}</p>
          </div>

          <div className="input-form-section">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Enter confirm password"
              onChange={(e) =>
                this.handleChange({ confirmpassword: e.target.value })
              }

            />
            <p style={{ color: "red" }}>{this.state.confirmpasswordError}</p>
          </div>
          <div className="input-form-section">
            <button
              type="submit"
              className="submit-btn"
              to="/search"
              onClick={(e) => { this.register(e); }}
            >
              Signup
            </button>
            <ToastContainer />
          </div>
          <p className="a">Login as Member..?  <a href='/WasherLog'> Login</a></p>
          {"already have an account?"}
        <button
        component={Link} to="/login"
          className="submit-btn"
        >
          Login
        </button>
          </div>
        </div>
        </div>
        </div>
        <Footer />
      </form>
    );
  }
}
import { toBeEmpty } from "@testing-library/jest-dom";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./booking.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
toast.configure();
const Booking = () => {
  // Start
  const [washers, setWashers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/admin/allpacks").then((result) => {
      result.json().then((resp) => {
        setWashers(resp);
        console.log(resp);
      });
    });
  }, []);

  // End
  let navigate = useNavigate();

  const [order, setOrder] = useState({
    carModel: "",
    carName: "",
    contactno: "",
    date: "",
    orderId: "",
    username: "",
    washpackId: "",
    address: "",
  });

  const changeHandler = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    axios
      .post("http://localhost:8083/order/addorder", order)
      .then((res) => {
        if (res.status === 200) alert("Booked Successfully");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <>
      <div className="">
        <div className="">
          <p className="title1a">
            <h1>BOOK YOUR CAR WASH </h1>
          </p>
        </div>
      </div>
      <div className="just-for-flex input">
        <div className="loginForm">
          <form className="" onSubmit={submitHandler}>
            <div>
              <p style={{textAlign:"center",fontSize:"1.5rem"}}>FILL BELOW DETAILS</p>
            </div>

           
            <div >
              <p className="">CONTACT DETAILS</p>
            </div>
            <div className="input-form-section">
              <input
                className=""
                type="text"
                name="username"
                onChange={changeHandler}
                placeholder="Enter Your Full Name"
              />
              <br />
              <input
                className=""
                name="carName"
                type="text"
                placeholder="Enter Your Car Name"
                onChange={changeHandler}
              />
              <br />

              <input
                className=""
                type="text"
                name="carModel"
                placeholder="Enter Your Car Model"
                onChange={changeHandler}
              />
              <br />

              <input
                type="text"
                className=""
                name="contactno"
                onChange={changeHandler}
                placeholder="Enter Phone"
              />
              <br />

              <textarea
                cols="30"
                className=""
                rows="10"
                type="text"
                name="address"
                onChange={changeHandler}
                placeholder="Your Address"
              />

            <div className="">
              <input type="date" name="date" onChange={changeHandler} />
            </div>

            

            </div>
            {washers.map((emp, ind) => (
              <div style={{width:"50%"}}>
                <option>{emp.packname}</option>
                <input  type="radio" onChange={changeHandler} /> {emp.cost}
              </div>
            ))}
            <div className="Submit">
              <button
                type="submit"
                className="submit-btn"
                onClick={() => {
                  navigate("/pay");
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Booking;

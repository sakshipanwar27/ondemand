import React, { useEffect, useState ,deleteRow } from 'react';
import axios from 'axios';


const Washer = () => {

    const [washers, setWashers] = useState([])    
    useEffect(() => {
        fetch("http://localhost:8083/order/allorders").then(result => {
            result.json().then(
                resp => {
                    setWashers(resp)
                })
        })
    }, [])

    // new line 
   
    

    
    return (

        <div className='input'>
            <div>
                <h1 className="title1a">Booked Details</h1>
            </div>

            {washers.map((emp, ind) => (
                <div className="just-for-flex " >
                    <div className='loginForm'>
                        <p className="wash">Name : {emp.username}</p>
                        <p className="wash">Car Name : {emp.carName}</p>
                        <p className="wash">Car Model: {emp.carModel}</p>
                        <p className="wash">Appointment Date : {emp.date}</p>
                        <p className="wash">Wash Pack price: {emp.washpackId}</p>
                        <p className="wash">Contact.No : {emp.contactno}</p>
                        <p className="wash">Address: {emp.address}</p>
                        <button className="submit-btn" >Confirm Booking</button>
                        <button className="submit-btn">Cancel Booking</button>
                    </div>
                    <hr style={{ marginTop: "30px" }} />
                </div>
            ))
            }
        </div>
    )
}

export default Washer
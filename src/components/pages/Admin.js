import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


const Admin = () => {
    const [washers, setWashers] = useState([])

    let navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:9991/admin/allpacks").then(result => {
            result.json().then(
                resp => {
                    setWashers(resp)
                    console.log(resp)
                })
        })
    }, [])




    return (

        <div className='input'>
            <div>
                <h1 className="title1a">Wash pack</h1>
            </div>

            {washers.map((emp, ind) => (
                <div className="just-for-flex" >

                    <div className="loginForm">
                        <p className="text">Id : {emp.id}</p>
                        <p className="text"> Name : {emp.packname}</p>
                        <p className="text">Cost: {emp.cost}</p>
                        <p className="text">Description : {emp.description}</p>

                        <div className="just-for-flex">
                        <button className="Submit-btn hover-btn" onClick={() => { navigate('/addpacks') }}>Addpacks</button>
                        <button className="Submit-btn hover-btn" onClick={() => { navigate('/washer') }}>Orderdetails</button>
                    </div>
                    </div>
                   
                    <hr style={{ marginTop: "30px" }} />
                </div>
            ))
            }
        </div>
    )
}

export default Admin
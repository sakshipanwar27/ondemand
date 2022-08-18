import React, { useState } from 'react';
import axios from 'axios';

import {  toast } from 'react-toastify';


const Addpacks = () => {

  const [id, setId] = useState("")
  const [packname, setName] = useState("")
  const [cost, setCost] = useState("")
  const [description, setDescription] = useState("")
 
  const inputidHandler = (e) => {
    setId(e.target.value)
  }
  const inputnameHandler = (e) => {
    setName(e.target.value)
  }
  const inputcostdHandler = (e) => {
    setCost(e.target.value)
  }
  const inputdescriptionHandler = (e) => {
    setDescription(e.target.value)
  }
  
 

  const handleSubmit = (e) => {
    toast.success('Submitted Successfully',{

      position:'top-center'

  });
    const data = {
      id:id,
      packname: packname,
      cost:cost,
      description:description
    }
    axios.post('http://localhost:8081/admin/addpack', data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      
    e.preventDefault()
  }

  return (
    <>
      <div className='input'>
        <div className=''>
          <h2 className='title1a'> Add packs</h2>
          <div className='just-for-flex'>
          <form className='loginForm' onSubmit={handleSubmit}>
            <div className='input-form-section'>
              <label>id:  </label>
              <input type='text' value={id} onChange={inputidHandler} />
            </div>
            <div className='input-form-section'>
              <label>packname:  </label>
              <input type='text' value={packname} onChange={inputnameHandler} />
            </div>
            <div className='input-form-section'>
              <label>Descripton: </label>
              <input type='text' value={description} onChange={inputdescriptionHandler} />
            </div>
            <div className='input-form-section'>
              <label>cost:  </label>
              <input type='text' value={cost} onChange={inputcostdHandler} />
            </div>
            
            

            <div >
              <button className='submit-btn'value="submit" >submit</button>
            </div>
            
           
          </form> </div>
        </div>
      </div>
    </>
  )
}

export default Addpacks;
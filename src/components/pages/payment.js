import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
function Payment() {
    let promise = () => {
        const resolveAfter3Sec = new Promise(resolve => 
        setTimeout(resolve, 3000));
        // Start  
        // const data = {
        //      cardhodername: data,
        //      cardnumber : data,
        //      month : data,
        //      cvv: data
        //   }
        // axios.post('http://localhost:1234/getway/pay', data)
        //   .then(function (response) {
        //     if (response && response.data) {            
        //         alert("Sucessful .")
        //                }
        //   else 
        //     {
        //         alert("wrong credentials.")              
        //     }

        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
          
        // End

        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Processing  Payment',
                success: 'Payment Success',
                error: 'Payment Failed'
            }
        );
    }
    return (
        <div className='input'>
            <h1 className='title1a'>PAYMENT</h1>
            <div className="just-for-flex">
            <div className="loginForm input-form-section">
                <input type="text" style={{width:"100%"}} placeholder='Card Holder Name' />
                <input type="text" style={{width:"100%"}}  placeholder='Card Number' /> 
               <div className="just-for-flex"> <input type="text" placeholder='MM/YY' /> <input type="password" placeholder='CVV' /></div>
                
                <button onClick={promise}  style={{transform:"translateX(-5px)"}} className='submit-btn'>Pay</button>
            </div>
                 </div>
        </div>
    )
}

export default Payment;
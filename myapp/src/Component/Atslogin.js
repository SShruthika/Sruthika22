import React from 'react'
import {Button, Typography ,Link} from '@mui/material'
import './Atslogin.css';
import { useState,useEffect } from 'react';
// import { useNavigate} from 'react-router-dom';
import axios from "axios"; 

const Atslogin = () => {
  const btnstyle={margin:'8px 0',color:"white"}
  
  const [email, setemail]= useState('');
  const [password, setPassword]= useState('');

      //  const navigate =useNavigate()

// const onSubmit = async () => {
//   try {
//       const response = await axios.get("https://6593e3c01493b01160696195.mockapi.io/emploee", { 
//         params:{email, password },
//       });

//       if (response.data.success) {
//           navigate(`/welcome/${response.data.user.name}`);
//       } else {

//           console.error("Login failed:", response.data.message);
//       }
//   } catch (error) {
//       console.error("API Error:", error);
//       // Handle API request error
//   }
// };

// ... (previous code)

const onSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:3000/Atsregister", { email, password });
    if (response.data.success) {
      // Redirect or navigate to the success page
      console.log("Login successful");
    } else {
      console.error("Login failed:", response.data.message);
    }
  } catch (error) {
    console.error("API Error:", error);
    // Handle API request error
  }
};


  const handleEmailChange =(event)=>{
    setemail(event.target.value);
  };
  const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
  };
  
 
  // useEffect(() => {
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // }, [email, password]);

  return (

       <div className='container'>
            
        <div className='col-2'>
           
                  <h2 align="center">Login</h2>
      
                 {/* <div className='email'> */}
                  <label>
                    <input type='email' name="email"placeholder='enter your mail id' value={email} onChange={handleEmailChange}  required style={{margin:10,width:"300px",padding:'8px'}}/> 
                  </label>
                  {/* </div>  */}
                  <div align="center">
                  <label>
                    <input type='password' name='password' placeholder='enter your password'  value={password} onChange={handlePasswordChange} fullwidth required style={{margin:10 ,width:"300px",padding:'8px'}}/>
                  </label>
                  </div>
                 

              <div>
                <Typography> 
              <Link href="#" underline='none' style={{textAlign:'left',marginLeft:"215px"}}>
               Reset password
              </Link>
            </Typography>
            </div>
            <br></br> 
              <div>
             {/* <Button onClick={onsubmit} onSubmit={onSubmit} className='btn'  type='submit' color='primary'  variant='contained' style={btnstyle}fullWidth>Log in</Button> */}
             <Button onClick={onSubmit} onSubmit={onSubmit} className='btn' type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>Log in</Button>

             </div>

            <div>
            </div>
            <br></br>
         </div>
      </div>
  
     
  )
}
export default Atslogin;

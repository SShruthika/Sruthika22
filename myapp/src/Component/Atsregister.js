import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios"; 
import "react-phone-number-input/style.css";
import './Register.css';
import { Typography ,Link} from '@mui/material'
import { signupSchema } from "./Atsregisteryup.js";
import { useNavigate } from 'react-router-dom';

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
};

const Atsregister = () => {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        try {
            const response = await axios.post("http://localhost:3003/register", values);
            console.log("API Response:", response.data);
            // navigate('/Atslogin');
        } catch (error) {
            console.error("API Error:", error.message);  // Log the error message
        }
    
        actions.resetForm();
    };

    const hello = ()=>{
      
        navigate(`/Atslogin/`)
      }
      
    
    return (
        <div className='container'>
            
            <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (

<Form action="/sign_in" method="POST" className='signup_form'>
    <div className='col-2'>

<h2 align="center">Register</h2>
<div className='app'></div>
    <label htmlFor='name'>Name</label>
    <Field type='text' name='name' />
    <div className='error_container'>
        {errors.name && touched.name && (
            <p className='form_error'>{errors.name}</p>
        )}
    </div>

    <label htmlFor='email'>Email</label>
    <Field type='email' name='email' />
    <div className='error_container'>
        {errors.email && touched.email && (
            <p className='form_error'>{errors.email}</p>
        )}
    </div>

    <label htmlFor='password'>Password</label>
    <Field type='password' name='password' />
    <div className='error_container'>
        {errors.password && touched.password && (
            <p className='form_error'>{errors.password}</p>
        )}
    </div>

    <label htmlFor='cpassword'>Confirm Password</label>
    <Field type='password' name='cpassword' />
    <div className='error_container'>
        {errors.cpassword && touched.cpassword && (
            <p className='form_error'>{errors.cpassword}</p>
        )}
    </div>

    <label htmlFor='mobile'>Mobile Number</label>
    <Field type='tel' name='mobile'/>
    <div className='error_container'>
        {errors.mobile && touched.mobile && (
            <p className='form_error'>{errors.mobile}</p>
        )}
    </div>

    <button  type='submit'>Register</button> 
     <Typography variant="body2">
                                Already have an account? <Link onClick={hello}>Login</Link>
                            </Typography></div>
</Form>

)}
            </Formik>
        </div>
    );
}

export default Atsregister;



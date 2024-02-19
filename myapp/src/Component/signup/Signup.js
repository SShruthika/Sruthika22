// import React from "react";
// import { useForm } from "react-hook-form";
// import './Sign.css'

// const Signup = () => {
//     const{register , handleSubmit, formState: {errors}}= useForm();

//     const onSubmit = (data) => {
//         console.log(data);
       
//     };

// return(

// <div className="form">
//         <form onSubmit={handleSubmit(onSubmit)}>
//          <div className="Form_container">
//             <h2 align="center">SIGN UP</h2>
//            <div>
//             <label htmlFor="fullName">Full name</label>
//             <input type="text" id="fullName" placeholder="First name and last name"{...register("fullname",{required:true,maxLength:30,pattern:/^[a-zA-Z\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/i,})}/>
//             {errors.fullname && <p className="form_error">Only letters, spaces, and special characters are allowed in the name field. </p>}
//             </div> 

//             <div>
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="At least 12 character"{...register("password",{required:true,minLength:12,maxLength:18})}/>
//             {errors.password && <p className="form_error">combination of uppercase,lowercase,number and symbol</p>}
//             </div> 

//             <div>
//             <label htmlFor="companyName">company name</label>
//             <input type="text" id="companyname" placeholder="your company name"{...register("companyName",{required:true,maxLength:100 })}/>
//             {errors.companyName && <p className="form_error">company name must be lower case and uppercase</p>}
//             </div> 

//             <div>
//             <label htmlFor="email">Work email</label>
//             <input type="text" id="email" placeholder="youremail@company.com"{...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ })}/>
//             {errors.email && <p className="form_error">email address should only be lowercase</p>}
//             </div> 

           
// <button type="submit">Sign up</button>
//             </div>   
//         </form>
//         </div>
// )
// }
        
// export default Signup;


import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './Sign.css'

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            password: "",
            companyName: "",
            email: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
                // .required("Full name is required")
                // .matches(/^[a-z\s]+$/i, "Only letters, spaces, and special characters are allowed"),
                .required("Full name is required")
                .max(30, "exceed characters")
                .matches(/^[A-Z][a-zA-Z\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*$/, "First letter must be uppercase,only letters,spaces, and special characters are allowed"),
            password: Yup.string()
                .required("Password is required")
                .min(12, "Password must be at least 12 characters")
                .max(18, "Password cannot exceed 18 characters")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/, "Password must include at least one uppercase letter, lowercase letter, one number, and one special character"),
            companyName: Yup.string()
                .required("Company name is required")
                .matches(/^[a-zA-Z\s]+$/, "Company name must be lower case and uppercase"),
            email: Yup.string()
                .required("Email is required")
                .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, "Email address should only be lowercase"),
        }),
        onSubmit: (values,actions) => {
            console.log(values);
            // Perform your submit logic here
            actions.resetForm();
        },
    });

    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit}>
                <div className="Form_container">
                    <h2 align="center">SIGN UP</h2>
                    <div>
                        <label htmlFor="fullName">Name</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="First name and last name"
                            {...formik.getFieldProps("fullname")}
                        />
                        {formik.touched.fullname && formik.errors.fullname && (
                            <p className="form_error">{formik.errors.fullname}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="At least 12 characters"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="form_error">{formik.errors.password}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="companyName"
                            id="companyName"
                            placeholder="your company name"
                            {...formik.getFieldProps("companyName")}
                        />
                        {formik.touched.companyName && formik.errors.companyName && (
                            <p className="form_error">{formik.errors.companyName}</p>
                        )}
                    </div>



                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="youremail@company.com"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="form_error">{formik.errors.email}</p>
                        )}
                    </div>




                    

                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;

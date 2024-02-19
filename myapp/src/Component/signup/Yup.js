// import * as Yup from "yup";
// const passwordRegex = new RegExp(
//     "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );
// const phoneRegex=/^[0-9]{10}$/;
// export const signupSchema = Yup.object({
//     name: Yup.string().min(3).required("Please enter your name."),
//     email: Yup.string()
//         .email("Please enter valid email.")
//         .required("Please enter your email."),
//     password: Yup.string()
//         .matches(passwordRegex, "Please enter valid password.")
//         .required("Please enter your password."),
//     cpassword: Yup.string()
//         .oneOf([Yup.ref("password")], "Password do NOT match!")
//         .required("Please enter confirm password."),
//     mobile: Yup.string()
//     .matches(phoneRegex,"Please enter a valid mobile number.")
//     .required("Please enter your mobile number."),
//     // mobile: Yup.string()
//         // .matches(phoneRegex,"Please enter a valid mobile number.")
//     //     .required("Please enter your mobile number."),
//     // mobile: Yup.string()
//     //     .matches(/^\+?91[0-9]{10}$/, "Please enter a valid Indian mobile number.")
//     //     .required("Please enter your mobile number."),
// });

// import * as Yup from 'yup';

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,18})/;

// export const signupSchema = Yup.object({
//   name: Yup.string()
//     .transform(value => value.toLowerCase().substr(0, 30))
//     .required("Please enter your name.")
//     .max(30, "Name must be at most 30 characters"),

//   // Companyname: Yup.string().required('Company name is required').max(100, 'Company name must be at most 100 characters'),
//   Company: Yup.string()
//   .required('Company name is required')
//   .max(100, 'Company name must be at most 100 characters'),

//   email: Yup.string()
//     .email("Please enter a valid email.")
//     .transform(value => value.toLowerCase())
//     .required("Please enter your email."),

//   password: Yup.string()
//     .matches(passwordRegex, "Password must be 8 to 18 characters")
//     .required("Please enter your password.")
//     .max(18, "Password must be at most 18 characters"),


// });


import * as Yup from "yup";
const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
// const phoneRegex=/^[0-9]{10}$/;
export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Please enter your name."),
    company: Yup.string()
        .required("Company name is required")
        .min(3, "Company name must be at least 3 characters"),
    email: Yup.string()
        .email("Please enter valid email.")
        .required("Please enter your email."),
    password: Yup.string()
        .matches(passwordRegex, "Please enter valid password.")
        .required("Please enter your password."),
        
    // cpassword: Yup.string()
    //     .oneOf([Yup.ref("password")], "Password do NOT match!")
    //     .required("Please enter confirm password."),
    // mobile: Yup.string()
    // .matches(phoneRegex,"Please enter a valid mobile number.")
    // .required("Please enter your mobile number."),
});
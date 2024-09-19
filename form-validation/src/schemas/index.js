import * as yup from 'yup'; 

const passwordRules = "rishiME@199";

export const basicSchema = yup.object().shape({
    name: yup.string().required("Name is required"), 
    email: yup.string().email("Please enter a valid email").required("Email is required"), 
    password: yup.string()
        .matches(passwordRules, { message: "Password must be start from r__M_9" }) 
        .required("Password is required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Confirm Password is required")
});

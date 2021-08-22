import React from "react";
import { Formik, Form } from "formik";
import {TextFild} from "./TextFild";
import * as Yup from 'yup'
const Signup = () => {
   const validate=Yup.object({
      firstName:Yup.string()
      .max(15, "Must be 15 Characters or less")
      .required("Required"),
      lastName:Yup.string()
      .max(20, "Must be 20 Characters or less")
      .required("Required"),
      email:Yup.string()
      .email("Email is invalid")
      .required("Email is Required"),
      password:Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is Required"),
      confirmPassword:Yup.string()
      .oneOf([Yup.ref("password"),null], "Password must match")
      .required("Confirm Password Required")
   })
    return (
        <Formik
        initialValues={{
           firstName:'',
           lastName:'',
           email:'',
           password:'',
           confirmPassword:''
        }}
        validationSchema={validate}
        onSubmit={values=>{
           console.log(values);
        }}
        >
           {formik=>(
              <div>
              <h1 className="my-4 font-weight-bold-display-4">Sing Up</h1>
              <Form>
                 <TextFild type="text" label="First Name" name="firstName" />
                 <TextFild type="text" label="Last Name" name="lastName" />
                 <TextFild type="email" label="Email" name="email" />
                 <TextFild type="password" label="Password" name="password" />
                 <TextFild type="password" label="Confirm password" name="confirmPassword" />
                 <button className="btn btn-dark mt-3" type="submit" >Register</button>
                 <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
              </Form>
           </div>
           )}
        </Formik>
    );
};

export default Signup;

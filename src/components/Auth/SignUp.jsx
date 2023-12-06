/* eslint-disable no-unused-vars */
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "../common/TextField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAction } from "../../stateManagement/reduxUtils";
import { authActionTypes } from "./redux/actions/AuthActionTypes";
import Navbar from "../common/Navbar";

let formik;

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.number().required("This field is required"),
  // .min(8, "Pasword must be 8 or more characters")
  // .matches(
  //   /(?=.*[a-z])(?=.*[A-Z])\w+/,
  //   "Password ahould contain at least one uppercase and lowercase character"
  // )
  // .matches(/\d/, "Password should contain at least one number")
  // .matches(
  //   /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
  //   "Password should contain at least one special character"
  // ),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      dispatch(getAction(authActionTypes.GET_SIGN_IN, values));
    },
  });
  return (
    <div className=''>
      <Navbar />
      {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(formik.errors, null, 2)}</pre> */}
      <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
        <form onSubmit={formik.handleSubmit}>
          <div className='card login-card'>
            <h2 className='h2 text-center'>Sign up</h2>
            <TextField
              id='email'
              label='Email'
              value={formik.values.email}
              handleOnChange={formik.handleChange}
              errors={formik.errors.email}
            />
            <TextField
              id='password'
              type='password'
              label='Password'
              value={formik.values.password}
              handleOnChange={formik.handleChange}
              errors={formik.errors.password}
            />
            <button type='submit' className='btn text-white btn-primary'>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className='text-center mt-3'>
        <strong>
          Already registered? click here{" "}
          <button className='btn' onClick={() => navigate("/sign-in")}>
            SignIn
          </button>
        </strong>
      </div>
    </div>
  );
};

export default SignUp;

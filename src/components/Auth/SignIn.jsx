/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getAction } from "../../stateManagement/reduxUtils";
import { commonTypes } from "../../stateManagement/redux/actions/commonActions";
import TextField from "../common/TextField";
import {
  clearAuthToken,
  getAuthToken,
  setAuthToken,
} from "../../utils/utility";
import { useFormik } from "formik";
import { authActionTypes } from "./redux/actions/AuthActionTypes";
import { useNavigate } from "react-router-dom";
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

const SignIn = () => {
  const { serverErrors } = useSelector((state) => state.AuthState);
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
  const token = getAuthToken();
  useEffect(() => {
    if (token != null) {
      navigate("/dashboard");
    }
  }, [token]);
  console.log("####!!!!!!!!!!", serverErrors);
  return (
    <div className=''>
      <Navbar />
      {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(formik.errors, null, 2)}</pre> */}
      <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
        <form onSubmit={formik.handleSubmit}>
          <div className='card login-card'>
            <h2 className='h2 text-center'>Sign In</h2>
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
          Not registered? click here{" "}
          <button className='btn' onClick={() => navigate("/register")}>
            Signup
          </button>
        </strong>
      </div>
    </div>
  );
};

export default SignIn;

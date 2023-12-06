/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import * as Yup from "yup";
import TextField from "../components/common/TextField";
import { useFormik } from "formik";
import { clearAuthToken, setAuthToken } from "../utils/utility";
import Navbar from "../components/common/Navbar";

let formik;

const validateSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
});

const Home = () => {
  formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      clearAuthToken();
      formik.resetForm();
    },
  });

  // useEffect(() => {
  //   setAuthToken("djhfalkdjshflkjdshfkjdshfkljsdfhlksjhf");
  // }, []);

  return (
    <div className='container-fluid main'>
      <Navbar />
      <div className='row h-100'>
        <div className='col-md-6 d-flex align-items-center '>
          <div className=' d-flex  align-items-center w-100 justify-content-around'>
            <TextField
              type='text'
              id='search-jobs'
              placeholder='Search Jobs'
              // className='w-100'
            />
            <button type='button' className='btn  btn-primary text-white'>
              Search
            </button>
          </div>
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-center banner'>
          <div className=''></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

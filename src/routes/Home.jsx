/* eslint-disable no-unused-vars */
import React from "react";
import * as Yup from "yup";
import TextField from "../components/common/TextField";
import { useFormik } from "formik";

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
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='container'>
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id='name'
          label='Name'
          value={formik.values.name}
          handleOnChange={formik.handleChange}
          errors={formik.errors.name}
        />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};

export default Home;

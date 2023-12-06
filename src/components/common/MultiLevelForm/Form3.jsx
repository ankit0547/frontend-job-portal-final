/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "../TextField";

function Form3({ formik }) {
  return (
    <div>
      <TextField
        id='form3'
        label='Form 3'
        value={formik.values.form3}
        handleOnChange={formik.handleChange}
        errors={formik.errors.form3}
      />
    </div>
  );
}

export default Form3;

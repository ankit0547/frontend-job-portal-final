/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "../TextField";

function Form1({ formik }) {
  return (
    <div>
      {" "}
      <TextField
        id='form1'
        label='Form 1'
        value={formik.values.form1}
        handleOnChange={formik.handleChange}
        errors={formik.errors.form1}
      />
    </div>
  );
}

export default Form1;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "../TextField";

function Form2({ formik }) {
  return (
    <div>
      {" "}
      <TextField
        id='form2'
        label='Form 2'
        value={formik.values.form2}
        handleOnChange={formik.handleChange}
        errors={formik.errors.form2}
      />
    </div>
  );
}

export default Form2;

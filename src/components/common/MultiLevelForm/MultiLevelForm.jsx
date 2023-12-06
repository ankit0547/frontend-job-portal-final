/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "../TextField";
import Form1 from "./Form1";
import Form3 from "./Form3";
import Form2 from "./Form2";

let formik;

const validateSchema = Yup.object().shape({
  form1: Yup.string().required("This field is required"),
  form2: Yup.string().required("This field is required"),
  form3: Yup.string().required("This field is required"),
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

function MultiLevelForm({ id, handleOnSubmit }) {
  const [formStep, setFormStep] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  formik = useFormik({
    initialValues: {
      form1: "",
      form2: "",
      form3: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      //   dispatch(getAction(authActionTypes.GET_SIGN_IN, values));
    },
  });

  const formNos = [
    {
      id: 0,
      form: <Form1 formik={formik} />,
    },
    {
      id: 1,
      form: <Form2 formik={formik} />,
    },
    {
      id: 2,
      form: <Form3 formik={formik} />,
    },
  ];

  // console.log("#################", forms);

  return (
    <div className='multi-level-form' id={id}>
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      <div>
        {formNos.map((item) => {
          if (item.id === formStep) {
            return item.form;
          }
        })}
      </div>
      {formNos.length - 1 !== formStep && (
        <button className='btn' onClick={() => setFormStep((prev) => prev + 1)}>
          Next
        </button>
      )}
      {formNos.length - 1 === formStep && (
        <button className='btn' onClick={() => alert()}>
          Submit
        </button>
      )}
    </div>
  );
}

export default MultiLevelForm;

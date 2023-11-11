/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAction } from "../../stateManagement/reduxUtils";
import { commonTypes } from "../../stateManagement/commonActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const { testData } = useSelector((state) => state.ApplicationState);

  useEffect(() => {
    dispatch(getAction(commonTypes.GET_TEST, null));
  }, []);
  return (
    <div>
      <h1>SignIn</h1>
      <pre>{JSON.stringify(testData, null, 2)}</pre>
    </div>
  );
};

export default SignIn;

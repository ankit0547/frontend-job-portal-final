/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const { isLoaded } = useSelector((state) => state.ApplicationState);
  return (
    isLoaded && (
      <div className='loader'>
        {/* <img src='public\vite.svg' /> */}
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
  );
};

export default Loader;

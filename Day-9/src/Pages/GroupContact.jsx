import React from "react";
import store from "../Assets/Redux/Store";

function GroupContact() {
  return (
    <>
      <p style={{ color: "white" }}>Group contact page...</p>
      <p style={{ color: "white" }}> {store.getState().email} </p>
    </>
  );
}

export default GroupContact;

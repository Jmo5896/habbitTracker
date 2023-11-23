import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Login() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h1>REGISTER</h1>

      <MDBInput
        autoComplete="true"
        wrapperClass="mb-4"
        label="Email"
        id="email"
        type="email"
      />
      <MDBInput
        autoComplete="true"
        wrapperClass="mb-4"
        label="Password"
        id="password"
        type="password"
      />

      {/* <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
            />
          </div> */}

      <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
    </MDBContainer>
  );
}

export default Login;

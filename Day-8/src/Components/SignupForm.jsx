import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, LineText, SubmitButton } from "./Elements";
import { AccountContext } from "../Assets/Contexts/AccountContext";

const SignupForm = (props) => {

    const { switchToSignin, handleChange, handleSubmit, error } = useContext(AccountContext);

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input onChange={ handleChange } name="fullname" type="text" placeholder="Full name" />
          <Input onChange={ handleChange } name="email" type="email" placeholder="Email" />
          <span style={{ color: 'red', fontSize: 'small', textAlign: 'start', display: 'flex', padding: 4, paddingLeft: 10 }} > {error.email} </span>
          <Input onChange={ handleChange } name="password" type="password" placeholder="Password" />
          <span style={{ color: 'red', fontSize: 'small', textAlign: 'start', display: 'flex', padding: 4, paddingLeft: 10 }} > {error.password} </span>
          <Input onChange={ handleChange } name="cpassword" type="password" placeholder="Confirm password" />
        </FormContainer>
        <span style={{ "padding" : "6px"}}>{""}</span>
        <SubmitButton onClick={handleSubmit} type="submit">Signup</SubmitButton>
        <LineText>
          Already have an account?{" "}
          <BoldLink onClick={switchToSignin} >
            Signin
          </BoldLink>
        </LineText>
      </BoxContainer>
    </>
  );
};

export default SignupForm;

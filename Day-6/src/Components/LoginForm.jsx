import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLine,
  SubmitButton,
} from "./Elements";
import { AccountContext } from "../Assets/Contexts/AccountContext";

const LoginForm = (props) => {
  const { switchToSignup, handleChange, handleSubmit, error } = useContext(AccountContext);

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <span style={{ color: 'red', fontSize: 'small', textAlign: 'start', display: 'flex', padding: 4, paddingLeft: 10 }} > {error.email} </span>
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <span style={{ color: 'red', fontSize: 'small', textAlign: 'start', display: 'flex', padding: 4, paddingLeft: 10 }} > {error.password } </span>
        </FormContainer>
        <MutedLine>Forget password</MutedLine>
        <SubmitButton onClick={handleSubmit} type="submit">Signin</SubmitButton>
        <LineText>
          Don't have an account?{" "}
          <BoldLink onClick={switchToSignup}>Signup</BoldLink>
        </LineText>
      </BoxContainer>
    </>
  );
};

export default LoginForm;

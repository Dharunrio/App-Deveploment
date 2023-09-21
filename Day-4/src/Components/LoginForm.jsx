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
  const { switchToSignup, handleChange, handleSubmit } = useContext(AccountContext);

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
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
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

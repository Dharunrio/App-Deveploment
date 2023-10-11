import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLine,
  SubmitButton,
} from "../Components/Elements";
import { AccountContext } from "../Assets/Contexts/AccountContext";

const LoginForm = (props) => {
  const { switchToSignup, handleChange, handleSubmit, classes } = useContext(AccountContext);

  return (
    <>
      <BoxContainer>
        <FormContainer onSubmit={handleSubmit} className="needs-validation">
          <Input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email"
            className= { "form-control " + classes.email}
            />
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className= { "form-control " + classes.password}
          />
          <div style={{ display: "flex", justifyContent: "center", width: "100%", flexDirection: "column", alignItems: "center"}}>  
          <MutedLine>Forget password</MutedLine>
          <SubmitButton type="submit">
            Signin
          </SubmitButton>
          </div>
        </FormContainer>
        <LineText>
          Don't have an account?{" "}
          <BoldLink onClick={switchToSignup}>Signup</BoldLink>
        </LineText>
      </BoxContainer>
    </>
  );
};

export default LoginForm;

import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  SubmitButton,
} from "../Components/Elements";
import { AccountContext } from "../Assets/Contexts/AccountContext";

const SignupForm = (props) => {
  const { switchToSignin, handleChange, handleSubmit, classes } =
    useContext(AccountContext);

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Full name"
            className={"form-control " + classes.name}
          />
          <Input
            onChange={handleChange}
            name="phoneno"
            type="number"
            placeholder="Phone number"
            className={"form-control " + classes.name}
          />
          <Input
            onChange={handleChange}
            name="dob"
            type="text"
            placeholder="Date of Birth"
            className={"form-control " + classes.name}
          />
          <Input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className={"form-control " + classes.email}
          />
          <Input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className={"form-control " + classes.password}
          />
          <Input
            onChange={handleChange}
            name="cpassword"
            type="password"
            placeholder="Confirm password"
            className={"form-control " + classes.password}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <SubmitButton onClick={handleSubmit} type="submit">
              Signup
            </SubmitButton>
          </div>
        </FormContainer>
        <LineText>
          Already have an account?{" "}
          <BoldLink onClick={switchToSignin}>Signin</BoldLink>
        </LineText>
      </BoxContainer>
    </>
  );
};

export default SignupForm;

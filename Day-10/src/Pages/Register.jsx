import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { InnerContainer } from "../Components/Elements";
import SignupForm from "./SignupForm";
import { AccountContext } from "../Assets/Contexts/AccountContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  activeStatus,
  login,
  setActive,
  signup,
} from "../Assets/Slices/UserSlice";
import "react-toastify/dist/ReactToastify.css";
import { EntryService } from "../Services/EntryService";
import { ToastContainer, toast } from "react-toastify";
import { UserService } from "../Services/UserService";

const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0Vi5K3r-l01PZ3wlx2usSabWew7VVxf0Ng&usqp=CAU);
  background-repeat : no-repeat;
  background-size: cover;
`;

const BoxContainer = styled.div`
  width: 390px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  background-color: #eef;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
`;

const SmallText = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  margin-top: 7px;
  z-index: 10;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 160%;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -70px;
  transform: rotate(60deg);
  background: linear-gradient( 58deg, rgb(0 0 0) 20%, rgb(110 122 135) 100% );
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1200px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "120%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(75deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const Register = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const active = useSelector(activeStatus);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const [classes, setClasses] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = (value) => {
    const classname = {};
    const emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/;

    if (!value.email) {
      classname.email = "is-invalid";
    } else if (!emailPattern.test(value.email)) {
      classname.email = "is-invalid";
    } else {
      classname.email = "is-valid";
    }

    if (!value.password) {
      classname.password = "is-invalid";
    } else if (!passwordPattern.test(value.password)) {
      classname.password = "is-invalid";
    } else {
      classname.password = "is-valid";
    }

    if (!value.name) {
      classname.name = "is-invalid";
    } else {
      classname.name = "is-valid";
    }

    return classname;
  };

  useEffect(() => {}, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setClasses(validateForm(user));

    switch (active) {
      case "signin":
        if (classes.email === "is-valid" && classes.password === "is-valid") {
          let user_res;
          let response;
          try {
            response = await EntryService.validateUser({
              email: user.email,
              password: user.password,
            });
          } catch (err) {}

          if (response.token !== null) {
            localStorage.setItem("Token", response.token);
            user_res = await UserService.getByEmail(user.email);
            localStorage.setItem("name", user_res.name);
            localStorage.setItem("id", user_res.id);
            localStorage.setItem("role", user_res.role);
            dispatch(login({ user: user_res }));
            toast.success("Login successful");
            setTimeout(() => {
              navigate("/home");
            }, 3000);
          } else {
            dispatch(setActive({ active: "signin" }));
            toast.error("Ivalid email or password");
          }
        }
        break;
      case "signup":
        if (
          classes.email === "is-valid" &&
          classes.password === "is-valid" &&
          classes.name === "is-valid"
        ) {
          let response;
          try {
            response = await EntryService.createNewUser({
              name: user.name,
              phoneno: Number(user.phoneno),
              dob: user.dob,
              email: user.email,
              password: user.password,
              role: "USER",
            });
            dispatch(signup({ user: user }));
          } catch (err) {}
          if (response.token !== undefined) {
            localStorage.setItem("username", user.name);
            localStorage.setItem("role", "USER");
            localStorage.setItem("Token", response.token);
            navigate("/home");
          } else {
            dispatch(setActive({ active: "signup" }));
            toast.error("User already exists");
          }
        }
        break;
      default:
        break;
    }
  };
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      dispatch(
        setActive({
          active: "signup",
        })
      );
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      dispatch(
        setActive({
          active: "signin",
        })
      );
    }, 400);
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    handleChange,
    handleSubmit,
    classes,
  };

  return (
    <>
      <AccountContext.Provider value={contextValue}>
        <div className="register-container bg-dark bg-gradient h-100">
          <RegisterContainer>
            <BoxContainer>
              <TopContainer>
                <BackDrop
                  initial={false}
                  animate={isExpanded ? "expanded" : "collapsed"}
                  variants={backdropVariants}
                  transition={expandingTransition}
                />
                {active === "signin" && (
                  <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue!</SmallText>
                  </HeaderContainer>
                )}
                {active === "signup" && (
                  <HeaderContainer>
                    <HeaderText>Create</HeaderText>
                    <HeaderText>Account</HeaderText>
                    <SmallText>Please sign-up to continue!</SmallText>
                  </HeaderContainer>
                )}
              </TopContainer>
              <InnerContainer>
                {active === "signin" && <LoginForm />}
                {active === "signup" && <SignupForm />}
              </InnerContainer>
            </BoxContainer>
          </RegisterContainer>
          <ToastContainer />
        </div>
      </AccountContext.Provider>
    </>
  );
};

export default Register;

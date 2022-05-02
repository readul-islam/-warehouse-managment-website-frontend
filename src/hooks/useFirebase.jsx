import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useFirebase = () => {
  let navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    repeatPasswordError: "",
  });

  //create a new user with email & password
  const createNewUser = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    navigate("/home");
  };

  const logInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
    if (signInError) {
      toast.error("We cannot find an account with that email address", {
        id: 1,
      });
    }
  };

  const signInGoogle = () => {
    signInWithGoogle();
  };

  //get all input filed value
  const getEmail = (event) => {
    const email = event.target.value;

    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validEmail = regex.test(email.toLowerCase());

    if (validEmail) {
      setUserInfo({ ...userInfo, email: email });
      setErrors({ ...errors, emailError: "" });
    } else {
      setErrors({ ...errors, emailError: " invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const getPassword = (event) => {
    const password = event.target.value;

    /* Minimum eight characters, at least one letter, one number and one special character: */
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = regex.test(password);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: password });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({ ...errors, passwordError: " invalid password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const getRepeatPassword = (event) => {
    const rePassword = event.target.value;

    if (userInfo.password === rePassword) {
      setUserInfo({ ...userInfo, repeatPassword: rePassword });
      setErrors({ ...errors, repeatPasswordError: "" });
    } else {
      setUserInfo({ ...userInfo, repeatPassword: "" });
      setErrors({ ...errors, repeatPasswordError: "password didn't match" });
    }
  };

  return {
    getEmail,
    getPassword,
    getRepeatPassword,
    createNewUser,
    logInUser,
    signInGoogle,
    errors,
  };
};

export default useFirebase;

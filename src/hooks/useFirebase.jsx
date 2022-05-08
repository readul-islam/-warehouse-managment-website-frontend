import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { GridLoader } from "react-spinners";


const useFirebase = () => {
  let navigate = useNavigate();
  const [token, setToken] = useState('')
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );

  const [user,userLoading] = useAuthState(auth);
  const [createUserWithEmailAndPassword, newUser, newUserLoading,newUserError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithEmailAndPassword, loginUser, loginLoding, loginError] =
useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser,googleLoading,googleError] = useSignInWithGoogle(auth);
  

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
// get all itmes securly
  const jwtToken =() => {
    if(userLoading){
       return  <div className="flex justify-center pt-[35vh] ">  <GridLoader size={10}/>
      </div>
    }
    
    if (user) {
     fetch("https://evening-basin-25191.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
       .then((res) => res.json())
     .then((data) => {
          const accessToken = data.token;
          console.log(data)
          
          localStorage.setItem("AccessToken", accessToken);
          setToken(accessToken)
        });
    }
  };
  jwtToken();
  if(loginUser){
    toast.success('Login successfully',{id: 1})
  }
  if(newUser){
    toast.success('Register successfully',{id:1})
  }
  if(googleUser){
    toast.success('Login successfully',{id:1})
  }
 
  if(newUserLoading){
    return  <div className="flex justify-center pt-[35vh] ">  <GridLoader size={10}/></div>
  }
  if(loginLoding){
    return  <div className="flex justify-center pt-[35vh] ">  <GridLoader size={10}/></div>
  }
  if(googleLoading){
    return  <div className="flex justify-center pt-[35vh] ">  <GridLoader size={10}/></div>
  }


  //create a new user with email & password
  const createNewUser = (event) => {
    event.preventDefault();
    if(userInfo.password === userInfo.repeatPassword){
     
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    
      navigate("/login");
    
      toast.success('Register successfully',{id:1})
    }else{
      toast.error('worng information',{id:1})
    }
   
  
    
  };

  const logInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
    if(token){
      navigate("/home")
    }
    
  };
  const signInGoogle = () => {
    signInWithGoogle();
    if(token){
      navigate("/home")
    }
   
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
    if ( rePassword === userInfo.password) {
     
      setUserInfo({ ...userInfo, repeatPassword: rePassword });
      setErrors({ ...errors, repeatPasswordError: "" });
    } else {
      setUserInfo({ ...userInfo, repeatPassword: "" });
      setErrors({ ...errors, repeatPasswordError: "password didn't match" });
    }
  };
  const resetPassword = async(event) =>{
 event.preventDefault();
const email = (event.target.email.value)
if(email){

  await sendPasswordResetEmail(email)
  toast('sending email...',
  {
   style: {
      borderRadius: '10px',
    },
  },
  );
}
 if(sending){
  toast.error('please enter your email',{id:1})
 }


  }

  return {
    getEmail,
    getPassword,
    getRepeatPassword,
    createNewUser,
    logInUser,
    signInGoogle,
    errors,
    resetPassword
  };
};

export default useFirebase;

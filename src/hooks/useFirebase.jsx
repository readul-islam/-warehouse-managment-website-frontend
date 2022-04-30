import { useState } from "react";

const useFirebase = () => {
    
 const [userInfo, setUserInfo] = useState({
     email:'',
     password:'',
     repeatPassword:''
 })
 const [errors, setErrors] = useState({
    emailError:'',
    passwordError:'',
    repeatPasswordError:''
 })
 
    //create a new user with email & password
  const createNewUser = (event) => {
      event.preventDefault();

      
      
  };
  
  
  
  
  //get all input filed value
  const getEmail = (event) => {
      const email = event.target.value
      
      const regex = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      const validEmail = regex.test(email.toLowerCase())
      console.log(validEmail)
      if(validEmail) {
        setUserInfo({...userInfo, email:validEmail})
        setErrors({...errors, emailError:''})

      }else{
          setErrors({...errors, emailError:' Invalid email'})
          setUserInfo({...userInfo, email:''})

      }

  };

  const getPassword = (event) => {
    
    const password = event.target.value;
   
    /* Minimum eight characters, at least one letter, one number and one special character: */
    const regex = (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
    const validPassword = regex.test(password)
  
    if(validPassword) {
      setUserInfo({...userInfo, password:validPassword})
      setErrors({...errors, passwordError:''})

    }else{
        setErrors({...errors, passwordError:' Invalid email'})
        setUserInfo({...userInfo, password:''})

    }
  };
  
  const getRepeatPassword = (event) => {
    
  };
  
  
  

  
  return {
    getEmail,
    getPassword,
    getRepeatPassword,
   
    createNewUser,
   
  };
};

export default useFirebase;

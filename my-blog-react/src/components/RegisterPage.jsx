import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContent";

const Register = function(){

  const[fullname, setFullname] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[isLoading, setIsLoading] = useState(false);

  const {user, handleChange } = useAuthContext();
  const navigate = useNavigate();

  async function handleSignup() {
    try{
      setIsLoading(true);

      const res= await fetch("http://localhost:3001/api/users/signup",{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({fullname, email, password})
       });
       const data = await res.json();
       console.log(res,data)
       //added on n0v 2//
       handleChange(data.data.user, data.token);
      alert(data.message);

    }catch (err){
      console.log(err.message);
    }finally{
      setIsLoading(false)
    }
  }
  useEffect(function(){
    if(user) {
      navigate('/dashboard')
    }
}, [user])

    return(
        <div className="register-container">
          <div className="register-content">
            <h1>SignUp</h1>
            <div className="register-box">
                <input type="text" className="text-box" placeholder="FullName*" onChange={(e) => setFullname(e.target.value)}/>
                <input type="text" className="text-box" placeholder="Email*" onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" className="text-box" placeholder="Password*" onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="btn">
            <button type="submit" className="register-btn" onClick={handleSignup}>{isLoading ? "Loading..." : "SignUp"}</button>
            <Link to="/login" className="login-nav" >Login</Link>
         </div>  
        </div>
    );
}
export default Register
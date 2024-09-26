import React, { useState } from "react";

const Register = function(){
  const[fullname, setFullname] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[isLoading, setIsLoading] = useState(false);

  async function handleSignup() {
    try{
      setIsLoading(true);

      const res= await fetch("http://localhost:3001/api/users/signup/",{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify({fullname, email, password})
       });
       const data = await res.json();
       console.log(res,data)

    }catch (err){
      console.log(err.message);
    }finally{
      setIsLoading(false)
    }
    
  }

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
         </div>  
        </div>
    );
}
export default Register
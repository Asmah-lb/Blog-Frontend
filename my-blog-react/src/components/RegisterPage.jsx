import React from "react";

const Register = function(){

    return(
        <div className="register-container">
          <div className="register-content">
            <h1>Register Account</h1>
            <div className="register-box">
                <input type="text" className="text-box" placeholder="FirstName*"/>
                <input type="text" className="text-box" placeholder="LastName"/>
                <input type="text" className="text-box" placeholder="Email*"/>
                <input type="text" className="text-box" placeholder="Password*"/>
                <input type="text" className="text-box" placeholder="Confirm Password*"/>
            </div>
          </div>
          <div className="btn">
            <button className="register-btn">Register</button>
         </div>  
        </div>
    );
}
export default Register
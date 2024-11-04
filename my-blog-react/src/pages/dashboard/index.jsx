import React, { useEffect, useState } from "react";
import BlogCatalogue from "./BlogCatalogue";
import Header from "../../components/Header";
import AccountProfile from "./AccountProfile";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContent";

function index() {
  const [activeTab, setActiveTab] = useState("catalogue");

//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { user, handleChange  } = useAuthContext();

  // logout//
//   async function handleLogout(e) {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const res = await fetch(
//         "https://blog-platform-7q0v.onrender.com/api/users/logout",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await res.json();
//       console.log(res, data);

//       handleChange(data.data.user, data.token);
//       alert(data.message);

//     } catch (err) {
//       console.log(err.message);

//     } finally {
//       setIsLoading(false);
//     }
//   }
//   useEffect(function(){
//     if(user) {
//       navigate('/dashboard')
//     }
// }, [user])

// useEffect(function(){
//     handleLogout();
//   }, []);


  return (
    <>
      <Header />

      <div>
        <h3>My Dashboard</h3>
        <div className="tabs">
          <span
            className={"tab ${activeTab ==='catalogue' ? 'active-tab' : '' } "}
            onClick={() => setActiveTab("catalogue")}
          >
            {" "}
            My Posts(0){" "}
          </span>

          <span
            className={"tab ${activeTab === 'profile' ? 'active-tab' : ''} "}
            onClick={() => setActiveTab("profile")}
          >
            My Profile
          </span>
        </div>

        {activeTab === "catalogue" ? <BlogCatalogue /> : <AccountProfile />}
      </div>
    </>
  );
}
export default index;

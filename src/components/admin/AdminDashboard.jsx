// import Sidebar from "./Sidebar";
// import Mainbar from "./Mainbar";
// import React, { useState,  useEffect } from "react";

//   const AdminDashboard = () => {  

//     const [fname, setName] = useState("Admin");

//   useEffect(() => {
//     const storedName = sessionStorage.getItem("fname");
//     console.log("admin: " + storedName); 
//     if (storedName) setName(storedName);
//   }, []);



// import Sidebar from "./Sidebar";
// import Mainbar from "./Mainbar";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const [fname, setFname] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedName = sessionStorage.getItem("fname");
//     console.log("admin: " + storedName);
//     if (storedName) {
//       setFname(storedName);
//     } else {
//       navigate("/Login"); // Redirect if no name found
//     }
//   }, [navigate]);

//   useEffect(() => {
//     const role= localStorage.getItem('userRole');
//     const fname= localStorage.getItem('fname');
//     if (fname && role !== "ADMIN") {
//       navigate("/unauthorized"); // Or redirect to home or error page
//     }
//   }, [fname, navigate]);

//   if (fname !== "ADMIN") {
//     return null; // Optional: render nothing while redirecting
//   }

//   return (
//     <>
//      <div className="min-h-screen flex bg-gray-100">
  
//  <Sidebar/>
 
//  <Mainbar adminName={fname} />

     
//  {/* <DashboardCards/> */}
// </div>
     
//  </>
//   );
// };

// export default AdminDashboard;


// import Sidebar from "./Sidebar";
// import Mainbar from "./Mainbar";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const [fname, setName] = useState("Admin");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const storedName = sessionStorage.getItem("fname");

//     // Check if user exists and is an admin
//     if (!user || user.role !== "ADMIN") {
//       navigate("/Login");
//     } else if (storedName) {
//       setName(storedName);
//     }
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       <Sidebar />
//       <Mainbar adminName={fname} />
//     </div>
//   );
// };

// export default AdminDashboard;



// import Sidebar from "./Sidebar";
// import Mainbar from "./Mainbar";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const [fname, setName] = useState("Admin");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const role = sessionStorage.getItem("userRole");
//     const storedName = sessionStorage.getItem("fname");

//     if (role !== "ADMIN") {
//       navigate("/Login");
//     } else if (storedName) {
//       setName(storedName);
//     }
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       <Sidebar />
//       <Mainbar adminName={fname} />
//     </div>
//   );
// };

// export default AdminDashboard;


import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [fname, setName] = useState("Admin");
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const storedName = localStorage.getItem("fname");
    const token = localStorage.getItem("authToken");

    console.log("Role from localStorage:", role);
    console.log("Name from localStorage:", storedName);
    console.log("Token from localStorage:", token);

    if (!token || role !== "ADMIN") {
      navigate("/Login");
    } else {
      if (storedName) {
        setName(storedName);
      }
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <Mainbar adminName={fname} />
    </div>
  );
};

export default AdminDashboard;

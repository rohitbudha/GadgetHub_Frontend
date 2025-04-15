import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
import React, { useState,  useEffect } from "react";

  const AdminDashboard = () => {  

    const [name, setName] = useState("Admin");

  useEffect(() => {
    const storedName = sessionStorage.getItem("name");
    console.log("admin: " + storedName); 
    if (storedName) setName(storedName);
  }, []);

  return (
    <>
     <div className="min-h-screen flex bg-gray-100">
  
 <Sidebar/>
 
 <Mainbar adminName={name} />

     
 {/* <DashboardCards/> */}
</div>
     
 </>
  );
};

export default AdminDashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerProfile = () => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // your JWT token key
    if (!token) {
      setError("Please login first.");
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:8080/customers/profile", {
        headers: {
          Authorization: `Bearer ${token}`, // send JWT token in header
        },
        // withCredentials: false // usually not needed with JWT auth
      })
      .then((response) => {
        const data = response.data;
        if (!data.fullName && !data.fname) {
          setError("Profile data incomplete: first name missing.");
          setLoading(false);
          return;
        }
        setCustomer(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load profile. Please login first.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div
      style={{ maxWidth: 400, margin: "auto", padding: 20, border: "1px solid #ccc" }}
    >
      <h2>Customer Profile</h2>
      <p>
        <strong>Full Name:</strong> {customer.fullName || customer.fname}
      </p>
      <p>
        <strong>Email:</strong> {customer.email}
      </p>
      <p>
        <strong>Phone:</strong> {customer.phone || customer.number}
      </p>
      <p>
        <strong>Gender:</strong> {customer.gender}
      </p>
      <p>
        <strong>Address:</strong> {customer.address}
      </p>
    </div>
  );
};

export default CustomerProfile;

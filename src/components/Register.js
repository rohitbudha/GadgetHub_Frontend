import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    gender: "male",
    email: "",
    number: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8080/customers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Registration successful");
        setFormData({
          fname: "",
          lname: "",
          address: "",
          gender: "male",
          email: "",
          number: "",
          password: "",
        });
      } else {
        setErrorMessage(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-white py-5 h-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <div className="card shadow-lg rounded-lg">
                <div className="card-body p-6 md:p-8">
                  <h3 className="mb-6 text-2xl font-semibold text-gray-900">Registration Form</h3>

                  {successMessage && (
                    <div className="mb-4 text-green-600 bg-green-100 p-2 rounded">{successMessage}</div>
                  )}
                  {errorMessage && (
                    <div className="mb-4 text-red-600 bg-red-100 p-2 rounded">{errorMessage}</div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="fname"
                          value={formData.fname}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lname"
                          value={formData.lname}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-900">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="mb-4">
                        <h6 className="text-sm font-medium text-gray-900">Gender:</h6>
                        <div className="flex items-center">
                          <label className="inline-flex items-center mr-4">
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={formData.gender === "male"}
                              onChange={handleChange}
                              className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Male</span>
                          </label>
                          <label className="inline-flex items-center mr-4">
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={formData.gender === "female"}
                              onChange={handleChange}
                              className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Female</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              value="other"
                              checked={formData.gender === "other"}
                              onChange={handleChange}
                              className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Other</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                        <input
                          type="email"
                          id="emailAddress"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">Phone Number</label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

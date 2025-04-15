
import React, { useState, useEffect } from 'react';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:8080/customers/get');
        if (!response.ok) throw new Error('Failed to fetch customers');
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = customers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  return (
    <div className="ml-72 p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>

      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border-b border-gray-300 text-left">S.N</th>
            <th className="p-2 border-b border-gray-300 text-left">fname</th>
            <th className="p-2 border-b border-gray-300 text-left">lname</th>
            <th className="p-2 border-b border-gray-300 text-left">Gender</th>
            <th className="p-2 border-b border-gray-300 text-left">Email</th>
            <th className="p-2 border-b border-gray-300 text-left">Phone</th>
            <th className="p-2 border-b border-gray-300 text-left">Address</th>
            <th className="p-2 border-b border-gray-300 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer, index) => (
            <tr key={customer.id} className="border-b border-gray-200">
              <td className="p-2">{indexOfFirstItem + index + 1}</td>
              <td className="p-2">{customer.fname}</td>
              <td className="p-2">{customer.lname}</td>
              <td className="p-2">{customer.gender}</td>
              <td className="p-2">{customer.email}</td>
              <td className="p-2">{customer.number}</td>
              <td className="p-2">{customer.address}</td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-3">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex justify-center mt-6">
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
};
export default CustomerList;
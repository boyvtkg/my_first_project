import React from 'react'
import { useState, useEffect } from 'react';
import { BsCurrencyDollar } from "react-icons/bs";

const TransFilter = () => {

  const [filters, setFilters] = useState({
    name: '',
    amount: '',
    date: '',
    type: '',
    verification: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", filters);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Search Transactions</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={filters.fullName}
                onChange={(e) => setFilters({ ...filters, fullName: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="type">Type</label>
              <select
                id="type"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="amount">Amount</label>
              <div className="relative w-full">
                <span class="text-lg absolute top-1/2 left-3 transform -translate-y-1/2">$</span>
                <input
                  type="number"
                  id="amount"
                  value={filters.amount}
                  onChange={(e) => setFilters({ ...filters, amount: e.target.value })}
                  className="w-full pl-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default TransFilter
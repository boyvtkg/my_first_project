import { useState } from "react";
import { FaFileAlt, FaHistory, FaFilter, FaBars, FaSearch, FaBell, FaPlus, FaUpload } from "react-icons/fa";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("form");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    type: "credit",
    amount: "",
    date: "",
    notes: "",
    images: []
  });

  const [filterDates, setFilterDates] = useState({
    startDate: "",
    endDate: ""
  });

  const [filteredTransactions, setFilteredTransactions] = useState(null);

  const transactions = [
    { id: 1, type: "Credit", date: "2024-01-15", amount: 1500 },
    { id: 2, type: "Debit", date: "2024-01-14", amount: -500 },
    { id: 3, type: "Credit", date: "2024-01-13", amount: 2000 },
    { id: 4, type: "Debit", date: "2024-01-12", amount: -750 }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
  };

  const handleRemoveImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleFilter = () => {
    const filtered = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      const start = new Date(filterDates.startDate);
      const end = new Date(filterDates.endDate);
      return transactionDate >= start && transactionDate <= end;
    });
    setFilteredTransactions(filtered);
  };

  const resetFilter = () => {
    setFilterDates({ startDate: "", endDate: "" });
    setFilteredTransactions(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-20"} bg-gray-800 text-white transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className={`${isSidebarOpen ? "block" : "hidden"} font-bold text-xl`}>Dashboard</h2>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded"
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        </div>
        <nav className="mt-4">
          {[
            { icon: <FaFileAlt />, text: "Submit Form", value: "form" },
            { icon: <FaHistory />, text: "Transactions", value: "transactions" },
            { icon: <FaFilter />, text: "Filter", value: "filter" }
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setSelectedTab(item.value)}
              className={`w-full p-4 flex items-center ${selectedTab === item.value ? "bg-gray-700" : "hover:bg-gray-700"}`}
              aria-label={item.text}
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span className="ml-4">{item.text}</span>}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center" aria-label="Create New">
              <FaPlus className="mr-2" /> Create New
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full relative" aria-label="Notifications">
            <FaBell className="text-xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6 overflow-auto h-[calc(100vh-4rem)]">
          {selectedTab === "form" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Submit Transaction Form</h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="type">Type</label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="credit">Credit</option>
                      <option value="debit">Debit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="amount">Amount</label>
                    <input
                      type="number"
                      id="amount"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Upload Images</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FaUpload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">Click to upload images</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>

                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image}
                          alt={`Uploaded ${index + 1}`}
                          className="w-full h-32 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Submit Transaction
                </button>
              </form>
            </div>
          )}

          {selectedTab === "transactions" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left">Type</th>
                      <th className="p-4 text-left">Date</th>
                      <th className="p-4 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-t hover:bg-gray-50">
                        <td className="p-4">{transaction.type}</td>
                        <td className="p-4">{transaction.date}</td>
                        <td className={`p-4 ${transaction.amount >= 0 ? "text-green-500" : "text-red-500"}`}>
                          ${Math.abs(transaction.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedTab === "filter" && (
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-6">Filter Transactions</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    value={filterDates.startDate}
                    onChange={(e) => setFilterDates({ ...filterDates, startDate: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="endDate">End Date</label>
                  <input
                    type="date"
                    id="endDate"
                    value={filterDates.endDate}
                    onChange={(e) => setFilterDates({ ...filterDates, endDate: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleFilter}
                    className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    disabled={!filterDates.startDate || !filterDates.endDate}
                  >
                    Apply Filter
                  </button>
                  <button
                    onClick={resetFilter}
                    className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {filteredTransactions && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Filtered Results</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="p-4 text-left">Type</th>
                          <th className="p-4 text-left">Date</th>
                          <th className="p-4 text-left">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTransactions.map((transaction) => (
                          <tr key={transaction.id} className="border-t hover:bg-gray-50">
                            <td className="p-4">{transaction.type}</td>
                            <td className="p-4">{transaction.date}</td>
                            <td className={`p-4 ${transaction.amount >= 0 ? "text-green-500" : "text-red-500"}`}>
                              ${Math.abs(transaction.amount)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

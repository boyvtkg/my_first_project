import React from 'react'
import { useState, useEffect, useRef } from "react";
import { FiDollarSign, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Transactions = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  const transactions = [
    {
      id: 1,
      date: "2024-01-15",
      amount: 1500.00,
      type: "Income",
      fullName: "John Anderson",
      status: "Completed",
      notes: "Monthly salary deposit for January 2024",
      images: [
        "images.unsplash.com/photo-1554224155-6726b3ff858f",
        "images.unsplash.com/photo-1554224154-22dec7ec8818",
        "images.unsplash.com/photo-1554224155-af473300c257",
        "images.unsplash.com/photo-1554224155-6726b3ff858f",
        "images.unsplash.com/photo-1554224154-22dec7ec8818"
      ]
    },
    {
      id: 2,
      date: "2024-01-14",
      amount: 85.50,
      type: "Expense",
      fullName: "Sarah Williams",
      status: "Pending",
      notes: "Office supplies purchase",
      images: [
        "images.unsplash.com/photo-1450101499163-c8848c66ca85",
        "images.unsplash.com/photo-1450101499163-c8848c66ca86",
        "images.unsplash.com/photo-1450101499163-c8848c66ca87"
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRowClick = (transaction) => {
    setSelectedTransaction(transaction);
    setSelectedImage(transaction.images[0]);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
    setSelectedImage(null);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  onClick={() => handleRowClick(transaction)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === "Enter" && handleRowClick(transaction)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <FiDollarSign className="mr-1" />
                      {transaction.amount.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {selectedTransaction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Transaction Details</h2>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6">
                  <img
                    src={`https://${selectedImage}`}
                    alt="Transaction"
                    className="w-full h-64 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa";
                    }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  {selectedTransaction.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`relative aspect-square overflow-hidden rounded-lg ${image === selectedImage ? "ring-2 ring-blue-500" : ""}`}
                    >
                      <img
                        src={`https://${image}`}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa";
                        }}
                      />
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Notes</h3>
                    <p className="text-gray-600">{selectedTransaction.notes}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700">Date</h4>
                      <p>{selectedTransaction.date}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Amount</h4>
                      <p className="flex items-center">
                        <FiDollarSign className="mr-1" />
                        {selectedTransaction.amount.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Type</h4>
                      <p>{selectedTransaction.type}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Status</h4>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedTransaction.status)}`}>
                        {selectedTransaction.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Transactions
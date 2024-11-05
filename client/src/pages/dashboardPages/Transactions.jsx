import React from 'react'

const Transactions = () => {
  const transactions = [
    { id: 1, type: "Credit", amount: 1500, date: "2024-01-15", fullName: "Thanh Pham" },
    { id: 2, type: "Debit", amount: -500, date: "2024-01-14", fullName: "Nhut Huynh" },
    { id: 3, type: "Credit", amount: 2000, date: "2024-01-13", fullName: "Henry Do" },
    { id: 4, type: "Debit", amount: -750, date: "2024-01-12", fullName: "David Lam" }
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/*Header*/}
      <div className=" mb-10">
        <p className="text-lg text-gray-400">Page</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          Transactions</p>
      </div>
      {/*Body*/}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Full Name</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{transaction.date}</td>
                  <td className={`p-4 ${transaction.amount >= 0 ? "text-green-500" : "text-red-500"}`}>
                    ${Math.abs(transaction.amount)}
                  </td>
                  <td className="p-4">{transaction.type}</td>
                  <td className="p-4">{transaction.fullName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Transactions
import React from 'react';
import ExpenseChart from './ExpenseChart';

const Report = () => {
    return (
        <div>
            


         <div>
            <div className='mb-12' >
                <ExpenseChart />
            </div>

            <div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-screen-lg mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Report: Expense Summary</h2>
                    <p className="text-gray-500">Duration: Jan 2024 - Dec 2024</p>
                </div>
                {/* Filter Options */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                    <button className="p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-600">
                        Filter
                    </button>
                    <select className="p-2 border border-gray-300 rounded-md text-gray-600">
                        <option>Year 2024</option>
                        <option>Year 2023</option>
                    </select>
                    <select className="p-2 border border-gray-300 rounded-md text-gray-600">
                        <option>Monthly</option>
                        <option>Weekly</option>
                    </select>
                    <select className="p-2 border border-gray-300 rounded-md text-gray-600">
                        <option>Category</option>
                        <option>Payment</option>
                        <option>Bill</option>
                    </select>
                    <select className="p-2 border border-gray-300 rounded-md text-gray-600">
                        <option>Customer</option>
                        <option>Vendor</option>
                    </select>
                    <button className="p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-600">
                        Bulk Action
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    {/* Table Header */}
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-2 border">Category</th>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <th key={i} className="px-4 py-2 border">{['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][i]}</th>
                            ))}
                            <th className="px-4 py-2 border">Total</th>
                        </tr>
                    </thead>
                    
                    {/* Table Body */}
                    <tbody>
                        {/* Payment Section */}
                        <tr className="bg-gray-50">
                            <td className="px-4 py-2 border font-semibold text-gray-800">Payment</td>
                            <td colSpan="13" className="border"></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Maintenance Sales</td>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <td key={i} className="px-4 py-2 border text-gray-700">$0.00</td>
                            ))}
                            <td className="px-4 py-2 border text-gray-700">$35,690.00</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Product Sales</td>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <td key={i} className="px-4 py-2 border text-gray-700">$0.00</td>
                            ))}
                            <td className="px-4 py-2 border text-gray-700">$45,690.00</td>
                        </tr>

                        {/* Bill Section */}
                        <tr className="bg-gray-50">
                            <td className="px-4 py-2 border font-semibold text-gray-800">Bill</td>
                            <td colSpan="13" className="border"></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Maintenance Sales</td>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <td key={i} className="px-4 py-2 border text-gray-700">$0.00</td>
                            ))}
                            <td className="px-4 py-2 border text-gray-700">$35,690.00</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Product Sales</td>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <td key={i} className="px-4 py-2 border text-gray-700">$0.00</td>
                            ))}
                            <td className="px-4 py-2 border text-gray-700">$45,690.00</td>
                        </tr>

                        {/* Expense Section */}
                        <tr className="bg-gray-50 font-semibold text-gray-800">
                            <td className="px-4 py-2 border">Expense = Payment + Bill</td>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <td key={i} className="px-4 py-2 border">$0.00</td>
                            ))}
                            <td className="px-4 py-2 border">$81,380.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            </div>

        </div>

        </div>
    );
};

export default Report;
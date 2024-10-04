import React, { useState } from "react";
import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaFileExcel,
    FaPrint,
    FaFilter,
    FaSync,
    FaArrowLeft, // Back icon
    FaTimes, // Close icon
} from "react-icons/fa"; // Icons for actions
import { useNavigate } from "react-router-dom"; // Router navigation

const SalesList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null); // Track selected row
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Track filter modal visibility
    const navigate = useNavigate(); // Router navigation instance

    // Sales Data
    const salesData = [
        {
            id: 1,
            createdBy: "John Doe",
            number: "S1001",
            date: "2023-09-29",
            customer: "Acme Corp",
            amount: "$1,200.00",
            targetDelivery: "2023-10-05",
            actualDelivery: "2023-10-06",
            createdAt: "2023-09-28",
        },
        {
            id: 2,
            createdBy: "Jane Smith",
            number: "S1002",
            date: "2023-09-28",
            customer: "Globex Inc.",
            amount: "$900.00",
            targetDelivery: "2023-10-02",
            actualDelivery: "2023-10-02",
            createdAt: "2023-09-27",
        },
    ];

    const handleRowClick = (id: number) => {
        setSelectedRow(id);
    };

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleAddData = () => {
        navigate("/transaction/sales");
    };

    const handleFilterClick = () => {
        setIsFilterOpen(true); // Open the filter modal
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(false); // Close the filter modal
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <button
                    className="text-gray-500 hover:text-gray-800"
                    onClick={handleBackClick}
                    aria-label="Back"
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                <span className="ml-2 text-lg font-semibold">Sales List</span>
            </div>
            <div className="flex justify-end space-x-2 mb-4">
                {/* Action Buttons */}
                <button
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
                    aria-label="Add"
                    onClick={handleAddData}
                >
                    <FaPlus />
                </button>
                <button
                    className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
                    aria-label="Edit"
                >
                    <FaEdit />
                </button>
                <button
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
                    aria-label="Delete"
                >
                    <FaTrash />
                </button>
                <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    aria-label="Export to Excel"
                >
                    <FaFileExcel />
                </button>
                <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    aria-label="Print"
                >
                    <FaPrint />
                </button>
                <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    aria-label="Filter"
                    onClick={handleFilterClick}
                >
                    <FaFilter />
                </button>
                <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    aria-label="Refresh"
                >
                    <FaSync />
                </button>
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden shadow">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-black">
                            <tr>
                                {[
                                    "Sr No.",
                                    "Created By",
                                    "Number",
                                    "Date",
                                    "Customer",
                                    "Amount",
                                    "Target Delivery Date",
                                    "Actual Delivery Date",
                                    "Created At",
                                ].map((header, index) => (
                                    <th
                                        key={index}
                                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {salesData.length > 0 ? (
                                salesData.map((sale, index) => (
                                    <tr
                                        key={sale.id}
                                        onClick={() => handleRowClick(sale.id)}
                                        className={`cursor-pointer ${
                                            selectedRow === sale.id
                                                ? "bg-blue-100"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {sale.createdBy}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {sale.number}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {sale.date}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {sale.customer}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {sale.amount}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {sale.targetDelivery}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {sale.actualDelivery}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {sale.createdAt}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={9}
                                        className="px-6 py-4 text-sm text-gray-500 text-center"
                                    >
                                        No content in table
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Filter Modal */}
            {isFilterOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-md w-11/12 max-w-lg relative">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={handleCloseFilter}
                            aria-label="Close"
                        >
                            <FaTimes className="text-xl" />
                        </button>
                        <h2 className="text-lg font-semibold mb-4">
                            Filter Sales
                        </h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Created By
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>[SELECT]</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Number
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Date From
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Date To
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Customer
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>[SELECT]</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                                <i className="fas fa-search"></i> Apply Filter
                            </button>
                            <button
                                className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded flex items-center"
                                onClick={handleCloseFilter}
                            >
                                <i className="fas fa-times"></i> Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SalesList;

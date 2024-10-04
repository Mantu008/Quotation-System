import React, { useState } from "react";
import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaFileExcel,
    FaPrint,
    FaFilter,
    FaSync,
    FaArrowLeft,
    FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentReceivedLast: React.FC = () => {
    const paymentData = [
        {
            srNo: 1,
            createdBy: "User A",
            finYear: "2023-2024",
            number: "INV-001",
            date: "2023-09-01",
            customer: "Customer X",
            amount: 1500.0,
            payment: "Paid",
            quoPiNo: "Q-001",
            customerNotes: "Notes 1",
            paymentNotes: "Notes 1",
            transaction1: "TXN-001",
            transaction2: "TXN-002",
            billNo: "B-001",
            ourBankNotes: "Bank A",
            createdAt: "2023-09-01 10:00 AM",
        },
        {
            srNo: 2,
            createdBy: "User B",
            finYear: "2023-2024",
            number: "INV-002",
            date: "2023-09-05",
            customer: "Customer Y",
            amount: 2500.0,
            payment: "Pending",
            quoPiNo: "Q-002",
            customerNotes: "Notes 2",
            paymentNotes: "Notes 2",
            transaction1: "TXN-003",
            transaction2: "TXN-004",
            billNo: "B-002",
            ourBankNotes: "Bank B",
            createdAt: "2023-09-05 12:00 PM",
        },
        {
            srNo: 3,
            createdBy: "User C",
            finYear: "2023-2024",
            number: "INV-003",
            date: "2023-09-10",
            customer: "Customer Z",
            amount: 3500.0,
            payment: "Paid",
            quoPiNo: "Q-003",
            customerNotes: "Notes 3",
            paymentNotes: "Notes 3",
            transaction1: "TXN-005",
            transaction2: "TXN-006",
            billNo: "B-003",
            ourBankNotes: "Bank C",
            createdAt: "2023-09-10 02:00 PM",
        },
    ];

    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State for modal
    const navigate = useNavigate();

    const handleRowClick = (srNo: number) => {
        setSelectedRow(srNo);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/transaction/paymentreceived");
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    // const handleSearch = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Add your search functionality here
    //     console.log("Search triggered");
    // };

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
                <span className="ml-2 text-lg font-semibold">
                    Payments Received
                </span>
            </div>
            <div className="flex justify-end space-x-2 mb-4">
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
                    onClick={handleCloseFilter}
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
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-black">
                            <tr>
                                {[
                                    "Sr No.",
                                    "Created By",
                                    "Fin. Year",
                                    "Number",
                                    "Date",
                                    "Customer",
                                    "Amount",
                                    "Payment",
                                    "Quo/Pi No.",
                                    "Customer Notes",
                                    "Payment Notes",
                                    "Transaction 1",
                                    "Transaction 2",
                                    "Bill No",
                                    "Our Bank Notes",
                                    "Created At",
                                ].map((header, index) => (
                                    <th
                                        key={index}
                                        className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {paymentData.length > 0 ? (
                                paymentData.map((data) => (
                                    <tr
                                        key={data.srNo}
                                        onClick={() =>
                                            handleRowClick(data.srNo)
                                        }
                                        className={`cursor-pointer ${
                                            selectedRow === data.srNo
                                                ? "bg-blue-100"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.srNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.createdBy}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.finYear}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.number}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.date}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.customer}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            ${data.amount.toFixed(2)}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.payment}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.quoPiNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700 truncate max-w-xs">
                                            {data.customerNotes}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700 truncate max-w-xs">
                                            {data.paymentNotes}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700 truncate max-w-xs">
                                            {data.transaction1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700 truncate max-w-xs">
                                            {data.transaction2}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.billNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700 truncate max-w-xs">
                                            {data.ourBankNotes}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.createdAt}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={15}
                                        className="px-4 py-2 text-sm text-gray-500 text-center"
                                    >
                                        No data available.
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

export default PaymentReceivedLast;

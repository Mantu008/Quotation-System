import React, { useState } from "react";
import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaFileExcel,
    FaPrint,
    FaFilter,
    FaSync,
    FaEllipsisH,
    FaTimes,
    FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProformaInvoiceList: React.FC = () => {
    const navigate = useNavigate();
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const invoiceData = [
        {
            id: 1,
            createdBy: "Alice Johnson",
            number: "INV-001",
            quotation: "QT-1001",
            date: "2024-09-01",
            customer: "ABC Corp",
            amount: "$1,000.00",
        },
        {
            id: 2,
            createdBy: "Bob Smith",
            number: "INV-002",
            quotation: "QT-1002",
            date: "2024-09-05",
            customer: "XYZ Ltd",
            amount: "$2,500.00",
        },
    ];

    const handleRowClick = (id: number) => {
        setSelectedRow(id);
    };

    const handleOpenFilter = () => {
        setIsFilterOpen(true);
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(false);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/proformainvoice");
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4 flex-wrap">
                <button
                    className="flex items-center mb-4"
                    onClick={handleBack}
                    aria-label="Back"
                >
                    <FaArrowLeft className="text-xl" />
                    <h1 className="ml-2 text-xl font-bold text-gray-800">
                        Proforma Invoice List
                    </h1>
                </button>

                <div className="flex justify-end flex-wrap space-x-2 mt-4">
                    <button
                        className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-200 flex items-center"
                        aria-label="Add"
                        onClick={handleAddData}
                    >
                        <FaPlus />
                    </button>
                    <button
                        className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition duration-200 flex items-center"
                        aria-label="Edit"
                    >
                        <FaEdit />
                    </button>
                    <button
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center"
                        aria-label="Delete"
                    >
                        <FaTrash />
                    </button>
                    <button
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
                        aria-label="Export to Excel"
                    >
                        <FaFileExcel />
                    </button>
                    <button
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
                        aria-label="Print"
                    >
                        <FaPrint />
                    </button>
                    <button
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
                        aria-label="Filter"
                        onClick={handleOpenFilter}
                    >
                        <FaFilter />
                    </button>
                    <button
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
                        aria-label="Refresh"
                    >
                        <FaSync />
                    </button>
                    <button
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
                        aria-label="More Options"
                    >
                        <FaEllipsisH />
                    </button>
                </div>
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden shadow">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-black">
                            <tr>
                                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Sr No.
                                </th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Created By
                                </th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Number
                                </th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Quotation No
                                </th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Customer
                                </th>
                                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {invoiceData.length > 0 ? (
                                invoiceData.map((invoice, index) => (
                                    <tr
                                        key={invoice.id}
                                        onClick={() =>
                                            handleRowClick(invoice.id)
                                        }
                                        className={`cursor-pointer ${
                                            selectedRow === invoice.id
                                                ? "bg-blue-100"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        <td className="px-2 py-4 text-sm text-gray-500">
                                            {index + 1}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-gray-900">
                                            {invoice.createdBy}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-gray-900">
                                            {invoice.number}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-gray-900">
                                            {invoice.quotation}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-gray-900">
                                            {invoice.date}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-gray-900">
                                            {invoice.customer}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-gray-900">
                                            {invoice.amount}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={7}
                                        className="px-2 py-4 text-sm text-gray-500 text-center"
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
                                Quotation No
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
                            <input
                                type="date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Date To
                            </label>
                            <input
                                type="date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition duration-200 w-full mr-2"
                                onClick={handleCloseFilter}
                            >
                                Apply
                            </button>
                            <button
                                className="bg-gray-300 text-black p-2 rounded-lg hover:bg-gray-400 transition duration-200 w-full ml-2"
                                onClick={handleCloseFilter}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProformaInvoiceList;

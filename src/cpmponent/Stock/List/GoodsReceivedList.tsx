import React, { useState } from "react";
import {
    FaPlus,
    FaPencilAlt,
    FaTrashAlt,
    FaFileExcel,
    FaPrint,
    FaFilter,
    FaSyncAlt,
    FaArrowLeft,
    FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface TargetData {
    srNo: number;
    createdBy: string;
    number: string;
    date: string;
    supplier: string;
    supplierInvoiceNo: string;
    supplierInvoiceDate: string;
    poNo: string;
    poDate: string;
    createdAt: string;
}

const sampleData: TargetData[] = [
    {
        srNo: 1,
        createdBy: "John Doe",
        number: "12345",
        date: "2024-09-28",
        supplier: "Supplier A",
        supplierInvoiceNo: "INV123",
        supplierInvoiceDate: "2024-09-25",
        poNo: "PO789",
        poDate: "2024-09-20",
        createdAt: "2024-09-27",
    },
    {
        srNo: 2,
        createdBy: "Jane Smith",
        number: "67890",
        date: "2024-09-29",
        supplier: "Supplier B",
        supplierInvoiceNo: "INV456",
        supplierInvoiceDate: "2024-09-26",
        poNo: "PO456",
        poDate: "2024-09-21",
        createdAt: "2024-09-28",
    },
    {
        srNo: 3,
        createdBy: "Mark Brown",
        number: "54321",
        date: "2024-09-30",
        supplier: "Supplier C",
        supplierInvoiceNo: "INV789",
        supplierInvoiceDate: "2024-09-27",
        poNo: "PO123",
        poDate: "2024-09-22",
        createdAt: "2024-09-29",
    },
];

const GoodsReceivedList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const navigate = useNavigate();

    const handleRowClick = (srNo: number) => {
        setSelectedRow(srNo);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/stock/goodsreceived");
    };

    const handleEditData = () => {
        if (selectedRow !== null) {
            console.log(`Edit data for row: ${selectedRow}`);
        }
    };

    const handleDeleteData = () => {
        if (selectedRow !== null) {
            console.log(`Delete data for row: ${selectedRow}`);
        }
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(!isFilterOpen);
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
                <span className="ml-2 text-lg font-semibold">
                    Goods Received List
                </span>
            </div>
            <div className="flex justify-end space-x-2 mb-4">
                <button
                    className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition duration-200"
                    aria-label="Add"
                    onClick={handleAddData}
                >
                    <FaPlus />
                </button>
                <button
                    className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
                    aria-label="Edit"
                    onClick={handleEditData}
                >
                    <FaPencilAlt />
                </button>
                <button
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
                    aria-label="Delete"
                    onClick={handleDeleteData}
                >
                    <FaTrashAlt />
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
                    <FaSyncAlt />
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
                                    "Number",
                                    "Date",
                                    "Supplier",
                                    "Supplier Invoice No.",
                                    "Supplier Invoice Date",
                                    "P.O. No.",
                                    "P.O. Date",
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
                            {sampleData.length > 0 ? (
                                sampleData.map((data) => (
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
                                            {data.number}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.date}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.supplier}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.supplierInvoiceNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.supplierInvoiceDate}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.poNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.poDate}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.createdAt}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={10}
                                        className="px-4 py-2 text-sm text-gray-500 text-center"
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

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Created By
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>[SELECT]</option>
                                <option>Mantu</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Number
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Date Form
                            </label>
                            <input
                                type="date"
                                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Date To
                            </label>
                            <input
                                type="date"
                                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Supplier
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>[SELECT]</option>
                                <option>Mantu</option>
                            </select>
                        </div>

                        <div className="flex justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                                Apply Filter
                            </button>
                            <button
                                className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded flex items-center"
                                onClick={handleCloseFilter}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GoodsReceivedList;

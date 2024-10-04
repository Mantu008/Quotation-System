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
    name: string;
    codeName: string; // New field
    codeNo: string; // New field
}

const sampleData: TargetData[] = [
    { srNo: 1, name: "Andhra Pradesh", codeName: "AP", codeNo: "28" },
    { srNo: 2, name: "Andhra Pradesh (New)", codeName: "AD", codeNo: "37" },
    { srNo: 3, name: "Arunachal Pradesh", codeName: "AR", codeNo: "12" },
    { srNo: 4, name: "Assam", codeName: "AS", codeNo: "18" },
    { srNo: 5, name: "Bihar", codeName: "BH", codeNo: "10" },
    { srNo: 6, name: "Chandigarh", codeName: "CH", codeNo: "4" },
    { srNo: 7, name: "Chattisgarh", codeName: "CT", codeNo: "22" },
    { srNo: 8, name: "Dadra and Nagar Haveli", codeName: "DN", codeNo: "26" },
    { srNo: 9, name: "Daman and Diu", codeName: "DD", codeNo: "25" },
    { srNo: 10, name: "Delhi", codeName: "DL", codeNo: "7" },
    { srNo: 11, name: "Goa", codeName: "GA", codeNo: "30" },
    { srNo: 12, name: "Gujarat", codeName: "GJ", codeNo: "24" },
    { srNo: 13, name: "Haryana", codeName: "HR", codeNo: "6" },
    { srNo: 14, name: "Himachal Pradesh", codeName: "HP", codeNo: "2" },
    { srNo: 15, name: "Jammu and Kashmir", codeName: "JK", codeNo: "1" },
    { srNo: 16, name: "Jharkhand", codeName: "JH", codeNo: "20" },
    { srNo: 17, name: "Karnataka", codeName: "KA", codeNo: "29" },
    { srNo: 18, name: "Kerala", codeName: "KL", codeNo: "32" },
    { srNo: 19, name: "Lakshadweep Islands", codeName: "LD", codeNo: "31" },
    { srNo: 20, name: "Madhya Pradesh", codeName: "MP", codeNo: "23" },
    { srNo: 21, name: "Maharashtra", codeName: "MH", codeNo: "27" },
    { srNo: 22, name: "Manipur", codeName: "MN", codeNo: "14" },
    { srNo: 23, name: "Meghalaya", codeName: "ME", codeNo: "17" },
    { srNo: 24, name: "Mizoram", codeName: "MI", codeNo: "15" },
    { srNo: 25, name: "Nagaland", codeName: "NL", codeNo: "13" },
    { srNo: 26, name: "Odisha", codeName: "OR", codeNo: "21" },
    { srNo: 27, name: "Pondicherry", codeName: "PY", codeNo: "34" },
    { srNo: 28, name: "Punjab", codeName: "PB", codeNo: "3" },
    { srNo: 29, name: "Rajasthan", codeName: "RJ", codeNo: "8" },
    { srNo: 30, name: "Sikkim", codeName: "SK", codeNo: "11" },
    { srNo: 31, name: "Tamil Nadu", codeName: "TN", codeNo: "33" },
    { srNo: 32, name: "Telangana", codeName: "TS", codeNo: "36" },
    { srNo: 33, name: "Tripura", codeName: "TR", codeNo: "16" },
    { srNo: 34, name: "Uttar Pradesh", codeName: "UP", codeNo: "9" },
    { srNo: 35, name: "Uttarakhand", codeName: "UT", codeNo: "5" },
    { srNo: 36, name: "West Bengal", codeName: "WB", codeNo: "19" },
];

const StateList: React.FC = () => {
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
        navigate("/state");
        window.scrollTo(0, 0);
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
                <span className="ml-2 text-lg font-semibold">State List</span>
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
                                    "Name",
                                    "Code Name", // New header
                                    "Code No", // New header
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
                                            {data.name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.codeName}{" "}
                                            {/* Display Code Name */}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.codeNo}{" "}
                                            {/* Display Code No */}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4} // Updated to match the number of columns
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
                                Name
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Code Name
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Code No
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
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

export default StateList;

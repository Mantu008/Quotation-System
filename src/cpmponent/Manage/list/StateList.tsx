import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { BASE_URL_PATH } from "../../../../path";

interface TargetData {
    id: number;
    name: string;
    code_name: string; // New field
    code_no: number; // Changed to number
}

const StateList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [stateData, setStateData] = useState<TargetData[]>([]);
    const [filteredData, setFilteredData] = useState<TargetData[]>([]);

    // Filter state
    const [filter, setFilter] = useState({
        name: "",
        code_name: "",
        code_no: "", // Keep as string for input handling
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchStateList = async () => {
            const paymentMethodsUrl = `${BASE_URL_PATH}/states`;
            try {
                const response = await axios.get(paymentMethodsUrl);
                const sortedData = response.data.sort(
                    (a: TargetData, b: TargetData) => a.id - b.id
                );
                setStateData(sortedData); // Set state with sorted data
                setFilteredData(sortedData); // Initialize filtered data
            } catch (error) {
                console.error("Error fetching payment methods:", error);
            }
        };

        fetchStateList();
    }, []);

    const handleRowClick = (id: number) => {
        setSelectedRow(id);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/manage/state");
        window.scrollTo(0, 0);
    };

    const handleEditData = () => {
        if (selectedRow !== null) {
            navigate(`/manage/state/${selectedRow}`);
        }
    };

    const handleDeleteData = async () => {
        if (selectedRow !== null) {
            try {
                const deleteUrl = `${BASE_URL_PATH}/states/${selectedRow}`;
                await axios.delete(deleteUrl);
                setStateData((prevData) =>
                    prevData.filter((stateData) => stateData.id !== selectedRow)
                );
                setFilteredData((prevData) =>
                    prevData.filter((stateData) => stateData.id !== selectedRow)
                );

                setSelectedRow(null);
                console.log(`Deleted row with ID: ${selectedRow}`);
            } catch (error) {
                console.error("Error deleting Item:", error);
            }
        }
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
        }));
    };

    const applyFilter = () => {
        setFilteredData(
            stateData.filter((data) => {
                const matchesName = filter.name
                    ? data.name
                          .toLowerCase()
                          .includes(filter.name.toLowerCase())
                    : true;
                const matchesCodeName = filter.code_name
                    ? data.code_name
                          .toLowerCase()
                          .includes(filter.code_name.toLowerCase())
                    : true;
                const matchesCodeNo = filter.code_no
                    ? data.code_no.toString() === filter.code_no // Ensure comparison is string-based
                    : true;

                return matchesName && matchesCodeName && matchesCodeNo;
            })
        );
        setIsFilterOpen(false); // Close the filter modal after applying
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
                    onClick={() => window.location.reload()}
                >
                    <FaSyncAlt />
                </button>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-black">
                            <tr>
                                {["Sr No.", "Name", "Code Name", "Code No"].map(
                                    (header, index) => (
                                        <th
                                            key={index}
                                            className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                        >
                                            {header}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredData.length > 0 ? (
                                filteredData.map((data, index) => (
                                    <tr
                                        key={data.id}
                                        onClick={() => handleRowClick(data.id)}
                                        className={`cursor-pointer ${
                                            selectedRow === data.id
                                                ? "bg-blue-100"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.code_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.code_no}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
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
                                name="name"
                                value={filter.name}
                                onChange={handleFilterChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Code Name
                            </label>
                            <input
                                type="text"
                                name="code_name"
                                value={filter.code_name}
                                onChange={handleFilterChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Code No
                            </label>
                            <input
                                type="text"
                                name="code_no"
                                value={filter.code_no}
                                onChange={handleFilterChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex justify-end gap-4">
                            <button
                                onClick={applyFilter}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                            >
                                Apply Filter
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
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

export default StateList;

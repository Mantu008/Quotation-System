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
import axios from "axios";

interface TargetData {
    id: number;
    name: string;
}

const CompetitorList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [competitorData, setCompetitorData] = useState<TargetData[]>([]);
    const [filteredData, setFilteredData] = useState<TargetData[]>([]);
    const [filterName, setFilterName] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCompetitorList = async () => {
            const paymentMethodsUrl = `${BASE_URL_PATH}/competitors`;
            try {
                const response = await axios.get(paymentMethodsUrl);
                const sortedData = response.data.sort(
                    (a: TargetData, b: TargetData) => a.id - b.id
                );
                setCompetitorData(sortedData);
                setFilteredData(sortedData); // Initialize filteredData
            } catch (error) {
                console.error("Error fetching competitors:", error);
            }
        };

        fetchCompetitorList();
    }, []);

    const handleRowClick = (id: number) => {
        setSelectedRow(id);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/manage/competitor");
    };

    const handleEditData = () => {
        if (selectedRow !== null) {
            navigate(`/manage/competitor/${selectedRow}`);
        }
    };

    const handleDeleteData = async () => {
        if (selectedRow !== null) {
            try {
                const deleteUrl = `${BASE_URL_PATH}/competitors/${selectedRow}`;
                await axios.delete(deleteUrl);
                setCompetitorData((prevData) =>
                    prevData.filter(
                        (competitorData) => competitorData.id !== selectedRow
                    )
                );
                setFilteredData((prevData) =>
                    prevData.filter(
                        (competitorData) => competitorData.id !== selectedRow
                    )
                );
                setSelectedRow(null);
                console.log(`Deleted row with ID: ${selectedRow}`);
            } catch (error) {
                console.error("Error deleting item:", error);
            }
        }
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(false);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterName(value);
    };

    const handleApplyFilter = () => {
        const filtered = competitorData.filter((competitor) =>
            competitor.name.toLowerCase().includes(filterName.toLowerCase())
        );
        setFilteredData(filtered);
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
                <span className="ml-2 text-lg font-semibold">
                    Competitor List
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
                    onClick={() => setIsFilterOpen(true)}
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
                                {["Sr No.", "Name"].map((header, index) => (
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
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={2}
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
                                value={filterName}
                                onChange={handleFilterChange}
                                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                                onClick={handleApplyFilter} // Apply filter logic here
                            >
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

export default CompetitorList;

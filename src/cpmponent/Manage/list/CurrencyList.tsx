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
    symbol: string;
    is_default: boolean;
}

const CurrencyList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currencyData, setCurrencyData] = useState<TargetData[]>([]);
    const [filterValue, setFilterValue] = useState(""); // State for filter value
    const [appliedFilterValue, setAppliedFilterValue] = useState(""); // State for applied filter value
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrency = async () => {
            const paymentMethodsUrl = `${BASE_URL_PATH}/currencies`;
            try {
                const response = await axios.get(paymentMethodsUrl);
                // Sort the fetched data by id in ascending order
                const sortedData = response.data.sort(
                    (a: TargetData, b: TargetData) => a.id - b.id
                );
                setCurrencyData(sortedData); // Set state with sorted data
            } catch (error) {
                console.error("Error fetching payment methods:", error);
            }
        };

        fetchCurrency();
    }, []);

    const handleRowClick = (id: number) => {
        setSelectedRow(id);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/manage/currency");
    };

    const handleEditData = () => {
        if (selectedRow !== null) {
            navigate(`/manage/currency/${selectedRow}`);
        }
    };

    const handleDeleteData = async () => {
        if (selectedRow !== null) {
            try {
                // Replace this URL with your actual delete endpoint
                const deleteUrl = `${BASE_URL_PATH}/currencies/${selectedRow}`;
                await axios.delete(deleteUrl);

                // Update the local state by removing the deleted row
                setCurrencyData((prevData) =>
                    prevData.filter((currency) => currency.id !== selectedRow)
                );

                // Clear the selection
                setSelectedRow(null);

                console.log(`Deleted row with ID: ${selectedRow}`);
            } catch (error) {
                console.error("Error deleting currency:", error);
            }
        }
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(false); // Only close the filter modal
    };

    // Function to handle the filter input change
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
    };

    // Function to apply the filter
    const handleApplyFilter = () => {
        setAppliedFilterValue(filterValue); // Set the applied filter value
        setIsFilterOpen(false); // Close the filter modal
    };

    // Filtered data based on the applied filter value
    const filteredCurrencyData = currencyData.filter((currency) =>
        currency.name.toLowerCase().includes(appliedFilterValue.toLowerCase())
    );

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
                    Currency List
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
                    onClick={() => setIsFilterOpen(true)} // Open the filter modal
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
                                {["Sr No.", "Name", "Symbol", "Is Default"].map(
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
                            {filteredCurrencyData.length > 0 ? (
                                filteredCurrencyData.map((data, index) => (
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
                                            {data.symbol}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.is_default ? "Yes" : "No"}
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
                                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={filterValue} // Bind the filter value to the input
                                onChange={handleFilterChange} // Update filter value on change
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                                onClick={handleApplyFilter} // Apply filter when this button is clicked
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

export default CurrencyList;

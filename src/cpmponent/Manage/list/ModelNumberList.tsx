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
    category_name: string;
    name: string;
    prefix: string;
    postfix: string;
    hsn_code: string;
    rate: number;
}

const ModelNumberList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [modelData, setModelData] = useState<TargetData[]>([]);
    const [filteredData, setFilteredData] = useState<TargetData[]>([]);
    const [categories, setCategories] = useState<
        { id: number; name: string }[]
    >([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [filterName, setFilterName] = useState<string>("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchModelNumberList = async () => {
            const paymentMethodsUrl = `${BASE_URL_PATH}/product-models`;
            try {
                const response = await axios.get(paymentMethodsUrl);
                const sortedData = response.data.sort(
                    (a: TargetData, b: TargetData) => a.id - b.id
                );
                setModelData(sortedData);
                setFilteredData(sortedData); // Initialize filteredData
            } catch (error) {
                console.error("Error fetching payment methods:", error);
            }
        };

        const fetchCategories = async () => {
            const categoryUrl = `${BASE_URL_PATH}/categories`;
            try {
                const response = await axios.get(categoryUrl);
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchModelNumberList();
        fetchCategories();
    }, []);

    const handleRowClick = (id: number) => {
        setSelectedRow(id);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/manage/modelnumber");
    };

    const handleEditData = () => {
        if (selectedRow !== null) {
            navigate(`/manage/modelnumber/${selectedRow}`);
        }
    };

    const handleDeleteData = async () => {
        if (selectedRow !== null) {
            try {
                const deleteUrl = `${BASE_URL_PATH}/product-models/${selectedRow}`;
                await axios.delete(deleteUrl);
                setModelData((prevData) =>
                    prevData.filter((item) => item.id !== selectedRow)
                );
                setFilteredData((prevData) =>
                    prevData.filter((item) => item.id !== selectedRow)
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

    const applyFilter = () => {
        let filtered = modelData;
        if (selectedCategory) {
            filtered = filtered.filter(
                (item) => item.category_name === selectedCategory
            );
        }
        if (filterName) {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(filterName.toLowerCase())
            );
        }
        setFilteredData(filtered);
        handleCloseFilter();
    };

    const resetFilter = () => {
        setSelectedCategory("");
        setFilterName("");
        setFilteredData(modelData);
        handleCloseFilter();
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
                <span className="ml-2 text-lg font-semibold">Product List</span>
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
                                {[
                                    "Sr No.",
                                    "Category",
                                    "Name",
                                    "Prefix",
                                    "Postfix",
                                    "HSN",
                                    "Rate",
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
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        onClick={() => handleRowClick(item.id)}
                                        className={`cursor-pointer ${
                                            selectedRow === item.id
                                                ? "bg-blue-100"
                                                : "hover:bg-gray-100"
                                        }`}
                                    >
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {item.category_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {item.prefix}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {item.postfix}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {item.hsn_code}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            ${item.rate}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={7}
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
                            <label className="block mb-1">Category:</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">All</option>
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.name}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                value={filterName}
                                onChange={(e) => setFilterName(e.target.value)}
                                className="border border-gray-300 p-2 w-full rounded"
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
                                onClick={resetFilter}
                                aria-label="Reset"
                            >
                                Reset
                            </button>
                            <button
                                className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition duration-200"
                                onClick={applyFilter}
                                aria-label="Apply"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModelNumberList;

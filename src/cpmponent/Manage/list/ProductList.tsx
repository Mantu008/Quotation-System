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
    model_no: string;
    hsn_code: string;
    rate: number;
    gst_rate_name: string;
}

const ProductList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [productData, setProductData] = useState<TargetData[]>([]); // All products
    const [filteredData, setFilteredData] = useState<TargetData[]>([]); // Filtered products
    const [categories, setCategories] = useState<
        { id: number; name: string }[]
    >([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [filterName, setFilterName] = useState<string>("");
    const [filterModelNo, setFilterModelNo] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductList = async () => {
            const productUrl = `${BASE_URL_PATH}/products`;
            try {
                const response = await axios.get(productUrl);
                const sortedData = response.data.sort(
                    (a: TargetData, b: TargetData) => a.id - b.id
                );
                setProductData(sortedData);
                setFilteredData(sortedData); // Initialize filtered data with the original data
            } catch (error) {
                console.error("Error fetching products:", error);
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

        fetchProductList();
        fetchCategories();
    }, []);

    const handleRowClick = (srNo: number) => {
        setSelectedRow(srNo);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/manage/product");
    };

    const handleEditData = () => {
        if (selectedRow !== null) {
            navigate(`/manage/product/${selectedRow}`);
        }
    };

    const handleDeleteData = async () => {
        if (selectedRow !== null) {
            try {
                const deleteUrl = `${BASE_URL_PATH}/products/${selectedRow}`;
                await axios.delete(deleteUrl);
                setProductData((prevData) =>
                    prevData.filter((product) => product.id !== selectedRow)
                );
                setFilteredData((prevData) =>
                    prevData.filter((product) => product.id !== selectedRow)
                ); // Also update filtered data
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
        const filtered = productData.filter((product) => {
            const matchesCategory = selectedCategory
                ? product.category_name === selectedCategory
                : true;
            const matchesName = filterName
                ? product.name.toLowerCase().includes(filterName.toLowerCase())
                : true;
            const matchesModelNo = filterModelNo
                ? product.model_no
                      .toLowerCase()
                      .includes(filterModelNo.toLowerCase())
                : true;
            return matchesCategory && matchesName && matchesModelNo;
        });
        setFilteredData(filtered); // Update filtered data
        handleCloseFilter(); // Close the filter modal
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
                                    "Model No.",
                                    "HSN No.",
                                    "Rate",
                                    "GST Rate",
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
                                            {data.category_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.model_no}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.hsn_code}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.rate}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            ${data.gst_rate_name}
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
                            Filter Products
                        </h2>
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
                            <label className="block mb-1">Name:</label>
                            <input
                                type="text"
                                value={filterName}
                                onChange={(e) => setFilterName(e.target.value)}
                                className="border border-gray-300 rounded p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Model No:</label>
                            <input
                                type="text"
                                value={filterModelNo}
                                onChange={(e) =>
                                    setFilterModelNo(e.target.value)
                                }
                                className="border border-gray-300 rounded p-2 w-full"
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-200"
                                onClick={applyFilter}
                            >
                                Apply
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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

export default ProductList;

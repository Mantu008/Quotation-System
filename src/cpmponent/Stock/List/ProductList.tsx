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
    itemGroup: string;
    category: string;
    item: string;
    itemCode: string;
    description: string;
    location: string;
    unit: string;
    quantity: number;
    rate: number;
    status: string;
    reorderLevelVariation: number;
    minimumOrderQuantity: number;
}

const sampleData: TargetData[] = [
    {
        srNo: 1,
        itemGroup: "Electronics",
        category: "Mobile",
        item: "Smartphone X",
        itemCode: "MOB123",
        description: "Latest smartphone with advanced features",
        location: "Warehouse A",
        unit: "Pieces",
        quantity: 150,
        rate: 499.99,
        status: "In Stock",
        reorderLevelVariation: 10,
        minimumOrderQuantity: 5,
    },
    {
        srNo: 2,
        itemGroup: "Furniture",
        category: "Chairs",
        item: "Office Chair",
        itemCode: "FUR456",
        description: "Ergonomic office chair",
        location: "Warehouse B",
        unit: "Pieces",
        quantity: 50,
        rate: 89.99,
        status: "In Stock",
        reorderLevelVariation: 5,
        minimumOrderQuantity: 10,
    },
    {
        srNo: 3,
        itemGroup: "Appliances",
        category: "Kitchen",
        item: "Blender",
        itemCode: "KIT789",
        description: "High-speed blender",
        location: "Warehouse C",
        unit: "Pieces",
        quantity: 30,
        rate: 59.99,
        status: "Low Stock",
        reorderLevelVariation: 15,
        minimumOrderQuantity: 3,
    },
];

const ProductList: React.FC = () => {
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
        navigate("/stock/product");
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
                                    "Item Group",
                                    "Category",
                                    "Item",
                                    "Item Code",
                                    "Description",
                                    "Location",
                                    "Unit",
                                    "Quantity",
                                    "Rate",
                                    "Status",
                                    "Reorder Level Variation %",
                                    "Minimum Order Quantity",
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
                                            {data.itemGroup}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.category}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.item}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.itemCode}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.description}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.location}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.unit}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.quantity}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.rate}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.status}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.reorderLevelVariation}%
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.minimumOrderQuantity}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={13}
                                        className="text-center py-4 text-gray-500"
                                    >
                                        No data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {isFilterOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
                    <div className="bg-white p-4 sm:p-6 rounded shadow-md w-11/12 max-w-lg md:max-w-3xl relative mx-4 sm:mx-auto">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={handleCloseFilter}
                            aria-label="Close"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        {/* Container to ensure overflow content is scrollable */}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Item Group
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>[SELECT]</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Category
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>[SELECT]</option>
                            </select>
                        </div>
                        <div className="max-h-[75vh] overflow-y-auto">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Item
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Item Code
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Location
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Unit
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Status
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>

                        {/* Buttons at the bottom */}
                        <div className="flex justify-between mt-4">
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

export default ProductList;

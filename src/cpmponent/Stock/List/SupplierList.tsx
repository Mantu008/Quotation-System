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
    contacts: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pin: string;
    shippingName: string;
    shippingAddress: string;
    shippingCity: string;
    shippingState: string;
    shippingCountry: string;
    shippingPin: string;
    gstNo: string;
    owner: string;
    code: string;
    contactNo1: string;
    contactNo2: string;
    description: string;
    contactNature: string;
    inquirySource: string;
    industry: string;
    machine: string;
    consumption: string;
    email: string;
    competitor1: string;
    competitor2: string;
    class: string;
    createdAt: string;
    createdBy: string;
}

const sampleData: TargetData[] = [
    {
        srNo: 1,
        name: "John Doe",
        contacts: "123456789",
        address: "123 Street, Area A",
        city: "New York",
        state: "NY",
        country: "USA",
        pin: "10001",
        shippingName: "John Doe",
        shippingAddress: "123 Street, Area A",
        shippingCity: "New York",
        shippingState: "NY",
        shippingCountry: "USA",
        shippingPin: "10001",
        gstNo: "GST12345",
        owner: "John's Corp",
        code: "A123",
        contactNo1: "1234567890",
        contactNo2: "0987654321",
        description: "Sample product",
        contactNature: "Business",
        inquirySource: "Email",
        industry: "Manufacturing",
        machine: "Machinery A",
        consumption: "High",
        email: "johndoe@example.com",
        competitor1: "Competitor A",
        competitor2: "Competitor B",
        class: "A",
        createdAt: "2024-09-27",
        createdBy: "John Admin",
    },
    {
        srNo: 2,
        name: "Jane Smith",
        contacts: "234567891",
        address: "456 Street, Area B",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        pin: "90001",
        shippingName: "Jane Smith",
        shippingAddress: "456 Street, Area B",
        shippingCity: "Los Angeles",
        shippingState: "CA",
        shippingCountry: "USA",
        shippingPin: "90001",
        gstNo: "GST67890",
        owner: "Smith Corp",
        code: "B456",
        contactNo1: "2345678901",
        contactNo2: "1098765432",
        description: "Sample product B",
        contactNature: "Business",
        inquirySource: "Referral",
        industry: "Retail",
        machine: "Machinery B",
        consumption: "Medium",
        email: "janesmith@example.com",
        competitor1: "Competitor C",
        competitor2: "Competitor D",
        class: "B",
        createdAt: "2024-09-28",
        createdBy: "Jane Admin",
    },
];

const SupplierList: React.FC = () => {
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
        navigate("/stock/supplier");
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
                    Supplier List
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
                                    "Name",
                                    "Contacts",
                                    "Address",
                                    "City",
                                    "State",
                                    "Country",
                                    "PIN",
                                    "Shipping Name",
                                    "Shipping Address",
                                    "Shipping City",
                                    "Shipping State",
                                    "Shipping Country",
                                    "Shipping PIN",
                                    "GST No",
                                    "Owner",
                                    "Code",
                                    "Contact No. 1",
                                    "Contact No. 2",
                                    "Description",
                                    "Contact Nature",
                                    "Inquiry Source",
                                    "Industry",
                                    "Machine",
                                    "Cunsumption",
                                    "Email",
                                    "Competitor 1",
                                    "Competitor 2",
                                    "Class",
                                    "Created At",
                                    "Created By",
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
                                            {data.contacts}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.address}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.city}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.state}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.country}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.pin}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.shippingName}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.shippingAddress}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.shippingCity}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.shippingState}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.shippingCountry}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.shippingPin}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.gstNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.owner}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.code}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contactNo1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contactNo2}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.description}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contactNature}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.inquirySource}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.industry}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.machine}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.consumption}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.email}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.competitor1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.competitor2}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.class}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.createdAt}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.createdBy}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={30}
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
                    <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-lg md:max-w-3xl relative mx-4 sm:mx-auto">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={handleCloseFilter}
                            aria-label="Close"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        <div className="max-h-[75vh] overflow-y-auto">
                            {/* Set a max height and overflow */}
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
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    State
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                    <option>Gujarat</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    PIN
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Shipping Name
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Shipping Address
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Shipping City
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Shipping State
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                    <option>Gujarat</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Shipping Country
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Shipping Pin
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    GST
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Owner
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Code
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Contact No
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Contact Nature
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Inquiry Source
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Industry
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Machine
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Competitor
                                </label>
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>[SELECT]</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Class
                                </label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleCloseFilter}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SupplierList;

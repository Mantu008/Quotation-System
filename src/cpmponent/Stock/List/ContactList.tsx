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
    company: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pin: string;
    jobTitle: string;
    contactNo1: string;
    contactNo2: string;
    contactNo3: string;
    email1: string;
    email2: string;
    contactNature: string;
    inquirySource: string;
    industry: string;
    description: string;
}

const sampleData: TargetData[] = [
    {
        srNo: 1,
        name: "John Doe",
        company: "Company A",
        address: "123 Elm St",
        city: "City A",
        state: "State A",
        country: "Country A",
        pin: "123456",
        jobTitle: "Manager",
        contactNo1: "123-456-7890",
        contactNo2: "098-765-4321",
        contactNo3: "",
        email1: "john.doe@example.com",
        email2: "jdoe@example.com",
        contactNature: "Supplier",
        inquirySource: "Email",
        industry: "Retail",
        description: "Supplier of goods",
    },
    {
        srNo: 2,
        name: "Jane Smith",
        company: "Company B",
        address: "456 Oak St",
        city: "City B",
        state: "State B",
        country: "Country B",
        pin: "654321",
        jobTitle: "Director",
        contactNo1: "234-567-8901",
        contactNo2: "109-876-5432",
        contactNo3: "234-567-8902",
        email1: "jane.smith@example.com",
        email2: "jsmith@example.com",
        contactNature: "Customer",
        inquirySource: "Phone",
        industry: "Wholesale",
        description: "Regular customer",
    },
    {
        srNo: 3,
        name: "Mark Brown",
        company: "Company C",
        address: "789 Pine St",
        city: "City C",
        state: "State C",
        country: "Country C",
        pin: "789012",
        jobTitle: "Executive",
        contactNo1: "345-678-9012",
        contactNo2: "",
        contactNo3: "345-678-9013",
        email1: "mark.brown@example.com",
        email2: "",
        contactNature: "Prospect",
        inquirySource: "Website",
        industry: "Manufacturing",
        description: "Potential lead",
    },
];

const ContactList: React.FC = () => {
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
        navigate("/stock/contact");
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
                <span className="ml-2 text-lg font-semibold">Contact List</span>
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
                                    "Company",
                                    "Address",
                                    "City",
                                    "State",
                                    "Country",
                                    "PIN",
                                    "Job Title",
                                    "ContactSupp No. 1",
                                    "ContactSupp No. 2",
                                    "ContactSupp No. 3",
                                    "Email 1",
                                    "Email 2",
                                    "ContactSupp Nature",
                                    "Inquiry Source",
                                    "Industry",
                                    "Description",
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
                                            {data.company}
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
                                            {data.jobTitle}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contactNo1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contactNo2}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contactNo3}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.email1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.email2}
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
                                            {data.description}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={17}
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

            {/* Filter Modal */}
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
                        <div className="max-h-[75vh] overflow-y-auto">
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
                            {/* Additional content */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Job Title
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
                                    Email
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
                                    Description
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

export default ContactList;

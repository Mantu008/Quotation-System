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

interface CustomerData {
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
    machine: string;
    consumption: string;
    email: string;
    competitor1: string;
    competitor2: string;
    customerClass: string;
    createdAt: string;
    createdBy: string;
}

const sampleData: CustomerData[] = [
    {
        srNo: 1,
        name: "John Doe",
        contacts: "1234567890",
        address: "123 Main St",
        city: "Springfield",
        state: "IL",
        country: "USA",
        pin: "62701",
        shippingName: "Jane Doe",
        shippingAddress: "456 Elm St",
        shippingCity: "Springfield",
        shippingState: "IL",
        shippingCountry: "USA",
        shippingPin: "62701",
        gstNo: "GST123456",
        owner: "Owner 1",
        code: "C001",
        contactNo1: "0987654321",
        contactNo2: "1122334455",
        description: "Regular customer",
        contactNature: "Business",
        inquirySource: "Website",
        machine: "Machine 1",
        consumption: "High",
        email: "john@example.com",
        competitor1: "Competitor A",
        competitor2: "Competitor B",
        customerClass: "Class A",
        createdAt: "2023-08-01",
        createdBy: "Admin",
    },
    {
        srNo: 2,
        name: "Alice Smith",
        contacts: "2345678901",
        address: "789 Oak St",
        city: "Lincoln",
        state: "NE",
        country: "USA",
        pin: "68508",
        shippingName: "Bob Smith",
        shippingAddress: "123 Pine St",
        shippingCity: "Lincoln",
        shippingState: "NE",
        shippingCountry: "USA",
        shippingPin: "68508",
        gstNo: "GST234567",
        owner: "Owner 2",
        code: "C002",
        contactNo1: "1234567890",
        contactNo2: "2345678901",
        description: "New customer",
        contactNature: "Business",
        inquirySource: "Referral",
        machine: "Machine 2",
        consumption: "Medium",
        email: "alice@example.com",
        competitor1: "Competitor C",
        competitor2: "Competitor D",
        customerClass: "Class B",
        createdAt: "2023-08-02",
        createdBy: "Admin",
    },
    {
        srNo: 3,
        name: "Michael Johnson",
        contacts: "3456789012",
        address: "456 Maple St",
        city: "Omaha",
        state: "NE",
        country: "USA",
        pin: "68102",
        shippingName: "Sarah Johnson",
        shippingAddress: "789 Cedar St",
        shippingCity: "Omaha",
        shippingState: "NE",
        shippingCountry: "USA",
        shippingPin: "68102",
        gstNo: "GST345678",
        owner: "Owner 3",
        code: "C003",
        contactNo1: "3456789012",
        contactNo2: "4567890123",
        description: "Potential customer",
        contactNature: "Business",
        inquirySource: "Social Media",
        machine: "Machine 3",
        consumption: "Low",
        email: "michael@example.com",
        competitor1: "Competitor E",
        competitor2: "Competitor F",
        customerClass: "Class C",
        createdAt: "2023-08-03",
        createdBy: "Admin",
    },
    {
        srNo: 4,
        name: "Emma Brown",
        contacts: "4567890123",
        address: "321 Birch St",
        city: "Des Moines",
        state: "IA",
        country: "USA",
        pin: "50309",
        shippingName: "Lucas Brown",
        shippingAddress: "654 Fir St",
        shippingCity: "Des Moines",
        shippingState: "IA",
        shippingCountry: "USA",
        shippingPin: "50309",
        gstNo: "GST456789",
        owner: "Owner 4",
        code: "C004",
        contactNo1: "5678901234",
        contactNo2: "6789012345",
        description: "Frequent buyer",
        contactNature: "Business",
        inquirySource: "Email",
        machine: "Machine 4",
        consumption: "High",
        email: "emma@example.com",
        competitor1: "Competitor G",
        competitor2: "Competitor H",
        customerClass: "Class A",
        createdAt: "2023-08-04",
        createdBy: "Admin",
    },
    {
        srNo: 5,
        name: "Liam Wilson",
        contacts: "5678901234",
        address: "987 Spruce St",
        city: "Cedar Rapids",
        state: "IA",
        country: "USA",
        pin: "52401",
        shippingName: "Olivia Wilson",
        shippingAddress: "159 Elm St",
        shippingCity: "Cedar Rapids",
        shippingState: "IA",
        shippingCountry: "USA",
        shippingPin: "52401",
        gstNo: "GST567890",
        owner: "Owner 5",
        code: "C005",
        contactNo1: "6789012345",
        contactNo2: "7890123456",
        description: "Loyal customer",
        contactNature: "Personal",
        inquirySource: "Website",
        machine: "Machine 5",
        consumption: "Medium",
        email: "liam@example.com",
        competitor1: "Competitor I",
        competitor2: "Competitor J",
        customerClass: "Class B",
        createdAt: "2023-08-05",
        createdBy: "Admin",
    },
];

const CustomerList: React.FC = () => {
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
        navigate("/manage/customer");
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
                    Customer List
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
                >
                    <FaPencilAlt />
                </button>
                <button
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
                    aria-label="Delete"
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
                                    "Machine",
                                    "Consumption",
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
                                            {data.customerClass}
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
                                        className="text-center py-4"
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
                    <div className="bg-white p-6 rounded-lg shadow-md w-11/12 max-w-lg relative overflow-y-auto max-h-[90vh]">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={handleCloseFilter}
                            aria-label="Close"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCity"
                                        name="shippingCity"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCity"
                                        name="shippingCity"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCity"
                                        name="shippingCity"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        State
                                    </label>
                                    <select
                                        id="shippingState"
                                        name="shippingState"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option>[SELECT]</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCity"
                                        name="shippingCity"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Pin
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCity"
                                        name="shippingCity"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Shipping Name
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCity"
                                        name="shippingCity"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Shipping Address
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCity"
                                        name="shippingCity"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="shippingCity"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Shipping City
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCity"
                                        name="shippingCity"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="shippingState"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Shipping State
                                    </label>
                                    <select
                                        id="shippingState"
                                        name="shippingState"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option>[SELECT]</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="shippingCountry"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Shipping Country
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingCountry"
                                        name="shippingCountry"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="shippingPin"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Shipping Pin
                                    </label>
                                    <input
                                        type="text"
                                        id="shippingPin"
                                        name="shippingPin"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="gst"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        GST
                                    </label>
                                    <input
                                        type="text"
                                        id="gst"
                                        name="gst"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="owner"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Owner
                                    </label>
                                    <input
                                        type="text"
                                        id="owner"
                                        name="owner"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="code"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Code
                                    </label>
                                    <input
                                        type="text"
                                        id="code"
                                        name="code"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contactNo"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Contact No
                                    </label>
                                    <input
                                        type="text"
                                        id="contactNo"
                                        name="contactNo"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        name="description"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contactNature"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Contact Nature
                                    </label>
                                    <select
                                        id="contactNature"
                                        name="contactNature"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option>[SELECT]</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="inquirySource"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Inquiry Source
                                    </label>
                                    <select
                                        id="inquirySource"
                                        name="inquirySource"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option>[SELECT]</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="industry"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Industry
                                    </label>
                                    <select
                                        id="industry"
                                        name="industry"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option>[SELECT]</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="machine"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Machine
                                    </label>
                                    <select
                                        id="machine"
                                        name="machine"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option>[SELECT]</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="competitor"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Competitor
                                    </label>
                                    <select
                                        id="competitor"
                                        name="competitor"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option>[SELECT]</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="class"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Class
                                    </label>
                                    <input
                                        type="text"
                                        id="class"
                                        name="class"
                                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </form>
                        </div>

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

export default CustomerList;

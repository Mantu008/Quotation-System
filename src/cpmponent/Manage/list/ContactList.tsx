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
    user: string;
    company: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pin: string;
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

// Sample data
const sampleData: TargetData[] = [
    {
        srNo: 1,
        user: "John Doe",
        company: "Company A",
        address: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA",
        pin: "10001",
        contactNo1: "123-456-7890",
        contactNo2: "098-765-4321",
        contactNo3: "555-555-5555",
        email1: "john@example.com",
        email2: "doe@example.com",
        contactNature: "Inquiry",
        inquirySource: "Website",
        industry: "Tech",
        description: "Interested in our products.",
    },
    {
        srNo: 2,
        user: "Jane Smith",
        company: "Company B",
        address: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        pin: "90001",
        contactNo1: "321-654-0987",
        contactNo2: "456-123-7890",
        contactNo3: "222-222-2222",
        email1: "jane@example.com",
        email2: "smith@example.com",
        contactNature: "Feedback",
        inquirySource: "Email",
        industry: "Retail",
        description: "Feedback on the recent purchase.",
    },
    {
        srNo: 3,
        user: "Tom Brown",
        company: "Company C",
        address: "789 Pine St",
        city: "Chicago",
        state: "IL",
        country: "USA",
        pin: "60601",
        contactNo1: "987-654-3210",
        contactNo2: "333-333-3333",
        contactNo3: "444-444-4444",
        email1: "tom@example.com",
        email2: "brown@example.com",
        contactNature: "Inquiry",
        inquirySource: "Referral",
        industry: "Finance",
        description: "Looking for financial advice.",
    },
];

const ContactList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filter, setFilter] = useState({
        user: "",
        company: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pin: "",
    });
    const navigate = useNavigate();

    const handleRowClick = (srNo: number) => {
        setSelectedRow(srNo);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/contact");
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleFilterChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        setIsFilterOpen(false);
    };

    // Filtered data based on user input
    const filteredData = sampleData.filter((data) => {
        return (
            (filter.user === "" ||
                data.user.toLowerCase().includes(filter.user.toLowerCase())) &&
            (filter.company === "" ||
                data.company
                    .toLowerCase()
                    .includes(filter.company.toLowerCase())) &&
            (filter.address === "" ||
                data.address
                    .toLowerCase()
                    .includes(filter.address.toLowerCase())) &&
            (filter.city === "" ||
                data.city.toLowerCase().includes(filter.city.toLowerCase())) &&
            (filter.state === "" ||
                data.state
                    .toLowerCase()
                    .includes(filter.state.toLowerCase())) &&
            (filter.country === "" ||
                data.country
                    .toLowerCase()
                    .includes(filter.country.toLowerCase())) &&
            (filter.pin === "" || data.pin.includes(filter.pin))
        );
    });

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
                                    "Company",
                                    "Address",
                                    "City",
                                    "State",
                                    "Country",
                                    "PIN",
                                    "Contact No. 1",
                                    "Contact No. 2",
                                    "Contact No. 3",
                                    "Email 1",
                                    "Email 2",
                                    "Contact Nature",
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
                            {filteredData.length > 0 ? (
                                filteredData.map((data) => (
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
                                            {data.user}
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
                                        colSpan={16}
                                        className="px-4 py-2 text-sm text-gray-700 text-center"
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
                    <div className="bg-white p-6 rounded shadow-md w-11/12 max-w-lg relative overflow-y-auto max-h-[90vh]">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                            onClick={handleCloseFilter}
                            aria-label="Close"
                        >
                            <FaTimes />
                        </button>
                        <h2 className="text-lg font-bold mb-4">
                            Filter Contacts
                        </h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                applyFilters();
                            }}
                        >
                            {Object.keys(filter).map((key) => (
                                <div key={key} className="mb-4">
                                    <label
                                        className="block text-sm font-medium text-gray-700"
                                        htmlFor={key}
                                    >
                                        {key.charAt(0).toUpperCase() +
                                            key.slice(1)}
                                    </label>
                                    <input
                                        type="text"
                                        name={key}
                                        id={key}
                                        value={
                                            filter[key as keyof typeof filter]
                                        }
                                        onChange={handleFilterChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        placeholder={`Filter by ${key}`}
                                    />
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition duration-200 w-full"
                            >
                                Apply Filters
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactList;

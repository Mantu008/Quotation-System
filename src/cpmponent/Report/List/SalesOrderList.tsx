import React, { useState } from "react";
import {
    FaFileExcel,
    FaFilter,
    FaSyncAlt,
    FaArrowLeft,
    FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PaymentData {
    srNo: number;
    createdBy: string;
    number: string;
    date: string;
    customer: string;
    createdFrom: string;
    numberWithoutTax: string;
    amountWithoutTax: number;
    tax: number;
    amount: number;
}

// Sample data
const sampleData: PaymentData[] = [
    {
        srNo: 1,
        createdBy: "John Doe",
        number: "INV12345",
        date: "2024-10-01",
        customer: "Customer A",
        createdFrom: "Online Portal",
        numberWithoutTax: "INV12345-NT",
        amountWithoutTax: 1000.0,
        tax: 200.5,
        amount: 1200.5,
    },
    {
        srNo: 2,
        createdBy: "Jane Smith",
        number: "INV54321",
        date: "2024-09-15",
        customer: "Customer B",
        createdFrom: "Mobile App",
        numberWithoutTax: "INV54321-NT",
        amountWithoutTax: 750.0,
        tax: 100.0,
        amount: 850.0,
    },
    {
        srNo: 3,
        createdBy: "Tom Brown",
        number: "INV98765",
        date: "2024-08-30",
        customer: "Customer C",
        createdFrom: "Website",
        numberWithoutTax: "INV98765-NT",
        amountWithoutTax: 1900.0,
        tax: 300.75,
        amount: 2200.75,
    },
    {
        srNo: 4,
        createdBy: "Alice Green",
        number: "INV65432",
        date: "2024-07-25",
        customer: "Customer D",
        createdFrom: "Phone Order",
        numberWithoutTax: "INV65432-NT",
        amountWithoutTax: 1250.0,
        tax: 200.0,
        amount: 1450.0,
    },
    {
        srNo: 5,
        createdBy: "Bob White",
        number: "INV87654",
        date: "2024-06-10",
        customer: "Customer E",
        createdFrom: "In-Person",
        numberWithoutTax: "INV87654-NT",
        amountWithoutTax: 1800.0,
        tax: 400.0,
        amount: 2200.0,
    },
];

const SalesOrderList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // const [filter, setFilter] = useState({ customer: "", paymentMethod: "" });
    const navigate = useNavigate();

    const [activeButton, setActiveButton] = useState(null); // state to track the clicked button

    // Handler for the button click
    const handleButtonClick = (button: any) => {
        setActiveButton(button);
    };

    const handleRowClick = (srNo: number) => {
        setSelectedRow(srNo);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    // const handleFilterChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    // ) => {
    //     setFilter({ ...filter, [e.target.name]: e.target.value });
    // };

    // // Filtered data based on user input
    // const filteredData = sampleData.filter((data) => {
    //     return (
    //         filter.customer === "" ||
    //         data.customer.toLowerCase().includes(filter.customer.toLowerCase())
    //     );
    // });

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
                    Sales Order List
                </span>
            </div>
            <div className="flex justify-end space-x-2 mb-4">
                <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    aria-label="Export to Excel"
                >
                    <FaFileExcel />
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
                                    "Created By",
                                    "Number",
                                    "Date",
                                    "Customer",
                                    "Created From",
                                    "Number",
                                    "Amount W/O Tax",
                                    "Tax",
                                    "Amount",
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
                                            {data.createdBy}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.number}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.date}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.customer}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.createdFrom}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.numberWithoutTax}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.amountWithoutTax}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.tax}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.amount}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={15}
                                        className="px-4 py-2 text-sm text-gray-500 text-center"
                                    >
                                        No data found.
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
                            <FaTimes className="text-xl" />
                        </button>

                        <div className="p-4 max-w-lg mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-semibold text-lg">
                                        Report By
                                    </span>
                                    <div className="flex space-x-1">
                                        <button
                                            className={`px-3 py-1 border rounded ${
                                                activeButton === "up"
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-200 border-gray-300 hover:bg-gray-300"
                                            }`}
                                            onClick={() =>
                                                handleButtonClick("up")
                                            }
                                        >
                                            Up
                                        </button>
                                        <button
                                            className={`px-3 py-1 border rounded ${
                                                activeButton === "down"
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-200 border-gray-300 hover:bg-gray-300"
                                            }`}
                                            onClick={() =>
                                                handleButtonClick("down")
                                            }
                                        >
                                            Down
                                        </button>
                                    </div>
                                </div>

                                {/* Scrollable section */}
                                <div className="h-48 overflow-y-auto border border-gray-200 p-2 rounded-lg">
                                    {/* Checkbox inputs */}
                                    <div>
                                        <input type="checkbox" id="customer" />
                                        <label
                                            htmlFor="customer"
                                            className="ml-2"
                                        >
                                            Customer
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="city" />
                                        <label htmlFor="city" className="ml-2">
                                            City
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="state" />
                                        <label htmlFor="state" className="ml-2">
                                            State
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="country" />
                                        <label
                                            htmlFor="country"
                                            className="ml-2"
                                        >
                                            Country
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="contactNature"
                                        />
                                        <label
                                            htmlFor="contactNature"
                                            className="ml-2"
                                        >
                                            Contact Nature
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="inquirySource"
                                        />
                                        <label
                                            htmlFor="inquirySource"
                                            className="ml-2"
                                        >
                                            Inquiry Source
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="industry" />
                                        <label
                                            htmlFor="industry"
                                            className="ml-2"
                                        >
                                            Industry
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="machine" />
                                        <label
                                            htmlFor="machine"
                                            className="ml-2"
                                        >
                                            Machine
                                        </label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="summary" />
                                        <label
                                            htmlFor="summary"
                                            className="ml-2"
                                        >
                                            Consumption
                                        </label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="summary" />
                                        <label
                                            htmlFor="summary"
                                            className="ml-2"
                                        >
                                            Class
                                        </label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="summary" />
                                        <label
                                            htmlFor="summary"
                                            className="ml-2"
                                        >
                                            User
                                        </label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="summary" />
                                        <label
                                            htmlFor="summary"
                                            className="ml-2"
                                        >
                                            Day
                                        </label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="summary" />
                                        <label
                                            htmlFor="summary"
                                            className="ml-2"
                                        >
                                            Month
                                        </label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="summary" />
                                        <label
                                            htmlFor="summary"
                                            className="ml-2"
                                        >
                                            Year
                                        </label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="summary" />
                                        <label
                                            htmlFor="summary"
                                            className="ml-2"
                                        >
                                            Product
                                        </label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="summary" />
                                        <label
                                            htmlFor="summary"
                                            className="ml-2"
                                        >
                                            Created From
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other fields */}
                        <div className="mb-4">
                            <div className="block mb-1 font-medium">
                                <input type="checkbox" id="summary" />
                                <label htmlFor="summary" className="ml-2">
                                    Summary
                                </label>
                            </div>

                            <label
                                htmlFor="customerSelect"
                                className="block mb-1 font-medium"
                            >
                                Customer
                            </label>
                            <select
                                id="customerSelect"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>[SELECT]</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="cityInput"
                                className="block mb-1 font-medium"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id="cityInput"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="stateSelect"
                                className="block mb-1 font-medium"
                            >
                                State
                            </label>
                            <select
                                id="stateSelect"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>[SELECT]</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="countryInput"
                                className="block mb-1 font-medium"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                id="countryInput"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="contactNatureSelect"
                                className="block mb-1 font-medium"
                            >
                                Contact Nature
                            </label>
                            <select
                                id="contactNatureSelect"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>[SELECT]</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="inquirySourceSelect"
                                className="block mb-1 font-medium"
                            >
                                Inquiry Source
                            </label>
                            <select
                                id="inquirySourceSelect"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>[SELECT]</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="industrySelect"
                                className="block mb-1 font-medium"
                            >
                                Industry
                            </label>
                            <select
                                id="industrySelect"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>[SELECT]</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="machineSelect"
                                className="block mb-1 font-medium"
                            >
                                Machine
                            </label>
                            <select
                                id="machineSelect"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>[SELECT]</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="consumptionInput"
                                className="block mb-1 font-medium"
                            >
                                Consumption
                            </label>
                            <input
                                type="text"
                                id="consumptionInput"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="classInput"
                                className="block mb-1 font-medium"
                            >
                                Class
                            </label>
                            <input
                                type="text"
                                id="classInput"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="userSelect"
                                className="block mb-1 font-medium"
                            >
                                User
                            </label>
                            <select
                                id="userSelect"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>[SELECT]</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="dateFromInput"
                                className="block mb-1 font-medium"
                            >
                                Date From
                            </label>
                            <input
                                type="date"
                                id="dateFromInput"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="dateFromInput"
                                className="block mb-1 font-medium"
                            >
                                Date To
                            </label>
                            <input
                                type="date"
                                id="dateFromInput"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
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

export default SalesOrderList;

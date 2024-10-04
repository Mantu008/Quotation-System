import React, { useState } from "react";
import {
    FaFilter,
    FaSyncAlt,
    FaArrowLeft,
    FaTimes,
    FaFileExcel,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PaymentData {
    srNo: number;
    createdBy: string;
    number: string;
    date: string;
    customer: string;
    amount: number;
    paymentAgainst: string;
    quoPiNo: string;
    customerBankName: string;
    paymentMethod: string;
    transactionNo: string;
    transactionDate: string;
    billNo: string;
    ourBankName: string;
    createdAt: string;
}

// Sample data
const sampleData: PaymentData[] = [
    {
        srNo: 1,
        createdBy: "John Doe",
        number: "INV12345",
        date: "2024-10-01",
        customer: "Customer A",
        amount: 1200.5,
        paymentAgainst: "Invoice 12345",
        quoPiNo: "Q123",
        customerBankName: "Bank of America",
        paymentMethod: "Wire Transfer",
        transactionNo: "TX123456789",
        transactionDate: "2024-10-02",
        billNo: "B123",
        ourBankName: "Chase",
        createdAt: "2024-10-01",
    },
    {
        srNo: 2,
        createdBy: "Jane Smith",
        number: "INV54321",
        date: "2024-09-15",
        customer: "Customer B",
        amount: 850.0,
        paymentAgainst: "Invoice 54321",
        quoPiNo: "P321",
        customerBankName: "Wells Fargo",
        paymentMethod: "Credit Card",
        transactionNo: "TX987654321",
        transactionDate: "2024-09-16",
        billNo: "B543",
        ourBankName: "Citibank",
        createdAt: "2024-09-15",
    },
    {
        srNo: 3,
        createdBy: "Tom Brown",
        number: "INV98765",
        date: "2024-08-30",
        customer: "Customer C",
        amount: 2200.75,
        paymentAgainst: "Invoice 98765",
        quoPiNo: "Q567",
        customerBankName: "HSBC",
        paymentMethod: "PayPal",
        transactionNo: "TX765432109",
        transactionDate: "2024-08-31",
        billNo: "B987",
        ourBankName: "Wells Fargo",
        createdAt: "2024-08-30",
    },
];

const TargetList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // const [filter, setFilter] = useState({ customer: "", paymentMethod: "" });
    const navigate = useNavigate();

    const handleRowClick = (srNo: number) => {
        setSelectedRow(srNo);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleCloseFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    // const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFilter({ ...filter, [e.target.name]: e.target.value });
    // };

    // // Filtered data based on user input
    // const filteredData = sampleData.filter((data) => {
    //     return (
    //         (filter.customer === "" ||
    //             data.customer
    //                 .toLowerCase()
    //                 .includes(filter.customer.toLowerCase())) &&
    //         (filter.paymentMethod === "" ||
    //             data.paymentMethod
    //                 .toLowerCase()
    //                 .includes(filter.paymentMethod.toLowerCase()))
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
                <span className="ml-2 text-lg font-semibold">Target List</span>
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
                                    "Amount",
                                    "Payment Against",
                                    "Quo/Pi No",
                                    "Customer Bank Name",
                                    "Payment Method",
                                    "Transaction No.",
                                    "Transaction Date",
                                    "Bill no.",
                                    "Our Bank Name",
                                    "Created At",
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
                                            {data.amount}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.paymentAgainst}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.quoPiNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.customerBankName}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.paymentMethod}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.transactionNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.transactionDate}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.billNo}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.ourBankName}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.createdAt}
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

                        <div className="p-4 max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                                Proforma Invoice Report
                            </h2>
                            <div className="mb-4">
                                <input
                                    type="checkbox"
                                    id="reportByUser"
                                    className="mr-2"
                                />
                                <label
                                    htmlFor="reportByUser"
                                    className="text-gray-700"
                                >
                                    Report By User
                                </label>
                            </div>

                            <div className="mb-4">
                                <span className="block text-gray-700 font-medium mb-2">
                                    Report Type
                                </span>
                                <div className="space-y-2">
                                    <div>
                                        <input
                                            type="radio"
                                            id="dailyReport"
                                            name="reportType"
                                            className="mr-2"
                                            defaultChecked
                                        />
                                        <label
                                            htmlFor="dailyReport"
                                            className="text-gray-700"
                                        >
                                            Daily Report
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="monthlyReport"
                                            name="reportType"
                                            className="mr-2"
                                        />
                                        <label
                                            htmlFor="monthlyReport"
                                            className="text-gray-700"
                                        >
                                            Monthly Report
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="quarterlyReport"
                                            name="reportType"
                                            className="mr-2"
                                        />
                                        <label
                                            htmlFor="quarterlyReport"
                                            className="text-gray-700"
                                        >
                                            Quarterly Report
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="yearlyReport"
                                            name="reportType"
                                            className="mr-2"
                                        />
                                        <label
                                            htmlFor="yearlyReport"
                                            className="text-gray-700"
                                        >
                                            Yearly Report
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="user"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    User
                                </label>
                                <select
                                    id="user"
                                    className="w-full border border-gray-300 rounded p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>[SELECT]</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="dateFrom"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Date From
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="dateFrom"
                                        className="w-full border border-gray-300 rounded p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                                    />
                                    <i className="fas fa-calendar-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="dateTo"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Date To
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="dateTo"
                                        className="w-full border border-gray-300 rounded p-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                                    />
                                    <i className="fas fa-calendar-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                                </div>
                            </div>
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

export default TargetList;

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
    contacts: string;
    address: string;
    city: string;
    state_name: string;
    country: string;
    pin: string;
    ship_name: string;
    ship_add: string;
    ship_city: string;
    ship_state_name: string;
    ship_country: string;
    ship_pin: string;
    gst_no: string;
    owner: string;
    code: string;
    contact_no1: string;
    contact_no2: string;
    desc: string;
    contact_nature_name: string;
    inq_src_name: string;
    industry_name: string;
    machine_name: string;
    consump: string;
    email: string;
    competitor_name_1: string;
    competitor_name_2: string;
    class_ud: string;
    created_at: string;
    created_by_user_name: string;
}

const CustomerList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [customerData, setCustomerData] = useState<TargetData[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchPaymentMethods = async () => {
            const paymentMethodsUrl = `${BASE_URL_PATH}/customers`;
            try {
                const response = await axios.get(paymentMethodsUrl);
                // Sort the fetched data by id in ascending order
                const sortedData = response.data.sort(
                    (a: TargetData, b: TargetData) => a.id - b.id
                );
                setCustomerData(sortedData); // Set state with sorted data
            } catch (error) {
                console.error("Error fetching payment methods:", error);
            }
        };

        fetchPaymentMethods();
    }, []);

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
                                    "Industry Name",
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
                            {customerData.length > 0 ? (
                                customerData.map((data, index) => (
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
                                            {data.contacts}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.address}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.city}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.state_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.country}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.pin}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.ship_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.ship_add}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.ship_city}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.ship_state_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.ship_country}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.ship_pin}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.gst_no}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.owner}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.code}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contact_no1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contact_no2}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.desc}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contact_nature_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.inq_src_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.industry_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.machine_name}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.consump}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.email}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.competitor_name_1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.competitor_name_2}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.class_ud}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.created_at}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.created_by_user_name}
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

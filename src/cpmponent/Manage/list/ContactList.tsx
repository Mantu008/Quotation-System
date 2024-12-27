import axios from "axios";
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

interface TargetData {
    id: number;
    name: string;
    customers: string;
    address: string;
    city: string;
    state_name: string;
    country: string;
    pin: string;
    job_title: string;
    contact_no1: string;
    contact_no2: string;
    contact_no3: string;
    email1: string;
    email2: string;
    contact_nature_name: string;
    inq_src_name: string;
    industry_name: string;
    desc: string;
}

// Sample data

const ContactList: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filter, setFilter] = useState({
        id: "",
        name: "",
        customers: "",
        address: "",
        city: "",
        state_name: "",
        country: "",
        pin: "",
        job_title: "",
        contact_no1: "",
        contact_no2: "",
        contact_no3: "",
        email1: "",
        email2: "",
        contact_nature_name: "",
        inq_src_name: "",
        industry_name: "",
        desc: "",
    });
    const [contacteData, setContactData] = useState<TargetData[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchContactList = async () => {
            const paymentMethodsUrl = `${BASE_URL_PATH}/contacts`;
            try {
                const response = await axios.get(paymentMethodsUrl);
                // Sort the fetched data by id in ascending order
                const sortedData = response.data.sort(
                    (a: TargetData, b: TargetData) => a.id - b.id
                );
                setContactData(sortedData); // Set state with sorted data
            } catch (error) {
                console.error("Error fetching payment methods:", error);
            }
        };

        fetchContactList();
    }, []);

    const handleRowClick = (id: number) => {
        setSelectedRow(id);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAddData = () => {
        navigate("/manage/contact");
    };
    const handleDeleteData = async () => {
        if (selectedRow !== null) {
            try {
                // Replace this URL with your actual delete endpoint
                const deleteUrl = `${BASE_URL_PATH}/contacts/${selectedRow}`;
                await axios.delete(deleteUrl);

                // Update the local state by removing the deleted row
                setContactData((prevData) =>
                    prevData.filter(
                        (contactData) => contactData.id !== selectedRow
                    )
                );

                // Clear the selection
                setSelectedRow(null);

                console.log(`Deleted row with ID: ${selectedRow}`);
            } catch (error) {
                console.error("Error deleting Item:", error);
            }
        }
    };

    const handleEditData = () => {
        if (selectedRow !== null) {
            navigate(`/manage/contact/${selectedRow}`);
        }
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
    // const filteredData = contacteData.filter((data) => {
    //     return (
    //         (filter.name === "" ||
    //             data.name.toLowerCase().includes(filter.name.toLowerCase())) &&
    //         (filter.industry_name === "" ||
    //             data.industry_name
    //                 .toLowerCase()
    //                 .includes(filter.industry_name.toLowerCase())) &&
    //         (filter.address === "" ||
    //             data.address
    //                 .toLowerCase()
    //                 .includes(filter.address.toLowerCase())) &&
    //         (filter.city === "" ||
    //             data.city.toLowerCase().includes(filter.city.toLowerCase())) &&
    //         (filter.state_name === "" ||
    //             data.state_name
    //                 .toLowerCase()
    //                 .includes(filter.state_name.toLowerCase())) &&
    //         (filter.country === "" ||
    //             data.country
    //                 .toLowerCase()
    //                 .includes(filter.country.toLowerCase())) &&
    //         (filter.pin === "" || data.pin.includes(filter.pin))
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
                    onClick={handleEditData} // Added edit functionality
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
                                    "Name",
                                    "Address",
                                    "City",
                                    "State",
                                    "Country",
                                    "PIN",
                                    "Job Title",
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
                            {contacteData.length > 0 ? (
                                contacteData.map((data, index) => (
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
                                            {data.job_title}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contact_no1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contact_no2}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.contact_no3}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.email1}
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-700">
                                            {data.email2}
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
                                            {data.desc}
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

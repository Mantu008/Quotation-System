import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL_PATH } from "../../../path"; // Adjust the path as necessary

const Bank: React.FC = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { id } = useParams(); // Get id from query parameters
    const [bankData, setBankData] = useState({
        name: "",
        acct_no: "",
        ifsc: "",
        branch: "",
        address: "",
    });

    useEffect(() => {
        // Fetch data only if `id` is present
        if (id) {
            const fetchBankData = async () => {
                const bankDataUrl = `${BASE_URL_PATH}/banks/${id}`;
                try {
                    const response = await axios.get(bankDataUrl);
                    const data = response.data[0];
                    setBankData({
                        name: data.name || "",
                        acct_no: data.acct_no || "",
                        ifsc: data.ifsc || "",
                        branch: data.branch || "",
                        address: data.address || "",
                    });
                } catch (error) {
                    console.error("Error fetching bank data:", error);
                    toast.error("Error fetching bank data.");
                }
            };

            fetchBankData();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBankData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveOrUpdate = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            if (id) {
                // Update API call
                const bankDataUrl = `${BASE_URL_PATH}/banks/${id}`;
                await axios.put(bankDataUrl, bankData);
                toast.success("Bank details updated successfully.");
            } else {
                // Insert API call
                await axios.post(`${BASE_URL_PATH}/banks`, bankData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                toast.success("Bank details saved successfully.");
            }
            navigate("/manage/bank/list"); // Redirect after saving or updating
        } catch (error) {
            toast.error("Error saving/updating bank details.");
            console.error("Error saving/updating bank details:", error);
        }
    };

    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Bank Details
            </h2>
            <form onSubmit={handleSaveOrUpdate}>
                {/* Name Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="name"
                        name="name" // Added name attribute
                        type="text"
                        placeholder="Enter your name"
                        value={bankData.name} // Bind input value to state
                        onChange={handleChange} // Handle input change
                        required
                    />
                </div>

                {/* Account Number Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="account-number"
                    >
                        Account Number
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="acct_no"
                        name="acct_no" // Added name attribute
                        type="text"
                        placeholder="Enter account number"
                        value={bankData.acct_no} // Bind input value to state
                        onChange={handleChange} // Handle input change
                        required
                    />
                </div>

                {/* IFSC Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="ifsc"
                    >
                        IFSC
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="ifsc"
                        name="ifsc" // Added name attribute
                        type="text"
                        placeholder="Enter IFSC code"
                        value={bankData.ifsc} // Bind input value to state
                        onChange={handleChange} // Handle input change
                        required
                    />
                </div>

                {/* Branch Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="branch"
                    >
                        Branch
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="branch"
                        name="branch" // Added name attribute
                        type="text"
                        placeholder="Enter branch name"
                        value={bankData.branch} // Bind input value to state
                        onChange={handleChange} // Handle input change
                        required
                    />
                </div>

                {/* Address Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="address"
                    >
                        Address
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="address"
                        name="address" // Added name attribute
                        type="text"
                        placeholder="Enter address"
                        value={bankData.address} // Bind input value to state
                        onChange={handleChange} // Handle input change
                        required
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full md:w-auto"
                        type="submit" // Trigger form submission
                    >
                        <i className="fas fa-check"></i>{" "}
                        {id ? "UPDATE" : "SAVE"}
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 mt-4 md:mt-0 w-full md:w-auto"
                        type="button"
                        onClick={() => navigate("/")} // Redirect to the home route
                    >
                        <i className="fas fa-times"></i> CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Bank;

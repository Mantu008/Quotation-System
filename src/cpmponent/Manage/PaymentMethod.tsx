import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams
import { BASE_URL_PATH } from "../../../path"; // Adjust the path as necessary
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const PaymentMethod: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const { id } = useParams(); // Get id from query parameters
    const [paymentData, setPaymentData] = useState({
        name: "",
    });

    useEffect(() => {
        // Fetch data only if `id` is present
        if (id) {
            const fetchPaymentData = async () => {
                const paymentDataUrl = `${BASE_URL_PATH}/payment-methods/${id}`;
                try {
                    const response = await axios.get(paymentDataUrl);
                    const data = response.data[0];
                    setPaymentData({
                        name: data.name || "",
                    });
                } catch (error) {
                    console.error("Error fetching payment method data:", error);
                    toast.error("Error fetching payment method data.");
                }
            };

            fetchPaymentData();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPaymentData((prevState) => ({
            ...prevState,
            name: value,
        }));
    };

    const handleSaveOrUpdate = async () => {
        try {
            if (id) {
                // Update API call
                const paymentDataUrl = `${BASE_URL_PATH}/payment-methods/${id}`;
                await axios.put(paymentDataUrl, paymentData);
                toast.success("Payment method updated successfully.");
            } else {
                // Insert API call
                await axios.post(
                    `${BASE_URL_PATH}/payment-methods`,
                    paymentData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                toast.success("Payment method saved successfully.");
            }
            navigate("/manage/paymentmethod/list"); // Redirect after saving or updating
        } catch (error) {
            toast.error("Error saving/updating payment method.");
            console.error("Error saving/updating payment method:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Payment Method
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter Payment Method Name"
                    value={paymentData.name} // Bind input value to state
                    onChange={handleChange} // Handle input change
                    required
                />
            </div>
            <div className="flex space-x-4 font-bold justify-center">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 transition duration-200"
                    type="button"
                    onClick={handleSaveOrUpdate} // Call save/update on click
                >
                    <i className="fas fa-check"></i> {id ? "UPDATE" : "SAVE"}
                </button>
                <button
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-800 transition duration-200"
                    onClick={() => navigate("/manage/paymentmethod/list")} // Redirect to /
                >
                    <i className="fas fa-times"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default PaymentMethod;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL_PATH } from "../../../path"; // Adjust the import path as needed
import toast from "react-hot-toast";

const DefaultOtherCharge: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>(); // Grabs the `id` from the URL params
    const paymentMethodsUrl = `${BASE_URL_PATH}/default-other-charges`;

    const [name, setName] = useState<string>(""); // Initialize with empty string
    const [amt, setAmt] = useState<string>(""); // Initialize with empty string

    // Fetch existing charge data if updating
    useEffect(() => {
        if (id) {
            const fetchChargeData = async () => {
                try {
                    const response = await axios.get(
                        `${paymentMethodsUrl}/${id}`
                    );
                    const { name, amt } = response.data[0];
                    setName(name); // Corrected line
                    setAmt(amt); // Correctly set amt here
                } catch (error) {
                    console.error("Error fetching charge data:", error);
                }
            };
            fetchChargeData();
        }
    }, [id]);

    const handleSaveOrUpdate = async () => {
        const chargeData = { name, amt };

        try {
            if (id) {
                // Update existing charge
                await axios.put(`${paymentMethodsUrl}/${id}`, chargeData);
                toast.success("Charge updated successfully.");
            } else {
                // Save new charge
                await axios.post(paymentMethodsUrl, chargeData);
                toast.success("Charge saved successfully.");
            }
            navigate("/manage/defaultothercharge/list"); // Redirect after save/update
        } catch (error: any) {
            toast.error("Error saving/updating charge:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {id ? "Update Other Charge" : "Default Other Charge"}
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700">
                    Amount
                </label>
                <input
                    type="text"
                    id="amount"
                    value={amt}
                    onChange={(e) => setAmt(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Amount"
                />
            </div>

            <div className="flex space-x-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={handleSaveOrUpdate}
                >
                    <i className="fas fa-check mr-2"></i>{" "}
                    {id ? "UPDATE" : "SAVE"}
                </button>
                <button
                    className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={() => navigate("/")}
                >
                    <i className="fas fa-times mr-2"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default DefaultOtherCharge;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL_PATH } from "../../../path";

const InquirySource: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [inquirySourceData, setInquirySourceData] = useState({
        name: "",
    });

    useEffect(() => {
        if (id) {
            const fetchInquirySourceData = async () => {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/inquiry-sources/${id}`
                    );
                    setInquirySourceData({ name: response.data[0].name || "" });
                } catch (error) {
                    console.error("Error fetching inquiry source data:", error);
                }
            };

            fetchInquirySourceData();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInquirySourceData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSaveOrUpdate = async () => {
        try {
            if (id) {
                // Update existing record
                await axios.put(
                    `${BASE_URL_PATH}/inquiry-sources/${id}`,
                    inquirySourceData
                );
                toast.success("Inquiry source updated successfully.");
            } else {
                // Create new record
                await axios.post(
                    `${BASE_URL_PATH}/inquiry-sources`,
                    inquirySourceData,
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );
                toast.success("Inquiry source saved successfully.");
            }
            navigate("/manage/inquirysource/list");
        } catch (error) {
            toast.error("Error saving/updating inquiry source.");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Inquiry Source
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={inquirySourceData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter Inquiry Source Name"
                    required
                />
            </div>
            <div className="flex space-x-4 font-bold justify-center">
                <button
                    onClick={handleSaveOrUpdate}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 transition duration-200"
                >
                    <i className={`fas fa-${id ? "edit" : "check"}`}></i>{" "}
                    {id ? "UPDATE" : "SAVE"}
                </button>
                <button
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-800 transition duration-200"
                    onClick={() => navigate("/manage/inquirysource/list")}
                >
                    <i className="fas fa-times"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default InquirySource;

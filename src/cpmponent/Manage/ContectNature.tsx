import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL_PATH } from "../../../path";

const ContectNature: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [contectNatureData, setContectNatureData] = useState({
        name: "",
    });

    useEffect(() => {
        if (id) {
            const fetchContectNatureData = async () => {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/contact-natures/${id}`
                    );
                    setContectNatureData({ name: response.data[0].name || "" });
                } catch (error) {
                    console.error("Error fetching Contect Nature data:", error);
                }
            };

            fetchContectNatureData();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setContectNatureData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSaveOrUpdate = async () => {
        try {
            if (id) {
                await axios.put(
                    `${BASE_URL_PATH}/contact-natures/${id}`,
                    contectNatureData
                );
                toast.success("Contect Nature updated successfully.");
            } else {
                await axios.post(
                    `${BASE_URL_PATH}/contact-natures`,
                    contectNatureData,
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );
                toast.success("Contect Nature saved successfully.");
            }
            navigate("/manage/contactnature/list");
        } catch (error) {
            toast.error("Error saving/updating Contect Nature.");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Contect Nature
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={contectNatureData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter Contect Nature Name"
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
                    onClick={() => navigate("/manage/contactnature/list")}
                >
                    <i className="fas fa-times"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default ContectNature;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL_PATH } from "../../../path";

const Competitor: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [competitorData, setCompetitorData] = useState({ name: "" });

    useEffect(() => {
        if (id) {
            const fetchCompetitorData = async () => {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/competitors/${id}`
                    );
                    setCompetitorData({ name: response.data[0].name || "" });
                } catch (error) {
                    console.error("Error fetching Competitor data:", error);
                }
            };
            fetchCompetitorData();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCompetitorData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSaveOrUpdate = async () => {
        try {
            if (id) {
                await axios.put(
                    `${BASE_URL_PATH}/competitors/${id}`,
                    competitorData
                );
                toast.success("Competitor updated successfully.");
            } else {
                await axios.post(
                    `${BASE_URL_PATH}/competitors`,
                    competitorData,
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );
                toast.success("Competitor saved successfully.");
            }
            navigate("/manage/competitor/list");
        } catch (error) {
            toast.error("Error saving/updating Competitor.");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Competitor
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={competitorData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter Competitor Name"
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
                    onClick={() => navigate("/manage/competitor/list")}
                >
                    <i className="fas fa-times"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default Competitor;

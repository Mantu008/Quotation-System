import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL_PATH } from "../../../path"; // Adjust path as necessary

const State: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [stateData, setStateData] = useState({
        name: "",
        code_name: "",
        code_no: "",
    });

    useEffect(() => {
        if (id) {
            const fetchStateData = async () => {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/states/${id}`
                    );
                    setStateData({
                        name: response.data[0].name || "",
                        code_name: response.data[0].code_name || "",
                        code_no: response.data[0].code_no || "",
                    });
                } catch (error) {
                    console.error("Error fetching State data:", error);
                }
            };
            fetchStateData();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setStateData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSaveOrUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await axios.put(`${BASE_URL_PATH}/states/${id}`, stateData);
                toast.success("State updated successfully.");
            } else {
                await axios.post(`${BASE_URL_PATH}/states`, stateData, {
                    headers: { "Content-Type": "application/json" },
                });
                toast.success("State saved successfully.");
            }
            navigate("/manage/state/list");
        } catch (error) {
            toast.error("Error saving/updating state.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Toaster />
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    State
                </h1>
                <form onSubmit={handleSaveOrUpdate}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={stateData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="codeName"
                        >
                            Code Name
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            id="code_name"
                            type="text"
                            placeholder="Enter code name"
                            value={stateData.code_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="codeNo"
                        >
                            Code No.
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            id="code_no"
                            type="text"
                            placeholder="Enter code number"
                            value={stateData.code_no}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
                            type="submit"
                        >
                            <i
                                className={`fas fa-${id ? "edit" : "check"}`}
                            ></i>{" "}
                            {id ? "UPDATE" : "SAVE"}
                        </button>
                        <button
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
                            type="button"
                            onClick={() => navigate("/manage/state/list")}
                        >
                            <i className="fas fa-times"></i> CANCEL
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default State;

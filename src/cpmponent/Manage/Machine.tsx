import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL_PATH } from "../../../path";

const Machine: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [machineData, setMachineData] = useState({
        name: "",
        // Add any other fields needed for a machine entry
    });

    useEffect(() => {
        if (id) {
            const fetchMachineData = async () => {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/machines/${id}`
                    );
                    const data = response.data[0];
                    setMachineData({
                        name: data.name || "",
                        // Populate other fields as needed
                    });
                } catch (error) {
                    console.error("Error fetching machine data:", error);
                    toast.error("Failed to fetch machine data.");
                }
            };

            fetchMachineData();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setMachineData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSaveOrUpdate = async () => {
        try {
            if (id) {
                await axios.put(`${BASE_URL_PATH}/machines/${id}`, machineData);
                toast.success("Machine updated successfully.");
            } else {
                await axios.post(`${BASE_URL_PATH}/machines`, machineData);
                toast.success("Machine saved successfully.");
            }
            navigate("/manage/machine/list");
        } catch (error: any) {
            toast.error("Error saving/updating machine data.");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Machine
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter Machine"
                    value={machineData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex items-center justify-center space-x-4 font-bold">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                    onClick={handleSaveOrUpdate}
                >
                    <i className={`fas fa-${id ? "edit" : "check"}`}></i>{" "}
                    {id ? "UPDATE" : "SAVE"}
                </button>
                <button
                    className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
                    onClick={() => navigate("/manage/machine/list")}
                >
                    <i className="fas fa-times"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default Machine;

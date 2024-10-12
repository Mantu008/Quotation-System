import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL_PATH } from "../../../path"; // Adjust the path as needed
import toast, { Toaster } from "react-hot-toast";

const BusnessInfoOther = () => {
    const { id } = useParams(); // Get the ID from URL parameters
    const navigate = useNavigate(); // Initialize useNavigate
    const [no, setNo] = useState("");
    const [info_key, setInfo_key] = useState("");
    const [info_val, setInfo_val] = useState("");
    const [is_in_quo, setIs_in_quo] = useState(false);
    const [is_in_pi, setIs_in_pi] = useState(false);

    // Fetch data if id exists
    useEffect(() => {
        const fetchBusinessData = async () => {
            if (id) {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/business-info-others/${id}`
                    );
                    const data = response.data[0];

                    // Assuming response data has the necessary fields
                    setNo(data.no ?? "");
                    setInfo_key(data.info_key ?? "");
                    setInfo_val(data.info_val ?? "");
                    setIs_in_quo(data.is_in_quo ?? false);
                    setIs_in_pi(data.is_in_pi ?? false);
                } catch (error) {
                    console.error("Error fetching business data:", error);
                    toast.error("Error fetching business data");
                }
            }
        };

        fetchBusinessData();
    }, [id]);

    // Handle save operation
    const handleSave = async () => {
        const businessData = {
            no,
            name: info_key,
            text: info_val,
            is_in_quo: is_in_quo ? 1 : 0,
            is_in_pi: is_in_pi ? 1 : 0,
        };
        console.log(businessData);

        try {
            if (id) {
                // Update existing data
                await axios.put(
                    `${BASE_URL_PATH}/business-info-others/${id}`,
                    businessData
                );
                toast.success("Business information updated successfully.");
            } else {
                // Create new data
                await axios.post(
                    `${BASE_URL_PATH}/business-info-others`,
                    businessData
                );
                toast.success("Business information saved successfully.");
            }
            navigate("/manage/businessinfooth/list"); // Redirect after successful save
        } catch (error) {
            console.error("Error saving business data:", error);
            toast.error("Error saving business data");
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Business Information
            </h2>
            <div className="mb-4">
                <label htmlFor="number" className="block text-gray-700">
                    Number
                </label>
                <input
                    type="text"
                    id="number"
                    value={no}
                    onChange={(e) => setNo(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Number"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={info_key}
                    onChange={(e) => setInfo_key(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Title"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="text" className="block text-gray-700">
                    Text
                </label>
                <textarea
                    id="text"
                    value={info_val}
                    onChange={(e) => setInfo_val(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Text"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={is_in_quo}
                        onChange={() => setIs_in_quo(!is_in_quo)}
                        className="form-checkbox h-4 w-4 text-gray-600"
                    />
                    <span className="ml-2 text-gray-700">In Quotation</span>
                </label>
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={is_in_pi}
                        onChange={() => setIs_in_pi(!is_in_pi)}
                        className="form-checkbox h-4 w-4 text-gray-600"
                    />
                    <span className="ml-2 text-gray-700">In PI</span>
                </label>
            </div>
            <div className="flex space-x-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={handleSave}
                >
                    <i className="fas fa-check mr-2"></i>{" "}
                    {id ? "UPDATE" : "SAVE"}
                </button>
                <button
                    className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={() => navigate("/")} // Redirect to /
                >
                    <i className="fas fa-times mr-2"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default BusnessInfoOther;

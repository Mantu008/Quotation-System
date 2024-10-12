import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL_PATH } from "../../../path";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Tax = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [taxData, setTaxData] = useState({
        name: "",
        cgst: "",
        sgst: "",
        igst: "",
    });

    useEffect(() => {
        // Fetch data only if `id` is present
        if (id) {
            const fetchTaxData = async () => {
                const taxDataUrl = `${BASE_URL_PATH}/gst-rates/${id}`;
                try {
                    const response = await axios.get(taxDataUrl);
                    const data = response.data[0];
                    setTaxData({
                        name: data.name || "",
                        cgst: data.cgst || "",
                        sgst: data.sgst || "",
                        igst: data.igst || "",
                    });
                } catch (error) {
                    console.error("Error fetching tax data:", error);
                }
            };

            fetchTaxData();
        }
    }, [id]);

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setTaxData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSaveOrUpdate = async () => {
        try {
            if (id) {
                // Update API call
                const taxDataUrl = `${BASE_URL_PATH}/gst-rates/${id}`;
                console.log(taxData);
                await axios.put(taxDataUrl, taxData);
                toast.success("Tax data updated successfully.");
            } else {
                // Insert API call
                await axios.post(`${BASE_URL_PATH}/gst-rates`, taxData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                toast.success("Tax data saved successfully.");
            }
            navigate("/manage/tax/list"); // Redirect after saving or updating
        } catch (error: any) {
            toast.error("Error saving/updating tax data:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Tax Information
            </h2>
            <form>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                    <label
                        className="block text-gray-700 text-sm font-bold w-full md:w-1/3 mb-2 md:mb-0"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full md:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        id="name"
                        type="text"
                        placeholder="Enter Tax Name"
                        value={taxData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                    <label
                        className="block text-gray-700 text-sm font-bold w-full md:w-1/3 mb-2 md:mb-0"
                        htmlFor="cgst"
                    >
                        CGST Rate
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full md:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cgst"
                        type="text"
                        placeholder="Enter CGST Rate"
                        value={taxData.cgst}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                    <label
                        className="block text-gray-700 text-sm font-bold w-full md:w-1/3 mb-2 md:mb-0"
                        htmlFor="sgst"
                    >
                        SGST Rate
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full md:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="sgst"
                        type="text"
                        placeholder="Enter SGST Rate"
                        value={taxData.sgst}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                    <label
                        className="block text-gray-700 text-sm font-bold w-full md:w-1/3 mb-2 md:mb-0"
                        htmlFor="igst"
                    >
                        IGST Rate
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full md:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="igst"
                        type="text"
                        placeholder="Enter IGST Rate"
                        value={taxData.igst}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                        type="button"
                        onClick={handleSaveOrUpdate}
                    >
                        <i className={`fas fa-${id ? "edit" : "check"}`}></i>{" "}
                        {id ? "UPDATE" : "SAVE"}
                    </button>
                    <button
                        className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        <i className="fas fa-times"></i> CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Tax;

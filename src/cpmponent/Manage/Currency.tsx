import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL_PATH } from "../../../path";
import toast, { Toaster } from "react-hot-toast";

const Currency = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currencyName, setCurrencyName] = useState("");
    const [currencySymbol, setCurrencySymbol] = useState("");
    const [isDefault, setIsDefault] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchCurrencyData = async () => {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/currencies/${id}`
                    );
                    const data = response.data;

                    // If `data` is an array, access `data[0]` properties
                    if (data && data.length > 0) {
                        setCurrencyName(data[0].name ?? "");
                        setCurrencySymbol(data[0].symbol ?? "");
                        setIsDefault(data[0].default ?? false);
                    } else {
                        console.error("No currency data found");
                    }
                } catch (error) {
                    console.error("Error fetching currency data:", error);
                }
            };

            fetchCurrencyData();
        }
    }, [id]);

    const handleSave = async () => {
        const currencyData = {
            name: currencyName,
            symbol: currencySymbol,
            is_default: isDefault ? 1 : 0,
        };

        try {
            console.log(currencyData);
            if (id) {
                await axios.put(
                    `${BASE_URL_PATH}/currencies/${id}`,
                    currencyData
                );
                toast.success("Currency updated successfully.");
            } else {
                await axios.post(`${BASE_URL_PATH}/currencies`, currencyData);
                toast.success("Currency saved successfully.");
            }
            navigate("/manage/currency/list");
        } catch (error: any) {
            toast.error("Error saving currency:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Currency
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={currencyName}
                    onChange={(e) => setCurrencyName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="symbol" className="block text-gray-700">
                    Symbol
                </label>
                <input
                    type="text"
                    id="symbol"
                    value={currencySymbol}
                    onChange={(e) => setCurrencySymbol(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Symbol"
                />
            </div>

            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={isDefault}
                        onChange={() => setIsDefault(!isDefault)}
                        className="form-checkbox h-4 w-4 text-gray-600"
                    />
                    <span className="ml-2 text-gray-700">Default</span>
                </label>
            </div>

            <div className="flex space-x-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={handleSave}
                >
                    <i className="fas fa-check"></i> {id ? "UPDATE" : "SAVE"}
                </button>
                <button
                    className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={() => navigate("/")}
                >
                    <i className="fas fa-times"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default Currency;

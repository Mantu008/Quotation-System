import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL_PATH } from "../../../../path";
import toast, { Toaster } from "react-hot-toast";

const ModelNumber = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [modelData, setModelData] = useState<any>({
        name: "",
        prefix: "",
        postfix: "",
        hsn_code: "",
        rate: "",
        category_id: "", // Add categoryId to your modelData
    });
    const [categories, setCategories] = useState<any[]>([]); // State for categories

    useEffect(() => {
        const fetchModelData = async () => {
            if (id) {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/product-models/${id}`
                    );
                    const data = response.data;

                    if (data && data.length > 0) {
                        setModelData({
                            name: data[0].name || "",
                            prefix: data[0].prefix || "",
                            postfix: data[0].postfix || "",
                            hsn_code: data[0].hsn_code || "",
                            rate: data[0].rate || "",
                            category_id: data[0].category_id || "", // Assuming the response has category_id
                        });
                    } else {
                        console.error("No model data found");
                    }
                } catch (error) {
                    console.error("Error fetching model data:", error);
                }
            }
        };

        fetchModelData();
    }, [id]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${BASE_URL_PATH}/categories`); // Adjust the endpoint as needed
                setCategories(response.data || []); // Assuming the response is an array of categories
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleSave = async () => {
        console.log(modelData);
        try {
            if (id) {
                await axios.put(
                    `${BASE_URL_PATH}/product-models/${id}`,
                    modelData
                );
                toast.success("Model updated successfully.");
            } else {
                await axios.post(`${BASE_URL_PATH}/product-models`, modelData);
                toast.success("Model saved successfully.");
            }
            navigate("/manage/modelnumber/list");
        } catch (error) {
            toast.error("Error saving model.");
            console.error("Error saving model:", error);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setModelData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Model Number
            </h2>

            <div className="mb-4">
                <label htmlFor="category_id" className="block text-gray-700">
                    Category
                </label>
                <select
                    id="category_id"
                    name="category_id"
                    value={modelData.category_id}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={modelData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Name"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="prefix" className="block text-gray-700">
                    Prefix
                </label>
                <input
                    type="text"
                    id="prefix"
                    name="prefix"
                    value={modelData.prefix}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Prefix"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="postfix" className="block text-gray-700">
                    Postfix
                </label>
                <input
                    type="text"
                    id="postfix"
                    name="postfix"
                    value={modelData.postfix}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Postfix"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="hsn_code" className="block text-gray-700">
                    HSN Code
                </label>
                <input
                    type="text"
                    id="hsn_code"
                    name="hsn_code"
                    value={modelData.hsn_code}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter HSN Code"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="rate" className="block text-gray-700">
                    Rate
                </label>
                <input
                    type="text"
                    id="rate"
                    name="rate"
                    value={modelData.rate}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Rate"
                />
            </div>

            <div className="flex space-x-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={handleSave}
                >
                    {id ? "UPDATE" : "SAVE"}
                </button>
                <button
                    className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={() => navigate("/manage/modelnumber/list")}
                >
                    CANCEL
                </button>
            </div>
        </div>
    );
};

export default ModelNumber;

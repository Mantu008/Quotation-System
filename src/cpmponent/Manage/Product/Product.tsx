import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL_PATH } from "../../../../path"; // Adjust as necessary
import toast, { Toaster } from "react-hot-toast";

const Product = () => {
    const { id } = useParams<{ id: string }>(); // Get 'id' from route params
    const navigate = useNavigate();

    const [productData, setProductData] = useState({
        category_id: "",
        name: "",
        model_no: "",
        hsn_code: "",
        rate: "",
        gst_rate_id: "", // Updated key as per the new structure
    });

    const [categories, setCategories] = useState<any[]>([]); // Categories from API
    const [gstRates, setGstRates] = useState<any[]>([]); // GST Rates from API

    // Fetch product data if id is present (for editing)
    useEffect(() => {
        const fetchProductData = async () => {
            if (id) {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/products/${id}`
                    );
                    const data = response.data[0];
                    if (data) {
                        setProductData({
                            category_id: data.category_id || "",
                            name: data.name || "",
                            model_no: data.model_no || "", // Adjusted to `model_no`
                            hsn_code: data.hsn_code || "", // Adjusted to `hsn_code`
                            rate: data.rate || "",
                            gst_rate_id: data.gst_rate_id || "", // Adjusted to `gst_rate_id`
                        });
                    }
                } catch (error) {
                    console.error("Error fetching product data:", error);
                }
            }
        };

        fetchProductData();
    }, [id]);

    // Fetch categories for the dropdown
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${BASE_URL_PATH}/categories`);
                setCategories(response.data || []);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    // Fetch GST Rates from the API (for dynamic options)
    useEffect(() => {
        const fetchGstRates = async () => {
            try {
                const response = await axios.get(`${BASE_URL_PATH}/gst-rates`); // Adjust the endpoint as needed
                setGstRates(response.data || []);
            } catch (error) {
                console.error("Error fetching GST rates:", error);
            }
        };

        fetchGstRates();
    }, []);

    // Handle saving or updating product
    const handleSave = async () => {
        try {
            if (id) {
                // Update existing product
                await axios.put(`${BASE_URL_PATH}/products/${id}`, productData);
                toast.success("Product updated successfully.");
            } else {
                // Save new product
                await axios.post(`${BASE_URL_PATH}/products`, productData);
                toast.success("Product saved successfully.");
            }
            navigate("/manage/product/list");
        } catch (error) {
            toast.error("Error saving product.");
            console.error("Error saving product:", error);
        }
    };

    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {id ? "Update Product" : "Add Product"}
            </h2>

            {/* Category Dropdown */}
            <div className="mb-4">
                <label htmlFor="category_id" className="block text-gray-700">
                    Category
                </label>
                <select
                    id="category_id"
                    name="category_id"
                    value={productData.category_id}
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

            {/* Product Name */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={productData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Product Name"
                />
            </div>

            {/* Model Number */}
            <div className="mb-4">
                <label htmlFor="model_no" className="block text-gray-700">
                    Model No.
                </label>
                <input
                    type="text"
                    id="model_no" // Adjusted to `model_no`
                    name="model_no" // Adjusted to `model_no`
                    value={productData.model_no}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Model Number"
                />
            </div>

            {/* HSN Code */}
            <div className="mb-4">
                <label htmlFor="hsn_code" className="block text-gray-700">
                    HSN Code
                </label>
                <input
                    type="text"
                    id="hsn_code" // Adjusted to `hsn_code`
                    name="hsn_code" // Adjusted to `hsn_code`
                    value={productData.hsn_code}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter HSN Code"
                />
            </div>

            {/* Rate */}
            <div className="mb-4">
                <label htmlFor="rate" className="block text-gray-700">
                    Rate
                </label>
                <input
                    type="text"
                    id="rate"
                    name="rate"
                    value={productData.rate}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Rate"
                />
            </div>

            {/* GST Rate Dropdown */}

            <div className="mb-4">
                <label htmlFor="gst_rate_id" className="block text-gray-700">
                    GST Rate
                </label>
                <select
                    id="gst_rate_id"
                    name="gst_rate_id"
                    value={productData.gst_rate_id}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select GST Rate</option>
                    {gstRates.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Save and Cancel Buttons */}
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
                    onClick={() => navigate("/manage/product/list")}
                >
                    CANCEL
                </button>
            </div>
        </div>
    );
};

export default Product;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams for route parameters
import { BASE_URL_PATH } from "../../../path"; // Adjust import based on your file structure
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Category: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const { id } = useParams(); // Get id from URL parameters
    const [categoryData, setCategoryData] = useState({
        name: "",
    });

    useEffect(() => {
        // Fetch category data if id is present
        if (id) {
            const fetchCategoryData = async () => {
                const categoryUrl = `${BASE_URL_PATH}/categories/${id}`;
                try {
                    const response = await axios.get(categoryUrl);
                    const data = response.data[0];
                    setCategoryData({
                        name: data.name || "",
                    });
                } catch (error) {
                    console.error("Error fetching category data:", error);
                }
            };

            fetchCategoryData();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCategoryData((prevState) => ({
            ...prevState,
            name: value,
        }));
    };

    const handleSaveOrUpdate = async () => {
        try {
            if (id) {
                // Update API call
                const categoryUrl = `${BASE_URL_PATH}/categories/${id}`;
                await axios.put(categoryUrl, categoryData);
                toast.success("Category updated successfully.");
            } else {
                // Insert API call
                await axios.post(`${BASE_URL_PATH}/categories`, categoryData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                toast.success("Category saved successfully.");
            }
            navigate("/manage/category/list"); // Redirect after saving or updating
        } catch (error: any) {
            toast.error(
                "Error saving/updating category data: " + error.message
            );
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <Toaster />
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Category
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter Category Name"
                    value={categoryData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex space-x-4 font-bold justify-center">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 transition duration-200"
                    onClick={handleSaveOrUpdate}
                >
                    <i className="fas fa-check"></i> {id ? "UPDATE" : "SAVE"}
                </button>
                <button
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-800 transition duration-200"
                    onClick={() => navigate("/manage/category/list")} // Redirect to category list
                >
                    <i className="fas fa-times"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default Category;

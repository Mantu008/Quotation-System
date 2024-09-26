import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    const handleSave = (e: any) => {
        e.preventDefault();
        // Handle save logic here
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-800">
                Contact
            </h2>
            <form onSubmit={handleSave}>
                {/* Updated grid to use auto-fit and minmax for equal width columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="jobTitle"
                            className="block mb-2 text-gray-700"
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            id="jobTitle"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact1"
                            className="block mb-2 text-gray-700"
                        >
                            Contact No 1
                        </label>
                        <input
                            type="text"
                            id="contact1"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact2"
                            className="block mb-2 text-gray-700"
                        >
                            Contact No 2
                        </label>
                        <input
                            type="text"
                            id="contact2"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact3"
                            className="block mb-2 text-gray-700"
                        >
                            Contact No 3
                        </label>
                        <input
                            type="text"
                            id="contact3"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email1"
                            className="block mb-2 text-gray-700"
                        >
                            Email 1
                        </label>
                        <input
                            type="email"
                            id="email1"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email2"
                            className="block mb-2 text-gray-700"
                        >
                            Email 2
                        </label>
                        <input
                            type="email"
                            id="email2"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="natureOfContact"
                            className="block mb-2 text-gray-700"
                        >
                            Nature of Contact
                        </label>
                        <select
                            id="natureOfContact"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        >
                            <option>[SELECT]</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="inquirySource"
                            className="block mb-2 text-gray-700"
                        >
                            Inquiry Source
                        </label>
                        <select
                            id="inquirySource"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        >
                            <option>[SELECT]</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="industry"
                            className="block mb-2 text-gray-700"
                        >
                            Industry
                        </label>
                        <select
                            id="industry"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        >
                            <option>[SELECT]</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="address"
                            className="block mb-2 text-gray-700"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="city"
                            className="block mb-2 text-gray-700"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="pin"
                            className="block mb-2 text-gray-700"
                        >
                            PIN
                        </label>
                        <input
                            type="text"
                            id="pin"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="state"
                            className="block mb-2 text-gray-700"
                        >
                            State
                        </label>
                        <select
                            id="state"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        >
                            <option>[SELECT]</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="country"
                            className="block mb-2 text-gray-700"
                        >
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div className="col-span-2">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200 h-32"
                        ></textarea>
                    </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-200"
                    >
                        <i className="fas fa-check mr-2"></i> SAVE
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-red-600 transition duration-200"
                    >
                        <i className="fas fa-times mr-2"></i> CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;

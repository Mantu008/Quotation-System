import { useNavigate } from "react-router-dom";

const Customer = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-800">
                Customer Details
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Customer Details */}
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Contact No 1
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Contact No 2
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Industry
                    </label>
                    <select className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>[SELECT]</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Inquiry Source
                    </label>
                    <select className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>[SELECT]</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Nature of Contact
                    </label>
                    <select className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>[SELECT]</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        City
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        PIN
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        State
                    </label>
                    <select className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>[SELECT]</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Country
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Button to Copy Above Details */}
                <div className="col-span-2">
                    <button
                        type="button"
                        className="mt-4 bg-gray-200 text-gray-700 p-2 md:p-3 rounded-lg hover:bg-gray-300 w-full transition duration-200 text-sm md:text-base"
                    >
                        Copy Above Details
                    </button>
                </div>

                {/* Shipping Information */}
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Shipping Name
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Shipping Address
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Shipping City
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Shipping PIN
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Shipping State
                    </label>
                    <select className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>[SELECT]</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Shipping Country
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        GST No
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Owner
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Code
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Description
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm md:text-base text-gray-700">
                        Machine
                    </label>
                    <select className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>[SELECT]</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 text-gray-700">
                        Consumption
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Email</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">
                        Competitor 1
                    </label>
                    <select className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>[SELECT]</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">
                        Competitor 2
                    </label>
                    <select className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>[SELECT]</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Class</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Save and Cancel Buttons */}
                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-400 text-white p-3 rounded-lg shadow-md hover:bg-gray-500 transition duration-200 transform hover:scale-105"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Customer;

import { useNavigate } from "react-router-dom"; // Import useNavigate

const Currency = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Currency
            </h2>
            <div className="mb-4">
                <label htmlFor="number" className="block text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">
                    Symbol
                </label>
                <input
                    type="text"
                    id="symbol"
                    className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Symbol"
                />
            </div>

            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-gray-600"
                    />
                    <span className="ml-2 text-gray-700">Default</span>
                </label>
            </div>

            <div className="flex space-x-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                >
                    <i className="fas fa-check "></i> SAVE
                </button>
                <button
                    className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
                    type="button"
                    onClick={() => navigate("/")} // Redirect to /
                >
                    <i className="fas fa-times "></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default Currency;

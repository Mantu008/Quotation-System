import { useNavigate } from "react-router-dom"; // Import useNavigate
import AddSpecification from "./AddSpecfication";

const ModelNumber: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCancel = () => {
        navigate("/"); // Redirect to /
        window.scrollTo(0, 0); // Ensure it scrolls after navigation
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Model Number</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Category</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Prefix</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Postfix</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">HSN Code</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Rate</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <AddSpecification />

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                <button className="bg-green-500 text-white p-2 rounded-md flex items-center justify-center transition hover:bg-green-600">
                    <span>SAVE</span>
                </button>
                <button
                    onClick={handleCancel} // Add the onClick handler
                    className="bg-red-500 text-white p-2 rounded-md flex items-center justify-center transition hover:bg-red-600"
                >
                    <span>CANCEL</span>
                </button>
            </div>
        </div>
    );
};

export default ModelNumber;

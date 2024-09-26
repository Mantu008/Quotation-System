import { useNavigate } from "react-router-dom";

const Target = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleCancel = () => {
        navigate("/"); // Redirect to the home page or "/" route
        window.scrollTo(0, 0); // Ensure it scrolls after navigation
    };

    return (
        <div className="flex justify-center items-center min-h-screen  p-4">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md border border-gray-200">
                <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Set Target
                </h1>

                <form>
                    {/* User Selection */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-base font-medium mb-1"
                            htmlFor="user"
                        >
                            User
                        </label>
                        <select
                            id="user"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        >
                            <option>[Select User]</option>
                            <option>User 1</option>
                            <option>User 2</option>
                        </select>
                    </div>

                    {/* From Month & Year */}
                    <div className="mb-4 grid grid-cols-2 gap-3">
                        <div>
                            <label
                                className="block text-gray-700 text-base font-medium mb-1"
                                htmlFor="from-month"
                            >
                                From Month
                            </label>
                            <input
                                type="text"
                                id="from-month"
                                placeholder="e.g. January"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-base font-medium mb-1"
                                htmlFor="from-year"
                            >
                                From Year
                            </label>
                            <input
                                type="text"
                                id="from-year"
                                placeholder="e.g. 2023"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* To Month & Year */}
                    <div className="mb-4 grid grid-cols-2 gap-3">
                        <div>
                            <label
                                className="block text-gray-700 text-base font-medium mb-1"
                                htmlFor="to-month"
                            >
                                To Month
                            </label>
                            <input
                                type="text"
                                id="to-month"
                                placeholder="e.g. December"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-base font-medium mb-1"
                                htmlFor="to-year"
                            >
                                To Year
                            </label>
                            <input
                                type="text"
                                id="to-year"
                                placeholder="e.g. 2023"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Amount */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-base font-medium mb-1"
                            htmlFor="amount"
                        >
                            Target Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            placeholder="Enter amount"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                    </div>

                    {/* Save/Cancel Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out text-sm"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out text-sm"
                            onClick={handleCancel} // Handle cancel click
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Target;

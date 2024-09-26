import AddProduct from "../PaymentReceved/AddProduct";
import Charge from "../PaymentReceved/Charge";
import { useNavigate } from "react-router-dom";

const Quotation: React.FC = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/", { replace: true });
        window.scrollTo(0, 0);
    };

    return (
        <div className="max-w-6xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md mt-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Quotation
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                    {[
                        "Date",
                        "Customer",
                        "Contact",
                        "Number",
                        "Reference Number",
                        "Reference Date",
                        "Inquiry Number",
                        "Inquiry Date",
                        "Currency",
                    ].map((label, index) => (
                        <div className="mb-4" key={index}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {label}
                            </label>
                            {label === "Currency" ? (
                                <select className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition duration-150">
                                    <option>INR</option>
                                </select>
                            ) : (
                                <input
                                    type={
                                        label.includes("Date") ? "date" : "text"
                                    }
                                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition duration-150"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition duration-150"
                            defaultValue="Cost Quotation"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Terms
                        </label>
                        <textarea
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition duration-150"
                            rows={4}
                            defaultValue="100% Advance"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Delivery Terms
                        </label>
                        <textarea
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition duration-150"
                            rows={4}
                            defaultValue="100% Payment before delivery"
                        ></textarea>
                    </div>
                </div>
            </div>

            <AddProduct />
            <div className="my-6">
                <Charge />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {["Total", "Round Off", "Amount Payable"].map(
                    (label, index) => (
                        <div key={index} className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {label}
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition duration-150"
                            />
                        </div>
                    )
                )}
            </div>

            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150">
                    Save
                </button>
                <button
                    className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-lg transition duration-150"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Quotation;

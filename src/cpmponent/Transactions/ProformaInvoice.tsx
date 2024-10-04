import { FaArrowLeft } from "react-icons/fa";
import AddProduct from "./PaymentReceved/AddProduct";
import Charge from "./PaymentReceved/Charge";
import { useNavigate } from "react-router-dom";

const ProformaInvoice: React.FC = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/", { replace: true }); // Corrected `navigate` call
        window.scrollTo(0, 0); // Ensure it scrolls after navigation
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded shadow-md mt-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleBackClick}
                    aria-label="Back"
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                {"  "}
                ProformaInvoice
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                    {/* Form Fields */}
                    {[
                        "Date",
                        "Quotation No.",
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
                            <label className="block text-gray-700 font-medium mb-1">
                                {label}
                            </label>
                            {label === "Currency" ? (
                                <select className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-150">
                                    <option>INR</option>
                                </select>
                            ) : (
                                <input
                                    type={
                                        label.includes("Date") ? "date" : "text"
                                    }
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="col-span-1">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                            defaultValue="Proforma Invoice"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Payment Terms
                        </label>
                        <textarea
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                            rows={4}
                            defaultValue="100% Advance"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Delivery Terms
                        </label>
                        <textarea
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                            rows={4}
                            defaultValue="100% Payment before delivery"
                        ></textarea>
                    </div>
                </div>
            </div>

            <AddProduct />
            <br />
            <Charge />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-6">
                {["Total", "Round Off", "Amount Payable"].map(
                    (label, index) => (
                        <div key={index} className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">
                                {label}
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                            />
                        </div>
                    )
                )}
            </div>

            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150">
                    Save
                </button>
                <button
                    className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded transition duration-150"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ProformaInvoice;

import AddOtherDetail from "./AddOtherDetail";

const Product: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product</h1>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <label htmlFor="category" className="col-span-1 self-center">
                    Category
                </label>
                <select
                    id="category"
                    className="col-span-2 border border-gray-300 rounded p-2"
                >
                    <option value="">Select a category</option>
                </select>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <label htmlFor="name" className="col-span-1 self-center">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter product name"
                    className="col-span-2 border border-gray-300 rounded p-2"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <label htmlFor="modelNo" className="col-span-1 self-center">
                    Model No.
                </label>
                <input
                    id="modelNo"
                    type="text"
                    placeholder="Enter model number"
                    className="col-span-2 border border-gray-300 rounded p-2"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <label htmlFor="hsnCode" className="col-span-1 self-center">
                    HSN Code
                </label>
                <input
                    id="hsnCode"
                    type="text"
                    placeholder="Enter HSN code"
                    className="col-span-2 border border-gray-300 rounded p-2"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <label htmlFor="rate" className="col-span-1 self-center">
                    Rate
                </label>
                <input
                    id="rate"
                    type="text"
                    placeholder="Enter rate"
                    className="col-span-2 border border-gray-300 rounded p-2"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <label htmlFor="gstRate" className="col-span-1 self-center">
                    GST Rate
                </label>
                <select
                    id="gstRate"
                    className="col-span-2 border border-gray-300 rounded p-2"
                >
                    <option value="">Select GST rate</option>
                </select>
            </div>
            <hr className="my-4" />
            <AddOtherDetail />
        </div>
    );
};

export default Product;

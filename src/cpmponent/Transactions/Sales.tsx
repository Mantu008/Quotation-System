import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sales: React.FC = () => {
    const [date, setDate] = useState("");
    const [customer, setCustomer] = useState("");
    const [number, setNumber] = useState("");
    const [targetDeliveryDate, setTargetDeliveryDate] = useState("");
    const [actualDeliveryDate, setActualDeliveryDate] = useState("");
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState<
        {
            product: string;
            modelNo: string;
            quantity: number;
            rate: number;
            amount: number;
        }[]
    >([]);
    const navigate = useNavigate();

    useEffect(() => {
        calculateTotal();
    }, [products]);

    const handleAddProduct = () => {
        const newProduct = {
            product: "",
            modelNo: "",
            quantity: 0,
            rate: 0,
            amount: 0,
        };
        setProducts([...products, newProduct]);
    };

    const handleDeleteProduct = (index: number) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    const handleProductChange = (
        index: number,
        field: string,
        value: string | number
    ) => {
        const updatedProducts = [...products];
        updatedProducts[index] = {
            ...updatedProducts[index],
            [field]:
                field === "quantity" || field === "rate"
                    ? parseFloat(value as string) || 0
                    : value,
        };
        updatedProducts[index].amount =
            updatedProducts[index].quantity * updatedProducts[index].rate;
        setProducts(updatedProducts);
    };

    const calculateTotal = () => {
        const totalAmount = products.reduce(
            (acc, product) => acc + product.amount,
            0
        );
        setTotal(totalAmount);
    };

    const handleSubmit = () => {
        console.log("Form data:", {
            date,
            customer,
            number,
            targetDeliveryDate,
            actualDeliveryDate,
            products,
            total,
        });
        // Add form submission logic here
    };

    const handleCancel = () => {
        navigate("/", { replace: true }); // Corrected `navigate` call
        window.scrollTo(0, 0); // Ensure it scrolls after navigation
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="container mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
            {/* Sales Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleBackClick}
                    aria-label="Back"
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                {"  "}
                Sales
            </h1>

            {/* Form fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                    <label
                        htmlFor="date"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>

                <div>
                    <label
                        htmlFor="customer"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Customer:
                    </label>
                    <select
                        id="customer"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    >
                        <option value="">Select Customer</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="number"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Number:
                    </label>
                    <input
                        type="text"
                        id="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>

                <div>
                    <label
                        htmlFor="targetDeliveryDate"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Target Delivery Date:
                    </label>
                    <input
                        type="date"
                        id="targetDeliveryDate"
                        value={targetDeliveryDate}
                        onChange={(e) => setTargetDeliveryDate(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>

                <div>
                    <label
                        htmlFor="actualDeliveryDate"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Actual Delivery Date:
                    </label>
                    <input
                        type="date"
                        id="actualDeliveryDate"
                        value={actualDeliveryDate}
                        onChange={(e) => setActualDeliveryDate(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    />
                </div>
            </div>

            {/* Product Table */}
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">
                Products
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-xs sm:text-sm">
                            <th className="border p-2 text-left">Product</th>
                            <th className="border p-2 text-left">Model No</th>
                            <th className="border p-2 text-left">Quantity</th>
                            <th className="border p-2 text-left">Rate</th>
                            <th className="border p-2 text-left">Amount</th>
                            <th className="border p-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="border-t text-xs sm:text-sm"
                            >
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        value={product.product}
                                        onChange={(e) =>
                                            handleProductChange(
                                                index,
                                                "product",
                                                e.target.value
                                            )
                                        }
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        value={product.modelNo}
                                        onChange={(e) =>
                                            handleProductChange(
                                                index,
                                                "modelNo",
                                                e.target.value
                                            )
                                        }
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="border p-2">
                                    <input
                                        // type="number"
                                        value={product.quantity}
                                        onChange={(e) =>
                                            handleProductChange(
                                                index,
                                                "quantity",
                                                parseFloat(e.target.value)
                                            )
                                        }
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="border p-2">
                                    <input
                                        // type="number"
                                        value={product.rate}
                                        onChange={(e) =>
                                            handleProductChange(
                                                index,
                                                "rate",
                                                parseFloat(e.target.value)
                                            )
                                        }
                                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="border p-2 text-right">
                                    {product.amount}
                                </td>
                                <td className="border p-2">
                                    <button
                                        onClick={() =>
                                            handleDeleteProduct(index)
                                        }
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs sm:text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button
                onClick={handleAddProduct}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full sm:w-auto"
            >
                Add Product
            </button>

            {/* Total and Action Buttons */}
            <div className="mt-6">
                <label
                    htmlFor="total"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Total:
                </label>
                <input
                    type="text"
                    id="total"
                    value={total}
                    readOnly
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
                <button
                    onClick={handleSubmit}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
                >
                    SAVE
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
                    onClick={handleCancel}
                >
                    CANCEL
                </button>
            </div>
        </div>
    );
};

export default Sales;

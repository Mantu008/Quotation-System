import React, { useState } from "react";

interface ChargeItem {
    id: number;
    name: string;
    rate?: number; // Added 'rate' field for tax
    amount: number;
}

const Charge = () => {
    const [isDiscountChecked, setIsDiscountChecked] = useState(false);
    const [charges, setCharges] = useState<ChargeItem[]>([]);
    const [taxes, setTaxes] = useState<ChargeItem[]>([]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDiscountChecked(e.target.checked);
    };

    const handleAddCharge = () => {
        const newCharge: ChargeItem = {
            id: Date.now(),
            name: "",
            amount: 0,
        };
        setCharges([...charges, newCharge]);
    };

    const handleAddTax = () => {
        const newTax: ChargeItem = {
            id: Date.now(),
            name: "",
            rate: 0,
            amount: 0,
        };
        setTaxes([...taxes, newTax]);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: number,
        type: "charge" | "tax",
        field: "name" | "rate" | "amount"
    ) => {
        const newList = (type === "charge" ? charges : taxes).map((item) =>
            item.id === id
                ? {
                      ...item,
                      [field]:
                          field === "amount" || field === "rate"
                              ? +e.target.value
                              : e.target.value,
                  }
                : item
        );

        type === "charge" ? setCharges(newList) : setTaxes(newList);
    };

    const handleRemoveItem = (id: number, type: "charge" | "tax") => {
        const newList = (type === "charge" ? charges : taxes).filter(
            (item) => item.id !== id
        );

        type === "charge" ? setCharges(newList) : setTaxes(newList);
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <div className="mb-4 flex items-center">
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={isDiscountChecked}
                    onChange={handleCheckboxChange}
                />
                <label className="text-gray-700">Add Discount</label>
            </div>

            {/* Show input fields only when checkbox is checked */}
            {isDiscountChecked && (
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded"
                        placeholder="Discount Amount"
                    />
                    <select className="border border-gray-300 p-2 rounded">
                        <option>[SELECT]</option>
                        <option>Percentage</option>
                        <option>Fixed Amount</option>
                    </select>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded"
                        placeholder="Other Details"
                    />
                </div>
            )}

            <div className="mb-4">
                <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full sm:w-auto"
                    onClick={handleAddCharge}
                >
                    Add Other Charge
                </button>
            </div>

            {charges.length > 0 && (
                <div className="mb-4 overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">
                                    Charge Name
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Amount
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {charges.map((charge) => (
                                <tr key={charge.id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            value={charge.name}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    charge.id,
                                                    "charge",
                                                    "name"
                                                )
                                            }
                                            className="border border-gray-300 p-1 rounded w-full"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="number"
                                            value={charge.amount}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    charge.id,
                                                    "charge",
                                                    "amount"
                                                )
                                            }
                                            className="border border-gray-300 p-1 rounded w-full"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            onClick={() =>
                                                handleRemoveItem(
                                                    charge.id,
                                                    "charge"
                                                )
                                            }
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="mb-4">
                <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full sm:w-auto"
                    onClick={handleAddTax}
                >
                    Add Tax
                </button>
            </div>

            {taxes.length > 0 && (
                <div className="mb-4 overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">
                                    Tax Name
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Rate (%)
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Amount
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {taxes.map((tax) => (
                                <tr key={tax.id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="text"
                                            value={tax.name}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    tax.id,
                                                    "tax",
                                                    "name"
                                                )
                                            }
                                            className="border border-gray-300 p-1 rounded w-full"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="number"
                                            value={tax.rate}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    tax.id,
                                                    "tax",
                                                    "rate"
                                                )
                                            }
                                            className="border border-gray-300 p-1 rounded w-full"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="number"
                                            value={tax.amount}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    tax.id,
                                                    "tax",
                                                    "amount"
                                                )
                                            }
                                            className="border border-gray-300 p-1 rounded w-full"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            onClick={() =>
                                                handleRemoveItem(tax.id, "tax")
                                            }
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Charge;

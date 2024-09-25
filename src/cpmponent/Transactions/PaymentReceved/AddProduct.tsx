import React, { useState } from "react";

interface ProductSpecification {
    name: string;
    value: string;
}

interface Product {
    category: string;
    product: string;
    modelNumber: string;
    hsnCode: string;
    quantity: number;
    rate: number;
    discount: number;
    amount: number;
    specifications: ProductSpecification[];
}

interface SectionField {
    name: string;
    value: string;
}

interface Section {
    id: number;
    heading: string;
    fields: SectionField[];
}

const AddProduct: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [sections, setSections] = useState<Section[]>([]);

    // Handle adding a new product
    const handleAddProduct = () => {
        setProducts([
            ...products,
            {
                category: "",
                product: "",
                modelNumber: "",
                hsnCode: "",
                quantity: 1,
                rate: 0,
                discount: 0,
                amount: 0,
                specifications: [],
            },
        ]);
    };

    // Handle input change for product details
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
        field: keyof Product
    ) => {
        const newProducts = [...products];
        newProducts[index][field] = e.target.value;
        setProducts(newProducts);
    };

    // Handle removing a product
    const handleRemoveProduct = (index: number) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    // Handle adding a specification
    const handleAddSpecification = (index: number) => {
        const newProducts = [...products];
        newProducts[index].specifications.push({ name: "", value: "" });
        setProducts(newProducts);
    };

    // Handle specification change
    const handleSpecificationChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        productIndex: number,
        specIndex: number,
        field: keyof ProductSpecification
    ) => {
        const newProducts = [...products];
        newProducts[productIndex].specifications[specIndex][field] =
            e.target.value;
        setProducts(newProducts);
    };

    // Handle removing a specification
    const handleRemoveSpecification = (
        productIndex: number,
        specIndex: number
    ) => {
        const newProducts = [...products];
        newProducts[productIndex].specifications = newProducts[
            productIndex
        ].specifications.filter((_, i) => i !== specIndex);
        setProducts(newProducts);
    };

    // Adding a section
    const addSection = () => {
        setSections([
            ...sections,
            {
                id: Date.now(),
                heading: "",
                fields: [],
            },
        ]);
    };

    // Handle heading change
    const handleHeadingChange = (sectionId: number, value: string) => {
        const newSections = sections.map((section) =>
            section.id === sectionId ? { ...section, heading: value } : section
        );
        setSections(newSections);
    };

    // Remove a section
    const removeSection = (sectionId: number) => {
        setSections(sections.filter((section) => section.id !== sectionId));
    };

    // Handle adding a field
    const addField = (sectionId: number) => {
        const newSections = sections.map((section) =>
            section.id === sectionId
                ? {
                      ...section,
                      fields: [...section.fields, { name: "", value: "" }],
                  }
                : section
        );
        setSections(newSections);
    };

    // Handle field change
    const handleFieldChange = (
        sectionId: number,
        fieldIndex: number,
        field: keyof SectionField,
        value: string
    ) => {
        const newSections = sections.map((section) => {
            if (section.id === sectionId) {
                const newFields = section.fields.map((f, i) =>
                    i === fieldIndex ? { ...f, [field]: value } : f
                );
                return { ...section, fields: newFields };
            }
            return section;
        });
        setSections(newSections);
    };

    // Remove a field
    const removeField = (sectionId: number, fieldIndex: number) => {
        const newSections = sections.map((section) =>
            section.id === sectionId
                ? {
                      ...section,
                      fields: section.fields.filter((_, i) => i !== fieldIndex),
                  }
                : section
        );
        setSections(newSections);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
            <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition duration-200"
            >
                Add Product
            </button>

            <table className="w-full border-collapse mb-4">
                <thead className="bg-gray-200">
                    <tr>
                        {[
                            "Category",
                            "Product",
                            "Model Number",
                            "HSN Code",
                            "Quantity",
                            "Rate",
                            "Discount",
                            "Amount",
                            "Actions",
                        ].map((header) => (
                            <th
                                key={header}
                                className="px-2 py-1 border text-left text-sm md:text-base"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            {Object.keys(product)
                                .filter(
                                    (field) =>
                                        field !== "specifications" &&
                                        field !== "amount"
                                )
                                .map((field) => (
                                    <td key={field} className="border">
                                        <input
                                            type={
                                                field === "quantity" ||
                                                field === "rate" ||
                                                field === "discount"
                                                    ? "number"
                                                    : "text"
                                            }
                                            value={
                                                product[field as keyof Product]
                                            }
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    index,
                                                    field as keyof Product
                                                )
                                            }
                                            className="border p-2 w-full rounded"
                                        />
                                    </td>
                                ))}
                            <td className="border">
                                <input
                                    type="number"
                                    value={product.amount}
                                    className="border p-2 w-full rounded"
                                    disabled
                                />
                            </td>
                            <td className="border">
                                <button
                                    onClick={() => handleRemoveProduct(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {products.map((product, index) => (
                <div key={index} className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">
                        Product {index + 1} Specifications
                    </h3>
                    <button
                        onClick={() => handleAddSpecification(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600 transition duration-200"
                    >
                        Add Specification
                    </button>
                    <ul className="space-y-2">
                        {product.specifications.map((spec, specIndex) => (
                            <li
                                key={specIndex}
                                className="flex flex-col md:flex-row items-start md:items-center space-x-2"
                            >
                                <input
                                    type="text"
                                    value={spec.name}
                                    placeholder="Specification Name"
                                    onChange={(e) =>
                                        handleSpecificationChange(
                                            e,
                                            index,
                                            specIndex,
                                            "name"
                                        )
                                    }
                                    className="border border-gray-300 p-2 rounded w-full md:w-1/2"
                                />
                                <input
                                    type="text"
                                    value={spec.value}
                                    placeholder="Specification Value"
                                    onChange={(e) =>
                                        handleSpecificationChange(
                                            e,
                                            index,
                                            specIndex,
                                            "value"
                                        )
                                    }
                                    className="border border-gray-300 p-2 rounded w-full md:w-1/2"
                                />
                                <button
                                    onClick={() =>
                                        handleRemoveSpecification(
                                            index,
                                            specIndex
                                        )
                                    }
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="font-semibold text-lg mb-2">
                        Product {index + 1} Other Detail
                    </h3>
                    <button
                        onClick={addSection}
                        className="bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600 transition duration-200"
                    >
                        Add Other Detail
                    </button>

                    {/* Render dynamic sections */}
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="my-4 border p-4 rounded shadow"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <input
                                    type="text"
                                    placeholder="Heading"
                                    value={section.heading}
                                    onChange={(e) =>
                                        handleHeadingChange(
                                            section.id,
                                            e.target.value
                                        )
                                    }
                                    className="border p-2 rounded w-full mr-2"
                                />
                                <button
                                    onClick={() => removeSection(section.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Remove Section
                                </button>
                            </div>

                            <button
                                onClick={() => addField(section.id)}
                                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
                            >
                                Add Field
                            </button>

                            {section.fields.map((field, fieldIndex) => (
                                <div
                                    key={fieldIndex}
                                    className="flex flex-col md:flex-row items-start mt-2"
                                >
                                    <input
                                        type="text"
                                        placeholder="Field Name"
                                        value={field.name}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                section.id,
                                                fieldIndex,
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        className="border p-2 rounded w-full md:w-1/2 mr-2"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Field Value"
                                        value={field.value}
                                        onChange={(e) =>
                                            handleFieldChange(
                                                section.id,
                                                fieldIndex,
                                                "value",
                                                e.target.value
                                            )
                                        }
                                        className="border p-2 rounded w-full md:w-1/2 mr-2"
                                    />
                                    <button
                                        onClick={() =>
                                            removeField(section.id, fieldIndex)
                                        }
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                                    >
                                        Remove Field
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AddProduct;

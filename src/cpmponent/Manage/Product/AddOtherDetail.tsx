import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define types for Specification, Section, Field, and Product
interface Specification {
    name: string;
    value: string;
}

interface Field {
    name: string;
    value: string;
}

interface Section {
    id: number;
    heading: string;
    fields: Field[];
}

interface Product {
    specifications: Specification[];
}

const AddOtherDetail: React.FC = () => {
    const [sections, setSections] = useState<Section[]>([]);
    const [products, setProducts] = useState<Product[]>([
        { specifications: [] },
    ]);
    const navigate = useNavigate(); // Hook for navigation

    const handleAddSpecification = (productIndex: number) => {
        const updatedProducts = [...products];
        updatedProducts[productIndex].specifications.push({
            name: "",
            value: "",
        });
        setProducts(updatedProducts);
    };

    const handleSpecificationChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        productIndex: number,
        specIndex: number,
        field: "name" | "value"
    ) => {
        const updatedProducts = [...products];
        updatedProducts[productIndex].specifications[specIndex][field] =
            e.target.value;
        setProducts(updatedProducts);
    };

    const handleRemoveSpecification = (
        productIndex: number,
        specIndex: number
    ) => {
        const updatedProducts = [...products];
        updatedProducts[productIndex].specifications.splice(specIndex, 1);
        setProducts(updatedProducts);
    };

    const addSection = () => {
        const newSection: Section = {
            id: Date.now(),
            heading: "",
            fields: [],
        };
        setSections([...sections, newSection]);
    };

    const removeSection = (sectionId: number) => {
        setSections(sections.filter((section) => section.id !== sectionId));
    };

    const addField = (sectionId: number) => {
        setSections(
            sections.map((section) =>
                section.id === sectionId
                    ? {
                          ...section,
                          fields: [...section.fields, { name: "", value: "" }],
                      }
                    : section
            )
        );
    };

    const removeField = (sectionId: number, fieldIndex: number) => {
        setSections(
            sections.map((section) =>
                section.id === sectionId
                    ? {
                          ...section,
                          fields: section.fields.filter(
                              (_, index) => index !== fieldIndex
                          ),
                      }
                    : section
            )
        );
    };

    const handleHeadingChange = (sectionId: number, value: string) => {
        setSections(
            sections.map((section) =>
                section.id === sectionId
                    ? { ...section, heading: value }
                    : section
            )
        );
    };

    const handleFieldChange = (
        sectionId: number,
        fieldIndex: number,
        field: "name" | "value",
        value: string
    ) => {
        setSections(
            sections.map((section) =>
                section.id === sectionId
                    ? {
                          ...section,
                          fields: section.fields.map((f, index) =>
                              index === fieldIndex
                                  ? { ...f, [field]: value }
                                  : f
                          ),
                      }
                    : section
            )
        );
    };

    const handleCancel = () => {
        navigate("/"); // Navigate to homepage
        window.scrollTo(0, 0); // Ensure it scrolls after navigation
    };

    const handleSave = () => {
        // Implement save functionality here
        console.log("Saving data...", { products, sections });
    };

    return (
        <div className="container mx-auto p-4">
            {/* Product Specifications */}
            {products.map((product, index) => (
                <div key={index} className="mb-8">
                    <h3 className="font-bold text-xl mb-4">
                        Product {index + 1} Specifications
                    </h3>
                    <button
                        onClick={() => handleAddSpecification(index)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 mb-4"
                    >
                        Add Specification
                    </button>
                    <ul className="space-y-4">
                        {product.specifications.map((spec, specIndex) => (
                            <li
                                key={specIndex}
                                className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4"
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
                                    className="border border-gray-300 p-2 rounded w-full"
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
                                    className="border border-gray-300 p-2 rounded w-full"
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

                    <h3 className="font-bold text-xl mt-8 mb-4">
                        Product {index + 1} Other Detail
                    </h3>
                    <button
                        onClick={addSection}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 mb-4"
                    >
                        Add Other Detail
                    </button>

                    {/* Dynamic Sections */}
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="my-4 p-4 border rounded shadow-lg"
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
                                    className="border p-2 rounded w-full"
                                />
                                <button
                                    onClick={() => removeSection(section.id)}
                                    className="ml-4 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition duration-200"
                                >
                                    Remove Section
                                </button>
                            </div>

                            <button
                                onClick={() => addField(section.id)}
                                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 mb-4"
                            >
                                Add Field
                            </button>

                            {section.fields.map((field, fieldIndex) => (
                                <div
                                    key={fieldIndex}
                                    className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4"
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
                                        className="border p-2 rounded w-full"
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
                                        className="border p-2 rounded w-full"
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

                    {/* Save and Cancel Buttons */}
                    <div className="flex justify-end space-x-4 mt-8">
                        <button
                            onClick={handleCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
                        >
                            Save
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AddOtherDetail;

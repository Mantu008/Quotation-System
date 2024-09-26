import { useState } from "react";
import { AiFillDelete } from "react-icons/ai"; // Import delete icon from react-icons

interface SpecificationValue {
    value: string;
    code: string;
}

interface Specification {
    name: string;
    values: SpecificationValue[];
}

const AddSpecification: React.FC = () => {
    const [specifications, setSpecifications] = useState<Specification[]>([]);

    const handleAddSpecification = () => {
        setSpecifications((prevSpecs) => [
            ...prevSpecs,
            { name: "", values: [{ value: "", code: "" }] },
        ]);
    };

    const handleAddSpecificationValue = (index: number) => {
        setSpecifications((prevSpecs) => {
            const updatedSpecifications = [...prevSpecs];
            updatedSpecifications[index] = {
                ...updatedSpecifications[index],
                values: [
                    ...updatedSpecifications[index].values,
                    { value: "", code: "" },
                ],
            };
            return updatedSpecifications;
        });
    };

    const handleRemoveSpecification = (index: number) => {
        setSpecifications((prevSpecs) =>
            prevSpecs.filter((_, i) => i !== index)
        );
    };

    const handleRemoveSpecificationValue = (
        specIndex: number,
        valueIndex: number
    ) => {
        setSpecifications((prevSpecs) => {
            const updatedSpecifications = [...prevSpecs];
            updatedSpecifications[specIndex] = {
                ...updatedSpecifications[specIndex],
                values: updatedSpecifications[specIndex].values.filter(
                    (_, i) => i !== valueIndex
                ),
            };
            return updatedSpecifications;
        });
    };

    const handleChangeSpecificationName = (index: number, newName: string) => {
        setSpecifications((prevSpecs) => {
            const updatedSpecifications = [...prevSpecs];
            updatedSpecifications[index] = {
                ...updatedSpecifications[index],
                name: newName,
            };
            return updatedSpecifications;
        });
    };

    const handleChangeValue = (
        specIndex: number,
        valueIndex: number,
        newValue: string,
        field: "value" | "code"
    ) => {
        setSpecifications((prevSpecs) => {
            const updatedSpecifications = [...prevSpecs];
            updatedSpecifications[specIndex] = {
                ...updatedSpecifications[specIndex],
                values: updatedSpecifications[specIndex].values.map((val, i) =>
                    i === valueIndex ? { ...val, [field]: newValue } : val
                ),
            };
            return updatedSpecifications;
        });
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <button
                onClick={handleAddSpecification}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4 transition duration-300 ease-in-out"
            >
                Add Specification
            </button>

            {specifications.map((spec, specIndex) => (
                <div
                    key={specIndex}
                    className="p-4 bg-white border border-gray-300 rounded-lg mb-4 shadow-md"
                >
                    <div className="flex items-center mb-2">
                        <input
                            type="text"
                            placeholder="Specification Name"
                            className="flex-1 border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={spec.name}
                            onChange={(e) =>
                                handleChangeSpecificationName(
                                    specIndex,
                                    e.target.value
                                )
                            }
                        />
                        <button
                            onClick={() => handleRemoveSpecification(specIndex)}
                            className="text-red-500 hover:text-red-700 transition"
                        >
                            <AiFillDelete size={20} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        {spec.values.map((value, valueIndex) => (
                            <div
                                key={valueIndex}
                                className="flex items-center mb-2"
                            >
                                <input
                                    type="text"
                                    placeholder="Specification Value"
                                    className="flex-1 min-w-[150px] border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={value.value}
                                    onChange={(e) =>
                                        handleChangeValue(
                                            specIndex,
                                            valueIndex,
                                            e.target.value,
                                            "value"
                                        )
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Value Code"
                                    className="flex-1 min-w-[150px] border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={value.code}
                                    onChange={(e) =>
                                        handleChangeValue(
                                            specIndex,
                                            valueIndex,
                                            e.target.value,
                                            "code"
                                        )
                                    }
                                />
                                <button
                                    onClick={() =>
                                        handleRemoveSpecificationValue(
                                            specIndex,
                                            valueIndex
                                        )
                                    }
                                    className="text-red-500 hover:text-red-700 transition"
                                >
                                    <AiFillDelete size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => handleAddSpecificationValue(specIndex)}
                        className="bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 mt-2 transition duration-300 ease-in-out"
                    >
                        Add Specification Value
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AddSpecification;

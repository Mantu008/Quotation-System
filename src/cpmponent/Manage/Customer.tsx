import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL_PATH } from "../../../path";

interface DropdownOption {
    id: number | string;
    name: string;
}

interface DropdownOptions {
    contactNatures: DropdownOption[];
    inquirySources: DropdownOption[];
    industries: DropdownOption[];
    states: DropdownOption[];
    machines: DropdownOption[];
    competitors: DropdownOption[];
}

interface CustomerData {
    name: string;
    contact_no1: string;
    contact_no2: string;
    industry_id: string;
    inq_src_id: string;
    contact_nature_id: string;
    address: string;
    city: string;
    pin: string;
    state_id: string;
    country: string;
    ship_name: string;
    ship_add: string;
    ship_city: string;
    ship_pin: string;
    ship_state_id: string;
    ship_country: string;
    gst_no: string;
    owner: string;
    code: string;
    desc: string;
    machine_id: string;
    consump: string;
    email: string;
    competitor1: string;
    competitor2: string;
    competitor3: string;
    class_ud: string;
}

const initialCustomerData: CustomerData = {
    name: "",
    contact_no1: "",
    contact_no2: "",
    industry_id: "",
    inq_src_id: "",
    contact_nature_id: "",
    address: "",
    city: "",
    pin: "",
    state_id: "",
    country: "",
    ship_name: "",
    ship_add: "",
    ship_city: "",
    ship_pin: "",
    ship_state_id: "",
    ship_country: "",
    gst_no: "",
    owner: "",
    code: "",
    desc: "",
    machine_id: "",
    consump: "",
    email: "",
    competitor1: "",
    competitor2: "",
    competitor3: "",
    class_ud: "",
};

const Customer: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [customerData, setCustomerData] =
        useState<CustomerData>(initialCustomerData);

    const [dropdownOptions, setDropdownOptions] = useState<DropdownOptions>({
        contactNatures: [],
        inquirySources: [],
        industries: [],
        states: [],
        machines: [],
        competitors: [],
    });

    const fetchDropdownOptions = useCallback(async () => {
        try {
            const [
                contactNatureRes,
                inquirySourceRes,
                industryRes,
                stateRes,
                machineRes,
                competitorRes,
            ] = await Promise.all([
                axios.get(`${BASE_URL_PATH}/contact-natures`),
                axios.get(`${BASE_URL_PATH}/inquiry-sources`),
                axios.get(`${BASE_URL_PATH}/industries`),
                axios.get(`${BASE_URL_PATH}/states`),
                axios.get(`${BASE_URL_PATH}/machines`),
                axios.get(`${BASE_URL_PATH}/competitors`),
            ]);

            setDropdownOptions({
                contactNatures: contactNatureRes.data,
                inquirySources: inquirySourceRes.data,
                industries: industryRes.data,
                states: stateRes.data,
                machines: machineRes.data,
                competitors: competitorRes.data,
            });
        } catch (error) {
            console.error("Error fetching dropdown options:", error);
            toast.error("Error fetching dropdown options.");
        }
    }, []);

    useEffect(() => {
        fetchDropdownOptions();

        if (id) {
            const fetchCustomerData = async () => {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/customers/${id}`
                    );
                    const data = response.data[0];
                    setCustomerData((prevState) => ({
                        ...prevState,
                        ...data,
                    }));
                } catch (error) {
                    console.error("Error fetching customer data:", error);
                    toast.error("Error fetching customer data.");
                }
            };

            fetchCustomerData();
        }
    }, [id, fetchDropdownOptions]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setCustomerData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleCancel = () => {
        navigate("/manage/customer/list");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(customerData);
        try {
            if (id) {
                await axios.put(
                    `${BASE_URL_PATH}/customers/${id}`,
                    customerData
                );
                toast.success("Customer details updated successfully.");
            } else {
                await axios.post(`${BASE_URL_PATH}/customers`, customerData);
                toast.success("Customer created successfully.");
            }
            navigate("/manage/customer/list");
        } catch (error) {
            console.error("Error saving customer data:", error);
            toast.error("Error saving customer data.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-800">
                {id ? "Edit Customer" : "Create Customer"}
            </h2>
            <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                onSubmit={handleSubmit}
            >
                {/* Customer Details */}
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={customerData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="contact_no1"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Contact No 1
                    </label>
                    <input
                        id="contact_no1"
                        type="text"
                        name="contact_no1"
                        value={customerData.contact_no1}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="contact_no2"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Contact No 2
                    </label>
                    <input
                        id="contact_no2"
                        type="text"
                        name="contact_no2"
                        value={customerData.contact_no2}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="industry_id"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Industry
                    </label>
                    <select
                        id="industry_id"
                        name="industry_id"
                        value={customerData.industry_id}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">[SELECT]</option>
                        {dropdownOptions.industries.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="inq_src_id"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Inquiry Source
                    </label>
                    <select
                        id="inq_src_id"
                        name="inq_src_id"
                        value={customerData.inq_src_id}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">[SELECT]</option>
                        {dropdownOptions.inquirySources.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="contact_nature_id"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Nature of Contact
                    </label>
                    <select
                        id="contact_nature_id"
                        name="contact_nature_id"
                        value={customerData.contact_nature_id}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">[SELECT]</option>
                        {dropdownOptions.contactNatures.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Address Details */}
                <div>
                    <label
                        htmlFor="address"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Address
                    </label>
                    <input
                        id="address"
                        type="text"
                        name="address"
                        value={customerData.address}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="city"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        City
                    </label>
                    <input
                        id="city"
                        type="text"
                        name="city"
                        value={customerData.city}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="pin"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Pin
                    </label>
                    <input
                        id="pin"
                        type="text"
                        name="pin"
                        value={customerData.pin}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="state_id"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        State
                    </label>
                    <select
                        id="state_id"
                        name="state_id"
                        value={customerData.state_id}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">[SELECT]</option>
                        {dropdownOptions.states.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="country"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Country
                    </label>
                    <input
                        id="country"
                        type="text"
                        name="country"
                        value={customerData.country}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Shipping Address */}
                <h3 className="col-span-2 text-lg font-semibold mt-6">
                    Shipping Address
                </h3>
                <div>
                    <label
                        htmlFor="ship_name"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Ship Name
                    </label>
                    <input
                        id="ship_name"
                        type="text"
                        name="ship_name"
                        value={customerData.ship_name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="ship_add"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Ship Address
                    </label>
                    <input
                        id="ship_add"
                        type="text"
                        name="ship_add"
                        value={customerData.ship_add}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="ship_city"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Shipping City
                    </label>
                    <input
                        id="ship_city"
                        type="text"
                        name="ship_city"
                        value={customerData.ship_city}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="ship_pin"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Shipping PIN
                    </label>
                    <input
                        id="ship_pin"
                        type="text"
                        name="ship_pin"
                        value={customerData.ship_pin}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="ship_state_id"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        State
                    </label>
                    <select
                        id="ship_state_id"
                        name="ship_state_id"
                        value={customerData.ship_state_id}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">[SELECT]</option>
                        {dropdownOptions.states.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="ship_country"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Shipping Country
                    </label>
                    <input
                        id="shipping_country"
                        type="text"
                        name="ship_country"
                        value={customerData.ship_country}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="gst_no"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        GST No
                    </label>
                    <input
                        id="gst_no"
                        type="text"
                        name="gst_no"
                        value={customerData.gst_no}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="owner"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Owner
                    </label>
                    <input
                        id="owner"
                        type="text"
                        name="owner"
                        value={customerData.owner}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="code"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Code
                    </label>
                    <input
                        id="code"
                        type="text"
                        name="code"
                        value={customerData.code}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="desc"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Description
                    </label>
                    <input
                        id="desc"
                        type="text"
                        name="desc"
                        value={customerData.desc}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="machine_id"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Machine
                    </label>
                    <select
                        id="machine_id"
                        name="machine_id"
                        value={customerData.machine_id}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">[SELECT]</option>
                        {dropdownOptions.machines.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="consump"
                        className="block mb-1 text-gray-700"
                    >
                        Consumption
                    </label>
                    <input
                        id="consump"
                        type="text"
                        name="consump"
                        value={customerData.consump}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={customerData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="competitor1"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Competitor 1
                    </label>
                    <select
                        id="competitor1"
                        name="competitor1"
                        value={customerData.competitor1}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">[SELECT]</option>
                        {dropdownOptions.competitors.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="competitor2"
                        className="block mb-1 text-sm md:text-base text-gray-700"
                    >
                        Competitor 2
                    </label>
                    <select
                        id="competitor2"
                        name="competitor2"
                        value={customerData.competitor2}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 md:p-3 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">[SELECT]</option>
                        {dropdownOptions.competitors.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="class_ud"
                        className="block mb-1 text-gray-700"
                    >
                        Class
                    </label>
                    <input
                        id="class_ud"
                        type="text"
                        name="class_ud"
                        value={customerData.class_ud}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Action buttons */}
                <div className="col-span-2 flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
                    >
                        {id ? "Update Customer" : "Create Customer"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Customer;

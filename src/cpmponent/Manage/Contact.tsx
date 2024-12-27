import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL_PATH } from "../../../path";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface DropdownOption {
    id: number | string; // Adjust type based on your data (number or string)
    name: string;
}

interface DropdownOptions {
    contactNatures: DropdownOption[];
    inquirySources: DropdownOption[];
    industries: DropdownOption[];
    states: DropdownOption[];
}

const Contact = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // State for contact information
    const [contactInfo, setContactInfo] = useState({
        name: "",
        job_title: "",
        contact_no1: "",
        contact_no2: "",
        contact_no3: "",
        email1: "",
        email2: "",
        contact_nature_id: "",
        inq_src_id: "",
        industry_id: "",
        address: "",
        city: "",
        pin: "",
        state_id: "",
        country: "",
        desc: "",
    });

    // State to hold dropdown options
    const [dropdownOptions, setDropdownOptions] = useState<DropdownOptions>({
        contactNatures: [],
        inquirySources: [],
        industries: [],
        states: [],
    });

    useEffect(() => {
        // Fetch dropdown options
        const fetchDropdownOptions = async () => {
            try {
                const [
                    contactNatureRes,
                    inquirySourceRes,
                    industryRes,
                    stateRes,
                ] = await Promise.all([
                    axios.get(`${BASE_URL_PATH}/contact-natures`),
                    axios.get(`${BASE_URL_PATH}/inquiry-sources`),
                    axios.get(`${BASE_URL_PATH}/industries`),
                    axios.get(`${BASE_URL_PATH}/states`),
                ]);

                setDropdownOptions({
                    contactNatures: contactNatureRes.data,
                    inquirySources: inquirySourceRes.data,
                    industries: industryRes.data,
                    states: stateRes.data,
                });
            } catch (error) {
                console.error("Error fetching dropdown options:", error);
                toast.error("Error fetching dropdown options.");
            }
        };

        fetchDropdownOptions();

        // Fetch data only if `id` is present
        if (id) {
            const fetchContactData = async () => {
                try {
                    const response = await axios.get(
                        `${BASE_URL_PATH}/contacts/${id}`
                    );
                    const data = response.data[0];

                    setContactInfo({
                        name: data.name || "",
                        job_title: data.job_title || "",
                        contact_no1: data.contact_no1 || "",
                        contact_no2: data.contact_no2 || "",
                        contact_no3: data.contact_no3 || "",
                        email1: data.email1 || "",
                        email2: data.email2 || "",
                        contact_nature_id: data.contact_nature_id || "",
                        inq_src_id: data.inq_src_id || "",
                        industry_id: data.industry_id || "",
                        address: data.address || "",
                        city: data.city || "",
                        pin: data.pin || "",
                        state_id: data.state_id || "",
                        country: data.country || "",
                        desc: data.desc || "",
                    });
                } catch (error) {
                    console.error("Error fetching contact data:", error);
                    toast.error("Error fetching contact data.");
                }
            };

            fetchContactData();
        }
    }, [id]);

    // Handle input changes
    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setContactInfo((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    // Handle form submission
    const handleSaveOrUpdate = async (e: any) => {
        e.preventDefault();

        const isEmptyField = Object.values(contactInfo).some(
            (value) => value === ""
        );

        // If any field is empty, don't proceed with the API call
        if (isEmptyField) {
            toast.error("Fill All The Field Correctly");
            return; // Skip the API call
        }

        try {
            if (id) {
                await axios.put(`${BASE_URL_PATH}/contacts/${id}`, contactInfo);
                toast.success("Contect Nature updated successfully.");
            } else {
                await axios.post(`${BASE_URL_PATH}/contacts`, contactInfo, {
                    headers: { "Content-Type": "application/json" },
                });
                toast.success("Contect Nature saved successfully.");
            }
            navigate("/manage/contact/list");
        } catch (error) {
            toast.error("Error saving/updating Contect Nature.");
        }
    };

    const handleCancel = () => {
        navigate("/manage/contact/list");
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Toaster />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-800">
                Contact
            </h2>
            <form onSubmit={handleSaveOrUpdate}>
                {/* Updated grid to use auto-fit and minmax for equal width columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={contactInfo.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="job_title"
                            className="block mb-2 text-gray-700"
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            id="job_title"
                            value={contactInfo.job_title}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact_no1"
                            className="block mb-2 text-gray-700"
                        >
                            Contact No 1
                        </label>
                        <input
                            type="text"
                            id="contact_no1"
                            value={contactInfo.contact_no1}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact_no2"
                            className="block mb-2 text-gray-700"
                        >
                            Contact No 2
                        </label>
                        <input
                            type="text"
                            id="contact_no2"
                            value={contactInfo.contact_no2}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact_no3"
                            className="block mb-2 text-gray-700"
                        >
                            Contact No 3
                        </label>
                        <input
                            type="text"
                            id="contact_no3"
                            value={contactInfo.contact_no3}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email1"
                            className="block mb-2 text-gray-700"
                        >
                            Email 1
                        </label>
                        <input
                            type="email"
                            id="email1"
                            value={contactInfo.email1}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email2"
                            className="block mb-2 text-gray-700"
                        >
                            Email 2
                        </label>
                        <input
                            type="email"
                            id="email2"
                            value={contactInfo.email2}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact_nature_id"
                            className="block mb-2 text-gray-700"
                        >
                            Nature of Contact
                        </label>
                        <select
                            id="contact_nature_id"
                            value={contactInfo.contact_nature_id}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        >
                            <option value="">[SELECT]</option>
                            {dropdownOptions.contactNatures.map((nature) => (
                                <option key={nature.id} value={nature.id}>
                                    {nature.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="inq_src_id"
                            className="block mb-2 text-gray-700"
                        >
                            Inquiry Source
                        </label>
                        <select
                            id="inq_src_id"
                            value={contactInfo.inq_src_id}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        >
                            <option value="">[SELECT]</option>
                            {dropdownOptions.inquirySources.map((source) => (
                                <option key={source.id} value={source.id}>
                                    {source.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="industry_id"
                            className="block mb-2 text-gray-700"
                        >
                            Industry
                        </label>
                        <select
                            id="industry_id"
                            value={contactInfo.industry_id}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        >
                            <option value="">[SELECT]</option>
                            {dropdownOptions.industries.map((industry) => (
                                <option key={industry.id} value={industry.id}>
                                    {industry.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="address"
                            className="block mb-2 text-gray-700"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={contactInfo.address}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="city"
                            className="block mb-2 text-gray-700"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            value={contactInfo.city}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="pin"
                            className="block mb-2 text-gray-700"
                        >
                            PIN
                        </label>
                        <input
                            type="text"
                            id="pin"
                            value={contactInfo.pin}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="state_id"
                            className="block mb-2 text-gray-700"
                        >
                            State
                        </label>
                        <select
                            id="state_id"
                            value={contactInfo.state_id}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        >
                            <option value="">[SELECT]</option>
                            {dropdownOptions.states.map((state) => (
                                <option key={state.id} value={state.id}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="country"
                            className="block mb-2 text-gray-700"
                        >
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            value={contactInfo.country}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="desc"
                            className="block mb-2 text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="desc"
                            value={contactInfo.desc}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm transition duration-200"
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="mr-4 py-2 px-6 bg-gray-300 text-gray-700 rounded-lg focus:outline-none focus:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-6 bg-blue-600 text-white rounded-lg focus:outline-none focus:bg-blue-700"
                    >
                        <i className={`fas fa-${id ? "edit" : "check"}`}></i>{" "}
                        {id ? "UPDATE" : "SAVE"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;

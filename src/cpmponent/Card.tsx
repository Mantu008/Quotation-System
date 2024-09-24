import { MdAddBox } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// Data array containing all card information
const cardData = [
    {
        section: "Transactions",
        items: [
            { id: 1, name: "Payment Received", color: "bg-blue-600" },
            { id: 2, name: "Sales", color: "bg-blue-600" },
            { id: 3, name: "Sales Order", color: "bg-blue-600" },
            { id: 4, name: "Proforma Invoice", color: "bg-gray-600" },
            { id: 5, name: "Quotation", color: "bg-gray-600" },
            { id: 6, name: "Generate Model No.", color: "bg-gray-600" },
        ],
    },
    {
        section: "Manage",
        items: [
            { id: 7, name: "Target", color: "bg-blue-600" },
            { id: 8, name: "Product", color: "bg-blue-600" },
            { id: 9, name: "Model Number", color: "bg-blue-600" },
            { id: 10, name: "Customer", color: "bg-gray-600" },
            { id: 11, name: "Contact", color: "bg-gray-600" },
            { id: 12, name: "Bank", color: "bg-gray-600" },
            { id: 13, name: "Payment Method", color: "bg-teal-600" },
            { id: 14, name: "Category", color: "bg-teal-600" },
            { id: 15, name: "State", color: "bg-teal-600" },
            { id: 16, name: "Competitor", color: "bg-pink-600" },
            { id: 17, name: "Contact Nature", color: "bg-pink-600" },
            { id: 18, name: "Industry", color: "bg-pink-600" },
            { id: 19, name: "Inquiry Source", color: "bg-purple-600" },
            { id: 20, name: "Machine", color: "bg-purple-600" },
            { id: 21, name: "Tax", color: "bg-purple-600" },
            { id: 22, name: "Business Info Oth.", color: "bg-blue-600" },
            { id: 23, name: "Default Other Charge", color: "bg-blue-600" },
            { id: 24, name: "Currency", color: "bg-blue-600" },
        ],
    },
    {
        section: "Report",
        items: [
            { id: 25, name: "Payment Received", color: "bg-blue-600" },
            { id: 26, name: "Target", color: "bg-blue-600" },
            { id: 27, name: "Sales", color: "bg-blue-600" },
            { id: 28, name: "Sales Order", color: "bg-gray-800" },
            { id: 29, name: "Proforma Invoice", color: "bg-gray-800" },
            { id: 30, name: "Quotation", color: "bg-gray-800" },
            { id: 31, name: "Thanks Letter", color: "bg-teal-600" },
        ],
    },
    {
        section: "Configuration",
        items: [
            { id: 32, name: "Backup", color: "bg-blue-600" },
            { id: 33, name: "Business Info", color: "bg-blue-600" },
        ],
    },
    {
        section: "Stock",
        items: [
            { id: 34, name: "Goods Issued", color: "bg-blue-600" },
            { id: 35, name: "Goods Received", color: "bg-blue-600" },
            { id: 36, name: "Supplier", color: "bg-blue-600" },
            { id: 37, name: "Contact", color: "bg-gray-800" },
            { id: 38, name: "Product", color: "bg-gray-800" },
            { id: 39, name: "Unit", color: "bg-gray-800" },
            { id: 40, name: "Location", color: "bg-teal-600" },
            { id: 41, name: "Category", color: "bg-teal-600" },
            { id: 42, name: "Item Group", color: "bg-teal-600" },
        ],
    },
];

interface CardProps {
    name: string;
    id: number;
    color: string;
}

// Card Component with enhanced styling
const Card = ({ name, id, color }: CardProps) => {
    const navigate = useNavigate();

    // Derive the hover color by appending '-dark' to the base color class
    const hoverColor = `${color}-dark`; // Assuming a darker shade exists

    const handleCardClick = () => {
        // Replace spaces with empty strings and convert to lowercase
        const formattedName = name.replace(/\s+/g, "").toLowerCase();
        navigate(`/${formattedName}`);
    };

    return (
        <div
            className={`flex justify-between items-center w-full p-4 m-2 rounded-lg ${color} text-white shadow-lg cursor-pointer transition duration-300 hover:${hoverColor}`}
            onClick={handleCardClick}
        >
            <span className="text-lg font-semibold">
                {id}. {name}
            </span>
            <span className="bg-white text-black rounded-full w-7 h-7 flex justify-center items-center font-bold">
                <MdAddBox />
            </span>
        </div>
    );
};

// Main CardPage Component with updated styling
const CardPage = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {cardData.map((section) => (
                <div key={section.section} className="mb-12">
                    {/* Section Title */}
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
                        {section.section}
                    </h3>
                    {/* Card Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.items.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                color={item.color}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardPage;

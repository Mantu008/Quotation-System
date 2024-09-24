import { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    // Sample data
    const [username] = useState("John Doe");
    const [financialYear] = useState("2023-2024");

    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0 z-10 shadow-md">
            <Link
                to={"/"}
                className="text-xl font-bold flex flex-row gap-2 items-center justify-center"
            >
                <BsGridFill />
                <span>Menu</span>
            </Link>

            {/* Navbar Items */}
            <div className="flex items-center space-x-6">
                {/* Financial Year */}
                <div className="text-sm">
                    Financial Year:{" "}
                    <span className="font-semibold">{financialYear}</span>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                    <span className="text-sm">Hello, {username}</span>
                    {/* Settings Button */}
                    <button onClick={() => alert("Settings clicked!")}>
                        <IoMdSettings className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

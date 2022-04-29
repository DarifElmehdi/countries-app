import React from "react";

function Switch({ onclick, darkmode }) {
    return (
        <div
            className="flex items-center cursor-pointer"
            onClick={() => onclick(!darkmode)}
        >
            <img className="h-8 w-8 mx-2" src="assets/moon.svg" alt="" />
            <span className="text-textblack text-xl font-sans font-normal">
                Dark Mode
            </span>
        </div>
    );
}

export default Switch;

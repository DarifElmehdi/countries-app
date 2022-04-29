import React from "react";

function Select({ selecthandler }) {
    return (
        <div className="flex items-center w-full lg:w-80 my-2">
            <select
                onChange={(e) => selecthandler(e.target.value)}
                name="region"
                className="w-full bg-white text-slate-800 dark:bg-slate-700 dark:text-gray-200 px-4 py-4 shadow-2xl rounded-full focus:outline-none"
            >
                <option value="">Filter by region</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="America">America</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}

export default Select;

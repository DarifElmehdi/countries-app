import React, { useState, useEffect } from "react";
import Switch from "../switch/Switch";
import { Link } from "react-router-dom";

function NavBar(props) {
    const [darkMode, setDarkMode] = useState(false);
    let body = document.getElementById("body");
    useEffect(() => {
        body.classList.toggle("dark");
    }, [darkMode]);
    useEffect(() => {});
    return (
        <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-gray-100 py-4 px-2 md:px-10 lg:px-40 shadow-lg fixed top-0 w-full">
            <div>
                <Link to={"/"}>
                    <span className="text-textblack text-xl font-normal font-sans">
                        Where in the world?
                    </span>
                </Link>
            </div>
            <div>
                <Switch onclick={setDarkMode} darkmode={darkMode} />
            </div>
        </div>
    );
}

export default NavBar;

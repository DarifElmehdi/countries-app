import React from "react";

function Switch({ onclick, darkmode }) {
    return (
        <div
            className="flex items-center cursor-pointer"
            onClick={() => onclick(!darkmode)}
        >
            {!darkmode && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            )}
            {darkmode && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            )}
            <span className="text-textblack text-xl font-sans font-normal">
                Dark Mode
            </span>
        </div>
    );
}

export default Switch;

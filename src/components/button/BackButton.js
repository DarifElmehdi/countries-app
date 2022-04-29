import React from "react";

function BackButton(props) {
    return (
        <div className="flex items-center w-32 justify-evenly py-2 px-4 rounded-md bg-white text-slate-800 dark:bg-slate-700 dark:text-gray-200 cursor-pointer bg-textwhite shadow-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
            </svg>
            <span className=" text-xl font-roboto font-normal">Back</span>
        </div>
    );
}

export default BackButton;

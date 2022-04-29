import React from "react";

function Search({ searchterm, searchhandler }) {
    return (
        <div className="flex items-center w-full lg:w-80 my-2 relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute left-4 z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="search"
                id="site-search"
                name="q"
                className=" bg-white text-slate-800 dark:bg-slate-700 dark:text-gray-200 pl-12 pr-4 py-4 shadow-2xl rounded-full w-full focus:outline-none"
                placeholder="Search for a country ."
                ref={searchterm}
                onChange={() => searchhandler()}
            />
        </div>
    );
}

export default Search;

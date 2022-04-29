import React from "react";

function BackButton(props) {
    return (
        <div className="flex items-center w-32 justify-evenly py-2 px-4 rounded-md bg- cursor-pointer bg-textwhite shadow-lg">
            <img
                className="h-4 w-4 mx-2"
                src="assets/backarrow.svg"
                alt="arrow"
            />
            <span className="text-textblack text-xl font-roboto font-normal">
                Back
            </span>
        </div>
    );
}

export default BackButton;

import React from "react";

function CountyCard({ name, population, region, flag, capital, id }) {
    return (
        <div
            className="bg-white rounded-md overflow-hidden cursor-pointer"
            onClick={() => {
                console.log(id);
            }}
        >
            <img
                className="w-full aspect-video object-fill"
                src={flag}
                alt={name}
            />
            <div className="flex flex-col items-start p-2">
                <h1 className="my-2 text-xl font-medium">{name}</h1>
                <p className=" text-xl font-normal">
                    Population :
                    <span className="ml-2 text-lg">{population}</span>
                </p>
                <p className=" text-xl font-normal">
                    Region :<span className="ml-2 text-lg">{region}</span>
                </p>
                <p className=" text-xl font-normal">
                    Capital :<span className="ml-2 text-lg">{capital}</span>
                </p>
            </div>
        </div>
    );
}

export default CountyCard;

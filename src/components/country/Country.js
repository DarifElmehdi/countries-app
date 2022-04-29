import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../button/BackButton";

function Country(props) {
    const [countrie, setCountrie] = useState();
    const [borders, setBorders] = useState();
    const { id } = useParams();
    const getCountrie = (id) => {
        axios
            .get("https://restcountries.com/v3.1/alpha/" + id)
            .then((res) => {
                setCountrie(res.data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getBorderCountries = () => {
        axios
            .get(
                "https://restcountries.com/v3.1/alpha?codes=" +
                    countrie.borders?.toString()
            )
            .then((res) => setBorders(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        id && getCountrie(id);
    }, []);

    useEffect(() => {
        countrie?.borders && getBorderCountries();
    }, [countrie]);

    return (
        <div className="pt-24 px-2 md:px-10 lg:px-40 w-full bg-darkwhite min-h-screen">
            <div className="lg:col-span-2 mb-20">
                <Link to={"/"}>
                    <BackButton />
                </Link>
            </div>
            {countrie && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <img
                        className="h-80 aspect-auto bg-black my-auto"
                        src={countrie.flags.png}
                        alt={countrie.name.common}
                    />
                    <div className="py-4 px-2">
                        <h1 className="my-8 text-xl font-medium">
                            {countrie.name.common}
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div>
                                <p className=" text-xl font-medium">
                                    Official Name :
                                    <span className="ml-2 text-lg font-normal">
                                        {countrie.name.official}
                                    </span>
                                </p>
                                <p className=" text-xl font-medium">
                                    Population :
                                    <span className="ml-2 text-lg font-normal">
                                        {countrie.population}
                                    </span>
                                </p>
                                <p className=" text-xl font-medium">
                                    Region :
                                    <span className="ml-2 text-lg font-normal">
                                        {countrie.region}
                                    </span>
                                </p>
                                <p className=" text-xl font-medium">
                                    Sub Region :
                                    <span className="ml-2 text-lg font-normal">
                                        {countrie.subregion}
                                    </span>
                                </p>
                                <p className=" text-xl font-medium">
                                    Capital :
                                    <span className="ml-2 text-lg font-normal">
                                        {countrie.capital}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className=" text-xl font-medium">
                                    Top Level Domain :
                                    <span className="ml-2 text-lg font-normal">
                                        {countrie.tld}
                                    </span>
                                </p>
                                <p className=" text-xl font-medium">
                                    Currencies :
                                    <span className="ml-2 text-lg font-normal">
                                        {Object.keys(countrie.currencies)[0]}
                                    </span>
                                </p>
                                <p className=" text-xl font-medium">
                                    Languages :
                                    {Object.keys(countrie.languages).map(
                                        (key, index) => (
                                            <span
                                                key={index}
                                                className="ml-2 text-lg font-normal"
                                            >
                                                {countrie.languages[key]}
                                            </span>
                                        )
                                    )}
                                </p>
                            </div>
                        </div>
                        <p className=" text-xl my-8 font-medium flex flex-wrap">
                            Border Countries :
                            {borders &&
                                borders.map((country, index) => (
                                    <span
                                        key={index}
                                        className="ml-2 px-4 py-1 border-2 rounded-lg text-lg font-normal bg-textwhite"
                                    >
                                        {country.name.common}
                                    </span>
                                ))}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Country;

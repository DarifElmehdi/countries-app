import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountyCard from "../country/CountyCard";

function Countries(props) {
    const [countries, setCountries] = useState();

    const getCountries = () => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => {
                setCountries(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getCountries();
    }, []);
    return (
        <div className="pt-20 px-2 md:px-10 lg:px-40 w-full bg-darkwhite grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {countries &&
                countries.map((countrie, index) => (
                    <Link key={index} to={`country/${countrie.cca2}`}>
                        <CountyCard
                            flag={countrie.flags.png}
                            name={countrie.name.common}
                            population={countrie.population}
                            region={countrie.region}
                            capital={countrie.capital}
                        />
                    </Link>
                ))}
        </div>
    );
}

export default Countries;

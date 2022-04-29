import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountyCard from "../country/CountyCard";
import Search from "../search/Search";
import Select from "../select/Select";

function Countries(props) {
    const [countries, setCountries] = useState();
    const [filtredList, setFiltredList] = useState();
    const [select, setSelect] = useState("");
    const searchTerm = useRef("");
    const getCountries = () => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => {
                setCountries(res.data);
                setFiltredList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const filterHandler = () => {
        countries &&
            setFiltredList(
                countries.filter(
                    (item) =>
                        item.name.common
                            .toLowerCase()
                            .includes(searchTerm.current.value.toLowerCase()) &&
                        item.region.toLowerCase().includes(select.toLowerCase())
                )
            );
    };

    useEffect(() => {
        filterHandler();
    }, [select]);

    useEffect(() => {
        getCountries();
    }, []);
    return (
        <div className="flex flex-col pt-20 px-2 md:px-10 lg:px-40 w-full bg-gray-100 text-slate-800 dark:text-gray-100  dark:bg-slate-800 min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-between my-2 ml-4">
                <Search searchterm={searchTerm} searchhandler={filterHandler} />
                <Select selecthandler={setSelect} />
            </div>
            <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {filtredList &&
                    filtredList.map((countrie, index) => (
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
        </div>
    );
}

export default Countries;

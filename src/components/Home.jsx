import AddCountryForm from "./AddCountryForm";
import CountryCard from "./CountryCard";
import SearchPanel from "./SearchPanel";

import { useState, useEffect } from 'react';

const countries = [
  {name: "Germany", population: 100000, region: "Europe", capital: "Berlin", area: 2232323},
  {name: "USA", population: 200000, region: "Americas", capital: "Washington, D.C.", area: 99879799},
  {name: "China", population: 600000, capital: "Beijing", area: 45454354353}
];

export default function Home() {

    const [allCountries, setAllCountries] = useState(countries);
    const [searchText, setSearchText] = useState(() => localStorage.getItem("searchText") ?? "");
    const [selectOption, setSelectOption] = useState(() => localStorage.getItem("selectOption") || "All");

    const searchCountries = allCountries.filter((country) => (country.name.toLowerCase().includes(searchText.toLowerCase())));
    const selectCountries = selectOption === "All" ? searchCountries : searchCountries.filter((country) => (country.region?.toLowerCase() === selectOption.toLowerCase()));

    useEffect(() => {
        localStorage.setItem("searchText", searchText);
    }, [searchText]);
    useEffect(() => {
        localStorage.setItem("selectOption", selectOption);
    }, [selectOption]);
    useEffect(() => {
        document.title = "Countries: " + selectCountries.length;
    }, [selectCountries.length])

    function deleteCountry(name) {
        setAllCountries((prevCountries) => prevCountries.filter(country => country.name !== name))
    }
    function addCountry(name, population, region, capital, area) {
        if (allCountries.some((country) => country.name.trim().toLowerCase() === name.trim().toLowerCase())) {
            return false;
        }
        const newCountry={name: name, population: population, region: region, capital: capital, area: area}
        setAllCountries((prevCountries) => [...prevCountries, newCountry])
        return true;
    }

    return (
        <>
        <SearchPanel value={searchText} onChange={setSearchText} select={selectOption} onSelect={setSelectOption}/>
        {selectCountries.map((country) => (<CountryCard key={country.name} {...country} onDelete={deleteCountry}/> ))}
        <AddCountryForm addCountry={addCountry}/>
        </>
    )
}
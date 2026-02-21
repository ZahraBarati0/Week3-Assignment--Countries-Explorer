import CountryCard from "./CountryCard";

function CountriesList({ countries }) {
    if (!countries || countries.length === 0) {
        return <p className="status">No results found.</p>;
    }

    return (
        <div className="countries">
            {countries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
}

export default CountriesList;
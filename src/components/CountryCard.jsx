function CountryCard({ country }) {
    const name = country.name?.common || "Unknown";
    const region = country.region || "Unknown";
    const population = country.population?.toLocaleString() || "N/A";
    const flag = country.flags?.png;

    return (
        <div className="card">
            {flag && <img src={flag} alt={`${name} flag`} />}
            <h3>{name}</h3>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
        </div>
    );
}

export default CountryCard;
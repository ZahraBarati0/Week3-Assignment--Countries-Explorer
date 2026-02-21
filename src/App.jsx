import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountriesList from "./components/CountriesList";
import "./App.css";

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  const [darkMode, setDarkMode] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = "https://restcountries.com/v3.1/all";

        if (region !== "all") {
          url = `https://restcountries.com/v3.1/region/${region}`;
        }

        if (search.trim().length >= 2) {
          url = `https://restcountries.com/v3.1/name/${search.trim()}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to load countries");
        }

        const data = await response.json();
        setCountries(data);
        setIsSorted(false);
      } catch (err) {
        setError(err.message);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [search, region]);

  const handleSortPopulation = () => {
    const sorted = [...countries].sort(
      (a, b) => (b.population || 0) - (a.population || 0)
    );
    setCountries(sorted);
    setIsSorted(true);
  };

  const handleClearFilters = () => {
    setSearch("");
    setRegion("all");
    setIsSorted(false);
  };

  const handleRetry = () => {
    setSearch("");
    setRegion("all");
    setError(null);
  };

  return (
    <div className="app">
      <h1>Countries Explorer</h1>

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />
        <RegionFilter region={region} setRegion={setRegion} />

        <button onClick={handleSortPopulation} disabled={isSorted || countries.length === 0}>
          Sort by Population
        </button>

        <button onClick={handleClearFilters}>
          Clear Filters
        </button>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {loading && <p>Loading countries...</p>}

      {error && (
        <div>
          <p className="error">Error: {error}</p>
          <button className="retry-button" onClick={handleRetry}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <CountriesList countries={countries} />
      )}
    </div>
  );
}

export default App;
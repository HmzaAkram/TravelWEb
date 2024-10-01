import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import destArray from './destinations';
import './Destinations.css'; // Ensure to include custom CSS file
import styles from "./cardcomp.module.css";

const DestContainer = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search input
  const [showCities, setShowCities] = useState(false); // State to toggle city dropdown

  const getDatabyCountry = (country) => {
    setSelectedCountry(country);
    setSelectedCity('all'); // Reset city filter when the country changes
    setShowCities(true); // Show city dropdown when a country is selected
  };

  const getDatabyCity = (city) => {
    setSelectedCity(city);
  };

  const filteredData = destArray.filter((data) => {
    if (!data || !data.name || !data.city || !data.country) return false; // Ensure data is valid
    return (
      (selectedCountry === 'all' || data.country === selectedCountry) &&
      (selectedCity === 'all' || data.city === selectedCity) &&
      (data.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       data.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
       data.country.toLowerCase().includes(searchTerm.toLowerCase())) // Match with search term
    );
  });

  const citiesInSelectedCountry = destArray
    .filter((data) => selectedCountry === 'all' || data.country === selectedCountry)
    .map((data) => data.city)
    .filter((city, index, self) => self.indexOf(city) === index);

  return (
    <div className="accommodation-page">
      <div className="filters-container">
        {/* Country Filter */}
        <div className="country-filter">
          <h4 className="widget-title">Select a Country</h4>
          <div
            className={`country-item ${selectedCountry === 'all' ? 'active' : ''}`}
            onClick={() => {
              getDatabyCountry('all');
              setShowCities(false); // Hide city dropdown when 'All Countries' is selected
            }}
          >
            All Countries
          </div>
          {['Turkey', 'UAE', 'Saudi', 'Jordan', 'Morocco', 'Egypt', 'Malaysia', 'Iran', 'Oman', 'Pakistan',
            'Switzerland', 'UK', 'Austria', 'Portugal', 'Netherlands', 'Italy', 'France', 'Spain', 'Germany', 'Greece']
            .map((country) => (
              <div
                key={country}
                className={`country-item ${selectedCountry === country ? 'active' : ''}`}
                onClick={() => getDatabyCountry(country)}
              >
                {country}
              </div>
            ))}
        </div>

        {/* City Filter */}
        {selectedCountry !== 'all' && (
          <div className={`city-filter ${showCities ? 'show' : ''}`}>
            <h4 className="widget-title">Select a City in {selectedCountry}</h4>
            <div
              className={`city-item ${selectedCity === 'all' ? 'active' : ''}`}
              onClick={() => getDatabyCity('all')}
            >
              All Cities
            </div>
            {citiesInSelectedCountry.map((city) => (
              <div
                key={city}
                className={`city-item ${selectedCity === city ? 'active' : ''}`}
                onClick={() => getDatabyCity(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Side: Destination Cards */}
      <div className="accommodation-list">
        {/* Centered Search Input */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input 
            className="search-bar"
            type="text"
            placeholder="Search for destinations"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          />
        </div>
        <div className="d-flex flex-wrap" style={{ gap: '50px' }}>
          {filteredData.length > 0 ? (
            filteredData.map((data) => (
              <div className={`col-lg-9 col-sm-100 ${styles.card}`} style={{ width: 400, height: 400 }} key={data.id}>
                <img
                  src={data.image[0]}
                  alt={data.name}
                />
                <div className={styles.info} style={{ height: 200 }}>
                  <h3>{data.name}</h3>
                  <p>
                    <strong>Category:</strong> {data.category}<br />
                    <strong>Rating:</strong> {data.rating} ⭐<br />
                  </p>
                  <Link className="btn btn-primary" to={`/DestinationsDetail/${data.id}`}>
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No destination data available for the selected country and city.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestContainer;

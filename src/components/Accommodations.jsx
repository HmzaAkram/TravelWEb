import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Accommodation from './Accommodations.js'; // Ensure you import the data correctly
import './Accommodations.css'; // Import custom CSS file
import { Link } from 'react-router-dom';
import styles from "./cardcomp.module.css";

const Accommodations = () => {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search input

  const getDatabyCountry = (country) => {
    setSelectedCountry(country);
    setSelectedCity('all'); // Reset city filter when the country changes
  };

  const getDatabyCity = (city) => {
    setSelectedCity(city);
  };

  // Filter accommodation data based on the selected country, city, and search term
  const filteredData = Accommodation.filter((data) => {
    const matchesCountry = selectedCountry === 'all' || data.country === selectedCountry;
    const matchesCity = selectedCity === 'all' || data.city === selectedCity;
    const matchesSearch = data.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          data.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          data.country.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCountry && matchesCity && matchesSearch;
  });

  // Get unique cities based on the selected country
  const citiesInSelectedCountry = Accommodation
    .filter((data) => selectedCountry === 'all' || data.country === selectedCountry)
    .map((data) => data.city)
    .filter((city, index, self) => self.indexOf(city) === index); // Remove duplicates

  return (
    <div className="accommodation-page">
      <div className="filters-container">
        {/* Country Filter */}
        <div className="country-filter">
          <h4 className="widget-title">Select a Country</h4>
          <div
            className={`country-item ${selectedCountry === 'all' ? 'active' : ''}`}
            onClick={() => getDatabyCountry('all')}
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
          <div className="city-filter">
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

      {/* Right Side: Accommodation Cards */}
      <div className="accommodation-list">
        <div className="d-flex flex-column align-items-center">
          {/* Search Input */}
          <input 
            className="search-bar"
            type="text"
            placeholder="Search for accommodations"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          />
          <div className={`row g-2 gap-5 mt-5`}>
            {filteredData.length > 0 ? (
              filteredData.map((data) => (
                <div className={`col-md-3 col-sm-4 ${styles.card}`} key={data.id}>
                  <div className='p-5'>
                    <img
                      src={data.image[0]}
                      alt={data.name}
                    />
                    <div className={styles.info}>
                      <h3>{data.name}</h3>
                      <p>
                        <strong>City:</strong> {data.city}<br />
                        <strong>Country:</strong> {data.country}<br />
                        <strong>Rating:</strong> {data.rating} ⭐<br />
                      </p>
                      <Link className="btn btn-primary" to={`/AccommodiationDetail/${data.id}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No accommodation data available for the selected country, city, or search term.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;

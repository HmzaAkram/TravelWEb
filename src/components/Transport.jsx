import React, { useState } from 'react';
import Transport from './Travel'; // Ensure you import the data correctly
import styles from "./cardcomp.module.css";
import { Link } from 'react-router-dom';

const TransportContainer = () => {
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getDatabyDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const filteredData = Transport.filter((data) => {
    const matchesDestination = selectedDestination === 'all' || data.destination === selectedDestination;
    const matchesSearchTerm = data.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.destination.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDestination && matchesSearchTerm;
  });

  const destinations = Array.from(new Set(Transport.map((data) => data.destination)));

  return (
    <div>
      {/* Search Bar Below Video */}

      <div className="accommodation-page">
        {/* Filters Container */}
        <div className="filters-container">
          <div className="country-filter">
            <h4 className="widget-title">Select a Transport</h4>
            <div
              className={`country-item ${selectedDestination === 'all' ? 'active' : ''}`}
              onClick={() => getDatabyDestination('all')}
            >
              All Transport
            </div>
            {destinations.map((destination) => (
              <div
                key={destination}
                className={`country-item ${selectedDestination === destination ? 'active' : ''}`}
                onClick={() => getDatabyDestination(destination)}
              >
                {destination}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Transport Cards */}
        <div className="accommodation-list">
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <input
              className="search-bar"
              type="text"
              placeholder="Search for Transport"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '50%' }} // Adjust width as needed
            />
          </div>
          <div className="d-flex flex-wrap" style={{ gap: '50px' }}>
            {filteredData.length > 0 ? (
              filteredData.map((data) => (
                <div className={`col-lg-4 col-sm-6 ${styles.card}`} style={{ width: 400 }} key={data.id}>
                  <img
                    src={data.transport[0].details.images[0]}
                    alt={data.transport[0].details.airline}
                  />
                  <div className='p-5'>
                    <div className={styles.info}>
                      <h2>From {data.origin} to {data.destination}</h2>
                      {data.transport.map((item, index) => (
                        <div key={index}>
                          <p><strong>Type:</strong> {item.type}</p>
                          <p><strong>Airline:</strong> {item.details.airline}</p>
                        </div>
                      ))}
                      <Link className="btn btn-primary" to={`/TransportDetail/${data.id}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No transport data available for the selected destination.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportContainer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accommodation from './Accommodations.js';
import './Accommodations.css';
import './Banner2.css';
import styles from './cardcomp.module.css';

// Function to shuffle an array
const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const AccommodationCard = () => {
    const shuffledAccommodation = shuffleArray(Accommodation);
    const [searchTerm, setSearchTerm] = useState('');

    // Check if Accommodation data exists and is not empty
    if (!shuffledAccommodation || shuffledAccommodation.length === 0) {
        return <p>No accommodation data available</p>;
    }

    // Filter accommodations based on the search term
    const filteredAccommodation = shuffledAccommodation.filter((data) =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="gallery-content-6 py-5">
            <div className="container py-lg-5">
                <div className="title-content mb-lg-5 mb-4">
                    <span className="sub-title">Hot Tours</span>
                    <h3 className="hny-title">Popular Hotel</h3>
                    <input
                        type="text"
                        placeholder="Search for travels"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                    />
                </div>
                <div className="row g-4"> {/* Use Bootstrap's g-4 for gaps */}
                    {filteredAccommodation.length > 0 ? (
                        filteredAccommodation.slice(0, 6).map((data) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}> {/* Responsive columns */}
                                <div className={`p-3 ${styles.card} h-200 d-flex flex-column`}> {/* Ensure card takes height 200 */}
                                    <img
                                        src={data.image[0]}
                                        alt={data.name}
                                        className="img-fluid" // Makes the image responsive
                                    />
                                    <div className={`${styles.info} mt-auto d-flex flex-column align-items-start`}> {/* Align info to the left */}
                                        <h3>{data.name}</h3>
                                        <p>
                                            <strong>Price:</strong> ${data.pricePerNight} per night
                                        </p>
                                        <Link className="btn btn-primary mt-2" to={`/AccommodiationDetail/${data.id}`}>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No accommodations match your search.</p>
                    )}
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <Link className="btn btn-primary" to="/Accommodations">
                    View More
                </Link>
            </div>
        </div>
    );
};

export default AccommodationCard;
import React from 'react';
import { Link } from 'react-router-dom';
import Destination from './destinations.js'; // Ensure correct import of destination data
import './Destinations.css'; // Import custom CSS
import styles from "./cardcomp.module.css";

// Function to shuffle an array
const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const DestinationCard = () => {
    // Shuffle the destination data
    const shuffledDestinations = shuffleArray(Destination);

    // Check if destination data exists and is not empty
    if (!shuffledDestinations || shuffledDestinations.length === 0) {
        return <p>No destination data available</p>;
    }

    return (
        <div className="container">
            <div className="title-content mb-lg-5 mb-4 p-0 m-0">
                <h3 className="hny-title text-center mt-5">Most Visited</h3>

                <div className="row g-4"> {/* Use Bootstrap's g-4 for gaps */}
                    {shuffledDestinations.slice(0, 6).map((data) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}> {/* Responsive columns */}
                            <div className={`p-3 ${styles.card} h-200 d-flex flex-column`}> {/* Ensure card takes full height */}
                                <img
                                    src={data.image[0]}
                                    alt={data.name}
                                    className="img-fluid" // Makes the image responsive
                                />
                                <div className={`${styles.info} mt-auto d-flex flex-column align-items-start`}> {/* Align info to the left */}
                                    <h3 className="text-left">{data.name}</h3>
                                    <p className="text-left">
                                        <strong>Location:</strong> {data.location}<br />
                                    </p>
                                    <Link className="btn btn-primary mt-2" to={`/DestinationsDetail/${data.id}`}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <Link className="btn btn-primary" to="/Destinations">
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
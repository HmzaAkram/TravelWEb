import React from 'react';
import { Link } from 'react-router-dom';
import TransportData from './Travel.js';  // Ensure correct import of transport data
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

const TransportCard = () => {
    const shuffledTransport = shuffleArray(TransportData);

    if (!shuffledTransport || shuffledTransport.length === 0) {
        return <p>No transport data available</p>;
    }

    return (
        <div className="gallery-content-6 py-5">
            <div className="container py-lg-5">
                <div className="title-content mb-lg-5 mb-4">
                    <span className="sub-title">Top Transports</span>
                    <h3 className="hny-title">Popular Transport Routes</h3>
                </div>
                <div className="row g-4">
                    {shuffledTransport.slice(0, 6).map((data) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}>
                            <div className={`p-3 ${styles.card} h-200 d-flex flex-column`}>
                                <img
                                    src={data.transport[0].details.images[0]}
                                    alt={data.transport[0].details.airline}
                                    className="img-fluid"
                                />
                                <div className={`${styles.info} mt-auto d-flex flex-column align-items-start`}>
                                    <h3>From {data.origin} to {data.destination}</h3>
                                    <p><strong>Type:</strong> {data.transport[0].type}</p>
                                    <p><strong>Airline:</strong> {data.transport[0].details.airline}</p>
                                    <Link className="btn btn-primary mt-2" to={`/TransportDetail/${data.id}`}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <Link className="btn btn-primary" to="/Transport">
                    View More
                </Link>
            </div>
        </div>
    );
};

export default TransportCard;
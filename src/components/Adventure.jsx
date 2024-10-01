import React from 'react'
import { adventure_packages } from './Package'
import styles from "./cardcomp.module.css"
import { Link } from 'react-router-dom'

const Adventure = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="row g-4"> {/* g-4 for consistent vertical and horizontal gap */}
                    {adventure_packages.length > 0 ? (
                        adventure_packages.map((data) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}> {/* Responsive columns */}
                                <div className={`p-3 ${styles.card} h-120 d-flex flex-column`}> {/* Ensure card takes full height */}
                                    <img
                                        src={data.accommodation.img}
                                        alt={data.package_name} // Use package_name for better accessibility
                                        className="img-fluid" // Makes image responsive
                                    />
                                    <div className={`${styles.info} mt-auto`}> {/* Push info to the bottom */}
                                        <h3 className="text-left">{data.package_name}</h3>
                                        <p>{data.brief_details}</p>
                                        <Link className="btn btn-primary" to={`/adventurePackage/adventure_packages/${data.id}`}>
                                        View Details
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No adventure packages available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Adventure;

import React, { useState } from 'react';
import { family_packages } from './Package';
import styles from "./cardcomp.module.css";
import { Link } from 'react-router-dom';

const Family = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State for search term

    // Filter family_packages based on search term
    const filteredPackages = family_packages.filter((data) => 
      data.package_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      data.brief_details.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className='mt-5'>
            {/* Search Bar Below Slider Video */}
      <div style={{ 
          position: 'absolute', 
          top: '10%', // Adjust as needed
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 1000 // Ensure it's on top
        }}>
      </div>
            <div className="container">
                <div className="row g-4"> {/* Use Bootstrap's g-4 for gaps */}
                    {family_packages.length > 0 ? (
                        family_packages.map((data) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}> {/* Responsive columns */}
                                <div className={`p-3 ${styles.card} h-120 d-flex flex-column`}> {/* Ensure card takes full height */}
                                    <img
                                        src={data.accommodation.img}
                                        alt={data.package_name}
                                        className="img-fluid" // Makes the image responsive
                                    />
                                    <div className={`${styles.info} mt-auto`}> {/* Push info to the bottom */}
                                        <h3 className="text-left">{data.package_name}</h3>
                                        <p>{data.brief_details}</p>
                                        <Link className="btn btn-primary" to={`/familyDetail/family_packages/${data.id}`}>
                    View Details
                  </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No accommodation data available for the selected country and city.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Family;
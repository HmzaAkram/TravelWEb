import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { family_packages, adventure_packages, luxury_packages } from './Package';
import imga from "/assets/images/ab1.jpg";

const FamilyDetailPage = () => {
  const { id, catg } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    if (catg === "family_packages") {
      setData(family_packages[id - 1]);
    } else if (catg === "adventure_packages") {
      setData(adventure_packages[id - 1]);
    } else {
      setData(luxury_packages[id - 1]);
    }
  }, [id, catg]);

  return (
    <div className="container mt-4">
      <Row>
        <Col md={6}>
          <div className="d-flex flex-column align-items-center">
            <img src={data ? data.accommodation.img : imga} alt={data ? data.accommodation.hotel_name : ""} style={{ width: 500, height: 400 }} />
          </div>
        </Col>
        <Col md={6}>
          <Card style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title>{data ? data.package_name : ""}</Card.Title>
              <Card.Text>
                <strong>City: </strong> {data ? data.country : ""}<br /><br />
                <strong>Description: </strong> {data ? data.brief_details : ""}<br /><br />
                <strong>Accommodation</strong><br />
                <strong>Hotel: </strong>{data ? data.accommodation.hotel_name : ""}<br />
                <strong>Rating: </strong>{data ? data.accommodation.hotel_rating : ""}<br /><br />
                <strong>Destinations:</strong><br />
                <ul>
                  {data && data.destinations.map((destination, index) => (
                    <li key={index}>{destination}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const Package = () => {
  return (
    <>
      <FamilyDetailPage />
      {/* <AdventurePackage />
      <LuxuryPackage /> */}
    </>
  );
};

export default Package;

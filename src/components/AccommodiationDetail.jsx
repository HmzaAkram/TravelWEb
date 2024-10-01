import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Accommodation from './Accommodations.js'; // Ensure you import the data correctly

const AccommodiationDetail = () => {
  const { id } = useParams();
  console.log('URL id:', id); // Logs the id from the URL

  // Find the data based on the id from the URL
  const data = Accommodation.find(item => item.id === parseInt(id));
  console.log('data:', data);

  // Ensure data is available before rendering
  if (!data) {
    return <p>No accommodation data available</p>;
  }

  return (
    <div className="container mt-4">
      <Row>
        <Col md={6}>
          {/* Image Gallery */}
          <div className="d-flex flex-column align-items-center">
            <img src={data.image[0]} alt={data.name} className="img-fluid mb-3" />
            {data.image[1] && (
              <img src={data.image[1]} alt={`${data.name} second`} className="img-fluid" />
            )}
          </div>
        </Col>
        <Col md={6}>
          {/* Accommodation Details */}
          <Card style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <strong>City:</strong> {data.city}<br />
                <strong>Country:</strong> {data.country}<br />
                <strong>Location:</strong> {data.location}<br />
                <strong>Category:</strong> {data.category}<br />
                <strong>Type:</strong> {data.type}<br />
                <strong>Rating:</strong> {data.rating} ⭐<br />
                <strong>Price Per Night:</strong> ${data.pricePerNight}<br />
                <strong>Highlights:</strong>
                <ul>
                  {data.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
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

export default AccommodiationDetail;
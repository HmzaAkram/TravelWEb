import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import TransportData from './Travel.js'; // Ensure you import the transport data correctly

const TransportDetail = () => {
  const { id } = useParams();
  console.log('URL id:', id); // Logs the id from the URL

  // Find the transport data based on the id from the URL
  const data = TransportData.find(item => item.id === parseInt(id));
  console.log('data:', data);

  // Ensure data is available before rendering
  if (!data) {
    return <p>No transport data available</p>;
  }

  return (
    <div className="container mt-4">
      <Row>
        <Col md={6}>
          {/* Image placeholder or additional details */}
          <div className="d-flex flex-column align-items-center">
            {/* You can add transport-related images here if available */}
            <img
                  src={data.transport[0].details.images[0]}
                  alt={data.transport[0].details.airline}
                />
          </div>
        </Col>
        <Col md={6}>
          {/* Transport Details */}
          <Card style={{ height: '100%' }}>
            <Card.Body>
              <Card.Title>{data.origin} to {data.destination}</Card.Title>
              <Card.Text>
                {data.transport.map((transportItem, index) => (
                  <div key={index}>
                    <strong>Transport Type:</strong> {transportItem.type}<br />
                    <strong>Airline:</strong> {transportItem.details.airline}<br />
                    <strong>Departure:</strong> {transportItem.details.departure}<br />
                    <strong>Arrival:</strong> {transportItem.details.arrival}<br />
                    <strong>Price:</strong> ${transportItem.details.price}<br />
                    <strong>Duration:</strong> {transportItem.details.duration}<br />
                    <strong>Nearest Airport:</strong> {transportItem.details.nearestAirport}<br />
                  </div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TransportDetail;
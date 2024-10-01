import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Destination from './destinations.js'; // Ensure you import the data correctly
const DestinationsDetail = () => {
  const { id } = useParams();
  console.log('URL id:', id); // Logs the id from the URL

  // Find the data based on the id from the URL
  const data = Destination.find(item => item.id === parseInt(id));
  console.log('data:', data);

  // Ensure data is available before rendering
  if (!data) {
    return <p>No Destinations data available</p>;
  }

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcrumb-area">
        <Container>
          <Row>
            <Col md={12}>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/"><i className="fa fa-home"></i> Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Detail
                  </li>
                </ol>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Single Product Details */}
      <section className="single_product_details_area mb-50 mt-5">
        <div className="produts-details--content mb-50">
          <Container>
            <Row className="justify-content-between">
              <Col md={6}>
                {/* Image Gallery */}
                <div className="d-flex flex-column align-items-center">
                  <img src={data.image[1]} alt={data.name} className="img-fluid mb-3" />
                  {data.image[1] && (
                    <img src={data.image[1]} alt={`${data.name} second`} className="img-fluid" />
                  )}
                </div>
              </Col>
              <Col md={6}>
                {/* Destinations Details */}
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
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Related Products */}
      <div className="related-products-area">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center">
                <h2>Related Products</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {/* Related products will be dynamically inserted here */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DestinationsDetail;
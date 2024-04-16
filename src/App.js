import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMapGL from "react-map-gl";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

function App() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-84.4521678);
  const [lat, setLat] = useState(42.7320307);
  const [zoom, setZoom] = useState(10);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <Navbar bg="dark" expand="lg" className="nav-contents">
          <Navbar.Brand>brand</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/home">Sign Up/ Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </header>
      <br></br>
      <Container fluid>
        <Row>
          <Col className="search-col" md="4">
            LOCATION
          </Col>
          <Col className="search-col" md="1">
            $ PRICE
          </Col>
          <Col className="search-col" md="1">
            BEDROOMS
          </Col>
          <Col className="search-col" md="2">
            MOVE-IN DATE
          </Col>
          <Col className="search-col" md="1">
            ALL FILTERS
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container fluid>
        <Row>
          <Col className="search-col" md="7">
            <div>
              <div ref={mapContainer} className="map-container" />
            </div>
          </Col>
          <Col className="search-col" md="4">
            apatments
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

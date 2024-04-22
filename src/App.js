import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { Dropdown, DropdownButton, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faDollarSign,
  faBed,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import GetApt from "./GetApt";

function App() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [selectedLoco, setSelectLoco] = useState("East Lansing");

  const locations = {
    "East Lansing": { lat: 42.737, long: -84.483788 },
    Kalamazoo: { lat: 42.299152, long: -85.591736 },
    "Royal Oak": { lat: 42.4867, long: -83.139 },
  };

  const [zoom] = useState(12);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [locations[selectedLoco].long, locations[selectedLoco].lat],
        zoom: zoom,
      });
    } else {
      map.current.flyTo({
        center: [locations[selectedLoco].long, locations[selectedLoco].lat],
        essential: true,
      });
    }
    // eslint-disable-next-line
  }, [selectedLoco, zoom]);

  const locoChange = (value) => {
    setSelectLoco(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <Navbar expand="lg" className="nav-contents">
          <Navbar.Brand className="text-white">
            Reactify MI Apartments
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="#" className="text-white">
                Sign Up/ Sign In
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </header>
      <br></br>
      <Container fluid>
        <Row>
          <Col className="search-col d grid" md="4">
            <DropdownButton
              title={
                <span className="text-left">
                  <FontAwesomeIcon icon={faSearch} /> SELECT A LOCATION
                </span>
              }
              onSelect={locoChange}
              className="d-grid w-100"
              id="filterButton"
            >
              <Dropdown.Item eventKey="East Lansing" className="w-100">
                East Lansing
              </Dropdown.Item>
              <Dropdown.Item eventKey="Kalamazoo" className="w-100">
                Kalamazoo
              </Dropdown.Item>
              <Dropdown.Item eventKey="Royal Oak" className="w-100">
                Royal Oak
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="search-col d-grid" md="2">
            <DropdownButton
              title={
                <span className="text-left">
                  <FontAwesomeIcon icon={faDollarSign} /> PRICE
                </span>
              }
              className="d-grid"
              id="filterButton"
            >
              <Form>
                <Form.Group>
                  <Form.Label> Min Price :</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter minimum price"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Max Price :</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter maximum price"
                  />
                </Form.Group>
              </Form>
            </DropdownButton>
          </Col>
          <Col className="search-col d-grid" md="2">
            <Dropdown className="d-grid">
              <Dropdown.Toggle id="filterButton">
                {" "}
                <FontAwesomeIcon icon={faBed} /> BEDROOMS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form>
                  <Form.Check type="checkbox" label="Studio"></Form.Check>
                  <Form.Check type="checkbox" label="1 Bedroom"></Form.Check>
                  <Form.Check type="checkbox" label="2 Bedroom"></Form.Check>
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md="2">
            <Button id="filterButton">
              <FontAwesomeIcon icon={faSliders} /> ALL FILTERS
            </Button>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container fluid>
        <Row>
          <Col className="search-col d-grid" md="8">
            <div>
              <div ref={mapContainer} className="map-container" />
            </div>
          </Col>
          <Col className="search-col d-grid" md="4">
            <GetApt selectedLoco={selectedLoco} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

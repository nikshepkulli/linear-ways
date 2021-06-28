import logo from "./logo.svg";
import "./App.css";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MathComponent } from "mathjax-react";
import React, { useState } from "react";

function App() {
  const [coil, setCoil] = useState("");
  const [amp, setAmp] = useState("");
  const [area, setArea] = useState("");
  const [solgap, setSolgap] = useState("");
  const [show, setShow] = useState(true);

  const handleCoilChange = (event) => {
    setCoil(event.target.value);
  };
  const handleAmpChange = (event) => {
    setAmp(event.target.value);
  };
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };
  const handleSolgapChange = (event) => {
    setSolgap(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (coil && amp && area && solgap != "") {
      setShow(true);
    } else {
      alert("Form is null");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Alert show={show} variant="success">
            <Alert.Heading>Result is ready!!</Alert.Heading>
            <p>
              $
              {(Math.pow(coil * amp, 2) *
                (4 * Math.PI) *
                Math.pow(10, -7) *
                area) /
                (2 * Math.pow(solgap, 2))}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me y'all!
              </Button>
            </div>
          </Alert>
        </>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Linear ways calaculator page</p>
        <p>Here you can Calculate the Force of an Electromagnet</p>
        <MathComponent
          tex={String.raw`F = \frac{(N × I)^2×\mu_{0}×A}{2g^{2}}`}
        />

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>N - No of turns: </Form.Label>
            <Col>
              <Form.Control
                type="coil"
                value={coil}
                placeholder="No of turns for coil"
                onChange={handleCoilChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>I - Current in Amp's: </Form.Label>
            <Col>
              <Form.Control
                type="amp"
                placeholder="Curent in Amp's"
                value={amp}
                onChange={handleAmpChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>A - Area in length units squared: </Form.Label>
            <Col>
              <Form.Control
                type="area"
                placeholder="Area in meters"
                value={area}
                onChange={handleAreaChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>
              g - length of the gap between the solenoid and a piece of metal:
            </Form.Label>
            <Col>
              <Form.Control
                type="solgap"
                placeholder="In meters"
                value={solgap}
                onChange={handleSolgapChange}
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Calculate
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;

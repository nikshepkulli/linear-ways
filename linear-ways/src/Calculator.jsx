import { MathComponent } from "mathjax-react";
import { Form, Button, Row, Col } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class calculator extends React.Component {
  handleClick = (value) => () => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <p>Welcome to Linear ways calaculator page</p>
        <p>Here you can Calculate the Force of an Electromagnet</p>
        <MathComponent
          tex={String.raw`F = \frac{(N × I)^2×\mu_{0}×A}{2g^{2}}`}
        />

        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>N - No of turns: </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="No of turns for coil"
                srOnly
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>I - Current in Amp's: </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Curent in Amp's" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>A - Area in length units squared: </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Area in meters" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>
              g - length of the gap between the solenoid and a piece of metal:{" "}
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="In meters" />
            </Col>
          </Form.Group>
          <Button variant="primary" onClick={this.handlClick("Bar")}>
            Calculate
          </Button>
        </Form>
      </div>
    );
  }
}
export default calculator;

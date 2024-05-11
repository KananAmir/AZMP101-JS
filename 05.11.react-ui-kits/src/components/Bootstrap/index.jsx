import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const BootstrapUlKit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Row>
        <Col>
          <Button variant={"warning"}>Primary</Button> <hr />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <div>
            <hr />
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <hr />
            <Button variant="primary" onClick={handleShow}>
              Launch static backdrop modal
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                I will not close if you click outside me. Do not even try to
                press escape key.
              </Modal.Body>
              {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
            </Modal>
          </div>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col style={{ border: "1px solid" }}>1</Col>
        <Col style={{ border: "1px solid" }}>1</Col>
        <Col style={{ border: "1px solid" }}>1</Col>
        <Col style={{ border: "1px solid" }}>1</Col>
      </Row>
      <hr />
      <Row>
        <Col sm={12} md={6} lg={3} style={{ border: "1px solid" }}>
          1
        </Col>
        <Col sm={12} md={6} lg={3} style={{ border: "1px solid" }}>
          1
        </Col>
        <Col sm={12} md={6} lg={3} style={{ border: "1px solid" }}>
          1
        </Col>
        <Col sm={12} md={6} lg={3} style={{ border: "1px solid" }}>
          1
        </Col>
      </Row>

      <hr />

      <Row>
        <Col style={{ border: "1px solid" }} sm={6}>
          6
        </Col>
        <Col style={{ border: "1px solid" }}>3</Col>
        <Col style={{ border: "1px solid" }}>3</Col>
      </Row>
    </Container>
  );
};

export default BootstrapUlKit;

import { Button, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormOne = () => {
  return (
    <div className="App formOne">
      <h1>FORM</h1>
      <Form>
        <Form.Group className="mb-2">
          <Row>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="First name" required />
          </Row>
          <Row>
            <Form.Label>Surname</Form.Label>
            <Form.Control placeholder="Second name" required />
          </Row>
          <Row>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Row>
          <Row>
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              name="name"
              id="name"
              placeholder="Date of Birth"
              required
            />
          </Row>
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormOne;

import "./App.css";
import { Button, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>FORM</h1>
      <Form>
        <Form.Group className="mb-2">
          <Row>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="First name" />
          </Row>
          <Row>
            <Form.Label>Surname</Form.Label>
            <Form.Control placeholder="Second name" />
          </Row>
          <Row>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Row>
          <Row>
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
          </Row>
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;

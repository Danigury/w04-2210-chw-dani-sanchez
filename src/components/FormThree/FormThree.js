import { Button, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormThree = () => {
  return (
    <form>
      <div className="App formThree">
        <h1>FORM</h1>

        <Form.Group className="mb-2">
          <Row>
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Username" required />
          </Row>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Row>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control type="" placeholder="Repeat Password" />
          </Row>
        </Form.Group>
      </div>
    </form>
  );
};

export default FormThree;

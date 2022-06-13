import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Form, Row, Col, Button } from 'react-bootstrap';
import "../styles/Signup.css";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // navigate to the home page
    return <Navigate to="/" replace />
  }
  return (
    <div className="signup-cont">
      <div className="signup-box">

        <div className="form-cont">
          <h1 className="signup-title">Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
              <Form.Label className="form-label">
                Username
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  autoFocus
                  disabled={loading}
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={formState.username.value}
                  onChange={handleInputChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label className="form-label">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  disabled={loading}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formState.email.value}
                  onChange={handleInputChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label className="form-label">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  disabled={loading}
                  id="new-password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formState.password.value}
                  onChange={handleInputChange} />
              </Col>
            </Form.Group>
            <Button className="signup-btn" variant="outline-primary" disabled={loading} type="submit">{loading ? "Loading..." : "Sign Up"}</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

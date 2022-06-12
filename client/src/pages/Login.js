import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../styles/Login.css';

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
// const styles = {
//   formControl: {
//     display: "flex",
//     padding: "0.25em",
//   },
//   label: {
//     flex: "0 1 6em",
//     paddingRight: "0.25em",
//   },
// };

const initialFormState = {
  email: "",
  password: "",
};

export default function Login() {
  const { isLoggedIn, login, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);
  const location = useLocation();

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formState);
  };

  if (isLoggedIn) {
    // navigate to page user was redirected from or the home page.
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />
  }

  return (
    <div className="login-cont">
      <div className="login-box">

        <div className="form-cont">
          <h1 className="login-title">Login</h1>
          <Form onSubmit={handleSubmit}>
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
            <Button className="login-btn" variant="outline-primary" disabled={loading} type="submit">{loading ? "Loading..." : "Login"}</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

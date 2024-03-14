import { Card, Form, InputGroup } from "react-bootstrap";
import React, {useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col,Container } from "react-bootstrap";
import * as yup from "yup";
import { ErrorMessage, Formik } from "formik";
import { PiPasswordFill } from "react-icons/pi";
import { IoEnterSharp } from "react-icons/io5";
import { PiUserFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";
import Swal from 'sweetalert2';
import './LoginSignUp.css'

function LoginSignUp() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('UserName is required'),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
 
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("submit");
    const data = {
      username: user.username,
      password: user.password,
    };
    sessionStorage.setItem("username", user.username)
    console.log(data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have sucsessfully logged in ",
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/allprodect")
  };
  return (
    <Container fluid className="login-sign-up-background">
      <Formik
        initialValues={user}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange }) => (
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
            <Card className="login-option">
                <Row>
                  <Col md={5}></Col>
                  <Col md={6}><h1 className="user"><PiUserCircleDuotone /></h1></Col>
                  <Col md={6}></Col>
                </Row>
                <Row>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <Form noValidate className="card">
                      <InputGroup.Text>
                        <Form.Control
                          className="family"
                          placeholder="Username"
                          type="text"
                          name="username"
                          value={user.username}
                          onChange={(e) => {
                            handleInput(e);
                            handleChange(e);
                          }}
                        />
                        <PiUserFill />
                        &nbsp;
                      </InputGroup.Text>
                    </Form>
                    <ErrorMessage name="username" className="text-danger" />
                  </Col>
                  <Col md={3}></Col>
                </Row>
                <Row>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <Form noValidate className="form">
                      <br/><InputGroup.Text>
                        <Form.Control
                          placeholder="Password"
                          className="family"
                          type="text"
                          name="password"
                          value={user.password}
                          onChange={(e) => {
                            handleInput(e);
                            handleChange(e);
                          }}
                        />
                        &nbsp;
                        <PiPasswordFill />
                      </InputGroup.Text>
                      <ErrorMessage name="password" className="text-danger" />
                    </Form>
                  </Col>
                  <Col md={3}></Col>
                </Row>
                <Row>
                  <Col md={3}></Col>

                  <Col md={6}>
                    <br/>
                    <br/>
                    <Button
                    className="sbtn"
                      variant="success"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      <IoEnterSharp />&nbsp;
                      Submit
                    </Button>
                  </Col>
                  <Col md={6}></Col>
                </Row>

                <br />
              </Card>
            </Col>
            <Col MD={6}>

            </Col>
          <Col md={3}></Col>
          </Row>
        )}
      </Formik>
    </Container>
  );
}

export default LoginSignUp;

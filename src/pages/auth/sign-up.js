import React, { useState, useContext } from 'react';
import { httpPostRequest } from '../../helpers/networkRequestHelper';
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login"
import ErrorPreviewer from '../../components/common/ErrorPreviewer';
import { AppContext } from '../../store';

const SignUp = () => {
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [formErrors, setFormErrors] = useState([])
  const { state, setState } = useContext(AppContext)

  const handleSignUpClick = async () => {
    setFormErrors([])

    let res = await httpPostRequest({
      url: 'user/signup',
      body: {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }
    })
    console.log(res.message)

    if (res.error) {
      setFormErrors(res.errors)

      return
    }

    localStorage.setItem('TOKEN', res.data.token)
    setState({ user: res.data.user })
    window.location.replace('/home')
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Register to Food Court!</h5>
                        <p>Sign up to continue.</p>
                      </div>
                    </Col>

                  </Row>
                </div>
                <CardBody className="pt-0">

                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                    >
                      <div className="mb-3">
                        <Label>Name</Label>
                        <Input
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          placeholder="Enter name"
                          type="text"
                        />
                      </div>
                      <div className="mb-3">
                        <Label>Email</Label>
                        <Input
                          name="email"
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="Enter email"
                          type="text"
                        />
                      </div>

                      <div className="mb-3">
                        <Label>Password</Label>
                        <Input
                          name="password"
                          label="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mb-3">
                        <Label>Password Confirm</Label>
                        <Input
                          name="confirm-password"
                          label="Re-enter Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          type="password"
                          placeholder="Re-enter Password"
                        />
                      </div>
                      <ErrorPreviewer errors={formErrors} />
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="button"
                          onClick={() => handleSignUpClick()}
                        >
                          Sign Up
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign up with</h5>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            {/* <GoogleLogin
                              clientId={'37361668095-bhna113hnh345ot5rpj7ddhfcubsr6sa.apps.googleusercontent.com'}
                              render={renderProps => (
                                <Link
                                  to="#"
                                  className="social-list-item bg-danger text-white border-danger"
                                  onClick={renderProps.onClick}
                                >
                                  <i className="mdi mdi-google" />
                                </Link>
                              )}
                              onSuccess={OnGoogleLoginSuccess}
                              onFailure={() => { }}
                            /> */}
                          </li>
                        </ul>
                      </div>


                    </Form>
                  </div>
                </CardBody>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default SignUp;

import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { httpPostRequest } from '../../helpers/networkRequestHelper';
import { AppContext } from '../../store';
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"
import { GoogleLogin } from "react-google-login"
import ErrorPreviewer from '../../components/common/ErrorPreviewer';
import toastr from "toastr"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors, setFormErrors] = useState([])
  const [rememberMe, setRememberMe] = useState(false)
  const { state, setState } = useContext(AppContext)

  const handleLoginPress = async () => {
    setFormErrors([])

    let res = await httpPostRequest({
      url: 'user/login',
      body: {
        email: email,
        password: password,
      }
    })

    if (res.error) {
      setFormErrors(res.errors)
      return
    }

    startUserSession(res.data.token, res.data.user)
  }

  const startUserSession = (token, user) => {
    localStorage.setItem('TOKEN', token)
    setState({ user: { ...state.user, name: 'updated name' } })
    window.location.replace('/')
  }

  const onGoogleLoginSuccess = async (response) => {
    let res = await httpPostRequest({
      url: 'user/googlelogin',
      body: {
        tokenID: response.tokenId
      }
    })

    if (res.error) {
      toastr.error("User signup failed!", "Error!")

      return
    }

    startUserSession(res.data.token, res.data.user)
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
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue.</p>
                      </div>
                    </Col>

                  </Row>
                </div>
                <CardBody className="pt-0">

                  <div className="p-2">
                    <Form
                      className="form-horizontal"

                    ><div className="mb-3">
                        <Label>Email</Label>
                        <Input
                          name="email"
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
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
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                          value={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>
                      <ErrorPreviewer errors={formErrors} />
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="button"
                          onClick={() => handleLoginPress()}
                        >
                          Log In
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <GoogleLogin
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
                              onSuccess={onGoogleLoginSuccess}
                              onFailure={() => { }}
                            />
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          Forgot your password?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link
                    to="sign-up"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Login;

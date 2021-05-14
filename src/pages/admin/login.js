import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { httpPostRequest } from '../../helpers/networkRequestHelper';
import { AppContext } from '../../store';
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"
import ErrorPreviewer from '../../components/common/ErrorPreviewer';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors, setFormErrors] = useState([])
  const { state, setState } = useContext(AppContext)

  const handleLoginPress = async () => {
    setFormErrors([])

    let res = await httpPostRequest({
      url: 'admin/login',
      body: {
        email: email,
        password: password,
      }
    })
    if (res.error) {
      setFormErrors(res.errors)
      return
    }

    setState({ user: res.data.user })
    window.location.replace('/admin/products')
    
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

export default Login;

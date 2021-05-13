import React, { useState } from 'react'
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"
import { Link } from "react-router-dom";
import { httpPostRequest } from '../../helpers/networkRequestHelper';
import ErrorPreviewer from '../../components/common/ErrorPreviewer';
import toastr from "toastr"

const ForgetPw = () => {
  const [email, setEmail] = useState('')
  const [formErrors, setFormErrors] = useState([])

  const handleSubmit = async (e) => {
    setFormErrors([])

    let res = await httpPostRequest({
      url: 'user/forgot-pw',
      body: {
        email: email,
      }
    })

    if (res.error) {
      setFormErrors(res.errors)
      return
    }

    toastr.success("Please check your email for reset password link.", "Success!")
    setEmail('')
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
                        <h5 className="text-primary">Forgot Password!</h5>
                        <p>Enter email to continue.</p>
                      </div>
                    </Col>

                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                    >
                      <Label>Email</Label>
                      <div className="mb-3">
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
                      <ErrorPreviewer errors={formErrors} />
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="button"
                          onClick={() => handleSubmit()}
                        >
                          Send reset password email
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

export default ForgetPw;




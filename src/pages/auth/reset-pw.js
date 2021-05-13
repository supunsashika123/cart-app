import React, { useState } from 'react'
import { httpPostRequest } from '../../helpers/networkRequestHelper';
import { useParams } from 'react-router';
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"
import { Link } from "react-router-dom";
import toastr from "toastr"


const ResetPw = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async () => {
    let res = await httpPostRequest({
      url: "user/reset-pw/" + token,
      body: {
        password: password,
        confirmPassword: confirmPassword
      }
    })

    if (res.error) {
      toastr.error(res.errors[0].msg, "Error!")
      return
    }

    toastr.success("Password reset success. Please login to continue.", "Success!")
    setTimeout(() => {
      window.location.replace("/login")
    }, 1000);
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
                      <div className="mb-3">
                        <Label>New Password</Label>
                        <Input
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          placeholder="Enter New Password"
                          type="password"
                        />
                      </div>
                      <div className="mb-3">
                        <Label>Confirm Password</Label>
                        <Input
                          name="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="form-control"
                          placeholder="Re-enter New Password"
                          type="password"
                        />
                      </div>
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="button"
                          onClick={() => handleSubmit()}
                        >
                          Update password
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

export default ResetPw;




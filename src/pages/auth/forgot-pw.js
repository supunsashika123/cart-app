import React, { useState } from 'react'
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"
import { Link } from "react-router-dom";
import { httpPostRequest } from '../../helpers/networkRequestHelper';

const initialState = { email: '' }

const ForgetPw = () => {

  const [formData, setFormData] = useState(initialState)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let res = await httpPostRequest({
      url: 'user/forget-pw',
      body: {
        email: formData.email,
      }
    })


  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    // <div>

    //   <form onSubmit={handleSubmit}>


    //     <input
    //       type="text"
    //       name="email"
    //       placeholder="Email"
    //       onChange={handleChange}
    //       required
    //     />


    //     <button type="submit">Send</button>

    //   </form>


    // </div>


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
                          type="email"
                          required
                        />
                      </div>
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
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




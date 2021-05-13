import React, { useState, useEffect } from 'react'
import { httpGetRequest } from '../../helpers/networkRequestHelper';
import { useParams } from 'react-router';
import { Row, Col, CardBody, Card, Label, Container, Form, Input } from "reactstrap"
import { Link } from "react-router-dom";

const initialState = { email: '', password: '' }

const ResetPw = () => {
  const { token } = useParams();

  const [formData, setFormData] = useState(initialState)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    const handle = async () => {
      let res = await httpGetRequest({
        url: 'user/reset?token=' + token,
      })
      console.log(res);
    }
    handle();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    // axios({
    //     method: "POST",
    //     url: "http://localhost:4001/user/login",
    //     data: { 
    //         email : formData.email,
    //         password : formData.password,
    //     }
    // },{
    //     headers: {"Access-Control-Allow-Origin": "*"}
    // }
    // ).then(response => {
    //     console.log(response)
    // })
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }


  return (
    // <div>

    //     <form onSubmit={handleSubmit}>


    //         <input
    //             type="text"
    //             name="password"
    //             placeholder="password"
    //             onChange={handleChange}
    //             required
    //         />
    //          <input
    //             type="text"
    //             name="rePassword"
    //             placeholder="ReEnterpassword"
    //             onChange={handleChange}
    //             required
    //         />


    //         <button type="submit">Reset Password</button>

    //     </form>


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
                      <div className="mb-3">
                        <Label>New Password</Label>
                        <Input
                          name="password"
                          label="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          placeholder="Enter New Password"
                          type="password"
                          required
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
                          required
                        />
                      </div>
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
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




import React, { useEffect, useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Table,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { httpGetRequest } from "../helpers/networkRequestHelper";
import { AppContext } from '../store';

const Cart = () => {

  const { state, setState } = useContext(AppContext)

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    let res = await httpGetRequest({
      url: "cart"
    })

    setState({ cart: res.data })

  }

  const countUP = () => {


  }

  const countDown = () => {

  }

  console.log(state)
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lx="8">
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table align-middle mb-0 table-nowrap">
                      <thead className="thead-light">
                        <tr>
                          <th>Product</th>
                          <th>Product Desc</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th colSpan="2">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.cart && state.cart.items && state.cart.items.map((foodItem) => (
                          <tr key={foodItem.item._id}>
                            <td>
                              <img
                                src={foodItem.item.image}
                                alt="product-img"
                                title="product-img"
                                className="avatar-md"
                              />
                            </td>
                            <td>
                              <h5 className="font-size-14 text-truncate">
                                <Link
                                  to={"/food/" + foodItem.item._id}
                                  className="text-dark"
                                >
                                  {foodItem.item.name}
                                </Link>
                              </h5>

                            </td>
                            <td>LKR {foodItem.item.price}</td>
                            <td>
                              <div style={{ width: "120px" }}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <Button
                                      color="primary"
                                      onClick={() => {
                                        this.countUP(
                                          foodItem._id,
                                          foodItem.data_attr
                                        );
                                      }}
                                    >
                                      +
                                    </Button>
                                  </InputGroupAddon>
                                  <Input
                                    type="text"
                                    value={foodItem.qty}
                                    name="demo_vertical"
                                    readOnly
                                  />
                                  <InputGroupAddon addonType="append">
                                    <Button
                                      color="primary"
                                      onClick={() => {
                                        this.countDown(
                                          foodItem._id,
                                          foodItem.data_attr
                                        );
                                      }}
                                    >
                                      -
                                    </Button>
                                  </InputGroupAddon>
                                </InputGroup>
                              </div>
                            </td>
                            <td>LKR {foodItem.qty * foodItem.item.price}</td>
                            <td>
                              <Link
                                to="#"
                                onClick={() => this.removeCartItem(foodItem.id)}
                                className="action-icon text-danger"
                              >
                                {" "}
                                <i className="mdi mdi-trash-can font-size-18" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <Row className="mt-4">
                    <Col sm="6">
                      <Link
                        to="/"
                        className="btn btn-secondary"
                      >
                        <i className="mdi mdi-arrow-left me-1" /> Continue
                        Shopping{" "}
                      </Link>
                    </Col>
                    <Col sm="6">
                      <div className="text-sm-end mt-2 mt-sm-0">
                        <Link
                          to="/ecommerce-checkout"
                          className="btn btn-success"
                        >
                          <i className="mdi mdi-cart-arrow-right me-1" />{" "}
                          Checkout{" "}
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">

              <Card>
                <CardBody>
                  <CardTitle className="mb-3 h4">Order Summary</CardTitle>

                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>Grand Total :</td>
                          <td>LKR {state.cart.total}</td>
                        </tr>
                        <tr>
                          <td>Discount :</td>
                          <td>LKR 0</td>
                        </tr>
                        <tr>
                          <td>Shipping Charge :</td>
                          <td>LKR 0</td>
                        </tr>
                        <tr>
                          <td>Estimated Tax :</td>
                          <td>LKR 0</td>
                        </tr>
                        <tr>
                          <th>Total :</th>
                          <td>LKR {state.cart.total}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>



                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Cart;

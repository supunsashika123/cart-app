import React, { useState } from "react";
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

const Cart = () => {
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
                        {/* {map(productList, (product) => (
                          <tr key={product.id}>
                            <td>
                              <img
                                src={images[product.img]}
                                alt="product-img"
                                title="product-img"
                                className="avatar-md"
                              />
                            </td>
                            <td>
                              <h5 className="font-size-14 text-truncate">
                                <Link
                                  to={"/ecommerce-products/" + product.id}
                                  className="text-dark"
                                >
                                  {product.name}
                                </Link>
                              </h5>
                              <p className="mb-0">
                                Color :{" "}
                                <span className="fw-medium">
                                  {product.color}
                                </span>
                              </p>
                            </td>
                            <td>$ {product.price}</td>
                            <td>
                              <div style={{ width: "120px" }}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <Button
                                      color="primary"
                                      onClick={() => {
                                        this.countUP(
                                          product.id,
                                          product.data_attr
                                        );
                                      }}
                                    >
                                      +
                                    </Button>
                                  </InputGroupAddon>
                                  <Input
                                    type="text"
                                    value={product.data_attr}
                                    name="demo_vertical"
                                    readOnly
                                  />
                                  <InputGroupAddon addonType="append">
                                    <Button
                                      color="primary"
                                      onClick={() => {
                                        this.countDown(
                                          product.id,
                                          product.data_attr
                                        );
                                      }}
                                    >
                                      -
                                    </Button>
                                  </InputGroupAddon>
                                </InputGroup>
                              </div>
                            </td>
                            <td>$ {product.total}</td>
                            <td>
                              <Link
                                to="#"
                                onClick={() => this.removeCartItem(product.id)}
                                className="action-icon text-danger"
                              >
                                {" "}
                                <i className="mdi mdi-trash-can font-size-18" />
                              </Link>
                            </td>
                          </tr>
                        ))} */}

                      
                          <tr key="">
                            <td>
                              <img
                                src=""
                                alt="product-img"
                                title="product-img"
                                className="avatar-md"
                              />
                            </td>
                            <td>
                              <h5 className="font-size-14 text-truncate">
                                <Link
                                  to={"/ecommerce-products/" }
                                  className="text-dark"
                                >
                                  name
                                </Link>
                              </h5>
                              <p className="mb-0">
                                Color :{" "}
                                <span className="fw-medium">
                                  color
                                </span>
                              </p>
                            </td>
                            <td>$ 1234</td>
                            <td>
                              <div style={{ width: "120px" }}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <Button
                                      color="primary"
                                    //   onClick={() => {
                                    //     this.countUP(
                                    //       product.id,
                                    //       product.data_attr
                                    //     );
                                    //   }}
                                    >
                                      +
                                    </Button>
                                  </InputGroupAddon>
                                  <Input
                                    type="text"
                                    value="1"
                                    name="demo_vertical"
                                    readOnly
                                  />
                                  <InputGroupAddon addonType="append">
                                    <Button
                                      color="primary"
                                    //   onClick={() => {
                                    //     this.countDown(
                                    //       product.id,
                                    //       product.data_attr
                                    //     );
                                    //   }}
                                    >
                                      -
                                    </Button>
                                  </InputGroupAddon>
                                </InputGroup>
                              </div>
                            </td>
                            <td>$ 1234</td>
                            <td>
                              <Link
                                to="#"
                                // onClick={() => this.removeCartItem(product.id)}
                                className="action-icon text-danger"
                              >
                                {" "}
                                <i className="mdi mdi-trash-can font-size-18" />
                              </Link>
                            </td>
                          </tr>
                       
                      </tbody>
                    </Table>
                  </div>
                  <Row className="mt-4">
                    <Col sm="6">
                      <Link
                        to="/ecommerce-products"
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
                  {/* {orderSummary && (
                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>Grand Total :</td>
                            <td>{orderSummary.grandTotal}</td>
                          </tr>
                          <tr>
                            <td>Discount :</td>
                            <td>- {orderSummary.discount}</td>
                          </tr>
                          <tr>
                            <td>Shipping Charge :</td>
                            <td>{orderSummary.shippingCharge}</td>
                          </tr>
                          <tr>
                            <td>Estimated Tax :</td>
                            <td>{orderSummary.estimatedTax}</td>
                          </tr>
                          <tr>
                            <th>Total :</th>
                            <td>{orderSummary.total}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  )} */}

                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>Grand Total :</td>
                          <td>$ 1,857</td>
                        </tr>
                        <tr>
                          <td>Discount :</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Shipping Charge :</td>
                          <td>$ 25</td>
                        </tr>
                        <tr>
                          <td>Estimated Tax :</td>
                          <td>$ 19.22</td>
                        </tr>
                        <tr>
                          <th>Total :</th>
                          <td>$ 1744.22</td>
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

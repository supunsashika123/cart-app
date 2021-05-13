import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap"
import { productImages } from "../assets/images/product"
import { httpGetRequest } from '../helpers/networkRequestHelper';

const Product = () => {
  const [food, setFood] = useState({})
  const { id } = useParams();

  useEffect(() => {
    fetchFoodItem()
  }, [])

  const fetchFoodItem = async () => {
    let res = await httpGetRequest({
      url: "food/" + id
    })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {food && (
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <Row>
                      <Col xl="6">
                        <div className="product-detai-imgs">
                          <Row>
                            <Col md="2" xs="3">
                              <Nav className="flex-column" pills>
                                <NavItem>
                                  {/* <NavLink
                                    className={classnames({
                                      active: activeTab === "1",
                                    })}
                                    onClick={() => {
                                      toggleTab("1")
                                    }}
                                  > */}
                                  <img
                                    src={food.image}
                                    alt=""
                                    // onClick={() => {
                                    //   imageShow(
                                    //     productImages[product.image],
                                    //     1
                                    //   )
                                    // }}
                                    className="img-fluid mx-auto d-block rounded"
                                  />
                                  {/* </NavLink> */}
                                </NavItem>
                                <NavItem>
                                  {/* <NavLink
                                    className={classnames({
                                      active: activeTab === "2",
                                    })}
                                    onClick={() => {
                                      toggleTab("2")
                                    }}
                                  > */}
                                  <img
                                    src={food.image}
                                    alt=""
                                    // onClick={() => {
                                    //   imageShow(
                                    //     productImages[product.image],
                                    //     2
                                    //   )
                                    // }}
                                    className="img-fluid mx-auto d-block rounded"
                                  />
                                  {/* </NavLink> */}
                                </NavItem>
                                <NavItem>
                                  {/* <NavLink
                                    className={classnames({
                                      active: activeTab === "3",
                                    })}
                                    onClick={() => {
                                      toggleTab("3")
                                    }}
                                  > */}
                                  <img
                                    src={food.image}
                                    alt=""
                                    // onClick={() => {
                                    //   imageShow(
                                    //     productImages[product.image],
                                    //     3
                                    //   )
                                    // }}
                                    className="img-fluid mx-auto d-block rounded"
                                  />
                                  {/* </NavLink> */}
                                </NavItem>
                              </Nav>
                            </Col>
                            <Col md={{ size: 7, offset: 1 }} xs="9">
                              <TabContent activeTab={1}>
                                <TabPane tabId="1">
                                  <div>
                                    <img
                                      src={food.image}
                                      alt=""
                                      id="expandedImg1"
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="2">
                                  <div>
                                    <img
                                      src={food.image}
                                      id="expandedImg2"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="3">
                                  <div>
                                    <img
                                      src={food.image}
                                      id="expandedImg3"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="4">
                                  <div>
                                    <img
                                      src={food.image}
                                      id="expandedImg4"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                              </TabContent>
                              <div className="text-center">
                                <Button
                                  type="button"
                                  color="primary"
                                  className="btn waves-effect waves-light mt-2 me-1"
                                >
                                  <i className="bx bx-cart me-2" /> Add to cart
                              </Button>
                                <Button
                                  type="button"
                                  color="success"
                                  className="ms-1 btn waves-effect  mt-2 waves-light"
                                >
                                  <i className="bx bx-shopping-bag me-2" />
                                Buy now
                              </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>

                      <Col xl="6">
                        <div className="mt-4 mt-xl-3">
                          <Link to="#" className="text-primary">
                            {food.category}
                          </Link>
                          <h4 className="mt-1 mb-3">{food.name}</h4>

                          <div className="text-muted float-start me-3">
                            {/* <StarRatings
                              rating={4}
                              starRatedColor="#F1B44C"
                              starEmptyColor="#2D363F"
                              numberOfStars={5}
                              name="rating"
                              starDimension="14px"
                              starSpacing="3px"
                            /> */}
                          </div>
                          <p className="text-muted mb-4">
                            ( {food.reviews} Customers Review )
                        </p>

                          {!!food.isOffer && (
                            <h6 className="text-success text-uppercase">
                              {food.offer} % Off
                            </h6>
                          )}
                          <h5 className="mb-4">
                            Price :{" "}
                            <span className="text-muted me-2">
                              <del>${food.oldPrice} USD</del>
                            </span>{" "}
                            <b>${food.newPrice} USD</b>
                          </h5>
                          <p className="text-muted mb-4">
                            To achieve this, it would be necessary to have
                            uniform grammar pronunciation and more common words
                            If several languages coalesce
                        </p>
                          <Row className="mb-3">
                            <Col md="6">
                              {food.features &&
                                food.features.map((item, i) => (
                                  <div key={i}>
                                    <p className="text-muted">
                                      <i
                                      // className={classnames(
                                      //   item.icon,
                                      //   "font-size-16 align-middle text-primary me-2"
                                      // )}
                                      />
                                      {item.type && `${item.type}: `}
                                      {item.value}
                                    </p>
                                  </div>
                                ))}
                            </Col>
                            <Col md="6">
                              {food.features &&
                                food.features.map((item, i) => (
                                  <div key={i}>
                                    <p className="text-muted">
                                      <i
                                      // className={classnames(
                                      //   item.icon,
                                      //   "font-size-16 align-middle text-primary me-2"
                                      // )}
                                      />
                                      {item.type && `${item.type}:`}
                                      {item.value}
                                    </p>
                                  </div>
                                ))}
                            </Col>
                          </Row>

                          <div className="product-color">
                            <h5 className="font-size-15">Color :</h5>
                            {food.colorOptions &&
                              food.colorOptions.map((option, i) => (
                                <Link to="#" className="active" key={i}>
                                  <div className="product-color-item border rounded">
                                    <img
                                      src={productImages[option.image]}
                                      alt=""
                                      className="avatar-md"
                                    />
                                  </div>
                                  <p>{option.color}</p>
                                </Link>
                              ))}
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="mt-5">
                      <h5 className="mb-3">Specifications :</h5>

                      <div className="table-responsive">
                        <Table className="table mb-0 table-bordered">
                          <tbody>
                            {food.specification &&
                              food.specification.map((specification, i) => (
                                <tr key={i}>
                                  <th
                                    scope="row"
                                    style={{ width: "400px" }}
                                    className={"text-capitalize"}
                                  >
                                    {specification.type}
                                  </th>
                                  <td>{specification.value}</td>
                                </tr>
                              ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    {/* <Reviews comments={food.comments} /> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
          {/* <RecentProducts recentProducts={food.recentProducts} /> */}
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Product;

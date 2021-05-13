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

    setFood(res.data)
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
                          <Row >
                            <Col style={{ margin: 'auto' }} md={{ size: 7, offset: 1 }} xs="9">
                              <div >
                                <img
                                  src={food.image}
                                  alt=""
                                  id="expandedImg1"
                                  className="img-fluid mx-auto d-block"
                                />
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
                          </div>
                          {!!food.isOffer && (
                            <h6 className="text-success text-uppercase">
                              {food.offer} % Off
                            </h6>
                          )}
                          <h5 className="mb-4">
                            Price :{" "}
                            <b>LKR {food.price}</b>
                          </h5>
                          <p className="text-muted mb-4">
                            {food.description}
                          </p>
                          <div className="text-left">
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
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Product;

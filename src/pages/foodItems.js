import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Nav,
  NavItem,
  Row,
} from "reactstrap"
import { httpGetRequest } from "../helpers/networkRequestHelper"
import { productImages } from "../assets/images/product"


const FoodItems = () => {
  const [foods, setFoods] = useState([
    {
      "id": 1,
      "image": "product1",
      "name": "Half sleeve T-shirt",
      "link": "#",
      "category": "T-shirts",
      "rating": 5,
      "oldPrice": 500,
      "newPrice": 405,
      "isOffer": true,
      "offer": 10,
      "reviews": 0,
      "specification": [
        {
          "type": "Size",
          "value": "M"
        },
        {
          "type": "Color",
          "value": "Red"
        }
      ],
      "features": [
        {
          "icon": "fa fa-caret-right",
          "type": "Fit",
          "value": "Regular fit"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Highest quality fabric"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Suitable for all weather condition"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Excellent Washing and Light Fastness"
        }
      ],
      "colorOptions": [
        {
          "image": "product1",
          "color": "Red"
        },
        {
          "image": "product1",
          "color": "Black"
        }
      ]
    },
    {
      "id": 2,
      "image": "product2",
      "name": "Light blue T-shirt",
      "link": "#",
      "category": "T-shirts",
      "rating": 5,
      "oldPrice": 225,
      "newPrice": 175,
      "isOffer": true,
      "offer": 20,
      "reviews": 0,
      "specification": [
        {
          "type": "Size",
          "value": "L"
        },
        {
          "type": "Color",
          "value": "Light blue"
        }
      ],
      "features": [
        {
          "icon": "fa fa-caret-right",
          "type": "Fit",
          "value": "Regular fit"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Highest quality fabric"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Suitable for all weather condition"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Excellent Washing and Light Fastness"
        }
      ],
      "colorOptions": [
        {
          "image": "product2",
          "color": "Light blue"
        },
        {
          "image": "product2",
          "color": "Black"
        }
      ]
    },
    {
      "id": 3,
      "image": "product3",
      "name": "Black Color T-shirt",
      "link": "#",
      "category": "T-shirts",
      "rating": 4,
      "oldPrice": 177,
      "newPrice": 152,
      "isOffer": true,
      "offer": 14,
      "reviews": 0,
      "specification": [
        {
          "type": "Size",
          "value": "XL"
        },
        {
          "type": "Color",
          "value": "Black"
        }
      ],
      "features": [
        {
          "icon": "fa fa-caret-right",
          "type": "Fit",
          "value": "Regular fit"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Highest quality fabric"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Suitable for all weather condition"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Excellent Washing and Light Fastness"
        }
      ],
      "colorOptions": [
        {
          "image": "product3",
          "color": "Black"
        },
        {
          "image": "product3",
          "color": "White"
        }
      ]
    },
    {
      "id": 4,
      "image": "product4",
      "name": "Hoodie (Blue)",
      "link": "#",
      "category": "Hoodies",
      "rating": 3,
      "oldPrice": 150,
      "newPrice": 145,
      "isOffer": true,
      "offer": 5,
      "reviews": 0,
      "specification": [
        {
          "type": "Size",
          "value": "M"
        },
        {
          "type": "Color",
          "value": "Blue"
        }
      ],
      "features": [
        {
          "icon": "fa fa-caret-right",
          "type": "Fit",
          "value": "Regular fit"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Highest quality fabric"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Suitable for all weather condition"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Excellent Washing and Light Fastness"
        }
      ],
      "colorOptions": [
        {
          "image": "product4",
          "color": "Blue"
        },
        {
          "image": "product4",
          "color": "Black"
        }
      ]
    },
    {
      "id": 5,
      "image": "product5",
      "name": "Half sleeve T-Shirt",
      "link": "#",
      "category": "T-shirts",
      "rating": 1,
      "oldPrice": 177,
      "newPrice": 152,
      "isOffer": false,
      "offer": 0,
      "reviews": 5,
      "specification": [
        {
          "type": "Size",
          "value": "S"
        },
        {
          "type": "Color",
          "value": "Coral"
        }
      ],
      "features": [
        {
          "icon": "fa fa-caret-right",
          "type": "Fit",
          "value": "Regular fit"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Highest quality fabric"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Suitable for all weather condition"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Excellent Washing and Light Fastness"
        }
      ],
      "colorOptions": [
        {
          "image": "product5",
          "color": "Coral"
        },
        {
          "image": "product5",
          "color": "Black"
        }
      ]
    },
    {
      "id": 6,
      "image": "product6",
      "name": "Green color T-shirt",
      "link": "#",
      "category": "T-shirts",
      "rating": 5,
      "oldPrice": 200,
      "newPrice": 100,
      "isOffer": true,
      "offer": 50,
      "reviews": 10,
      "specification": [
        {
          "type": "Size",
          "value": "L"
        },
        {
          "type": "Color",
          "value": "Green"
        }
      ],
      "features": [
        {
          "icon": "fa fa-caret-right",
          "type": "Fit",
          "value": "Regular fit"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Highest quality fabric"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Suitable for all weather condition"
        },
        {
          "icon": "fa fa-caret-right",
          "type": "",
          "value": "Excellent Washing and Light Fastness"
        }
      ],
      "colorOptions": [
        {
          "image": "product6",
          "color": "Green"
        },
        {
          "image": "product6",
          "color": "Black"
        }
      ]
    }
  ])

  useEffect(() => {
    fetchFoods()
  }, []);

  const fetchFoods = async () => {
    let res = await httpGetRequest({
      url: "food"
    })

    setFoods(res.data)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg="12">
              <Row className="mb-3">
                <Col xl="4" sm="6">
                  <div className="mt-2">
                    <h5>Food Items</h5>
                  </div>
                </Col>
                <Col lg="8" sm="6">
                  <Form className="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
                    <div className="search-box me-2">
                      <div className="position-relative">
                        <Input
                          type="text"
                          className="form-control border-0"
                          placeholder="Search..."
                        />
                        <i className="bx bx-search-alt search-icon" />
                      </div>
                    </div>
                    <Nav className="product-view-nav" pills>
                      <NavItem>
                        {/* <NavLink
                          className={classnames({
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            toggleTab("1")
                          }}
                        >
                          <i className="bx bx-grid-alt" />
                        </NavLink> */}
                      </NavItem>
                      <NavItem>
                        {/* <NavLink
                          className={classnames({
                            active: activeTab === "2",
                          })}
                          onClick={() => {
                            toggleTab("2")
                          }}
                        >
                          <i className="bx bx-list-ul" />
                        </NavLink> */}
                      </NavItem>
                    </Nav>
                  </Form>
                </Col>
              </Row>
              <Row>
                {foods.length &&
                  foods.map((food, key) => (
                    <Col xl="2" sm="4" key={"_col_" + key}>
                      <Card>
                        <CardBody>
                          <div className="product-img position-relative">

                            <img
                              src={food.image}
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                          <div className="mt-4 text-center">
                            <h5 className="mb-3 text-truncate">
                              <Link
                                to={"/ecommerce-product-detail/" + food.id}
                                className="text-dark"
                              >
                                {food.name}{" "}
                              </Link>
                            </h5>
                            <div className="text-muted mb-3">
                              {/* <StarRatings
                                rating={product.rating}
                                starRatedColor="#F1B44C"
                                starEmptyColor="#2D363F"
                                numberOfStars={5}
                                name="rating"
                                starDimension="14px"
                                starSpacing="3px"
                              /> */}
                            </div>
                            <h5 className="my-0">
                              <b>LKR{food.price}</b>
                            </h5>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
              </Row>

              <Row>
                <Col lg="12">
                  {/* <Pagination className="pagination pagination-rounded justify-content-center mt-2 mb-5 pb-1">
                    <PaginationItem disabled={page === 1}>
                      <PaginationLink
                        previous
                        href="#"
                        onClick={() => handlePageClick(page - 1)}
                      />
                    </PaginationItem>
                    {map(Array(totalPage), (item, i) => (
                      <PaginationItem active={i + 1 === page} key={i}>
                        <PaginationLink
                          onClick={() => handlePageClick(i + 1)}
                          href="#"
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem disabled={page === totalPage}>
                      <PaginationLink
                        next
                        href="#"
                        onClick={() => handlePageClick(page + 1)}
                      />
                    </PaginationItem>
                  </Pagination> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default FoodItems;

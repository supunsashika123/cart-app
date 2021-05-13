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


const FoodItems = () => {
  const [foods, setFoods] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetchFoods()
  }, []);

  useEffect(() => {
    searchFoods()
  }, [searchValue])


  const searchFoods = async () => {
    let res = await httpGetRequest({
      url: "food/search?name=" + searchValue
    })

    setFoods(res.data)
  }

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
                          onChange={(e) => setSearchValue(e.target.value)}
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
                                to={"/food/" + food._id}
                                className="text-dark"
                              >
                                {food.name}{" "}
                              </Link>
                            </h5>
                            <div className="text-muted mb-3">

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

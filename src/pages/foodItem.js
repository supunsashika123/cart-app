import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory, useParams } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap"
import { httpGetRequest, httpPostRequest } from '../helpers/networkRequestHelper';
import { AppContext } from '../store';
import toastr from "toastr"

const Product = () => {
  const [food, setFood] = useState({})
  const { id } = useParams();
  const { state, setState } = useContext(AppContext)
  const history = useHistory()

  console.log(state)
  useEffect(() => {
    fetchFoodItem()
  }, [])

  const fetchFoodItem = async () => {
    let res = await httpGetRequest({
      url: "food/" + id
    })

    setFood(res.data)
  }

  const handleAddToCart = async () => {
    let res = await httpPostRequest({
      url: "cart",
      body: {
        items: [{
          itemId: food._id,
          qty: 1
        }],
        update: new Date()
      }
    })

    if (res.errors) {
      toastr.error("Something went wrong!", "Error!")

      return
    }

    toastr.success("Item added to cart!", "Success!")
    setTimeout(() => {
      history.push("/cart")
    }, 1000);
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
                              onClick={() => handleAddToCart()}
                            >
                              <i className="bx bx-cart me-2" /> Add to cart
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

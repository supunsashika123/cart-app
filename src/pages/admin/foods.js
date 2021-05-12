import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap"
import BootstrapTable from "react-bootstrap-table-next"
import { httpGetRequest } from "../../helpers/networkRequestHelper"

const Foods = () => {
  const pageOptions = {
    sizePerPage: 10,
    totalSize: 50,
    custom: true,
  }

  const columns = [{
    dataField: '_id',
    text: 'Item ID'
  }, {
    dataField: 'name',
    text: 'Food Name'
  }, {
    dataField: 'price',
    text: 'Food Price'
  }, {
    dataField: 'description',
    text: 'Description'
  }];

  const [productList, setProductList] = useState([])


  useEffect(() => {
    fetchFoods()
  }, [])

  const fetchFoods = async () => {
    let { data } = await httpGetRequest({
      url: 'food'
    })

    setProductList(data)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>

                  <React.Fragment>
                    <Row>
                      <Col xl="12">
                        <div className="table-responsive">
                          <BootstrapTable
                            responsive
                            remote
                            data={productList}
                            columns={columns}
                            bordered={false}
                            striped={false}
                            classes={
                              "table align-middle table-nowrap"
                            }
                            keyField="id"
                          />
                        </div>
                      </Col>
                    </Row>

                  </React.Fragment>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Foods;

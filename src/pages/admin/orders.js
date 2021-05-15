import React, { useEffect, useState } from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Table,
  Col,
  Container,
  Row,
  Modal,
  Form
} from "reactstrap"
import BootstrapTable from "react-bootstrap-table-next"
import { httpGetRequest, httpPutRequest } from '../../helpers/networkRequestHelper';
import toastr from "toastr"


const Orders = () => {
  const [orderList, setOrderList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState({})
  const columns = [{
    dataField: '_id',
    text: 'Order ID'
  }, {
    dataField: 'total',
    text: 'Total Price'
  }, {
    dataField: 'status',
    text: 'Order Status'
  },];

  useEffect(() => {
    fetchOrders()
  }, [showModal])

  const fetchOrders = async () => {
    let res = await httpGetRequest({
      url: "order"
    })

    setOrderList(res.data)
  }

  const tableRowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setSelectedOrder(row)
      setShowModal(true)
    },
  }

  const updateOrderStatus = async (newStatus) => {
    let res = await httpPutRequest({
      url: "order/" + selectedOrder._id,
      body: { ...selectedOrder, status: newStatus }
    })
    
    toastr.success("Order status updated successfully!", "Success!")
    setSelectedOrder({ ...selectedOrder, status: newStatus })
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
                            data={orderList}
                            columns={columns}
                            bordered={false}
                            striped={false}
                            rowEvents={tableRowEvents}
                            classes={
                              "table align-middle table-nowrap"
                            }
                            keyField="_id"
                          />
                        </div>
                      </Col>
                    </Row>
                  </React.Fragment>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal
            style={{ maxWidth: 1000 }}
            isOpen={showModal}
            backdrop={true}
            toggle={() => setShowModal(!setShowModal)}
          >
            <Container fluid>
              <Row>
                <Col xs="12">
                  <Card>
                    <CardBody>
                      <CardTitle>Order Details</CardTitle>
                      <Form>
                        <Row>
                          <Col>
                            <p className="mb-2">
                              Order id: <span className="text-primary">{selectedOrder._id}</span>
                            </p>
                            <p className="mb-2">
                              Order status: <span className="text-primary">{selectedOrder.status}</span>
                            </p>
                          </Col>

                          <Col >
                            <div>Status :</div>
                            <div>
                              <select value={selectedOrder.status} onChange={(e) => updateOrderStatus(e.target.value)}>
                                <option value={"Preparing"}>Preparing</option>
                                <option value={"ReadyToPickup"}>ReadyToPickup</option>
                                <option value={"Declined"}>Declined</option>
                                <option value={"Completed"}>Completed</option>
                              </select>
                            </div>
                          </Col>
                        </Row>
                        <div>
                          <div className="table-responsive">
                            <Table className="table table-centered table-nowrap">
                              <thead>
                                <tr>
                                  <th scope="col">Item</th>
                                  <th scope="col">Item Name</th>
                                  <th scope="col">Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {selectedOrder && selectedOrder.items && selectedOrder.items.map((i) => (
                                  <tr>
                                    <th scope="row">
                                      <div>
                                        <img src={i.item.image} alt="" className="avatar-sm" />
                                      </div>
                                    </th>
                                    <td>
                                      <div>
                                        <h5 className="text-truncate font-size-14">
                                          {i.item.name}
                                        </h5>
                                        <p className="text-muted mb-0">LKR {i.item.price} x {i.qty}</p>
                                      </div>
                                    </td>
                                    <td>LKR {Number(i.item.price * i.qty).toFixed(2)}</td>
                                  </tr>
                                ))}
                                <tr>
                                  <td colSpan="2">
                                    <h6 className="m-0 text-right">Sub Total:</h6>
                                  </td>
                                  <td>LKR {Number(selectedOrder.total).toFixed()}</td>
                                </tr>
                                <tr>
                                  <td colSpan="2">
                                    <h6 className="m-0 text-right">Total:</h6>
                                  </td>
                                  <td>LKR {Number(selectedOrder.total).toFixed()}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Modal>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Orders;

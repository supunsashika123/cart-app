import React, { useEffect, useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardBody, Col, Container, Row } from "reactstrap"
import BootstrapTable from "react-bootstrap-table-next"
import { httpGetRequest, httpDeleteRequest } from "../../helpers/networkRequestHelper"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import toastr from "toastr"

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
  }, {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: (cellContent, row) => (
      <UncontrolledDropdown direction="left">
        <DropdownToggle href="#" className="card-drop" tag="i">
          <i className="mdi mdi-dots-horizontal font-size-18" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem onClick={() => handleItemEditClick(row)}>
            <i className="fas fa-pencil-alt text-success me-1" />
            Edit
          </DropdownItem>
          <DropdownItem onClick={() => handleItemDeleteClick(row)}>
            <i className="fas fa-trash-alt text-danger me-1" />
            Delete
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    ),
  },];

  const [productList, setProductList] = useState([])
  const [showConfirmAlert, setShowConfirmAlert] = useState(false)


  useEffect(() => {
    fetchFoods()
  }, [])

  const fetchFoods = async () => {
    let { data } = await httpGetRequest({
      url: 'food'
    })

    setProductList(data)
  }

  const handleItemEditClick = (row) => {
  }

  const handleItemDeleteClick = (row) => {
    confirmAlert({
      title: 'Confirm!',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Delete Item',
          onClick: () => deleteFoodItem(row)
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  }

  const deleteFoodItem = async (row) => {
    let res = await httpDeleteRequest({
      url: 'food/' + row._id
    })

    if (res.error) {
      toastr.error("Add food failed.", "Error!")

      return false
    }

    await fetchFoods()
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
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Foods;

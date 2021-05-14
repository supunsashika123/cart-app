import React, { useEffect, useState } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  Input,
  Label,
  Spinner,
  Alert,
  Button,
  Form
} from "reactstrap"

import BootstrapTable from "react-bootstrap-table-next"
import { httpPostRequest, httpGetRequest, httpDeleteRequest, httpPutRequest } from "../../helpers/networkRequestHelper"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"


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
  const [modal_standard, setmodal] = useState(false)
  const [selectedFiles, setselectedFiles] = useState([])
  const [image, setImage] = useState()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [fid, setFid] = useState('')
  const [description, setDescription] = useState('')
  const [formErrors, setFormErrors] = useState([])
  const [loading, setLoading] = useState(false)

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
    
    setFid(row._id)
    setName(row.name)
    setPrice(row.price)
    setDescription(row.description)
    setCategory(row.category)
    setImage(row.image)
    setmodal(true)
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



  const tog_standard = () => {
    setmodal(true)
    removeBodyCss()
  }

  const removeBodyCss = () => {
    document.body.classList.add("no_padding")
  }

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size)
      })
    )

    getBase64(files[0])
    setselectedFiles(files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }


  const handleSaveButtonClick = async () => {
  
    const payload = {
      name, price, category, description, image: image
    }
    let res = await httpPutRequest({
      url: 'food/' + fid,
      body: payload
    })

    if (res.error) {
      toastr.error("Add food failed.", "Error!")

      return false
    }
    setFormErrors([])
    await fetchFoods()
  }

  const getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const clearFields = () => {
    setName('')
    setPrice('')
    setCategory('')
    setDescription('')
    setselectedFiles([])
    setmodal(false)
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
          <Modal
            style={{ maxWidth: 1000 }}
            isOpen={modal_standard}
            toggle={tog_standard}
          >

          </Modal>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Foods;


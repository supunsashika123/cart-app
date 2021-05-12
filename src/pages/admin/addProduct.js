import React, { useState } from "react"
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap"

const AddProduct = () => {

  const [selectedFiles, setselectedFiles] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')


  const handleSaveButtonClick = () => {
    const payload = {
      name, price, category, description
    }

    console.log(payload)
  }

  const clearFields = () => {
    setName('')
    setPrice('')
    setCategory('')
    setDescription('')
  }

  return (
    <React.Fragment>
      <div className="page-content">

        <Container fluid>

          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Basic Information</CardTitle>
                  <CardSubtitle className="mb-4">
                    Fill all information below
                  </CardSubtitle>
                  <Form>
                    <Row>
                      <Col sm="6">
                        <div className="mb-3">
                          <Label htmlFor="productname">Food Name</Label>
                          <Input
                            id="productname"
                            name="productname"
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="price">Price</Label>
                          <Input
                            id="price"
                            name="price"
                            type="text"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </Col>

                      <Col sm="6">
                        <div className="mb-3">
                          <Label className="control-label">Category</Label>
                          <select
                            className="form-control select2"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select</option>
                            <option value="burger">Burger</option>
                            <option value="sandwitch">Sandwitch</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="productdesc">
                            Product Description
                          </Label>
                          <textarea
                            className="form-control mb-3"
                            id="productdesc"
                            rows="5"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        type="button"
                        color="primary"
                        className="btn waves-effect waves-light"
                        onClick={() => handleSaveButtonClick()}
                      >
                        Save Changes
                    </Button>
                      <Button
                        type="button"
                        color="secondary"
                        className="waves-effect waves-effect waves-light"
                        onClick={() => clearFields()}
                      >
                        Clear
                    </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>

              {/* <Card>
                <CardBody>
                  <CardTitle className="mb-3">Product Images</CardTitle>
                  <Form> */}
                    {/* <Dropzone
                                            onDrop={acceptedFiles => {
                                                handleAcceptedFiles(acceptedFiles)
                                            }}
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                                <div className="dropzone">
                                                    <div
                                                        className="dz-message needsclick"
                                                        {...getRootProps()}
                                                    >
                                                        <input {...getInputProps()} />
                                                        <div className="dz-message needsclick">
                                                            <div className="mb-3">
                                                                <i className="display-4 text-muted bx bxs-cloud-upload" />
                                                            </div>
                                                            <h4>Drop files here or click to upload.</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Dropzone> */}
                    {/* <div className="dropzone-previews mt-3" id="file-previews"> */}
                      {/* {selectedFiles.map((f, i) => {
                                                return (
                                                    <Card
                                                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                        key={i + "-file"}
                                                    >
                                                        <div className="p-2">
                                                            <Row className="align-items-center">
                                                                <Col className="col-auto">
                                                                    <img
                                                                        data-dz-thumbnail=""
                                                                        height="80"
                                                                        className="avatar-sm rounded bg-light"
                                                                        alt={f.name}
                                                                        src={f.preview}
                                                                    />
                                                                </Col>
                                                                <Col>
                                                                    <Link
                                                                        to="#"
                                                                        className="text-muted font-weight-bold"
                                                                    >
                                                                        {f.name}
                                                                    </Link>
                                                                    <p className="mb-0">
                                                                        <strong>{f.formattedSize}</strong>
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Card>
                                                )
                                            })} */}
                    {/* </div>
                  </Form>
                </CardBody>
              </Card> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default AddProduct;

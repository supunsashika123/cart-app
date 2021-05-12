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
                          <Label htmlFor="productname">Product Name</Label>
                          <Input
                            id="productname"
                            name="productname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="manufacturername">
                            Manufacturer Name
                          </Label>
                          <Input
                            id="manufacturername"
                            name="manufacturername"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="manufacturerbrand">
                            Manufacturer Brand
                          </Label>
                          <Input
                            id="manufacturerbrand"
                            name="manufacturerbrand"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="price">Price</Label>
                          <Input
                            id="price"
                            name="price"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </Col>

                      <Col sm="6">
                        <div className="mb-3">
                          <Label className="control-label">Category</Label>
                          <select className="form-control select2">
                            <option>Select</option>
                            <option value="FA">Fashion</option>
                            <option value="EL">Electronic</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label className="control-label">Features</Label>
                          {/* <Select
                                                        classNamePrefix="select2-selection"
                                                        placeholder="Choose..."
                                                        title="Country"
                                                        options={options}
                                                        isMulti
                                                    /> */}
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="productdesc">
                            Product Description
                          </Label>
                          <textarea
                            className="form-control mb-3"
                            id="productdesc"
                            rows="5"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        type="submit"
                        color="primary"
                        className="btn waves-effect waves-light"
                      >
                        Save Changes
                    </Button>
                      <Button
                        type="submit"
                        color="secondary"
                        className="waves-effect waves-effect waves-light"
                      >
                        Cancel
                    </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="mb-3">Product Images</CardTitle>
                  <Form>
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
                    <div className="dropzone-previews mt-3" id="file-previews">
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
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default AddProduct;

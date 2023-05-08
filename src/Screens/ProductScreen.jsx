import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, col, Image, ListGroup, Card, Button, Col, ListGroupItem } from "react-bootstrap";
import Rating from "../Components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
// const product = products.find((p) => p._id === match.params.id)

  return <>
    <Link className="btn btn-light my-3" to={'/'}>
        Go Back
    </Link>
    <Row>
        <Col md={6}>
            <Image src="" alt="" fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h2>Name</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    {/* <Rating value={} text={} reviews/> */}
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: {}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>Rice</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                               {}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn-block" type="button">
                            Add To Card
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
  </>;
};

export default ProductScreen;

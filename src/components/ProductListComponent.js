import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const ProductListComponent = ({ productData, onAddToCart, onRemoveItem,handleOnChangeSearch,searchInput }) => {
  return (
    <>
      <Row>
        <Col xs={2}></Col>
        <Col xs={5}>
          <Form.Control 
          type="search"
           placeholder="Search" 
           value={searchInput}
           onChange={handleOnChangeSearch} 
           />
        </Col>
        <Col xs={5}>
          <Button variant="outline-success">Search</Button>
        </Col>
      </Row>
      <ListGroup className="productlist-wrapper">
        <ListGroupItem>
          <Card>
            <Card.Header>Products</Card.Header>
          </Card>
        </ListGroupItem>

        <ListGroupItem>
          <div className="div-grid">
            {productData &&
              productData.map((product) => {
                return (
                  <>
                    <Card className="product-card-wrapper">
                      <div className="image-div">
                        <Card.Img
                          src={product.image}
                          width={"200px"}
                          height={"200px"}
                        />
                      </div>

                      <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>
                          <Row>
                            <div className="product-title">{product.title}</div>
                          </Row>
                        </Card.Title>

                        <Card.Text>
                          <Row>
                            <div className="descri-overflow">
                              {product.description}
                            </div>
                          </Row>

                          <Row className="changeDivSize">
                            <Col xs={4}>$ {product.price}</Col>
                            <Col xs={4}></Col>
                            <Col xs={4}>
                              <Button onClick={(e) => onRemoveItem(product)}>
                                Remove
                              </Button>
                            </Col>
                          </Row>
                        </Card.Text>

                        <Card.Footer>
                          <Button
                            onClick={() => onAddToCart(product)}
                            variant="success"
                            style={{ width: "100%" }}
                          >
                            Add to Cart
                          </Button>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
          </div>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};
export default ProductListComponent;

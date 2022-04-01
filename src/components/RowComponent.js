import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RowComponent = ({ product,id,count, incrementCount, decrementCount,onAddItems}) => {
  
  return (
    <>
      <div className="product-wrapper">
        <Card key={id} className="product-card-wrapper">
          <div className="image-div">
            <Card.Img src={product.image} maxWidth={"100%"} height={"200px"} />
          </div>

          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>
              <Row>
                <div className="product-title">{product.title}</div>
              </Row>
            </Card.Title>

            <Card.Text>
              <Row>
                <div className="descri-overflow">{product.description}</div>
              </Row>

              <Row>
                <Col xs={1}></Col>
                <Col xs={4}>$ {product.price}</Col>
                <Col xs={7}>
                  <Button onClick={decrementCount} size="sm" style={{ marginRight: "5px", marginLeft: "40px" }} > -</Button>
                  <span>{count}</span>
                  <Button onClick={incrementCount} size="sm" style={{ marginLeft: "5px" }} >+</Button>
                </Col>
              </Row>
            </Card.Text>

            <Card.Footer>
              <Button onClick={onAddItems} variant="success" style={{ width: "100%" }}>
                Add to Cart
              </Button>
            </Card.Footer>

          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default RowComponent;

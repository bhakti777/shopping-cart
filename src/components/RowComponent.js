import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RowComponent = ({ product,index,count, incrementCount, decrementCount,onAddItems,onRemoveItem}) => {
  
  return (
    <>
        <Card className="product-card-wrapper" key={index}>
          <div className="image-div">
            <Card.Img src={product.image} width={"200px"} height={"200px"} />
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

              <Row className="changeDivSize">
                <Col xs={4}>$ {product.price}</Col>
                <Col xs={5}>
                  <Button onClick={()=>decrementCount(product)} size="sm" style={{ marginRight: "3px"}} > -</Button>
                  <span>{count}</span>
                  <Button onClick={()=>incrementCount(product)} size="sm" style={{ marginLeft: "3px" }} >+</Button>
                </Col>
                <Col xs={3}>
                  <Button onClick={()=>onRemoveItem(product.id)}>Remove</Button>
                </Col>
              </Row>
            </Card.Text>

            <Card.Footer>
              <Button onClick={()=>onAddItems(product,product.id)} variant="success" style={{ width: "100%" }}>
                Add to Cart
              </Button>
            </Card.Footer>

          </Card.Body>
        </Card>
    </>
  );
};
export default RowComponent;

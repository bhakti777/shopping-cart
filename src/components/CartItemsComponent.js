import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CartItemsComponent = ({ cartItems }) => {
  return (
    <>
      <div className="sticky-div">
        <Row>
          <Card className="cart-card-wrapper">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>Cart Items:</h5>
                <Row>
                  <div>
                    {cartItems.length === 0 && <div>Cart is empty</div>}
                  </div>
                </Row>
              </ListGroup.Item>

              {cartItems.map((item) => {
                    return (
                 <>
              <ListGroup.Item>
                <Row>
                  <Col xs={9}><b>{item.title}</b></Col>
                  <Col xs={3}>$ {item.price}</Col>
                </Row>

                <Row>
                  <Col xs={9}>Discount</Col>
                  <Col xs={3}>- $6</Col>
                </Row>

                <Row>
                  <Col xs={9}>Delivery Charges</Col>
                  <Col xs={3}>+ $3</Col>
                </Row>
                <hr />

                <Row>
                  <Col xs={9}><b>Total Amount</b></Col>
                  <Col xs={3}>${item.price-6+3}</Col>
                </Row>
                
              </ListGroup.Item>
              </>
                 );
                })}
              <ListGroup.Item>
                <Row>
                  <Button className="checkout-btn-width">CheckOut</Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
      </div>
    </>
  );
};
export default CartItemsComponent;

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CartItemsComponent = ({ cartItems }) => {

  let cost = 0
  cartItems.forEach((cartitem) => {
      if (cartitem.counter) {
          cost = cost + (cartitem.price * cartitem.counter)
      } else {
          cost = cost + cartitem.price
      }

  })

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

              <ListGroup.Item>
                <Row>
                  <Col xs={9}><b>Price</b></Col>
                  <Col xs={3}>$ {cost}</Col>
                </Row>

                <Row>
                  <Col xs={9}>Discount</Col>
                  <Col xs={3}>- $0</Col>
                </Row>

                <Row>
                  <Col xs={9}>Delivery Charges</Col>
                  <Col xs={3}>+ $0</Col>
                </Row>
                <hr />

                <Row>
                  <Col xs={9}><b>Total Amount</b></Col>
                  <Col xs={3}> $ {cost}</Col>
                </Row>
                
              </ListGroup.Item>
              
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

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
                    {cartItems.length === 0 && <div>Cart is empty</div>}{" "}
                  </div>
                </Row>
                <Row>
                  {cartItems.map((item) => {
                    return (
                      <Row>
                        <div key={item.id}>
                          <Col>{item.name}</Col>
                          <Col>{item.price}</Col>
                        </div>
                      </Row>
                    );
                  })}
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Price ( 1 item)</Col>
                  <Col>$ 234</Col>
                </Row>

                <Row>
                  <Col>Discount</Col>
                  <Col>- $ 34</Col>
                </Row>

                <Row>
                  <Col>Delivery Charges</Col>
                  <Col>+ $ 20</Col>
                </Row>
                <hr />

                <Row>
                  <Col>Total Amount</Col>
                  <Col>$ 220</Col>
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

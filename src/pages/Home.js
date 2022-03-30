import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductRowComponent from "./components/ProductRowComponent";
import CartItemsComponent from "./components/CartItemsComponent";

const Home = () => {
  return (
    <>
      <div style={{ marginTop: "20px", marginLeft: "20px",marginRight:"40px"}}>
        <Row>
          <Col xs={8}>
            <ProductRowComponent />
          </Col>

          <Col xs={4}>
            <CartItemsComponent />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Home;

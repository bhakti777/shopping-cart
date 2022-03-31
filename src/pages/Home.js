import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductListComponent from "../components/ProductListComponent";
import CartItemsComponent from "../components/CartItemsComponent";

const Home = () => {
  return (
    <>
      <div className="page-container">
        <Row>
          <Col xs={8}>
            <ProductListComponent />
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

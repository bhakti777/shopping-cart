import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductListComponent from "../components/ProductListComponent";
import CartItemsComponent from "../components/CartItemsComponent";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProductData(json));
  }, [productData]);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  const onAddItems = (productData) => {
    const selectedItems = cartItems.find((x) => x.id === productData.id);
    if (selectedItems) {
      setCartItems(
        cartItems.map((x) =>
          x.id === productData.id ? { ...selectedItems } : x
        )
      );
    }
   else {
      setCartItems(
        cartItems.map((x) =>
          x.id === productData.id ? { ...selectedItems } : x
        )
      );
    }
    console.log(selectedItems);
  };

  return (
    <>
      <div className="page-container">
        <Row>
          <Col xs={8}>
            <ProductListComponent
              productData={productData}
              count={count}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
              onAddItems={onAddItems}
            />
          </Col>

          <Col xs={4}>
            <CartItemsComponent
              cartItems={cartItems}
              productData={productData}
              onAddItems={onAddItems}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Home;

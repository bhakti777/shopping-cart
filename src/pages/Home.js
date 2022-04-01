import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductListComponent from "../components/ProductListComponent";
import CartItemsComponent from "../components/CartItemsComponent";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProductData(json));
  }, [productData]);

  const onRemoveItem=(event,indexToDelete)=>{
    // const productDataClone=[...productData];
    // productDataClone.splice(indexToDelete,1);
    // setProductData(productDataClone);
    event.preventDefault();
    console.log("deleted=>",indexToDelete)

  }
    // console.log("deleted=>",productData)

  const onAddItems = (item) => {
    cartItems.push(item)
    console.log(cartItems)
  };

  return (
    <>
      <div className="page-container">
        <Row>
          <Col xs={8}>
            <ProductListComponent
              productData={productData}
              onAddItems={onAddItems}
              onRemoveItem={onRemoveItem}
            />
          </Col>

          <Col xs={4}>
            <CartItemsComponent
              cartItems={cartItems}
              productData={productData}
              // onAddItems={onAddItems}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Home;

import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductListComponent from "../components/ProductListComponent";
import CartItemsComponent from "../components/CartItemsComponent";

const Home = () => {
  const [productData, setProductData] = useState([""]);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProductData(json));
  }, []);

  const handleOnChangeSearch = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  useEffect(() => {
    if (searchInput == "") {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => setProductData(json));
    } else {
      const filteredSearchData = productData.filter((product) => {
        return product.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setProductData(filteredSearchData);
      console.log("filteredSearchData=>", filteredSearchData);
    }
  }, [searchInput]);

  const onAddToCart = (item) => {
    const cartitemsClone = [...cartItems];
    cartitemsClone.push(item);
    setCartItems(cartitemsClone);
  };
  console.log(cartItems);

  //delete item from cart
  const onRemoveItem = (product) => {
    const cartClone = [...cartItems];
    const indexToDelete = cartClone.findIndex((item) => {
      return item.id == product.id;
    }); //cart item id==productdata.id
    if (indexToDelete > -1) {
      cartClone.splice(indexToDelete, 1);
      setCartItems(cartClone);
    }
    console.log(indexToDelete);
  };

  return (
    <>
      <div className="page-container">
        <Row>
          <Col xs={8}>
            <ProductListComponent
              productData={productData}
              onAddToCart={onAddToCart}
              onRemoveItem={onRemoveItem}
              handleOnChangeSearch={handleOnChangeSearch}
              searchInput={searchInput}
            />
          </Col>

          <Col xs={4}>
            <CartItemsComponent
              cartItems={cartItems}
              productData={productData}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Home;

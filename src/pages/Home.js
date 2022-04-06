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
  }, []);


  
  const onAddToCart = (item) => {
    const cartitemsClone=[...cartItems]
    cartitemsClone.push(item)
    setCartItems(cartitemsClone)
  };
  console.log(cartItems)


  //delete item from cart
  const onRemoveItem=(product)=>{
    const cartClone=[...cartItems];
    const indexToDelete=cartClone.findIndex((item)=> {
      return item.id==product.id;
    })                                                    //cart item id==productdata.id
    if(indexToDelete>-1){                                
    cartClone.splice(indexToDelete,1)
    setCartItems(cartClone)
    }
    console.log(indexToDelete)
  }


  return (
    <>
      <div className="page-container">
        <Row >
          <Col xs={8}>
            <ProductListComponent
              productData={productData}
              onAddToCart={onAddToCart}
              counter={counter}
              onRemoveItem={onRemoveItem}
            />
          </Col>

          <Col xs={4}>
            <CartItemsComponent
              cartItems={cartItems}
              productData={productData}
              counter={counter}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Home;

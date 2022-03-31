import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import RowComponent from "./RowComponent";

const ProductListComponent = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProductData(json));
  }, [productData]);

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
    <div className="sticky-header"> 
      <Card className="productlist-wrapper">
        <Card.Header>Products</Card.Header>
      </Card>
    </div>

      <div className="div-grid">
        <RowComponent productData={productData} count={count} incrementCount={incrementCount} decrementCount={decrementCount}/>
      </div>
    </>
  );
};
export default ProductListComponent;

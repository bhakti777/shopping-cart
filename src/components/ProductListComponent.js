import React,{useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import RowComponent from "./RowComponent";

const ProductListComponent = ({productData,onAddToCart,onRemoveItem,counter}) => {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count<10 ? count+1:0);
  };
  const decrementCount = () => {
    setCount((count) => count>1 ? count-1:0);
  };

  return (
    <>
      <div className="sticky-header">
        <Card className="productlist-wrapper">
          <Card.Header>Products</Card.Header>
        </Card>
      </div>

      <div className="div-grid">
        {productData &&
          productData.map((product) => {
            return (
              <>
                
                   <Card className="product-card-wrapper">
                   <div className="image-div">
                     <Card.Img src={product.image} width={"200px"} height={"200px"} />
                   </div>
         
                   <Card.Body>
                     <Card.Title style={{ fontSize: "15px" }}>
                       <Row>
                         <div className="product-title">{product.title}</div>
                       </Row>
                     </Card.Title>
         
                     <Card.Text>
                       <Row>
                         <div className="descri-overflow">{product.description}</div>
                       </Row>
         
                       <Row className="changeDivSize">
                         <Col xs={4}>$ {product.price}</Col>
                         <Col xs={5}>
                           <Button onClick={()=>decrementCount(product.id)} size="sm" style={{ marginRight: "3px"}} > -</Button>
                           <span>{count}</span>
                           <Button onClick={()=>incrementCount(product.id)} size="sm" style={{ marginLeft: "3px" }} >+</Button>
                         </Col>
                         <Col xs={3}>
                           <Button onClick={(e)=>onRemoveItem(product)}>Remove</Button>
                         </Col>
                       </Row>
                     </Card.Text>
         
                     <Card.Footer>
                       <Button onClick={()=>onAddToCart(product)} variant="success" style={{ width: "100%" }}>
                         Add to Cart
                       </Button>
                     </Card.Footer>
         
                   </Card.Body>
                 </Card>
              
              </>
            );
          })}
      </div>
    </>
  );
};
export default ProductListComponent;

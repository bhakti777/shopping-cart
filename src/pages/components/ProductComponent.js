import React ,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

const ProductComponent = () => {

  const [productData,setProductData]=useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((json)=>setProductData(json))
  },[productData])

const [count,setCount]=useState(0)

const incrementCount=()=>{
  setCount((count)=>count+1);
}

const decrementCount=()=>{
  setCount((count)=>count-1)
}


  return (
    <>
    <div>
      <h3 style={{marginBottom:"10px"}}>Products</h3>
      
      <CardGroup style={{width:"90%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"15px"}}>

      
      {productData && productData.map((product)=>{
        return(
          <>
          <div>
          <Card style={{ height: "20%",width:"100%" }}>
          <Card.Img variant="top" src={product.image}  height={"200px"} width={"100%"} />
          <Card.Body style={{textAlign:"center"}}>
            <Card.Title><h6>{product.title}</h6></Card.Title>
            <Card.Text>
              <p>${product.price} 
              
                <Button onClick={decrementCount} size="sm" style={{marginRight:"5px",marginLeft:"40px"}}>-</Button>
                <span>{count}</span>
                <Button onClick={incrementCount} size="sm" style={{marginLeft:"5px"}}>+</Button>
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="success" style={{ width: "100%" }}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
          </div>
          </>
        )
      })}
      
      
      </CardGroup>
      </div>
    </>
  );
};
export default ProductComponent;

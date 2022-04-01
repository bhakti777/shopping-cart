import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import RowComponent from "./RowComponent";

const ProductListComponent = ({productData,onAddItems,onRemoveItem}) => {

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
                <RowComponent
                  product={product}
                  count={count}
                  incrementCount={incrementCount}
                  decrementCount={decrementCount}
                  onAddItems={onAddItems}
                  onRemoveItem={onRemoveItem}
                />
              </>
            );
          })}
      </div>
    </>
  );
};
export default ProductListComponent;

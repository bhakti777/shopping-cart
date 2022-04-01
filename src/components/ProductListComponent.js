import React from "react";
import Card from "react-bootstrap/Card";
import RowComponent from "./RowComponent";

const ProductListComponent = ({productData,count, incrementCount, decrementCount,onAddItems}) => {

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
                  id={product.id}
                  count={count}
                  incrementCount={incrementCount}
                  decrementCount={decrementCount}
                  onAddItems={onAddItems}
                />
              </>
            );
          })}
      </div>
    </>
  );
};
export default ProductListComponent;

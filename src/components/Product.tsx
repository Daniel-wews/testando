// components/Product.tsx

import React from "react";
import { Produto } from "../data/Data";

interface ProductProps {
  product: Produto;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;

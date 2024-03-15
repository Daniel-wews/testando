// components/ProductList.tsx

import React from "react";
import { Produto } from "../data/Data";
import pratoImg from "../assets/prato.jpg";


interface ProductListProps {
  products: Produto[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='m-4'>
      <h1>Produtos</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((produto, index) => (
          <div key={`${produto.caracter}-${index}`} className="rounded-lg shadow-md p-4 border border-salmon bg-Lightsalmon">
            <img src={pratoImg} alt={produto.title} className="w-full h-auto mb-4" />
            <p className="bg-salmon border border-red-900 rounded-md my-1 p-0.5 inline-block text-lg font-semibold">{produto.unidade}</p>
            <h2 className="text-xl font-semibold mb-2">{produto.title}</h2>
            <p className="text-gray-700 mb-2 text-lg">{produto.description}</p>
            <p className="text-lg font-bold text-black">{produto.price}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ProductList;

import React from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../Cart/cart.slice";
import { useAppDispatch } from "../store.hooks";
import { getProductsSelector, Product, removeProduct } from "./products.slice";

const ProductsList = () => {
  const products = useSelector(getProductsSelector);
  const dispatch = useAppDispatch();

  const removeFromStore = (id: string) => dispatch(removeProduct(id));

  const addTOCartHandler = (product: Product) => dispatch(addToCart(product));

  return (
    <div>
      <h2>Game List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
          <button onClick={() => addTOCartHandler(product)}>Add to cart</button>
          <button onClick={() => removeFromStore(product.id)}>
            Remove from Store
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

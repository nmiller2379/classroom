import React, { useReducer } from "react";
import cartReducer from "../../reducers/cartReducer";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import data from "../../data/data"

export default function ShoppingCart() {
  const initialState = { items: [], total: 0 };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const handleRemove = (id) => {
    dispatch({ type: "remove", payload: { id } });
  };

  const handleAdd = (id) => {
    const purchase = data.find((e) => e.id === id)
    dispatch({ type: "add", payload: purchase });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <h3>Total: ${state.total}</h3>
      {state.items.map((item, index) => (
        <CartItem key={index} item={item} onRemove={handleRemove} />
      ))}
      <div>
      {data.map((button) => {
        return (<Button onClick={handleAdd} message={`Add ${button.name}`} id={button.id} key={button.id} />)
      })}
      </div>
      <Button onClick={handleClear} message="Clear Cart" />
    </div>
  );
}



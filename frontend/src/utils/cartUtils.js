export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // calculate the items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.qty,
      0
    )
  );

  // calculate the shipping price (if order is over 1000 shipping is free, else 50$)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  // calculate the tax price (18%)
  state.taxPrice = addDecimals(Number((0.18 * state.itemsPrice).toFixed(2)));
  // calculate the total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};

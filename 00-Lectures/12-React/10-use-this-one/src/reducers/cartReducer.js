const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, items:[...state.items, action.payload], total: state.total + action.payload.price }
    case "remove":
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
      const itemPrice = state.items[itemIndex].price
      return {
        ...state, items: state.items.filter((item, index) => index !== itemIndex),
        total: state.total - itemPrice 
      } 
    case "clear":
      return { items: [], total: 0 }
    default:
      return state
  }
};

export default cartReducer;

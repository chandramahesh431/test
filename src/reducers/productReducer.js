const initState = {
  products: []
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return { ...state, products: action.products };
    }
    default:
      return state;
  }
};

export default productReducer;

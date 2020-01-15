const INITIAL_STATE = [
  {
    date: "hola",
    type: "compra",
    dealer: "persona",
    place: "Yopal",
    amount: "14",
    price: "14.000.000",
    ids: false
  },
  {
    date: "hola",
    type: "compra",
    dealer: "persona",
    place: "Yopal",
    amount: "14",
    price: "14.000.000",
    ids: true
  },
  {
    date: "hola",
    type: "compra",
    dealer: "persona",
    place: "Yopal",
    amount: "14",
    price: "14.000.000",
    ids: false
  },
  {
    date: "hola",
    type: "compra",
    dealer: "persona",
    place: "Yopal",
    amount: "14",
    price: "14.000.000",
    ids: false
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TRIPS":
      return { ...state, users: action.payload };
    case "ADD_TRIP":
      state.push(action.payload);
      return state;
    default:
      return state;
  }
};

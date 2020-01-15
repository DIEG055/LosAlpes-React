const INITIAL_STATE = {
  trips: [
    {
      date: "01-01-19",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    },
    {
      date: "02-02-19",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: true
    },
    {
      date: "03-03-19",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    },
    {
      date: "04-04-19",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    }
  ],
  trip: {
    date: "",
    type: "",
    dealer: "",
    place: "",
    amount: "",
    price: ""
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TRIPS":
      return {
        ...state,
        users: action.payload
      };

    case "ADD_TRIP":
      state.push(action.payload);
      return state;

    case "GET_TRIP":
      return {
        ...state,
        trip: state.trips.find(trip => trip.date === action.payload)
      };

    case "EDIT_TRIP":
      state.trips[
        state.trips.findIndex(el => el.date === action.payload.date)
      ] = action.payload;
      return state;
      
    case "DELETE_TRIP":
      state.trips = state.trips.filter(item => item.date !== action.payload);
      return state;
    default:
      return state;
  }
};

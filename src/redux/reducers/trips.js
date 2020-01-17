const INITIAL_STATE = {
  trips: [
    {
      id: '1',
      date: "2019-01-01",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    },
    {
      id: '2',
      date: "2019-02-02",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: true
    },
    {
      id: '3',
      date: "2019-03-03",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    },
    {
      id: '4',
      date: "2019-04-04",
      type: "compra",
      dealer: "persona",
      place: "Yopal",
      amount: "14",
      price: "14.000.000",
      ids: false
    }
  ],
  trip: {
    id: '',
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
        trip: state.trips.find(trip => trip.id === action.payload)
      };

    case "EDIT_TRIP":      
      state.trips[
        state.trips.findIndex(el => el.id === action.payload.id)
      ] = action.payload;
      return state;
      
    case "DELETE_TRIP":
      state.trips = state.trips.filter(item => item.id !== action.payload);
      return state;
    default:
      return state;
  }
};

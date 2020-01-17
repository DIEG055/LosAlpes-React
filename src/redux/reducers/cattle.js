const INITIAL_STATE = {
  cattles: [
    {
      id: "1",
      arrivalDate: "2019-12-12",
      mom: "0",
      departureDate: "2019-12-12",
      birthDate: "2020-01-01",
      age: "2 año",
      gender: "hembra",
      origin: "Mongua",
      purchaseValue: "1.500.000",
      saleValue: "1.500.000",
      state: "En Finca",
      tripId: "1",
      images: [
        "https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      ]
    },
    {
      id: "2",
      arrivalDate: "2019-12-12",
      mom: "1",
      departureDate: "2019-12-12",
      birthDate: "2020-01-01",
      age: "12 año",
      gender: "hembra",
      origin: "Mongua",
      purchaseValue: "1.500.000",
      saleValue: "1.500.000",
      state: "En Finca",
      tripId: "1",
      images: [
        "https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      ]
    },
    {
      id: "3",
      arrivalDate: "2019-12-12",
      mom: "2",
      departureDate: "2019-12-12",
      birthDate: "2020-01-01",
      age: "13 año",
      gender: "hembra",
      origin: "Mongua",
      purchaseValue: "1.500.000",
      saleValue: "1.500.000",
      state: "En Finca",
      tripId: "1",
      images: [
        "https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      ]
    },
    {
      id: "4",
      arrivalDate: "2019-12-12",
      mom: "1",
      departureDate: "2019-12-12",
      birthDate: "2020-01-01",
      age: "14 año",
      gender: "hembra",
      origin: "Mongua",
      purchaseValue: "1.500.000",
      saleValue: "1.500.000",
      state: "En Finca",
      tripId: "2",
      images: [
        "https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1542894956-c07e23120074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      ]
    }
  ],
  cattlesByMom: [],
  cattle: {
    id: "",
    arrivalDate: "",
    mom: "",
    departureDate: "",
    birthDate: "",
    age: "",
    gender: "",
    origin: "",
    purchaseValue: "",
    saleValue: "",
    state: "",
    tripId: "",
    images: []
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CATTLES":
      return {
        ...state,
        users: action.payload
      };
    case "GET_CATTlES_BY_MOTHER":
      // let children = state.cattles;
      // children = children.filter(item => item.mom === action.payload)
      return {
        ...state,
        cattlesByMom: state.cattles
      };
    case "GET_CATTLES_BY_TRIP":
      return {
        ...state,
        cattlesByTrip: state.cattles
      };

    case "ADD_CATTLE":
      //cambiar, el estado no se debe cambiar directamente
      // return Object.assign({}, state, {
      //   todos: [
      //     ...state.todos,
      //     {
      //       text: action.text,
      //       completed: false
      //     }
      //   ]
      state.cattles.push(action.payload);
      return { state };

    case "GET_CATTLE":
      return {
        ...state,
        cattle: state.cattles.find(cattle => cattle.id === action.payload)
      };

    case "EDIT_CATTLE":
      
       
      state.cattles[state.cattles.findIndex(el => el.id === action.payload.id)] =
        action.payload;
      return state

    case "DELETE_CATTLE":
      state.cattles = state.cattles.filter(item => item.id !== action.payload);
      return state;
    default:
      return state;
  }
};

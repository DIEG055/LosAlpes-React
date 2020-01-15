export const getTrips = (number) => {
    return {
            type: "GET_TRIPS",
            payload: number
    }
}
export const addTrip = (trip) => {
    return {
            type: "ADD_TRIP",
            payload: trip
    }
}

export const getTrip = (date) => {
    return {
            type: "GET_TRIP",
            payload: date
    }
}

export const editTrip = (trip) => {
    return {
            type: "EDIT_TRIP",
            payload: trip
    }
}

export const deleteTrip = (date) => {
    return {
            type: "DELETE_TRIP",
            payload: date
    }
}

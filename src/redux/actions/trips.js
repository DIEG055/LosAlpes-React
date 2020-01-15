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

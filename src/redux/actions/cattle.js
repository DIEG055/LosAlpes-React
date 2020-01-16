export const getCattles = (number) => {
    return {
            type: "GET_CATTlES",
            payload: number
    }
}
export const getCattlesByMom = (id) => {
    return {
            type: "GET_CATTlES_BY_MOTHER",
            payload: id
    }
}
export const getCattlesByTrip = (id) => {
    return {
            type: "GET_CATTLES_BY_TRIP",
            payload: id
    }
}
export const addCattle = (cattle) => {
    console.log('hola');
    
    return {
            type: "ADD_CATTlE",
            payload: cattle
    }
}

export const getCattle = (id) => {
    return {
            type: "GET_CATTLE",
            payload: id
    }
}

export const editCattle = (id) => {
    return {
            type: "EDIT_CATTlE",
            payload: id
    }
}

export const deleteTrip = (id) => {
    return {
            type: "DELETE_TRIP",
            payload: id
    }
}

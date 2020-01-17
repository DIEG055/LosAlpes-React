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

export const editCattle = (cattle) => {
    
    return {
            type: "EDIT_CATTLE",
            payload: cattle
    }
}

export const deleteCattle = (id) => {
    return {
            type: "DELETE_CATTLE",
            payload: id
    }
}

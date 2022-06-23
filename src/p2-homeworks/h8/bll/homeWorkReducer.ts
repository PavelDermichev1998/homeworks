import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: { type: 'sort' | 'check', payload: 'up' | 'down' | number }): any => {
    switch (action.type) {
        case 'sort': {
            const stateCopy = [...state]
            if (action.payload === 'up') {
                return stateCopy.sort((a, b) => a.name.length < b.name.length ? 1 : -1)
            } else {
                return stateCopy.sort((a, b) => a.name.length > b.name.length ? 1 : -1)
            }
        }
        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}
const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): { isLoading: boolean } => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): ActionType => {
    return {type: 'SET-LOADING', loading}
}

type ActionType = {
    type: 'SET-LOADING',
    loading: boolean
}
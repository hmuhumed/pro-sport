const leagueReducer = (state = [] , action) => {
    switch(action.type) {
        case 'SET_STANDINGS':
            return action.payload;
        default:
            return state;
    }
}

export default leagueReducer;
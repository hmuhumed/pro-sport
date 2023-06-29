const leagueReducer = (state = [] , action) => {
    switch(action.type) {
        case 'SET_STANDINGS':
            console.log('dot response[0]', typeof action.payload.response[0]);
            let standings = action.payload.response[0].league.standings[0];
            console.log('this is standings before return', standings);
            return [...standings]
            // return action.payload;
        default:
            return state;
    }
}

export default leagueReducer;
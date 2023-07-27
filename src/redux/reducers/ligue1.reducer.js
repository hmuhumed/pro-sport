const ligue1Reducer = (state = [], action) => {
    switch (action.type) {
        case("SET_LIGUE1"):
        const ligue1Standings = action.payload.response[0].league.standings[0]
        
        return [...ligue1Standings];
        default:
            return state;
    }
}

export default ligue1Reducer;
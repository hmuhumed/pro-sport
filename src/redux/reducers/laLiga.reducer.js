const laLigaReducer = (state = [] , action) => {
    switch (action.type){
        case ("SET_LALIGA"):

            const standings = action.payload.response[0].league.standings[0]

            return [...standings];
        default:
            return state;
    }
}

export default laLigaReducer;
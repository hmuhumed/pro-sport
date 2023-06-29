const fixturesReducer = (state = [] , action) => {
    switch(action.type){
        case 'SET_FIXTURES':
            let fixtures = action.payload.response
            return [...fixtures];
        default:
            return state;
    }
}

export default fixturesReducer;
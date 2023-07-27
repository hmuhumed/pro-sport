const ligaFixturesReducer = (state = [] , action) => {
    switch(action.type){
        case 'SET_LIGAFIXTURES':
            let fixtures = action.payload.response
            return [...fixtures];
        default:
            return state;
    }
}

export default ligaFixturesReducer;
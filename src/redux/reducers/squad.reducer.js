const squadReducer = (state = [] , action) => {
    switch(action.type){
        case 'SET_SQUAD':

            let squad = action.payload.response
            return [...squad];
        default:
            return state;
    }
}

export default squadReducer;
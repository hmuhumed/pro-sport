const playerReducer = (state = [] , action) => {
    switch(action.type){
        case 'SET_PLAYER':

            let player = action.payload.response[0]
            return [player];
        default:
            return state;
    }
}

export default playerReducer;
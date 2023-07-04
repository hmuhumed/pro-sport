const bookmarkReducer = (state = [] , action) => {
    switch(action.type){
        case 'SET_BOOKMARK':

            let bookmark = action.payload
            return bookmark;
        default:
            return state;
    }
}

export default bookmarkReducer;
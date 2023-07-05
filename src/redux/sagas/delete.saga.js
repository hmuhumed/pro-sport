import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteBookmark(action){

    const bookMarkDel = action.payload;
    console.log('This is bookmarkDel:', bookMarkDel)

    try{
        yield axios.delete(`/api/bookmarks/delete/${bookMarkDel}`)
        console.log('This is user deleting item:', {data: {user_id: action.payload.user_id}})
        console.log('This id is deleted:' , action.payload.id)

        yield put({
            type: "FETCH_BOOKMARK"
        })

    } catch(error) {
        console.log('Error in DELETE /delete.saga' , error)
    }
}

function* deleteSaga(){
    yield takeLatest("DELETE_BOOKMARK", deleteBookmark)
}

export default deleteSaga;
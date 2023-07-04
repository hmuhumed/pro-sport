import {put , take, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* postBookmark(action){

    try{
        const bookmark = yield axios.post(`/api/players/${action.payload.player}`, action.payload);

        yield put({
            type: "SET_BOOKMARK",
            payload: bookmark.data
        })

    } catch (error) {
        console.log('Error in POST /bookmark saga' , error)
    }
}

function* getBookmarks (){
    try{
        const getBookmark = yield axios.get('/api/bookmarks')
        console.log('This is getBookmarks data:' , getBookmark.data)

        yield put({
            type: 'SET_BOOKMARK',
            payload: getBookmark.data
    })
    } catch (error) {
        console.log('Error in getBookmark', error)
    }
}


function* bookmarkSaga(){
    yield takeLatest("POST_BOOKMARK" , postBookmark)
    yield takeLatest('FETCH_BOOKMARK', getBookmarks)
}

export default bookmarkSaga;
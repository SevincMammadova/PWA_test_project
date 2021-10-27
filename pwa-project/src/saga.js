import { call, put, takeEvery, all, spawn} from 'redux-saga/effects';
import * as actions from './actions';
import {getPostsApi} from "./api";

export function* rootSaga() {
    yield all([
        watchPostPage,
    ].map(saga => spawn(saga)));
}

function* watchPostPage() {
    yield takeEvery(actions.GET_POSTS, workerGetPosts);
}



function* workerGetPosts() {
    try{

        const posts = yield call(getPostsApi);
        yield put(actions.setPosts(posts))

    } catch (e) {
        console.log('get post method failed------------>', e);
    }
}
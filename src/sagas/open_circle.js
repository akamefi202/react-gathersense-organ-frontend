import { put, takeLatest } from 'redux-saga/effects';


function* cirColOpen(data) {
    yield put({ type: "CIRCLECOLOR_OPEN", data: data, });
}
export const OPEN_CIRCLE = function* open_circle() {
    yield takeLatest('CIRCLECOLOR_OPEN', cirColOpen)
}

import { all } from 'redux-saga/effects'
import { GET_NEWS } from './get_news'
//import { OPEN_CIRCLE } from './open_circle'

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([
    GET_NEWS(),
    //OPEN_CIRCLE(),
  ])
}

export default rootSaga
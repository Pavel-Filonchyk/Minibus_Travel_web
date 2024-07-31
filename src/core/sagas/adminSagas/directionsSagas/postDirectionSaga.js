import { takeEvery, put, call, select } from 'redux-saga/effects'
import { POST_DIRECTION, postDirectionSuccess } from '../../../actions/restAdminTravelActions'
import httpProvider from '../../../../common/httpProvider'
import { directionsUrl } from '../../../../common/api'

function* workerLoader() {
    const postDirection = yield select(state => state.restAdminTravelReducer.postDirection)
    const token = yield select(state => state.getTravelsReducer.token)
    try {
      const { data } = yield call(httpProvider.post, directionsUrl('', token), {data: postDirection})
  
      yield put(postDirectionSuccess(data))
    } catch (error) {
      yield put(console.log(error))
    }
  }

export default function* watcherPostDirectionAdmin() {
    yield takeEvery(POST_DIRECTION, workerLoader)
}
import { takeEvery, put, call, select } from 'redux-saga/effects'
import { POST_TRAVEL, postTravelSuccess, postTravelError } from '../../../actions/restAdminTravelActions'
import httpProvider from '../../../../common/httpProvider'
import { travelUrl } from '../../../../common/api'

function* workerLoader() {
    const postTravel = yield select(state => state.restAdminTravelReducer.postTravel)
    const token = yield select(state => state.getTravelsReducer.token)
    try {
        const { data } = yield call(httpProvider.post, travelUrl('', token), {data: postTravel})
    
        yield put(postTravelSuccess(data))
      } catch (error) {
        yield put(postTravelError(error))
      }
  }

export default function* watcherPostTravelAdmin() {
  yield takeEvery(POST_TRAVEL, workerLoader)
}
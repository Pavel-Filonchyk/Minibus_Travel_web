import { takeEvery, put, call, select } from 'redux-saga/effects'
import { DELETE_TRAVEL, deleteTravelSuccess, deleteTravelError } from '../../../actions/restAdminTravelActions'
import httpProvider from '../../../../common/httpProvider'
import { travelUrl } from '../../../../common/api'

function* workerLoader() {
    const blockId = yield select(state => state.restAdminTravelReducer.blockId)
    const token = yield select(state => state.getTravelsReducer.token)
    try {
        const { data } = yield call(httpProvider.delete, travelUrl(blockId, token))
        
        yield put(deleteTravelSuccess(data))
      } catch (error) {
        yield put(deleteTravelError(error))
      }
  }

export default function* watcherDeleteTravelAdmin() {
  yield takeEvery(DELETE_TRAVEL, workerLoader)
}

import { takeEvery, put, call, select } from 'redux-saga/effects'
import { DELETE_PERSON, deletePersonSuccess } from '../../../actions/restAdminTravelActions'
import httpProvider from '../../../../common/httpProvider'
import { travelUrl } from '../../../../common/api'

function* workerLoader() {
    const blockId = yield select(state => state.restAdminTravelReducer.blockIdPerson)
    const newPersonTravel = yield select(state => state.restAdminTravelReducer.newPersonTravel)
    const token = yield select(state => state.getTravelsReducer.token)
    try {
        const { data } = yield call(httpProvider.put, travelUrl(blockId, token), {data: newPersonTravel})
        
        yield put(deletePersonSuccess(data))
      } catch (error) {
        yield put(console.log(error))
      }
  }

export default function* watcherDeletePersonAdmin() {
  yield takeEvery(DELETE_PERSON, workerLoader)
}

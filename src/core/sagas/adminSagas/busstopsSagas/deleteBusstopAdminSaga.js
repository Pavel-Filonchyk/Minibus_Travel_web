import { takeEvery, put, call, select } from 'redux-saga/effects'
import {DELETE_BUSSTOP , deleteBusstopSuccess, deleteBusstopError } from '../../../actions/restAdminBusstopsActions'
import httpProvider from '../../../../common/httpProvider'
import { citiesUrl } from '../../../../common/api'

function* workerLoader() {
    const blockId = yield select(state => state.restAdminBusstopsReducer.blockId)
    const token = yield select(state => state.getTravelsReducer.token)
    try {
      const { data } = yield call(httpProvider.delete, citiesUrl(blockId, token))
  
      yield put(deleteBusstopSuccess(data))
    } catch (error) {
      yield put(deleteBusstopError(error))
    }
  }

export default function* watcherDeleteBusstopAdmin() {
  yield takeEvery(DELETE_BUSSTOP, workerLoader)
}
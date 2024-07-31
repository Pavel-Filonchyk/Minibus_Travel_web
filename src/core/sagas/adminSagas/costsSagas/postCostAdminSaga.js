import { takeEvery, put, call, select } from 'redux-saga/effects'
import { POST_COST, postCostSuccess, postCostError } from '../../../actions/restAdminCostsActions'
import httpProvider from '../../../../common/httpProvider'
import {  costsUrl } from '../../../../common/api'

function* workerLoader() {
    const postCost = yield select(state => state.restAdminCostsReducer.postCost)
    const token = yield select(state => state.getTravelsReducer.token)
    try {
        const { data } = yield call(httpProvider.post,  costsUrl('', token), {data: postCost})
    
        yield put(postCostSuccess(data))
      } catch (error) {
        yield put(postCostError(error))
      }
  }

export default function* watcherPostCostAdmin() {
    yield takeEvery(POST_COST, workerLoader)
}
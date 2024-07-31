import { takeEvery, put, call, select } from 'redux-saga/effects'
import { POST_USER_SUCCESS } from '../../actions/bookTravelActions'
import { postMessageSuccess, postMessageError } from '../../actions/authActions'
import httpProvider from '../../../common/httpProvider'
import { AUTH_URL } from '../../../common/api'

function* workerLoader() {
    const token = 'c4e4433ef64dc6e53945a5cc1135a3a9'
    const alphaname_id = '5191'
    const ticketData = yield select(state => state.postUserReducer.ticketData)
    
    const message = `Ваш рейс: ${ticketData?.choiceRoutes[0].dateTrip} в ${ticketData?.timeStart}. Посадка: ${ticketData?.selectFrom}, ост. ${ticketData?.wayStart}. К оплате: ${ticketData?.costRoute} б.р. www.petrikov-auto.by/`

    try {
      const { data } = yield call(httpProvider.post, AUTH_URL, {
        data: {
          token, 
          alphaname_id,
          phone: ticketData?.phoneNumber,
          message
          
        }
      })
      yield put(postMessageSuccess(data))
    } catch (error) {
      yield put(postMessageError(error))
    }
  }

export default function* watcherPostMessage() {
  yield takeEvery(POST_USER_SUCCESS, workerLoader)
}

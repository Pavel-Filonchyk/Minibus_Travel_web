import { takeEvery, put, call, select } from 'redux-saga/effects'
import { SEND_CODE_DATA, sendCodeDataSuccess, sendCodeDataError } from '../../actions/authActions'
import httpProvider from '../../../common/httpProvider'
import { AUTH_URL } from '../../../common/api'

function* workerLoader() {
    const token = 'c4e4433ef64dc6e53945a5cc1135a3a9'
    const alphaname_id = '5191'
    const phoneNumber = yield select(state => state.authReducer.phoneNumber)
    const sendCode = yield select(state => state.authReducer.sendCode)

    try {
      const { data } = yield call(httpProvider.post, AUTH_URL, {
        data: {
          token, 
          alphaname_id,
          phone: phoneNumber,
          message: sendCode
        }
      })
      yield put(sendCodeDataSuccess(data))
    } catch (error) {
      yield put(sendCodeDataError(error))
    }
  }

export default function* watcherGetCodeSaga() {
  yield takeEvery(SEND_CODE_DATA, workerLoader)
}
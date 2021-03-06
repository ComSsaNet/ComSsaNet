import {
  all,
  fork,
  put,
  takeLatest,
  call,
  delay,
} from '@redux-saga/core/effects';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../_reducers/user';

function logInAPI(data) {
  console.log(data);
  const dummyUser = {
    data: {
      ...data,
      nickname: 'ohzz',
      id: 1,
    },
  };
  console.log(dummyUser);

  return dummyUser;

  // return axios.post('/user/login', data);
}

// 호출 후 LOG_IN_SUCCESS action 호출 후 reducer에 요청
function* logIn(action) {
  try {
    yield delay(1000);
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}

function signUpAPI(data) {
  return null;

  // return axios.post('/user/login', data);
}

function* signUp(action) {
  try {
    yield delay(1000);
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}

// LOG_IN_REQUEST 라는 요청이 들어올 때까지 지켜본 후 함수 logIn 함수 호출
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

// saga
// 유저 사가
export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}

import { all, fork, put, takeLatest, call } from "@redux-saga/core/effects";
import { LOG_IN_REQUEST } from "../_reducers/user";

// function logInAPI(data) {
//     return axios.post("/user/login", data);
// }

// 호출 후 LOG_IN_SUCCESS action 호출 후 reducer에 요청
function* logIn(action) {
    return;
    // try {
    //     const result = yield call(logInAPI, action.data);
    //     yield put({
    //         type: LOG_IN_SUCCESS,
    //         data: result.data,
    //     });
    // } catch (error) {
    //     console.error(error);
    //     yield put({
    //         type: LOG_IN_FAILURE,
    //         error: error.response.data,
    //     });
    // }
}

// LOG_IN_REQUEST 라는 요청이 들어올 때까지 지켜본 후 함수 logIn 함수 호출
function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

// saga
// 유저 사가
export default function* userSaga() {
    yield all([watchLogin]);
}

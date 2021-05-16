import { all, fork } from "redux-saga/effects";
import userSaga from "./user";

// 모든 Saga들을 한번에 시작하기 위한 단일 entry point
export default function* rootSaga() {
    yield all([fork(userSaga)]);
}

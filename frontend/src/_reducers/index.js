import { combineReducers } from 'redux';
import user from './user';

// 루트 리듀서 - 전체 리듀서를 모아주는 역할
const rootReducer = combineReducers({
  user,
});

export default rootReducer;

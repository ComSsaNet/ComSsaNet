// action - 현재 파일로 따로 관리할지 리듀서에 넣어놓을지 고민

// 로그인
export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE';

// 회원가입
export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  me: null,
};

// reducer
// 유저 리듀서
// action 값 받고 state 변경
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 현재 state 변경 x
    case LOG_IN_REQUEST:
      return {
        ...state,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;

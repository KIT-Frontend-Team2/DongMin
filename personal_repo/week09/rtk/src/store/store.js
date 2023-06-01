import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer";
// .env(환경 변수)
// 환경변수는 언제 사용해야할까?
// 시스템 환경을 변수에 담아서 사용, 경로 생략
// 특정 값을 변수에 담아 숨기기 위해 사용 ex)백엔드 url, 암호화 키(로그인 토큰, 세션 키...)
// dotenv, 기본값 -> node_modules에서 이미 설치 되어있음

export const store = configureStore({
  reducer: rootReducer,
});

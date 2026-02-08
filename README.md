# Stocat Frontend

Stocat 모의투자 서비스의 프론트엔드 레포지토리입니다.

## 기술 스택 (Stack)

- **React**: UI 컴포넌트 라이브러리
- **TypeScript**: 정적 타입 시스템
- **Vite**: 빠른 빌드 도구 및 개발 서버
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **React Router**: SPA 라우팅

## 시작하기 (Getting Started)

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속하여 확인할 수 있습니다.

## 프로젝트 구조

```
src/
├── app/          # 라우팅 및 앱 진입점
├── pages/        # 페이지 단위 컴포넌트 (Home, Market, Portfolio, Asset, Buy)
├── shared/       # 공통 모듈
│   ├── api/      # API 클라이언트 및 타입 정의
│   ├── hooks/    # 커스텀 훅 (useRealTime 등)
│   └── ui/       # 공통 UI 컴포넌트 (Layout, Header 등)
└── ...
```

## 백엔드 연동 가이드

현재 기본 설정은 **Mock Mode**로 동작합니다. 실제 백엔드 서버와 연동하려면:

1. `.env` 파일을 생성하고 `VITE_USE_MOCK=false` 로 설정하세요.
2. 백엔드 서버는 `http://localhost:8080` 에서 실행되어야 합니다.
3. 자세한 API 명세는 `BACKEND_API_SPEC.md` 파일을 참고하세요.

## 실시간 데이터 (WebSocket)

- Mock 모드에서는 `MockSocketService`가 가짜 데이터를 생성하여 2초마다 가격 변동을 시뮬레이션합니다.
- 실제 모드에서는 `ws://localhost:8080/ws` 로 접속하여 `TradeInfo` 규격의 데이터를 수신합니다.

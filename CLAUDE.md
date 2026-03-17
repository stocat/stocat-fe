# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개발 명령어

```bash
pnpm dev          # 개발 서버 실행
pnpm build        # TypeScript 컴파일 + Vite 빌드
pnpm lint         # ESLint 검사
pnpm preview      # 빌드 결과 미리보기
pnpm svgr         # SVG를 React 컴포넌트로 변환
```

테스트 설정은 없음.

## 아키텍처 개요

React 19 + Vite SPA. React Router v7로 라우팅, Zustand로 클라이언트 상태, TanStack React Query로 서버 상태를 관리한다.

### 스타일 시스템

두 가지 방식을 혼용한다:
- **Vanilla Extract** (`.css.ts` 파일): 컴포넌트별 스코프드 스타일. 반드시 `src/shared/styles/vars.css.ts`의 디자인 토큰(`vars.color.*`, `vars.typography.*`)을 사용한다.
- **Tailwind CSS v4**: 간단한 유틸리티 스타일에 사용.

타이포그래피 스케일: `h1`, `h2`, `subtitle1-3`, `body1-5`, `caption1-3`, `label1-2`
색상 역할: `vars.color.role.{text,subtext,background,background2,line,primary,...}`

### 폴더 구조

```
src/
├── app/             # App.tsx, routes.tsx (중앙 라우터), Provider 합성
├── pages/           # 페이지별 폴더. 각 페이지가 자체 routes.ts를 갖고 app/routes.tsx에서 병합
├── layout/          # Header, BottomAppBar
├── shared/
│   ├── components/  # 재사용 컴포넌트. index.ts 배럴 export 필수
│   └── styles/      # 디자인 토큰 및 전역 스타일
├── apis/            # Axios 클라이언트 + 도메인별 API ({domain}.api.ts / {domain}.types.ts)
├── hooks/
│   ├── queries/     # React Query 조회 훅. queryKeys.ts에서 키 중앙 관리
│   └── mutations/   # React Query 뮤테이션 훅
├── store/           # Zustand 스토어 ({domain}Store.ts)
├── providers/       # QueryProvider, AuthProvider
└── types/           # 전역 공통 타입
```

### 라우팅

각 페이지 폴더에 `routes.ts`를 두고, `src/app/routes.tsx`에서 스프레드로 병합하는 구조다.

### API 레이어

- `src/apis/client.ts`: Axios 인스턴스. 요청 인터셉터로 `Authorization` / `X-MEMBER-ID` 헤더 자동 주입. 401 응답 시 토큰 자동 갱신 후 재요청.
- 환경변수: `VITE_API_BASE_URL`
- React Query `staleTime` 30초, `gcTime` 300초, `retry` 1회.

### 인증

`authStore`(Zustand)가 액세스/리프레시 토큰을 localStorage에 영속 저장한다. `AuthProvider`가 앱 시작 시 리프레시 토큰으로 자동 갱신을 시도한다.

## 파일 네이밍 컨벤션

| 종류 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `StockListSection.tsx` |
| 컴포넌트 스타일 | `{Name}.css.ts` | `StockListSection.css.ts` |
| 커스텀 훅 | `use{Name}.ts` | `usePositions.ts` |
| 상태 스토어 | `{domain}Store.ts` | `authStore.ts` |
| API | `{domain}.api.ts` / `{domain}.types.ts` | `auth.api.ts` |

## 경로 별칭

`@` → `src/` (vite.config.ts에 설정됨)

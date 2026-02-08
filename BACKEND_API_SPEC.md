# Stocat 백엔드 API 명세서

본 문서는 Stocat 프론트엔드 애플리케이션 연동을 위한 백엔드 API 명세서입니다.
백엔드 서버는 `http://localhost:8080` 에서 동작해야 합니다.

## 공통 응답 포맷 (Global Response Format)

모든 HTTP API 응답은 아래의 JSON 구조를 따릅니다.

```json
{
  "success": true,              // 성공 여부 (true/false)
  "data": { ... },              // 실제 응답 데이터 payload
  "code": 0,                    // 0 = 성공, 그 외 = 에러 코드
  "message": "...",             // 에러 메시지 또는 설명
  "timestamp": "ISO8601"
}
```

**참고**: 아래의 각 API 설명에서 "응답 (Response)" 예시는 `data` 필드에 들어갈 내용만을 표시합니다.

## 인증 (Authentication)

- **방식**: JWT (JSON Web Token)
- **헤더**: `Authorization: Bearer <token>`
- 프론트엔드는 `localStorage`의 `auth_token` 키에 저장된 토큰을 사용하여 요청합니다.

## HTTP Endpoints (Static Data Only)

Base URL: `http://localhost:8080/api`

## Authentication API

### 1. 회원 가입
- **POST** `/auth/signup`
- **Request**:
  ```json
  {
    "email": "test@example.com",
    "nickname": "홍길동",
    "password": "password"
  }
  ```
- **Response**:
  ```json
  {
      "code": 1000,
      "message": "성공",
      "data": null
  }
  ```

### 2. 로그인
- **POST** `/auth/login`
- **Request**:
  ```json
  {
    "email": "test@example.com",
    "password": "password"
  }
  ```
- **Response**:
  ```json
  {
      "code": 1000,
      "message": "성공",
      "data": {
          "accessToken": "...",
          "refreshToken": "..."
      }
  }
  ```

### 3. 내 정보 요약
- **GET** `/auth/summary`
- **Header**: `Authorization: Bearer <token>`
- **Response**:
  ```json
  {
      "code": 1000,
      "message": "성공",
      "data": {
          "id": 1,
          "email": "...",
          "nickname": "..."
      }
  }
  ```

## Domain API (Static Data Only)

### 1. 사용자 요약 정보 (User Summary)
- **GET** `/user/summary`
- **응답 (`data`)**:
  ```json
  {
    "name": "강혜린",
    "id": "user-1"
  }
  ```

### 2. 주식 목록 (Stocks)
- **GET** `/stocks`
    - **Query Params**:
        - `type`: 'korea' | 'us' | 'coin' (선택)
        - `search`: string (선택)
    - **응답 (`data`)**: `Stock[]` (Metadata Only)
      ```json
      [
        {
          "id": "1",
          "name": "삼성전자",
          "code": "005930",
          "type": "korea"
          // price, change 등 동적 데이터 제외
        }
      ]
      ```

- **GET** `/stocks/:id`
    - **응답 (`data`)**: 단일 `Stock` 객체 (Metadata Only).

### 3. 보유 자산 (Portfolio)
- **GET** `/assets`
    - **설명**: 사용자의 보유 종목 메타데이터와 수량/평단가만 반환합니다.
    - **응답 (`data`)**: `Asset[]`
      ```json
      [
        {
          "stock": { 
             "id": "1",
             "name": "삼성전자",
             "code": "005930",
             "type": "korea"
          },
          "amount": 10,       // 보유 수량
          "purchasePrice": 70000 // 평균 매수 단가
        }
      ]
      ```

### 4. 분석 리포트 (Analysis Report)
- **GET** `/analysis`
    - **응답 (`data`)**: `AnalysisReport`
      ```json
      {
        "style": "성장 지향형",
        "styleDescription": "...",
        "insights": [ ... ],
        "feedback": [ ... ]
      }
      ```

### 5. 뉴스 목록 (News)
- **GET** `/news`
    - **응답 (`data`)**: `News[]`
      ```json
      [
        {
          "id": "1",
          "title": "...",
          "press": "...",
          "time": "09:30"
        }
      ]
      ```

### 6. 매수 (Buy)
- **POST** `/buy`
    - **Request Body**:
      ```json
      {
        "stockId": "1",
        "amount": 10,
        "price": 70000 // 사용자가 본 가격 (검증용)
      }
      ```
    - **응답 (`data`)**: `boolean` (성공 여부)

### 7. 매도 (Sell)
- **POST** `/sell`
    - **Request Body**:
      ```json
      {
        "stockId": "1",
        "amount": 5,
        "price": 72000
      }
      ```
    - **응답 (`data`)**: `boolean` (성공 여부)

---

## WebSocket API

Base URL: `ws://localhost:8080/ws`

### 연결 (Connection)
- 해당 엔드포인트로 연결합니다.

### 클라이언트 -> 서버 메시지

#### 구독 (Subscribe)
- **Action**: `subscribe`
- **Payload**: `{ "topic": "string" }`
- **Topics**:
    - `stock:<code_or_id>` (예: `stock:KRW-BTC` 또는 `stock:005930`)

### 서버 -> 클라이언트 메시지

#### 주식 체결 정보 (TradeInfo)
- **Topic**: `stock:<code_or_id>`
- **Payload (Data Body)**:
  ```json
  {
    "code": "KRW-BTC",
    "side": "BUY",
    "qty": 0.0162,
    "price": 93750000,          // 현재가 (필수)
    "priceCurrency": "KRW",
    "change": "RISE",           // 변동 상태
    "change_price": 500         // 변동액 (절대값)
    // ...
  }
  ```

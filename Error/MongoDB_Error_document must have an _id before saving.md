# [Error] MongoDB_Error_document must have an _id before saving

## 📌 MongoDB_Error_document must have an _id before saving

### 에러 원인
- 프레임워크: Nest.js
- DB : MongoDB
- lib : mongoose

TypeOMD를 이용해서 DB 스키마를 작성하고 _id의 타입을 지정한 다음부터 발생된 에러이다.

### 해경 방법
매우 간단하다.
1. 스키마에서 명시적으로 _id 필드를 선언한 경우 명시적으로 초기화해야 한다.
2. 스키마에 선언하지 않은 경우 MongoDB에서 자동적으로 선언하고 초기화한다.

필자처럼 스키마에 포함하되 초기화하지 않으면 이와 같은 에러메세지를 받을 수 있다.
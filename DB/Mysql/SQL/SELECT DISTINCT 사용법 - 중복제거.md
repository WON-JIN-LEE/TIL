# 💻[SQL] SELECT DISTINCT 사용법 - 중복제거
일반적으로 select문에서는 중복 여부에 상관없이 모든 자료를 요청합니다.

```sql
SELECT DISTINCT 컬럼명 FROM 테이블명;
```
위와 같이 지정된 컬럼 명이 중복되지 않고 고유한 자료만으로 별개의 레코드만 반환한 결과가 나옵니다.

```sql
SELECT COUNT(DISTINCT 컬럼명) FROM 테이블명;
```
여기서 COUNT 함수를 사용해서 중복되지 않은 총 개수를 알아낼 수도 있습니다.

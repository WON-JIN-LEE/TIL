
# MySQL 패턴매칭
패턴 매칭(pattern matching)
MySQL은 데이터의 특정 패턴을 검색하기 위한 다음과 같은 패턴 매칭 연산자를 제공합니다.

1. LIKE
2. REGEXP

또한, 임의의 문자나 문자열을 대체하기 위해서 와일드카드(wildcard) 문자를 사용할 수도 있습니다.
___

## LIKE
LIKE 연산자는 특정 패턴을 포함하는 데이터만을 검색하기 위해 사용합니다.

다음 예제는 Reservation 테이블에서 '장'으로 시작하는 이름(Name)으로 예약한 레코드를 선택하는 예제입니다.

```sql
예제
SELECT * FROM Reservation
WHERE Name LIKE '장%';
```
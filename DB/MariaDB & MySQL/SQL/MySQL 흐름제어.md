
# MySQL 흐름제어
MySQL은 프로그램의 순차적인 흐름을 제어해야 할 때 사용할 수 있는 다양한 연산자와 함수를 제공합니다.

1. CASE
2. IF()
3. IFNULL()
4. NULLIF()


## CASE

```sql
SELECT CASE 0
    WHEN 0 THEN 'zero'
    WHEN 1 THEN 'one'
    ELSE 'more'
END;
```

첫 번째 CASE 문법에서는 value와 compare_value 값이 같으면, THEN 절의 result 값을 반환합니다.
만약 서로 값이 같지 않으면, ELSE 절의 result 값을 반환합니다. 이때 ELSE 절이 없으면, NULL을 반환합니다.

두 번째 CASE 문법에서는 condition의 논리값이 참이면, THEN 절의 result 값을 반환합니다.
만약 논리값이 거짓이라면, ELSE 절의 result 값을 반환합니다.
이때 ELSE 절이 없으면, NULL을 반환합니다.


## IF()
IF() 함수는 첫 번째 인수로 전달받은 표현식의 논리값에 따라 다른 값을 반환합니다.

IF() 함수의 원형은 다음과 같습니다.
IF(expr1, expr2, expr3)

만약 expr1이 참이면 expr2를 반환하고, 거짓이면 expr3를 반환합니다.

## IFNULL()
IFNULL() 함수는 첫 번째 인수로 전달받은 값이 NULL인지 아닌지를 검사하여 다른 값을 반환합니다.

IFNULL() 함수의 원형은 다음과 같습니다.
IFNULL(expr1, expr2)

만약 expr1의 값이 NULL이 아니면 expr1 그 자체를 반환하고, NULL이면 expr2를 반환합니다.

## NULLIF()
NULLIF() 함수는 인수로 전달받은 두 값이 서로 같은지를 검사하여 다른 값을 반환합니다.

NULLIF() 함수의 원형은 다음과 같습니다.
# 💻[SQL] Null 일 경우 Default 값 처리 방법 

테이블의 컬럼값이 NULL 일 경우 Default 값을 넣어 주어야 할 경우가 생깁니다. outer join을 했을 때 일부 row의 필드 값이 null일 경우가 존재하는데 이를 IFNULL()를 통해서 default 값을 지정해줄 수 있습니다.

## MySQL에서는 IFNULL로
 My Sql 의 경우엔 IFNULL('Data','Default Value') 를 사용한다. 

### 문법
```sql
-- 문법
IFNULL(expression_1,expression_2);

-- 예제
SELECT
	a.id, a.name, IFNULL(b.cnt ,0) as cnt
FROM
	table_a a
        LEFT JOIN table_b b ON a.id = b.id
WHERE
	a.id = input_data.id
```

또는 다음 과 같이 COALESCE() 함수를 사용할 수 있습니다.

```sql
SELECT
	a.id, a.name, COALESCE(b.cnt ,0) as cnt
FROM
	table_a a
        LEFT JOIN table_b b ON a.id = b.id
WHERE
	a.id = input_data.id
```

MS-SQL, Oracle, SQL 서버에서도 사용되는 NULL함수가 있습니다. 아래 링크를 통해 참고해주세요.
___
### Reference
- [SQL NULL 함수](https://www.w3schools.com/sql/sql_isnull.asp)
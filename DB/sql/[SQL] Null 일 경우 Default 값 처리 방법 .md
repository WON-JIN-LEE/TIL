# ๐ป[SQL] Null ์ผ ๊ฒฝ์ฐ Default ๊ฐ ์ฒ๋ฆฌ ๋ฐฉ๋ฒ 

ํ์ด๋ธ์ ์ปฌ๋ผ๊ฐ์ด NULL ์ผ ๊ฒฝ์ฐ Default ๊ฐ์ ๋ฃ์ด ์ฃผ์ด์ผ ํ  ๊ฒฝ์ฐ๊ฐ ์๊น๋๋ค. outer join์ ํ์ ๋ ์ผ๋ถ row์ ํ๋ ๊ฐ์ด null์ผ ๊ฒฝ์ฐ๊ฐ ์กด์ฌํ๋๋ฐ ์ด๋ฅผ IFNULL()๋ฅผ ํตํด์ default ๊ฐ์ ์ง์ ํด์ค ์ ์์ต๋๋ค.

## MySQL์์๋ IFNULL๋ก
 My Sql ์ ๊ฒฝ์ฐ์ IFNULL('Data','Default Value') ๋ฅผ ์ฌ์ฉํ๋ค.ย 

### ๋ฌธ๋ฒ
```sql
-- ๋ฌธ๋ฒ
IFNULL(expression_1,expression_2);

-- ์์ 
SELECT
	a.id, a.name, IFNULL(b.cnt ,0) as cnt
FROM
	table_a a
        LEFT JOIN table_b b ON a.id = b.id
WHERE
	a.id = input_data.id
```

๋๋ ๋ค์ ๊ณผ ๊ฐ์ด COALESCE() ํจ์๋ฅผ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

```sql
SELECT
	a.id, a.name, COALESCE(b.cnt ,0) as cnt
FROM
	table_a a
        LEFT JOIN table_b b ON a.id = b.id
WHERE
	a.id = input_data.id
```

MS-SQL, Oracle, SQL ์๋ฒ์์๋ ์ฌ์ฉ๋๋ NULLํจ์๊ฐ ์์ต๋๋ค. ์๋ ๋งํฌ๋ฅผ ํตํด ์ฐธ๊ณ ํด์ฃผ์ธ์.
___
### Reference
- [SQL NULL ํจ์](https://www.w3schools.com/sql/sql_isnull.asp)
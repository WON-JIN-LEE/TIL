# ๐ป MySql์ Primary Key & Unique Key & Foreign Key

Database ์์ Key ์ ์๋ฏธ๋ ํ์ด๋ธ์์ ๊ฐ ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฅํ๋ ๊ธฐ์ค์ ์ญํ ์ ํ๋ค.

## Key(Index)๋?

๊ฐ์ฅ ์ผ๋ฐ์ ์ธ Key๋ DB ์ Index ์ ๋์์ด์ด๋ค. Database ๋ ๋ฐ์ดํฐ์ ๊ฒ์์ ์ํด Index ๋ฅผ ์์ธ์ผ๋ก ์ฌ์ฉํ๋ฏ๋ก ์ค์ํ ์ญํ ์ ํ๋ค.

์ค๋ณต์ ํ์ฉํ๋ฉฐ NULL ๋ฑ์ ํ์ฉ๋ ๊ฐ๋ฅํ์ง๋ง NULL ์ด ํ์ฉ๋  ๊ฒฝ์ฐ... ์์ธ์ ์์ด ๋น์ฝ์ ์ธ ์ฑ๋ฅ ์ ํ๋ฅผ ๊ฐ์ ธ์ค๋ฏ๋ก ์ผ๋ฐ์ ์ผ๋ก Null์ด ํ์ฉ๋๋ ๋ฐ์ดํฐ์ ๊ฒฝ์ฐ Indexing ํ์ง ์๋๋ค.

___

## 1. Primary Key
์ผ๋ฐ์ ์ธ Key ๋ Index ๋ฅผ ์ง์นญํ์ง๋ง, ์ผ๋ฐ์ ์ผ๋ก DB ์ค๊ณ๋ฅผ ํ  ๋ Key ๋ผ๊ณ  ํ๋ฉด ๋ณดํต PK ๋ฅผ ์๋ฏธํ๋ค.

### 1.1 Primary Key์ ํน์ง
- ํ์ด๋ธ ๋ด์ ๊ฐ ํ์ ๊ตฌ๋ณํ๊ธฐ ์ํด ์ฌ์ฉํ๋ค. ๊ทธ๋ฌ๋ฏ๋ก ์ ์ผํ ๊ฐ์ด์ด์ผ ํ๋ค
- null์ ํฌํจํด์๋ ์ ๋ ์ ๋๋ค. ๋ฐ๋์ ๊ฐ์ ํฌํจ์์ผ์ผ ํ๋ค.
- ๊ฐ์ด ์ค๋ณต๋๋ฉด ์ ๋๋ค.
- ์ฌ๋ฌ ๊ฐ์ ์นผ๋ผ์ ๊ธฐ๋ณธํค๋ก ์ง์ ํ  ์ ์๋ค.(๋ณตํฉ ํค)
- ํ์ด๋ธ์ ๊ณ ์  ์ธ์๋ฒํธ๋ก ์ฃผ๋ก ์ฌ์ฉํ๋ค.(like  index๋ฒํธ)
- **๊ธฐ๋ณธ์ ์ผ๋ก Index ์ฑ์ง ์ญ์ ๋ณด์ฅ๋๊ธฐ ๋๋ฌธ์ ๊ฒ์ ์ ์์ธ์ Key ๊ฐ ๋๋ฉฐ, Constraint ๋ฅผ ๊ฐ๊ธฐ ๋๋ฌธ์ ๋ค๋ฅธ ํ์ด๋ธ๊ณผ JOIN ์ ํ  ๋ ๊ธฐ์ค ๊ฐ์ผ๋ก ์ฌ์ฉ๋๋ค.**
-  RDB ์ ํน์ง์ ์ธ ๋ฐ์ดํฐ ์ ํฉ์ฑ์ ๋ณด์ฅ๊ณผ Key ๊ฐ์ ์ฑ์ง์ ๊ฐ๊ธฐ ๋๋ฌธ์ ์ผ๋ฐ์ ์ธ ์ค๊ณ์์๋ ๊ฐ์ฅ ์ ํธ๋๋ Key ํ์์ด๋ค.
___
 

## 2.Unique Key
Unique Key ๋ Uniqueness ๋ฅผ ์ง๋ Index๋ฅผ ๋งํ๋ฉฐ, Unique Index ๋ผ ๋ถ๋ฅด๊ธฐ๋ ํ๋ค.

### 2.1 Unique Key์ ํน์ง
- Unique Key๋ ํ์ด๋ธ์ ์นผ๋ผ์์ ์ ์ผํ ๊ฐ์ ๊ฐ์ ธ์ผ ํ๋ค.
- ์ค๋ณต๋ ๊ฐ์ ๊ฐ์ง๋ฉด ์ ๋๋ค. null์ ํฌํจํ  ์ ์๋ค.(๊ธฐ๋ณธํค์ ๋ค๋ฅธ ์ )
- ์ฌ๋ฌ๊ฐ์ ์นผ๋ผ์ ์ ๋ํฌํค๋ก ์ง์ ํ  ์ ์๋ค.(๋ณตํฉ ํค)
- ์ฃผ๋ก ์ค๋ณต๋๋ฉด ์ ๋๋ ๋ฐ์ดํฐ์ธ ํด๋ํฐ ๋ฒํธ, ์ฃผ๋ฏผ๋ฑ๋ก๋ฒํธ, id ๋ฑ์ ์ฌ์ฉํ๋ค.

___

## 3.Foreign Key
Foreign Key ๋ JOIN ๋ฑ์ผ๋ก ๋ค๋ฅธ DB ์์ Relation ์ ๋งบ๋ ๊ฒฝ์ฐ, ๋ค๋ฅธ ํ์ด๋ธ์ PK๋ฅผ ์ฐธ์กฐํ๋ Column ์ FK ๋ผ๊ณ  ํ๋ค.

์ฌ๊ธฐ์ Foreign Key Relation ์ ๋งบ๋ ๋ค๋ ์๋ฏธ๋ ๋ผ๋ฆฌ์  ๋ฟ ์๋๋ผ ๋ฌผ๋ฆฌ์ ์ผ๋ก ๋ค๋ฅธ ํ์ด๋ธ๊ณผ์ ์ฐ๊ฒฐ๊น์ง ๋งบ๋ ๊ฒฝ์ฐ๋ฅผ ๋งํ๋ฉฐ, ์ด ๋ FK ๋ ์ ์ฝ์กฐ๊ฑด(Constraint)์ผ๋ก์ ์ญํ ์ ํ๋ค.

### 3.1  Foreign Key Restrict ์ต์์ ์ค ์ ์๊ณ  ๋ค์๊ณผ ๊ฐ์ ์ต์๋ค์ด ์๋ค.
  - **RESTRICT**: FK ๊ด๊ณ๋ฅผ ๋งบ๊ณ  ์๋ ๋ฐ์ดํฐ ROW ์ ๋ณ๊ฒฝ(UPDATE) ๋๋ ์ญ์ (DELETE) ๋ฅผ ๋ง๋๋ค.
  - **CASCADE**: FK ๊ด๊ณ๋ฅผ ๋งบ์ ๋ ๊ฐ์ฅ ํํ๊ฒ ์ ํ  ์ ์๋ ์ต์์ผ๋ก, FK ์ ๊ด๊ณ๋ฅผ ๋งบ์ ์๋ PK ๋ฅผ ์ง์  ์ฐ๊ฒฐํด์ DELETE ๋๋ UPDATE ์, ์๋ Key ๊ฐ๋ ์ญ์  ๋๋ ๊ฐฑ์ ์ํจ๋ค.  
  - **SET NULL**: ๋ผ๋ฆฌ์  ๊ด๊ณ์ ๋ถ๋ชจ์ ํ์ด๋ธ, ์ฆ ์ฐธ์กฐ๋๋ ํ์ด๋ธ์ ๊ฐ์ด ๋ณ๊ฒฝ ๋๋ ์ญ์ ๋  ๋ ์์ ํ์ด๋ธ์ ๊ฐ์ NULL ๋ก ๋ง๋ ๋ค. UPDATE ์ฟผ๋ฆฌ๋ก ์ธํด SET NULL ์ด ํ์ฉ๋ ๊ฒฝ์ฐ์๋ง ๋์ํ๋ค.
  - **NO ACTION**: RESTRICT ์ต์๊ณผ ๋์์ด ๊ฐ์ง๋ง, ์ฒดํฌ๋ฅผ ๋ค๋ก ๋ฏธ๋ฃฌ๋ค.
  - **SET DEFAULT**: ๋ณ๊ฒฝ ๋๋ ์ญ์  ์์ ๊ฐ์ DEFAULT ๊ฐ์ผ๋ก ์ธํํ๋ค.


## MySQL 기본 문법
- **mysql은 키워드와 구문, 문자열은 대소문자를 구분하지 않는다.** 하지만 테이블과 필드의 이름은 대소문자를 구분하므로 주의가 필요함


## 주석 
1. #한 줄 주석
2. -- 한 줄 주석
3. /* 두 줄 이상의 주석 */


### INSERT INTO table VALUES .. 와 INSERT INTO table SET 의 주요 차이점은 무엇입니까?

1. INSERT INTO table (a, b, c) VALUES (1,2,3);
2. INSERT INTO table SET a=1, b=2, c=3;

첫번째는 SQL 표준이고 두번 쨰는 MySQL 확장된 방법입니다. 성능은 동일합니다.

___


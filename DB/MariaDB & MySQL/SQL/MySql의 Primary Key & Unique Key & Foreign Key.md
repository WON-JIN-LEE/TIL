# 💻 MySql의 Primary Key & Unique Key & Foreign Key

Database 에서 Key 의 의미는 테이블에서 각 데이터를 분류하는 기준의 역할을 한다.

## Key(Index)란?

가장 일반적인 Key는 DB 의 Index 와 동의어이다. Database 는 데이터의 검색을 위해 Index 를 색인으로 사용하므로 중요한 역할을 한다.

중복을 허용하며 NULL 등의 허용도 가능하지만 NULL 이 허용될 경우... 색인에 있어 비약적인 성능 저하를 가져오므로 일반적으로 Null이 허용되는 데이터의 경우 Indexing 하지 않는다.

___

## 1. Primary Key
일반적인 Key 는 Index 를 지칭하지만, 일반적으로 DB 설계를 할 때 Key 라고 하면 보통 PK 를 의미한다.

### 1.1 Primary Key의 특징
- 테이블 내의 각 행을 구별하기 위해 사용한다. 그러므로 유일한 값이어야 한다
- null을 포함해서는 절대 안 된다. 반드시 값을 포함시켜야 한다.
- 값이 중복되면 안 된다.
- 여러 개의 칼럼을 기본키로 지정할 수 있다.(복합 키)
- 테이블의 고유 인식번호로 주로 사용한다.(like  index번호)
- **기본적으로 Index 성질 역시 보장되기 때문에 검색 시 색인의 Key 가 되며, Constraint 를 갖기 때문에 다른 테이블과 JOIN 을 할 때 기준 값으로 사용된다.**
-  RDB 의 특징적인 데이터 정합성의 보장과 Key 값의 성질을 갖기 때문에 일반적인 설계에서도 가장 선호되는 Key 타입이다.
___
 

## 2.Unique Key
Unique Key 는 Uniqueness 를 지닌 Index를 말하며, Unique Index 라 부르기도 한다.

### 2.1 Unique Key의 특징
- Unique Key도 테이블의 칼럼에서 유일한 값을 가져야 한다.
- 중복된 값을 가지면 안 된다. null을 포함할 수 있다.(기본키와 다른 점)
- 여러개의 칼럼을 유니크키로 지정할 수 있다.(복합 키)
- 주로 중복되면 안 되는 데이터인 휴대폰 번호, 주민등록번호, id 등에 사용한다.

___

## 3.Foreign Key
Foreign Key 란 JOIN 등으로 다른 DB 와의 Relation 을 맺는 경우, 다른 테이블의 PK를 참조하는 Column 을 FK 라고 한다.

여기서 Foreign Key Relation 을 맺는 다는 의미는 논리적 뿐 아니라 물리적으로 다른 테이블과의 연결까지 맺는 경우를 말하며, 이 때 FK 는 제약조건(Constraint)으로의 역할을 한다.

### 3.1  Foreign Key Restrict 옵션을 줄 수 있고 다음과 같은 옵션들이 있다.
  - **RESTRICT**: FK 관계를 맺고 있는 데이터 ROW 의 변경(UPDATE) 또는 삭제(DELETE) 를 막는다.
  - **CASCADE**: FK 관계를 맺을 때 가장 흔하게 접할 수 있는 옵션으로, FK 와 관계를 맺은 상대 PK 를 직접 연결해서 DELETE 또는 UPDATE 시, 상대 Key 값도 삭제 또는 갱신시킨다.  
  - **SET NULL**: 논리적 관계상 부모의 테이블, 즉 참조되는 테이블의 값이 변경 또는 삭제될 때 자식 테이블의 값을 NULL 로 만든다. UPDATE 쿼리로 인해 SET NULL 이 허용된 경우에만 동작한다.
  - **NO ACTION**: RESTRICT 옵션과 동작이 같지만, 체크를 뒤로 미룬다.
  - **SET DEFAULT**: 변경 또는 삭제 시에 값을 DEFAULT 값으로 세팅한다.


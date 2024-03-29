# Node.js PBL 1주차

### 🔐 for 문이 있는데 for ... in for...of 문법이 새로 나온 이유는 무엇일까요? 우리가 이것을 고르는 기준은 무엇일까요?

**for ...in문**

    ✔️ Iterable object이면 모두 대상으로 함

    ✔️ 객체의 모든 열거 가능한 속성에 대해 반복

    ✔️ key를 리턴 (배열의 경우에는 index)

**for ...of문**

    ✔️ [Symbol.iterator] 속성을 가지는 collection만 대상으로 함

    ✔️ Iterable object이지만, prototype chain에 의한 Iterable은 대상에서 제외

    → Array, Map, Set, String, TypedArray, arguments 등

    ✔️ value를 리턴

___

### 🔐 restAPI의 put 과 patch 는 어떤 차이점이 있을까요? 어떤 경우에 사용하면 좋을까요?

restful API 를 사용할 때 UPDATE 하는 부분에서 PUT or PATCH 를 사용한다.

- PUT : 자원 전체 교체 (자원의 모든 필드 필요)
- PATCH : 자원의 부분 교체 (자원의 일부 필드 필요)
- Update 할 때 PUT 을 사용하기 위해서는 자원 내의 모든 필드가 필요하다고 했다.
하지만 자원 내의 필드 중 하나라도 빠지면 null 값이 들어가게 된다.

 📌 멱등성 : [https://developer.mozilla.org/ko/docs/Glossary/Idempotent](https://developer.mozilla.org/ko/docs/Glossary/Idempotent)

___

### 🔐 템플릿 엔진을 사용하여 페이지를 구성할때 데이터를 가져와서 보여주는 방법이 여러가지가 있을 것입니다. 우리 강의에서는 어떻게 했나요? 다른 방법은 어떤게 있을까요? 둘이 장단점은 무엇일까요?

템플릿엔진 사용 이유 : 클라이언트 요청에 따라 웹문서 들어가는 내용(결과)이 달라질 수 있어서 정적인 부분과 동적인 부분을 따로 하기위해 사용한다.
따라서 서버파일(app.js) 내에 HTML 코드를 쓰지 않아도 되므로 뷰와 서버 코드를 따로따로 관리할 수 있도록 해준다. 이러한 템플릿 엔진의 종류에는 pug(구 jade)와 ejs가 있다

___

#### 클라이언트 사이드 렌더링과 서버 사이드 렌더링 방식이 있다.
- 서버 사이드 렌더링(SSR, 이하 SSR) : 서버에서 DB 혹시 API에서 가져온 데이터를 템플릿에 넣어 HTML을 그린 후 클라이언트에 전달한다. 종류로는 EJS, Jade, Handlebars 등이 있다.
- 클라이언트 사이드 렌더링(CSR, 이하 CSR) : HTML형태로 코드를 작성할 수 있고 동적으로 DOM을 그리는 역할을 한다.
    
- CSR은 렌더링이 끝난 뒤 서버 통신 없이 화변 변경이 필요한 경우 유용합니다. 만약 페이지를 계속해서 이동해야 한다면 SSR을 하는 것이 유용할 수 있습니다.

___

### 🔐 몽고DB로 테이블 설계를 해봅시다. 회원가입을 한 유저가 게시판에 글을 쓰는 서비스입니다. 게시판 목록 페이지에서는 게시글 제목, 작성자 이름 등이 보이겠죠? 각각의 모델은 어떤 모양새이면 좋을까요? 게시판 글 리스트를 불러오는 api 에서는 몽구스 데이터를 어떻게 가져오면 좋을까요?

- 게시판 컬렉션 : 게시글 제목, 작성자 이름, 작성 날짜, 조회수, 추천수 등
- 회원 컬렉션 : 아이디, 닉네임, 비밀번호, 가입한 시각 등

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fac2ca7b7-9dde-44b8-bc6f-a539cc6995bc%2FUntitled.png?table=block&id=0921045b-76ce-4646-b8b8-e836bb89997a&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1300&userId=47879b72-7fc5-406d-9035-3fecfee3ca2a&cache=v2)

___

### 🔐 우리가 브라우저에서 구매한 도메인 주소를 입력하면 만들어 놓은 aws EC2 서버까지 전달이 되어서 해당 서버에게 요청을 보낼 수 있습니다. 이 과정이 상세하게 어떻게 진행되는지 그림으로 한번 그려볼까요?



![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F92a4d767-182d-4440-b9ac-d4fe951b8e77%2FUntitled.png?table=block&id=002e719c-8ff7-4c0f-bb09-efd15fe2f9ce&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1500&userId=47879b72-7fc5-406d-9035-3fecfee3ca2a&cache=v2)

___

### 🔐 HTTP/HTTPS 프로토콜이 아닌 gRPC 프로토콜로 통신하는 서버 프로그램은 API 서버라고 부를 수 있을까요? (배포된 환경, 구현된 기능은 동일)

gRPC는 구글에서 만든 RPC 플랫폼이며 protocol buffer와 RPC를 사용합니다.

SSL/TLS를 사용하여 서버를 인증하고 클라이언트와 서버간에 교환되는 모든 데이터를 암호화합니다. HTTP 2.0을 사용하여 성능이 뛰어나고 확장 가능한 API를 지원합니다.

gRPC에서 클라이언트 응용 프로그램을 서버에서 함수를 바로 호출 할 수 있어 분산 MSA(Micro Service Architecture)를 쉽게 구현 할 수 있습니다. 서버 측에서는 서버 인터페이스를 구현하고 gRPC 서버를 실행하여 클라이언트 호출을 처리합니다.

만약 파이썬 기반의 서비스와 소통을 하게 할려고 한다면 proto파일에 구글 툴로 이용해 파이썬 파일을 만든다. 이 파일을 클라이언트 측에서 임포트 하게 된다면 gRPC server와 request ,response 가 가능해진다. 이런 동작원리의 gRPC 프로토콜은 규칙을 통한 의사소통이라는 API개념에 비추어 충분히 API 서버라고 볼수 있을것 같다.

___

### 🔐 Sequlize같은 ORM과 MySQL같은 데이터베이스의 차이가 무엇인가요?


ORM(Object Relational Mapping)’은 ‘객체로 연결을 해준다’는 의미로, 어플리케이션과 데이터베이스 연결 시 SQL언어가 아닌 어플리케이션 개발언어로 데이터베이스를 접근할 수 있게 해주는 툴입니다.

Object <= 매핑 => DB데이터 에서 매핑의 역할을 하는 것이 ORM이라 할 수 있습니다. 일단 Sequelize는 DB랑 내가 개발한 Node 서버랑 연결해주는 다리라고 생각한다. 데이터랑 연결하기 위해서 쿼리를 날려야 하는데 이를 javascript를 통해 개발할 수 있도록 다리역할을 해준다. 객체의 메서드를 이용하는 것처럼 쿼리 로직을 작성할 수 있다. Sequelize는 다양한 관계형 DB랑 연관하여 개발할 수 있고 Promise 기반으로 개발되여 비동기 개발에도 수월하게 사용된다.
___

### 🔐 express.js의 라우터는 미들웨어입니다. 어떤 원리로 동작하기 때문에 미들웨어로 라우터를 구현할 수 있나요?
- 미들웨어 함수는 req(요청)객체, res(응답)객체, 그리고 어플리케이션 요청-응답 사이클 도중 그 다음의 미들웨어 함수에 대한 엑세스 권한을 갖는 함수이다.
- 다음 미들웨어 함수에 대한 엑세스는 next함수를 이용해서 다음 미들웨어로 현재 요청을 넘길 수 있다.
- next를 통해 미들웨어는 순차적으로 처리된다.

___

### 🔐 Node.js에서 리팩토링시 사용하며, npm을 통해 다운로드 했던 모듈을 불러오는 require 함수는 어떻게 동작하나요? IIFE와 연결지어 찾아보고 정리해보세요.

A. IIFE 란 Immediately Invoked Function Expression (즉시 실행되는 함수 표현식) 의 약자로 정의와 동시에 즉시 실행되는 함수를 의미합니다.

require의 동작은 먼저 파라미터로 받은 경로값에 위치한 파일을 불러오고, module이라는 예약어가 해당 모듈 파일에 module이라는 빈 객체를 만들게 됩니다. 이 빈 객체에서 js파일을 즉시 실행 함수로 둘러친 뒤, 이를 바로 실행시키고 module.exports를 리턴합니다.

이렇게 IIFE의 캡슐화 원리가 require메서드에서도 그대로 쓰이는데 보호하고자 하는 api들을 즉시실행함수로 둘러싸 외부의 접근을 막고, 접근 가능한 object들을 리턴하여 사용할 수 있게 합니다.
___

### 🔐 불필요한 테스트코드는 무엇이며, 100개의 테스트 케이스보다 1개의 테스트 케이스가 더 효과적일 수 있는 이유는 무엇인가요?

불필요한 테스트코드를 흔히 dead code라고 불리는데, 이는 프로그램 내에서 소스는 작동하지만, 결과적으로는 사용할 수 없다. 이 실행은 계산 되고자 하는 시간과 메모리의 낭비 때문에 여러 버그들을 일으키는 문제가 될 수 있다. 또한, 여러 개의 테스트 코드는 품질 수준이 cost/beneft으로 보았을때, 컴파일된 버전의 리소스에 접근하기 어렵고, 빠른 시간내에 테스트할 수가 없기 때문에 1개의 테스트가 오히려 효과적이다. 더불어 철저하게 테스트 된 케이스가 유효성을 검사하는데 쉽게 접근할 수 있다.
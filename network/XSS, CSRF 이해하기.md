# XSS, CSRF 이해하기

## 📌 XSS(Cross-Site Scripting)란?

사이트 간 스크립팅(또는 크로스 사이트 스크립팅, 영문 명칭 cross-site scripting, 영문 약어 XSS)은 **웹 애플리케이션에서 많이 나타나는 취약점**의 하나로 웹사이트 관리자가 아닌 이가 웹 페이지에 악성 스크립트를 삽입할 수 있는 취약점이다.
</br>

주로 여러명의 사용자가 보게 되는 게시판에 악성 스크립트를 담은 글을 올리는 형태로 공격한다.
이를 통해 사용자의 쿠키나 세션을 탈취하거나, 자동으로 비정상적 기능을 수행하게 하는 등의 공격이 가능해진다.</br>

공격 방법에 따라 Stored XSS와 Reflected XSS로 나뉜다.

- Stored XSS는 게시판처럼 사용자가 정보를 서버에 업로드하는 곳에 XSS공격이 담긴 데이터를 삽입하여 저장하는 방법. 해당 게시글을 피해자가 조회시에 XSS 스크립트를 문자열이 아닌 하나의 스크립트 언어로 인식하여 공격이 동작하게 된다.
- Reflected XSS는 보통 URL 파라미터(특히 GET 방식)에 스크립트를 넣어 서버에 저장하지 않고 그 즉시 스크립트를 만드는 방식이다.

### xss 방지법

> 입력으로 들어오는 모든 데이터들을 정규식을 이용해 스크립트 언어들과 특수문자를  필터링하는 방법 (xss를 방지하기 위해서 만들어진 프레임워크를 이용한다.)

---

## 📌 CSRF(Cross-Site Request Fogery)란?

사이트 간 요청 위조(또는 크로스 사이트 요청 위조, 영어: Cross-site request forgery, CSRF, XSRF)는 **웹사이트 취약점 공격의 하나로**, 사용자가 자신의 의지와는 무관하게 **공격자가 의도한 행위(수정, 삭제, 등록 등)**를 특정 웹사이트에 요청하게 하는 공격을 말한다.

XSS를 이용한 공격이 사용자가 **특정 웹사이트를 신용하는 점을 노린 것**이라면,
CSRF(사이트간 요청 위조)는 **특정 웹사이트가 사용자의 웹 브라우저를 신용하는 상태를 노린 것**이다.

### 공격 과정

1. 이용자는 웹사이트에 로그인하여 정상적인 쿠키를 발급받는다
2. 공격자는 다음과 같은 링크를 이메일이나 게시판 등의 경로를 통해 이용자에게 전달한다.

   - http://www.geocities.com/attacker
3. 공격용 HTML 페이지는 다음과 같은 이미지태그를 가진다.

   ```html
   <img src= "https://travel.service.com/travel_update?.src=Korea&.dst=Hell">
   ```

   - 해당 링크는 클릭시 정상적인 경우 출발지와 도착지를 등록하기위한 링크이다. 위의 경우 도착지를 변조하였다.
4. 이용자가 공격용 페이지를 열면, 브라우저는 이미지 파일을 받아오기 위해 공격용 URL을 연다.
5. 이용자의 승인이나 인지 없이 출발지와 도착지가 등록됨으로써 공격이 완료된다. 해당 서비스 페이지는 등록 과정에 대해 단순히 쿠키를 통한 본인확인 밖에 하지 않으므로 공격자가 정상적인 이용자의 수정이 가능하게 된다.

### CSRF 방지법

1. 위조 방지 토큰 사용

   - 특정 권한이 필요한 페이지(EX: 회원 정보 수정 등)는 해당 페이지와 실제 동작이 일어나는 페이지사이에 토큰을 생성해 그 값을 비교하여 토큰이 존재하지 않거나 다른 경우 동작을 허용하지 않는 방법이 있다.
2. Referer 값 이용

   - 프록시 툴, 패킷 등을 통해 확인하면 다른 페이지로 이동할 경우 그전 페이지 정보를 가지고 이동한다. 이때 전페이지 정보가 없거나, 외부 사이트에서 요청을 한 경우 요청을 처리하지 않는 방법이 있다.
3. 캡쳐 사용

   - 회원정보 변경, 게시글 작성 등 CSRF의 공격을 막아야 하는 페이지에서 캡챠를 사용해 인증이 가능한 것만 요청을 처리해주는 방법이 있다.
   - 캡챠는 랜덤 이미지를 통해 인증이 되므로 사용자 몰래 요청하는것이 불가능 하다는 장점이 있다.

‼ CSRF를 운운하기 전에 웹 사이트 내 XSS 취약점이 해결되었는지 체크하는 것이 선행되어야 하겠습니다.

---

## 📌XSS vs CSRF

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbm2nMY%2FbtqGDQYbFZS%2F8pkGgmehmAooiWddWVRKJk%2Fimg.png)


| ▶ XSS(Cross-Site Scripting)                                                                                                                  | ▶ CSRF(Cross-Site Request Forgery)                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <br />- 개요 : 악성 스크립트가 클라이언트에서 실행됨<br /></br>- 공격 대상 : 클라이언트<br /> </br>- 목적 : 쿠키ㆍ세션 갈취, 웹사이트 변조 등 | - 개요 : 권한을 도용당한 클라이언트가 가짜 요청을 서버에 전송</br >- 목적 : 권한 도용<br /> </br> - 공격 대상 : 서버 |

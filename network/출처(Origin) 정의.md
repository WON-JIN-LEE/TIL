# 📌출처(Origin) 정의

서버의 위치를 의미하는 https://google.com과 같은 URL은 하나의 문자열 같지만 다음과 같이 구성되어 있다.

![](https://velog.velcdn.com/images%2Fjimmy0417%2Fpost%2Fcf31d955-6d0d-4a01-81d3-768613ffc136%2FCross%20Functional%20Flow%20Chart%20Template%20-%20Origin%20(2).jpg)

- 이때 출처는 protocal과 Host 그리고 Port까지 모두 합친 것을 의미한다.


## 동일 출처 비교 예시
아래 표는 URL http://example.com/dir/page.html의 출처를 비교한 예시입니다.

|URL	|결과|	이유|
|--|--|--|
|http://example.com/dir2/other.html|	성공|	경로만 다름|
|http://example.com/dir/inner/another.html|	성공|	경로만 다름|
|https://example.com/secure.html	|실패|	프로토콜 다름|
|http://example.com:81/dir/etc.html|	실패|	포트 다름 (http://는 80이 기본값)|
|http://news.company.com/dir/other.html|	실패|	호스트 다름|

- 두개의 출처를 비교하는 방법은 URL의 구성요소 중 Protocol, Host, Port 이 세가지가 동일한지 확인하면 된다.
- 즉 같은 프로토콜, 호스트, 포트를 사용한다면 다른 요소는 다르더라도 같은 출처로 인정된다. 반대로 리소스가 자신의 출처와 다를경우 브라우저는 교차출처 요청을 실행한다.
- 출처를 비교하는 로직은 서버에 구현된 스펙이 아닌 브라우저에 구현된 스펙이다.
- 만약 CORS정책을 위반하는 요청에 서버가 정상적으로 응답을 하더라도 브라우저가 이 응답을 분석해서 CORS정책에 위반되면 그 응답은 처리하지 않게 된다.
 

요악하면 프로토콜, 포트, 호스트중 하나라도 일치하지 않으면 Cross Origin 이라고 한다.

___
### 레퍼언스(Reference)
https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy
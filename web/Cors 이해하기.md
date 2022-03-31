# 교차 출처 리소스 공유 (CORS) 이해하기

## 📌 CORS(Cross-Origin Resource Sharing)란?
추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다. 웹 애플리케이션은 리소스가 자신의 출처(도메인, 프로토콜, 포트)와 다를 때 교차 출처 HTTP 요청을 실행합니다.

교차 출처 요청의 예시: https://domain-a.com의 프론트 엔드 JavaScript 코드가 XMLHttpRequest를 사용하여 https://domain-b.com/data.json을 요청하는 경우.

보안 상의 이유로, 브라우저는 스크립트에서 시작한 교차 출처 HTTP 요청을 제한합니다. 다른 출처의 리소스를 불러오려면 그 출처에서 올바른 CORS 헤더를 포함한 응답을 반환해야 합니다.

CORS 체제는 브라우저와 서버 간의 안전한 교차 출처 요청 및 데이터 전송을 지원합니다.

## 📌 서버에서 취해야하는 것

서버는 이에 대한 응답으로 Access-Control-Allow-Origin 헤더를 다시 전송합니다. 가장 간단한 접근 제어 프로토콜은 Origin 헤더와 Access-Control-Allow-Origin 을 사용하는 것입니다. 이 경우 서버는 Access-Control-Allow-Origin: *, 으로 응답해야 하며, 이는 모든 도메인에서 접근할 수 있음을 의미합니다. https://bar.other 의 리소스 소유자가 오직 https://foo.example 의 요청만 리소스에 대한 접근을 허용하려는 경우 다음을 전송합니다.
```
Access-Control-Allow-Origin: https://foo.example
```
이제 https://foo.example 이외의 도메인은 corss-site 방식으로 리소스에 접근할 수 없습니다.
리소스에 대한 접근을 허용하려면, Access-Control-Allow-Origin 헤더에는 요청의 Origin 헤더에서 전송된 값이 포함되어야 합니다.

### ✅Preflighted request
먼저 OPTIONS 메서드를 통해 다른 도메인의 리소스로 HTTP 요청을 보내 실제 요청이 전송하기에 안전한지 확인합니다. cross-origin 요청은 유저 데이터에 영향을 줄 수 있기 때문에 이와같이 미리 전송(preflighted)합니다.

OPTIONS는 서버에서 추가 정보를 판별하는데 사용하는 HTTP/1.1 메서드입니다. 또한 safe 메서드이기 때문에, 리소스를 변경하는데 사용할 수 없습니다. OPTIONS 요청과 함께 두 개의 다른 요청 헤더가 전송됩니다. 
```
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

1. Access-Control-Request-Method 헤더는 preflight request의 일부로, 실제 요청을 전송할 때 POST 메서드로 전송된다는 것을 알려줍니다. 
2. Access-Control-Request-Headers 헤더는 실제 요청을 전송 할 때 X-PINGOTHER 와 Content-Type 사용자 정의 헤더와 함께 전송된다는 것을 서버에 알려줍니다. 이제 서버는 이러한 상황에서 요청을 수락할지 결정할 수 있습니다.

서버가 요청 메서드와 (POST) 요청 헤더를 (X-PINGOTHER) 받을 수 있음을 나타내는 응답입니다. 
```
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

1. 서버는 Access-Control-Allow-Methods 로 응답하고 POST 와 GET 이 리소스를 쿼리하는데 유용한 메서드라고 가르쳐줍니다. 이 헤더는 Allow 응답 헤더와 유사하지만, 접근 제어 컨텍스트 내에서 엄격하게 사용됩니다.

2. Access-Control-Allow-Headers 의 값을 "X-PINGOTHER, Content-Type" 으로 전송하여 실제 요청에 헤더를 사용할 수 있음을 확인합니다. Access-Control-Allow-Headers 는 쉼표로 구분된 허용 가능한 헤더 목록입니다.

3. 마지막으로Access-Control-Max-Age (en-US)는 다른 preflight request를 보내지 않고, preflight request에 대한 응답을 캐시할 수 있는 시간(초)을 제공합니다. 위의 코드는 86400 초(24시간) 입니다. 각 브라우저의 최대 캐싱 시간 은 Access-Control-Max-Age 가 클수록 우선순위가 높습니다.

### Preflighted requests 와 리다이렉트
모든 브라우저가 preflighted request 후 리다이렉트를 지원하지는 않습니다. preflighted request 후 리다이렉트가 발생하면 일부 브라우저는 다음과 같은 오류 메시지를 띄웁니다.
___
## 📌 HTTP 응답 헤더
### Access-Control-Allow-Origin
리턴된 리소스에는 다음 구문과 함께 하나의 Access-Control-Allow-Origin 헤더가 있을 수 있습니다.
```
Access-Control-Allow-Origin: <origin> | *
```
Access-Control-Allow-Origin 은 단일 출처를 지정하여 브라우저가 해당 출처가 리소스에 접근하도록 허용합니다. 또는 자격 증명이 없는 요청의 경우 "*" 와일드 카드는 브라우저의 origin에 상관없이 모든 리소스에 접근하도록 허용합니다.

예를들어 https://mozilla.org 의 코드가 리소스에 접근 할 수 있도록 하려면 다음과 같이 지정할 수 있습니다.
```
Access-Control-Allow-Origin: https://mozilla.org
```
서버가 "*" 와일드카드 대신에 하나의 origin을 지정하는 경우, 서버는 Vary 응답 헤더에 Origin 을 포함해야 합니다. 이 origin은 화이트 리스트의 일부로 요청 orgin에 따라 동적으로 변경될 수 있습니다. 서버 응답이 Origin 요청 헤더에 따라 다르다는것을 클라이언트에 알려줍니다.


### Access-Control-Allow-Credentials
Access-Control-Allow-Credentials 헤더는 credentials 플래그가 true일 때 요청에 대한 응답을 표시할 수 있는지를 나타냅니다. preflight request에 대한 응답의 일부로 사용하는 경우, credentials을 사용하여 실제 요청을 수행할 수 있는지를 나타냅니다. simple GET requests는 preflighted되지 않으므로 credentials이 있는 리소스를 요청하면, 이 헤더가 리소스와 함께 반환되지 않습니다. 이 헤더가 없으면 브라우저에서 응답을 무시하고 웹 컨텐츠로 반환되지 않는다는 점을 주의하세요.
```
Access-Control-Allow-Credentials: true
```
Credentialed requests 은 위에 설명되어 있습니다.

### Access-Control-Allow-Methods
Access-Control-Allow-Methods (en-US) 헤더는 리소스에 접근할 때 허용되는 메서드를 지정합니다. 이 헤더는 preflight request에 대한 응답으로 사용됩니다. 요청이 preflighted 되는 조건은 위에 설명되어 있습니다.
```
Access-Control-Allow-Methods: <method>[, <method>]*
```
이 헤더를 브라우저로 전송하는 예제를 포함하여 preflight request 의 예제는, 위에 나와 있습니다.

### Access-Control-Allow-Headers
preflight request 에 대한 응답으로 Access-Control-Allow-Headers 헤더가 사용됩니다. 실제 요청시 사용할 수 있는 HTTP 헤더를 나타냅니다.
```
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
```

### Access-Control-Expose-Headers
Access-Control-Expose-Headers (en-US) 헤더를 사용하면 브라우저가 접근할 수 있는 헤더를 서버의 화이트리스트에 추가할 수 있습니다.
```
Access-Control-Expose-Headers: <header-name>[, <header-name>]*
```
예를들면 다음과 같습니다.
```
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```
X-My-Custom-Header 와 X-Another-Custom-Header 헤더가 브라우저에 드러납니다.

### Access-Control-Max-Age
Access-Control-Max-Age (en-US) 헤더는 preflight request 요청 결과를 캐시할 수 있는 시간을 나타냅니다. preflight request 예제는 위를 참조하세요.
```
Access-Control-Max-Age: <delta-seconds>
```
delta-seconds 파라미터는 결과를 캐시할 수 있는 시간(초)를 나타냅니다.
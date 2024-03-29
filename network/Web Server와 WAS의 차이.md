# 💻 Web Server와 WAS의 차이

## 1. WS (Web Server)

### 1.1. WS 개념

WS는 소프트웨어와 하드웨어로 구분된다.

-   하드웨어 : Web 서버가 설치되어 있는 컴퓨터
-   소프트웨어 : 웹 브라우저 클라이언트로부터 HTTP 요청을 받아 **정적인 컨텐츠(.html .jpeg .css 등)**를 제공하는 컴퓨터 프로그램을 뜻합니다.

### 1.2. WS 기능

-   HTTP 프로토콜을 기반으로 하여 웹 브라우저의 요청을 서비스하는 기능을 담당한다.
-   요청에 따라 아래의 두 가지 기능 중 적절하게 선택하여 수행한다.
    -   **정적인 컨텐츠 제공** : WAS를 거치지 않고 바로 자원을 제공한다.
    -   **동적인 컨텐츠 제공을 위한 HTTP 요청 전달** :클라이언트의 요청(Request)을 WAS에 보내고, WAS가 처리한 결과를 클라이언트에게 전달(응답, Response)한다.

### 1.3. Web Server의 예

Apache Server, Nginx, IIS(Windows 전용 Web 서버) 등이 있습니다.

---

## 2. WAS(Web Application Server)

### 2.1. WAS의 개념

-   DB 조회나 다양한 로직 처리를 요구하는 동적인 콘텐츠를 제공하기 위해 만들어진 Application Server입니다.
-   HTTP를 통해 컴퓨터나 장치에 애플리케이션을 수행해주는 미들웨어(소프트웨어 엔진)이다.
-   **DB를 조작하거나 파일을 쓰거나 읽는 비즈니스** **로직을** 수행하는 Node, Flask  Application Server를 의미한다.

### 2.2. WAS의 기능

-   프로그램 실행 환경 및 DB 접속 기능 제공
-   여러 트랜잭션 관리 기능
-   업무 처리하는 비즈니스 로직 수행

### 2.3. WAS의 예

Ex) node, flask, Tomcat, JBoss, Jeus, Web Sphere 등

📋Application의 의미: **DB를 조작하거나 파일을 쓰거나 읽는 비즈니스 로직**을 처리하는 부분을 포함한다. 그래서 **WAS**라고 부른다.

---

## 3. WS와 WAS 정리

WAS가 나온 이유

-   동적인 컨텐츠를 제공해야 할 때 웹 서버만으로는 **사용자가 원하는 요청에 대한 결괏값을 모두 미리 만들어놓고** 서비스하기에는 자원이 부족합니다.
-   이를 해결하기 위해서 WAS를 통해 요청이 들어올 때마다 DB와 비즈니스 로직을 통해 결과물을 만들어 클라이언트에게 보냅니다.
-   WAS를 통해 요청에 맞는 데이터를 DB에서 가져와 비즈니스 로직에 맞게 그때마다 결과를 만들고 제공하면서 **자원을 효율적으로 사용할 수 있습니다.**

WS가 사용하는 이유

-   클라이언트가 이미지 파일과 같은 정적인 컨텐츠(.html .jpeg .css 등)를 보낼 때 WAS까지 가지 않고 앞단에서 빠르게 보낼 수 있다.
-   따라서 Web Server에서는 정적 컨텐츠만 처리하도록 기능을 분배하여 서버의 부담을 줄일 수 있다.

---

## 4. WAS가 Web Server의 기능도 할 수 있지만 분배했을 때 좋은 점

1.  기능을 분리하여 서버 부하 방지할 수 있다.
    -   WAS에는 동적 비즈니스 로직을 처리한다. 만약 정적 컨텐츠 요청까지 WAS가 처리한다면 정적 데이터 처리로 인해 부하가 커지게 되고, 동적 컨텐츠의 처리가 지연될 수 있다.
2.  물리적으로 분리하여 보안 강화
    -   WS의 리버스 프락시 기능을 이용하면 클라이언트가 WAS의 내부 서버(node나 flask Server)로 바로 요청을 보내지 않게 되어 내부 서버의 정보를 외부로부터 숨길 수 있어 보안이 강화된다.
3.  여러 대의 WAS를 연결 가능
    -   Load Balancing을 위해서 Web Server를 사용
4.  여러 웹 애플리케이션 서비스 가능
    -   예를 들어, 하나의 서버에서 Node Application과 flask Application을 함께 사용하는 경우

📌즉, **자원 이용의 효율성 및 장애 극복, 배포 및 유지보수의 편의성을 위해 Web Server와 WAS를 분리한다.**

---

### Reference

[https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html](https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html)

[시니어 코딩 : WAS와 WS의 차이점은?](https://www.youtube.com/watch?v=6xl3wKMjmWg)
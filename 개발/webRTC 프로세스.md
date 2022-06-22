# 💻 webRTC Process
![](https://velog.velcdn.com/images/jsw4215/post/b6706bea-56de-4b49-b86d-65131aa0dad9/image.webp)
## webRTC 수행과정
p2p 영상 및 음성 통신을 하는 webRTC application 을 구성한다면, 다음 작업을 수행합니다.

1. Fetching
2. Signaling
    1. offer 
    2. answer 
    3. ICE   

___

## 1. Fetching
- webRTC API 인 MediaStream, getUserMedia 를 이용해 사용자의 영상 및 음성 정보를 가져옵니다. 
- 추출한 video 나 audio 데이터 트랙들을 RTCPeerConnection 객체 실어 보내야하기 떄문에 추가합니다.

이제 메제시들을 어떻게 구성할지에 대한 프로토콜이 필요하다. 여러가지 방법중에 하나가 시그널링 메세지 구조입니다.
___

## 2. Signaling

Signlaing 단계는 peer와 peer가 서로를 찾을 수 있도록 돕는 중간 매개자 역할을 하는 서버인 Signaling Server 를 필요로 합니다.

시그널링 서버란 두 장치들 사이에 webRTC 커넥션을 만들기 위해, 인터넷 네트워크에서 **그 둘을 연결시키는 작업을 해주는 서버**를 말한다. 

- 시그널링 서버의 프로세스는 offer , answer, ICE candidate 3가지로 이루어진다.
- peer와 시그널링 서버의 프로세스 통해서 클라이언트를 연결시킨다.

### 2.1 offer 이벤트

- Peer A(클라이언트)에서 offer를 만듭니다.
- 이 offer는 세션 정보를 SDP 포맷으로 가지고 있으며, 커넥션이 이어지기를 원하는 유저에게 전달하기 위해 시그널링 서버로 보냅니다. 
- SDP는 해상도나 형식 코덱등의 정보들의 포멧 형식이다.
- 시그널링 서버는 Peer A로부터 받은 offer 세션 정보를 Peer B로 socket 통신으로 전달합니다.

### 2.2 answer 이벤트
- Peer B에서는 Peer A의 offer에 SDP description을 포함하는 answer 메세지를 서버로 보내야한다.
- 서버에서는 Peer A에게 answer를 보냅니다.
  

### 2.3 offer와 answer를 교환한 이유
offer와 answer 이벤트 통신으로 두 Peer들은 이 call에 대한 어떤 코덱과 어떤 video parameter들이 사용될지 알게 된다.

**즉, 두 Peer간의 메세지 프로토콜를 설정을 완료했다.**

하지만, 그들은 여전히 미디어 데이터 자체를 전송하는 방법을 모른다. 여기서 **Interactive Connectivity Establishment (ICE)**가 사용된다.

___
## 3. ICE 
- ICE는 Interactive Connectivity Establishment(인터넷 연결 생성)이고, 브라우저가 peer를 통한 연결이 가능하도록 하게 해주는 프레임워크입니다.
- ICE candidate는 webRTC에 필요한 프로토콜들을 의미하는데 멀리 떨어진 장치와 소통할 수 있게 하기 위함이다.
- 그러니까 ICE candidate는 브라우저가 서로 소통할 수 있게 해주는 방법이다.
- 어떤 소통 방법이 가장 좋을 것인지를 제안할 때 사용된다.


### 3.1 ICE candidates 교환
1. offer과 answer를 통해 SDP를 서로 교환한 후에 두 Peer들은 **ICE candidate(ICE 후보)**들을 교환하기 시작한다.
2. 각 ICE candidate는 발신 Peer 입장에서 통신을 할 수 있는 방법을 설명한다.
3. 각 Peer는 검색되는 순서대로 candidate를 보내고 미디어가 이미 스트리밍을 시작 했더라도 모든 가능한 candidate가 전송 완료될 때까지 계속 보낸다. 
4. 두 Peer가 서로 호환되는 candidate를 제안했다면, 미디어는 통신을 시작한다.

### 3.2 ICE 메세지
- 각 ICE 메세지들은 두 개의 컴퓨터를 서로 **연결하기 위한 정보들에 덧붙여 프로토콜(TCP or UDP), IP 주소, 포트 넘버, 커넥션 타입** 등을 제안한다. 
- 여기에는 NAT 혹은 다른 복잡한 네트워킹을 포함한다.

### 3.3 RTCIceCandidate 인터페이스
- 하나의 ICE candidate는 WebRTC가 원격 장치와 통신을 하기 위해 요구되는 프로토콜과 라우팅에 대해 알려줍니다. 
- 일반적으로 여러개의 candidate들이 연결의 각 end에 의해 만들어집니다. 
- 그리고 이 과정은 로컬 유저와 원격 유저가 연결을 위해 **최고의 방법을 서로의 동의하에 선택하기 전까지 계속됩니다.**
-  이후에 webRTC가 선택한 candidate를 사용해서 연결을 시도하게 됩니다.

### 3.4 ICE에서 STUN과 TURN 서버가 필요한 이유
Peer A에서 Peer B까지 단순하게 연결하는 것으로는 작동하지 않는 것에 대한 이유는 많이 있습니다. 

- 연결을 시도하는 방화벽을 통과해야하기도 하고, 
- 단말에 **퍼블릭 IP가 없다면 유일한 주소값을 할당해야할 필요도 있으며**
- **라우터가 peer간의 직접연결을 허용하지 않을 때에는 데이터를 릴레이해야할 경우도 있습니다.**

ICE는 이러한 작업을 수행하기 위해 STUN과 TURN 서버 둘다 혹은 하나의 서버를 사용합니다.

___
## 일반적으로 Peer Connection이 필요한 경우는 크게 3가지다.

### 1. 동일한 라우터를 공유하는 경우.
- 같은 네트워크에 접속되어 있으면 각각의 클라이언트가 서로를 찾을 수 있어 문제가 발생하지 않는다
- STUN과 TURN없이도 그냥 Peer간의 연결이 가능하다.

### 2. 서로 다른 라우터를 가지고 있는 경우.
- STUN 서버는 컴퓨터가 공용 IP주소를 찾게 해준다.
- 자신의 public IP주소를 알아내기 위해 STUN 서버를 사용한다.
- 자신의 public IP주소를 토대로 시그널링 서버를 통해 장치들이 서로를 찾을 수 있게 된다.
  
### 3.  STUN 서버에서 얻은 public IP로도 연결이 불가능한 경우
- 연결을 중재해줄 서버가 필요하며, 이 서버는 TURN 서버라 부른다.
- 중재 서버인 TURN 서버를 통해 통신이 이루어진다.

___

### Reference
[WebRTC 프로토콜 소개](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API/Protocols)  
[The signaling server](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling#the_signaling_server)  
[ICE candidates 교환](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling#signaling_transaction_flow)  
[RTCIceCandidate 인터페이스](https://developer.mozilla.org/ko/docs/Web/API/RTCIceCandidate)  
[ICE 과정이 어떻게 동작하는지 자세히 알고 싶다면](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Session_lifetime)  
[STUN, TURN 정리](https://jinblog123.tistory.com/374)  
[http://jaynewho.com/post/36](http://jaynewho.com/post/36)  
[https://inspirit941.tistory.com/346](https://inspirit941.tistory.com/346)
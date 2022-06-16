# WebRTC 프로토콜 소개

## 1\. WebRTC란

WebRTC(Web Real-Time Communication)는 웹 브라우저 간에 플러그인의 도움 없이 서로 통신할 수 있도록 설계된 API이다. W3C에서 제시된 초안이며, 음성 통화, 영상 통화, P2P 파일 공유 등으로 활용될 수 있다.

공개 웹 표준으로 구현되며 모든 주요 브라우저에서 일반 JavaScript API로 제공한다. (Apple, Google, Microsoft 및 Mozilla가 지원)

## 2\. WebRTC의 프로토콜 소개

처음에 peer 간의 서로의 위치를 알지 못하기 때문에 서버를 사용해야하고 그 서버는 peer의 위치를 각 peer들에게 위치 정보를 알려주는 역할을 한다.

### 2-1. ICE(Interactive Connectivity Establishment)

-   ICE 는 두 단말이 서로 통신할 수 있는 최적의 경로를 찾을 수 있도록 도와주는 프레임워크이다.
-   ICE는 두 단말 간의 제안 및 수락 모델로 생성되는 실시간 UDP 미디어 스트림을 송수신하기 위한 NAT Traversal 기술이지만 TCP전송 프로토콜에도 적용 가능합니다.
-   ICE는 STUN 과 TURN 프레임워크로 확보된 통신 가능한 여러 IP 주소와 포트 넘버를 SDP Offer와 SDP Answer를 통해 상대방에게 전달한다.
-   두 단말은 확보된 모든 주소에 대해 단대단(Peer-to-peer) 연결성 테스트를 진행하고 진행 가능한 주소로 RTP 미디어 스트림을 송수신한다.

#### 🖋 SDP(Session Description Protocol)

-   해상도나 형식, 코덱, 암호화등의 멀티미디어 컨텐츠의 연결을 설명하기 위한 표준이다.
-   두 개의 peer가 다른 한쪽이 데이터가 전송되고 있다는 것을 알게 해준다.
-   기본적으로 미디어 컨텐츠 자체가 아닌 컨텐츠에 대한 메타데이터 설명이다.
-   기술적으로 보자면 SDP 는 프로토콜이 아니다. 그러나 데이터 포멧은 디바이스간의 미디어를 공유하기 위한 연결을 설명하기 위해 사용한다.

### 2-2. STUN(Session Traversal Utilities for NAT)

-   STUN은 클라이언트-서버 프로토콜이다.
-   STUN 클라이언트는 사설망에 위치하고 STUN 서버는 인터넷 망에 위치한다. STUN 클라이언트는 자신의 **공인 IP 주소**를 사전에 확인하기 위해 STUN 서버에게 요청하고, STUN 서버는 STUN 클라이언트가 사용하는 공인 IP 주소를 응답한다.
-   STUN 클라이언트는 자신이 사용할 공인 IP 주소를 알 수 없으므로 STUN 서버에게 자신의 공인 IP 주소를 요청한다.
    -   STUN 이 항상 효과적이지는 않다. 두 단말이 같은 NAT 환경에 있을 경우 STUN 은 동작하지 않는다.
    -   또한 Symmetric NAT 로 동작하는 사설망 환경에서는 어플리케이션이 다르면 NAT 매핑 테이블이 바뀌기 때문에 사용할 수 없다.

![](https://mdn.mozillademos.org/files/6115/webrtc-stun.png)

### 2-3 NAT (Network Address Translation)

-   NAT (Network Address Translation)단말에 공개 IP주소를 할당하기 위해 사용됩니다.
-   라우터는 공인 IP 주소를 갖고 있고 모든 단말들은 라우터에 연결되어 있으며 비공개 IP주소(private IP Address)를 갖고 있습니다.
-   요청은 단말의 비공개 주소로부터 라우터의 공개 주소와 유일한 포트를 기반으로 번역한다. 이 덕분에, 각각의 단말이 유일한 공인 IP 없이 인터넷 상에서 검색 가능하다.
-   어떠한 라우터들은 네트워크에 연결할수 있는 제한을 갖고 있습니다. 따라서 **STUN서버에 의해 공인 IP주소를 발견한다고 해도 모두가 연결을 할수 있다는 것은 아닙니다.** 이를 위해 TURN이 필요합니다.

### 2-4. TURN(Traversal Using Relays around NAT)

-   몇몇의 라우터들은 Symmetric NAT이라고 불리우는 제한을 위한 NAT을 채용하고 있습니다. 이 말은 peer들이 오직 이전에 연결한 적 있는 연결들만 허용한다는 것입니다. 이 때문에 TURN 서버를 이용한다.
-   TURN 서버와 연결하고 모든 정보를 그 서버에 전달하는 것으로 Symmetric NAT 제한을 우회하는 것을 의미한다.
-   TURN 클라이언트는 사설망에 위치하고 TURN 서버는 인터넷망에 위치한다.
-   TURN 은 Peer 들간의 미디어 스트리밍을 릴레이하기 위해 사용된다.
-   **TURN 클라이언트는 통화를 할 피어들과 직접 통신하는 것이 아니라 릴레이 서버 역할을 하는 TURN 서버를 경유한다.**
-   **TURN 서버는 인터넷망에 위치하고 각 Peer(단말)들이 사설망(Private IP) 안에서 통신한다. 각 Peer들이 직접 통신하는 것이 아니라 릴레이 역할을 하는 TURN 서버를 사용하여 경유한다.**
-   TURN 프로토콜은 NAT 환경에 단말이 릴레이 서버를 이용하여 통신하게 한다.
-   이것은 명백히 오버헤드가 발생하므로 이 방법은 다른 대안이 없을 경우만 사용하게 됩니다.
- TURN의 자세한 내용은 [여기](https://brunch.co.kr/@linecard/156)를 참고해주세요.

![](https://mdn.mozillademos.org/files/6117/webrtc-turn.png)


### 2-5 STUN과 TURN 초간단 정리

STUN은 단말이 자신의 공인 IP 주소와 포트를 확인하는 과정에 대한 프로토콜이고, TURN은 단말이 패킷을 릴레이 시켜 줄 서버를 확인하는 과정에 대한 프로토콜입니다. STUN 서버는 사설 주소와 공인 주소를 바인딩하고, TURN 서버는 릴레이 주소를 할당합니다. 특히 TURN은 ICE에서 직접 사용합니다.

### 2-6 ICE Candidate Gathering

ICE를 실행하는 단말들은 통신이 가능한 모든 주소를 식별합니다. 처음에 클라이언트는 STUN 메세지를 TURN 서버로 전송하고 수신하는 과정에서 릴레이 주소를 확인합니다.

-   릴레이 주소는 TURN서버가 패킷 릴레이를 위해 할당하는 주소입니다.

### 2-7 ICE 연결성 체크

두 단말은 TURN 서버와 메시지 교환을 통해 자신의 3개 Candidate 주소를 확인하고 SDP Offer와 SDP Answer를 통해 상대방의 3개 Candidate 주소를 확인합니다.

-   Candidate는 IP 주소와 포트 넘버의 조합으로 표시된 주소를 의미합니다.

## 참고

-   [https://developer.mozilla.org/ko/docs/Web/API/WebRTC\_API](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API)
-   [http://wiki.pchero21.com/wiki/ICE(Interactive\_Connectivity\_Establishment)](http://wiki.pchero21.com/wiki/ICE(Interactive_Connectivity_Establishment))
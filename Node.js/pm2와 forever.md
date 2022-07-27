# 💻pm2와 forever, nohup
만든 node 서버를 데몬 프로세스로 서버를 띄우게 되는데 이 과정에서 nohup, forever, pm2 등 여러 패키지의 도움을 받아서 서버를 백그라운드로 서버를 띄우게 할 수 있습니다.

## pm2
프로세스 관리자(process manager)로 Node.js로 만들어진 프로그램의 프로세스를 편리하게 관리할 수 있도록 도와줍니다.

-  Node.js 기반 프로세스 관리 
-  무중단 서비스
-  프로세스 모니터링 도구

위의 기능을 이용할 수 있습니다.

## forever
forever은 script 파일을 무중단 실행(백그라운드)하는 node.js package입니다.
forever보다는 pm2를 사용하는 것이 좋지만, 현재 서버에서 사용하는 node의 버전이 v8 미만이라면 pm2를 지원하지 않기 때문에 forever를 npm으로 설치받아서 사용하면 될 것 같습니다.

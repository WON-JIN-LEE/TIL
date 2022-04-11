# [Error] EC2 bash: Cannot create temp file for here-document: No space left on device

## 📌발생된 에러들
이 상황은 사용중인 EC2의 디스크 공간에 임시 파일 문서를 만들 수 없을 때 발생됩니다.
또한 배포중인 서버를 restart도 되지 않을 수 있습니다.
새벽6시에 fix된 코드를 적용하기위해서 서버를 재실행하는 과정에서 사용중인 mongoDB에 연결이 되지 않는 에러가 발생되었습니다.
이것도 EC2의 디스크 저장공간이 없어서 발생되었던 문제였던것 같습니다. 이 글에서는 EC2의 저장공간을 늘리는 내용을 적어가겠습니다.
mongoDB에서 발된생 에러에 대해서는 따로 [링크](https://jinblog123.tistory.com/369)를 달겠습니다.


## EC2 용량 확인/디스트 확장

1. bash창켜고 Ec2에 접속
2. $ lsblk 명령어를 입력하면 여러줄이 나오는데 여기서 type이 현재 할당된 disk 용량을 확인할 수 있다.
3. AWS 홈페이지에 접속해서 상세 정보 페이지에 들어가서 인스턴스의 볼륨을 찾고 볼륨수정 메뉴를 선택합니다. 그러면 용량을 수정할 수 있습니다. (프리티어 기간중에는 30G까지 무료입니다.)
4. 다시 lsblk 명령어를 치고 EC2 환경의 HDD에 적용된 것을 확인할 수 있습니다. 그냥 이렇게 두면 실제로는 적용되질 않습니다. 저것을 마운트해야 실제 AWS EC2 서버에서 사용할 수 있습니다.
5. $ sudo growpart /dev/xvda 1 처럼 명령어를 입력합니다 이것은 xvda라는 disk에 파티션을 추가하는 작업입니다. 주의: /dev/xvda에는 독자의 경로를 맞게 입력하시면 됩니다.
6. $ df -hT 명령어를 입력합니다. 파티션의 총 용량과 사용중인 용량 그리고 퍼센트 정보등을 확인할 수 있습니다. 지금 상태는 파티션은 적용되어 있지만 아직 리눅스 파일 시스템에 확장되지는 않은 상태입니다. 이제 리눅스 파일 시스템에 확장 시켜야 합니다.
7. $ sudo reszie2fs /dev/xvda1 과 같이 확장을 시켜줍니다. 
8. 다시 $ df -hT 명령어로 용량크기 올라가고 Use%가 내려간것을 확인할 수 있습니다.

이러한 에러가 발생되었을 때 AWS 용량을 먼저 확인해보고 해결방법을 찾아보시는게 좋을 것 같습니다.

___

### 참고

[https://stackoverflow.com/questions/11014584/ec2-cant-resize-volume-after-increasing-size](https://stackoverflow.com/questions/11014584/ec2-cant-resize-volume-after-increasing-size)

[https://lsjsj92.tistory.com/551](https://lsjsj92.tistory.com/551)


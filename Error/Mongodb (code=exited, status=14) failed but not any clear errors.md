# Mongodb (code=exited, status=14) failed but not any clear errors

리눅스 우분투에서 몽고디비 서버가 구동되지 않는 오류 해결하기

## 📌해결방법
제 경우에는 사용자가 mongod이고 폴더의 /var/lib폴더가 mongo이므로 이 명령을 실행해야 했습니다.

```shell
1. mongodb파일 권한 mongodb로 설정
$ sudo chown -R mongodb:mongodb /var/lib/mongodb

2. mongodb-27017.sock 파일 권한 mongodb로 설정
$ sudo chown mongodb:mongodb /tmp/mongodb-27017.sock

3. 몽고디비 상태 시작
$ sudo service mongod start

4. 몽고디비 상태 확인
$ sudo service mongod status
```

몽고디비 구성파일과 mongodb-<포트번호>.sock 파일의 권한이 몽고디비로 설정되어 있지 않기 때문입니다. 이것을 몽고디비 파일 권한을 mongodb로 바꿔주는 작업을 해야 합니다.

### 참고
​
[https://stackoverflow.com/questions/64608581/mongodb-code-exited-status-14-failed-but-not-any-clear-errors](https://stackoverflow.com/questions/64608581/mongodb-code-exited-status-14-failed-but-not-any-clear-errors)
​

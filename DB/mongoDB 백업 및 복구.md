# mongoDB 백업 및 복구 파일만들기

## 📌mongoDB 백업하기(dump)

mongodump -u user_name -p user_password --authenticationDatabase=admin --out /data/backup/ --db db_name --collection collection_name --gzip 

### 옵션 설명
-u : 계정명
-p : 계정의 비밀번호
--authenticationDatabase=admin : 인증
--host : 원격 시 IP 주소 및 포트 
--out : Dump 받을 폴더 경로
--db : Dump 받을 DB 선택 (미작성 시 DB 전체)
--collection : Dump 받을 collection(table) 선택  (미작성 시 Collection 전체)
--gzip : Dump 파일 확장자

 

## 📌mongoDB 복구하기(Restore)
mongorestore -u user_name -p user_password --host 192.168.0.100:8000 --authenticationDatabase=admin --gzip --db db_name --collection collection_name /data/backup/collection.bson.gz --drop

### 옵션 설명
-u : 계정명
-p : 계정의 비밀번호
--authenticationDatabase=admin : 인증
--host : 원격 시 IP 주소 및 포트
--db : Restore 할 DB 선택 
--collection : Restore 할 collection(table) 선택
--gzip : Restore 파일 확장자
--drop : 백업에 없는 collection 삭제
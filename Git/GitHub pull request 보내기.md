# GitHub pull request 보내기

## 📌 github에서 브랜치를 만들고 PR 보내는 방법

1.  main repo를 로컬 저장소에 clone으로 받아옵니다.
2.  그다음 main 브랜치에서 개발 브랜치 ex): dev를 하나 만들어 작업할 코드를 작성합니다. 커밋하고 원격 저장소로 push를 해줍니다.
3.  처음 만든 브랜치라면 연결이 되어있지 않을 수 있기 때문에 upstream으로 연결한 후에 다시 push를 합니다.
4.  그러면 원격 저장소에서 PR을 하라는 버튼이 생기고 그 버튼을 눌러서 PR을 생성하면 됩니다.

## 📌 github에서 fork 하여 PR 보내는 방법

원본 저장소를 main, fork저장소를 origin이라고 하겠습니다.

1.  main레포에서 포크를 하면 개인 깃 헙 저장소에 origin저장소가 생깁니다.
2.  우리는 포크 된 저장소를 개인 로컬 저장소로 clone을 받습니다. 작업 브랜치를 하나 따서 작업하고 커밋 -> push 하면 origin저장소 github 페이지에서 PR 버튼이 생깁니다.
3.  PR을 누르면 origin으로 PR을 보낼 수도 있고 원본인 main 원격 저장소에도 PR을 보낼 수 있습니다.
4.  main으로 PR을 생성하면 main 저장소 페이지로 이동하게 되면서 PR을 보내게 됩니다.

---

## 📌 PR 보낸 코드가 merge 되지 않고 PM으로부터 수정을 요구하는 경우

1.  PR 메뉴에서 프로젝트 매니저(PM)의 코멘트나 request change 메시지를 확인한다.
2.  수정하겠는 comment를 남긴 후 local repo에서 PR을 날린 해당 브랜치에서 코드를 수정한다.
3.  그 파일을 커밋 -> 푸시를 하게 되면 수정한 커밋 메시지가 자연스럽게 이미 요청된 PR의 Conversation에 붙게 된다. 다시 PR을 생성하지 않아도 된다.
4.  이것은 fork 하여 PR을 보내는 경우 & main repo를 바로 clone 받아서 PR을 보내는 경우 둘 다 모두 해당되는 내용다. 똑같이 동작한다.

🔨 (PR이 브랜치를 기준으로 동작하기 때문인 것 같다. 정확한 정보는 추후에 업데이트하겠습니다.)

---

## 📌 GitHub에서 PR 보내고 다시 PR 보낼 때 자주 발생하는 상황

원본 저장소를 main, fork저장소를 origin이라고 하겠습니다.

1.  원보 저장소에서 포크 합니다. 포크 repo를 로컬에 clone을 받습니다. 브랜치를 es6라고 따서 작업을 한 후 origin으로 푸시하면 PR버튼이 생기고 PR을 main으로 보내서 master브랜치에 merge가 되었다.
2.  여기서 많이 발생하는 실수는 새 기능을 추가하기 위해서 new 브랜치를 만들고 3번과 같이 PR을 날리려고 할 때 **Can't automatically merge라는 빨간 문구가 뜨게 된다.**
3.  이 상황이 발생하는 이유는 main의 master에는 es6의 코드가 merge가 되었는데 origin의 master에는 es6가 패치되지 않았기 때문이다.
4.  즉, es6가 merge 되지 않은 로컬 master에서 new브랜치를 따서 작업한 코드를 PR을 보내려고 할 때 main과 origin의 master 브랜치의 싱크가 맞지 않아서 충돌 상황이 발생되기 때문이다.

### 🛠 해결 방법

-   main과 origin의 master 브랜치의 싱크를 맞혀줘야 한다.

첫 번째 방법

1.  로컬 저장소와 원본 main저장소를 upstream으로 연결해서 직접 main의 es6가 추가된 master코드를 로컬 master에 rebase(병합)시킨다.
2.  그리고 로컬에서 병합된 코드를 origin 레포에 강제 푸시를 해서 싱크를 맞혀준다.

두 번째 방법

1.  origin 깃 헙 사이트에서 Fetch upstream으로 원본 main의 변경 사항들을 pull 한다.
2.  origin repo에서 로컬 저장소로 fetch -> pull 해서 싱크를 맞혀준다.

이렇게 싱크를 맞혀주고 기존 new 브랜치는 삭제하고 다시 개발 브랜치를 생성해서 작업한 코드로 push -> PR을 날리면 Can't automatically merge에러는 더 이상 발생하지 않는다.
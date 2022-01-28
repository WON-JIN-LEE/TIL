# [Git] 협업을 위한 git 커밋컨벤션 설정하기

## 좋은 커밋 메시지가 중요한 이유

임의의 Git 리포지토리의 로그를 탐색하면 커밋 메시지가 다소 엉망이라는 것을 알게 될 것입니다.

### 👇 정해진 규칙없이 가독성도 떨어질 뿐만아니라 말하고자 하는바를 정확이 이해하기 힘들다.

```bash
$ git log --oneline -5 --author cbeams --before "Fri Mar 26 2009"

e5f4b49 Re-adding ConfigurationPostProcessorTests after its brief removal in r814. @Ignore-ing the testCglibClassesAreLoadedJustInTimeForEnhancement() method as it turns out this was one of the culprits in the recent build breakage. The classloader hacking causes subtle downstream effects, breaking unrelated tests. The test method is still useful, but should only be run on a manual basis to ensure CGLIB is not prematurely classloaded, and should not be run as part of the automated build.

2db0f12 fixed two build-breaking issues: + reverted ClassMetadataReadingVisitor to revision 794 + eliminated ConfigurationPostProcessorTests until further investigation determines why it causes downstream tests to fail (such as the seemingly unrelated ClassPathXmlApplicationContextTests)

147709f Tweaks to package-info.java files

22b25e0 Consolidated Util and MutableAnnotationUtils classes into existing AsmUtils

7f96f57 polishing
```

### 👇 다음 커밋을 보면

- 누가봐도 아래 쪽이 읽기가 편하다. 아래 쪽은 간결하고 일관성이 있다.
- 좋은 커밋 메시지는 동료 개발자 또는 미래의 자신에게 변경사항을 전달하는 데 도움이 될 수 있다.
- 깃 자체에서 무엇이 변경되었는지 알려주지만, 제대로된 이유는 커밋 메시지만이 알려줄 수 있다.
- 간결하고 읽기 쉬운 메시지는 읽는이에게 정보를 빠르게 획득하도록 도울 수 있다.

```bash
$ git log --oneline -5 --author pwebb --before "Sat Aug 30 2014"

5ba3db6 Fix failing CompositePropertySourceTests

84564a0 Rework @PropertySource early parsing logic

e142fd1 Add tests for ImportSelector meta-data

887815f Update docbook dependency and generate epub

ac8326d Polish mockito usage
```

---

## 1. 메시지 구조

먼저 커밋 메시지는 크게 **제목, 본문, 꼬리말** 세 가지 파트로 나누고, 각 파트는 빈줄을 두어서 구분합니다.

```
type(옵션): [#issueNumber - ]Subject  // -> 제목
(한 줄을 띄워 분리합니다.)
body(옵션) //  -> 본문 
(한 줄을 띄워 분리합니다.)
footer(옵션) // -> 꼬리말
```

- type : 어떤 의도로 커밋했는지를 type에 명시합니다. 자세한 사항은 아래서 설명하겠습니다.
- subject : 최대 50글자가 넘지 않도록 하고 마침표는 찍지 않습니다. 영문으로 표기하는 경우 동사(원형)를 가장 앞에 두고 첫 글자는 대문자로 표기합니다.
- body : 긴 설명이 필요한 경우에 작성합니다. 어떻게 했는지가 아니라, 무엇을 왜 했는지를 작성합니다. 최대 75자를 넘기지 않도록 합니다.
- footer : issue tracker ID를 명시하고 싶은 경우에 작성합니다.
___
## 2. 제목 작성

타입

- 타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 합니다.
- "태그: 제목"의 형태이며, : 뒤에만 space가 있음에 유의합니다.

| 태그  | 설명 | 
| ------ | ------ |
|   Feat   | 새로운 기능을 추가할 경우         |
| Fix     |  버그를 고친 경우    |      
|   Design   |  	CSS 등 사용자 UI 디자인 변경    |      
|   !BREAKING CHANGE   |  커다란 API 변경의 경우    |      
|   !HOTFIX   |   급하게 치명적인 버그를 고쳐야하는 경우   |      
|   Style   | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우|
|   Refactor   |  	프로덕션 코드 리팩토링    |      
|   Comment   | 필요한 주석 추가 및 변경     |      
|   Docs   | 문서를 수정한 경우     |      
| Test     |   테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)|
|   Chore   |   빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)|
|  Rename    |  파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |      
|   Remove   |   파일을 삭제하는 작업만 수행한 경우   |      


제목은 코드 변경 사항에 대한 짧은 요약을 나타냅니다. 제목은 다음의 규칙을 지킵니다.

1. 제목의 처음은 동사 원형으로 시작합니다.
2. 총 글자 수는 50자 이내로 작성합니다.
3. 마지막에 특수문자는 삽입하지 않습니다. 예) 마침표(.), 느낌표(!), 물음표(?)
4. 제목은 개조식 구문으로 작성합니다.

만약 영어로 작성하는 경우 다음의 규칙을 따릅니다. 

1. 첫 글자는 대문자로 작성합니다.
2. "Fix", "Add", "Change"의 명령어로 시작합니다.

한글로 제목을 작성하는 경우 다음의 규칙을 따릅니다.
1. "고침", "추가", "변경"의 명령어로 시작합니다.
 
```
예시)
Feat: "추가 get data api 함수"
```
___

## 3. 본문 작성

본문은 다음의 규칙을 지킵니다.

1. 본문은 한 줄 당 72자 내로 작성합니다.
2. 본문 내용은 양에 구애받지 않고 최대한 상세히 작성합니다.
3. 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명합니다.
___

## 4. footer 작성
꼬리말은 다음의 규칙을 지킵니다.

1. 꼬리말은 optional이고 이슈 트래커 ID를 작성합니다.
2. 꼬리말은 "유형: #이슈 번호" 형식으로 사용합니다.
3. 여러 개의 이슈 번호를 적을 때는 쉼표로 구분합니다.
4. 이슈 트래커 유형은 다음 중 하나를 사용합니다.
    - Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
    - Resolves: 이슈를 해결했을 때 사용
    - Ref: 참고할 이슈가 있을 때 사용
    - Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)

ex) Fixes: #45 Related to: #34, #23
 
ex) 👇예시
```
Feat: "추가 로그인 함수"

로그인 API 개발

Resolves: #123
Ref: #456
Related to: #48, #45
```
### 4.1 PLUS TIP! 커밋 메시지로 Github 이슈(issue)를 자동 종료시키기
만약 커밋 메시지를 영문으로 작성하신다면 좋은 팁 하나 더 소개해 드릴게요. Github에는 커밋 메시지에 특정한 단어를 사용해 자동으로 이슈를 종료시키는 편리한 기능이 탑재되어 있습니다. 이 예약어는 커밋 메시지 안의 어느 위치에서나 사용 가능합니다. 이제 커밋 메시지로 Github 이슈를 닫아보세요! 방법은 간단합니다.

Github가 이슈 종료로 인식하는 키워드는 다음과 같습니다.
- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved
```
키워드 #이슈번호
```
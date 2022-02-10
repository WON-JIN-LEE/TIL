# DFS & BFS & 백트래킹

## 1. 그래프의 표현방법

👉 이런 그래프라는 개념을 컴퓨터에서 표현하는 방법은 두 가지 방법이 있습니다!

1) 인접 행렬(Adjacency Matrix): 2차원 배열로 그래프의 연결 관계를 표현

2) 인접 리스트(Adjacnecy List): 링크드 리스트로 그래프의 연결 관계를 표현

인접 리스트로 많이 쓴다. 하지만 인접한 요소가 너무 많아서 검색하는데 O(n)이 걸릴 수 있다. 이런 경우 인접 행렬을 이용하면 O(1)의 복잡도로 검색할 수 있다.

## 📌 DFS 

👉 DFS는 Depth First Search라고 한다.!

![](https://media.vlpt.us/images/leobit/post/4e0edd2b-a6e0-4ab6-bdc1-5f4aaab24e47/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7,%202020-09-20%2015-41-25.png)

갈 수 있는 만큼 계속해서 탐색하다가 갈 수 없게 되면 다른 방향으로 다시 탐색하는 구조입니다. 이 말만 들어서는 방법이 안 떠오르니까, 한 번 구체적으로 실행 과정을 적어보겠습니다!

1.  노드를 방문하고 깊이 우선으로 인접한 노드를 방문한다.
2.  또 그 노드를 방문해서 깊이 우선으로 인접한 노드를 방문한다.
3.  위 과정을 반복한다.

**스택이나 재귀적**으로 DFS를 구현할 수 있다.
### DFS 구현 코드
```python
graph = {
    1: [2, 3, 4],
    2: [5],
    3: [5],
    4: [],
    5: [6, 7],
    6: [],
    7: [3],
}

# DFS를 스택으로 구현
def dfs_stack(start):
    visited = []
    # 방문할 순서를 담아두는 용도
    stack = [start]

    # 방문할 노드가 남아있는 한 아래 로직을 반복한다.
    while stack:
        # 제일 최근에 삽입된 노드를 꺼내고 방문처리한다.
        top = stack.pop()
        visited.append(top)
        # 인접 노드를 방문한다.
        for adj in graph[top]:
            if adj not in visited:
                stack.append(adj)

    return visited

assert dfs_stack(1) == [1, 4, 3, 5, 7, 6, 2]


# DFS를 재귀적으로 구현
def dfs_recursive(node, visited):
    # 방문처리
    visited.append(node)

    # 인접 노드 방문
    for adj in graph[node]:
        if adj not in visited:
            dfs_recursive(adj, visited)

    return visited

assert dfs_recursive(1, []) == [1, 2, 5, 6, 7, 3, 4]
```
___
## 📌 BFS
👉 BFS는 Breadth-First Search라고 한다.!

DFS는 탐색하는 원소를 최대한 깊게 따라가야 합니다. 이를 구현하기 위해 인접한 노드 중 방문하지 않은 모든 노드들을 저장해 두고, 가장 마지막에 넣은 노드를 꺼내서 탐색하면 됩니다. → 그래서 **스택**을 사용했습니다.

![](https://media.vlpt.us/images/leobit/post/a87d7a66-a080-48fc-8485-048ee8a25f1c/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7,%202020-09-20%2015-39-30.png)

BFS는 현재 인접한 노드 먼저 방문해야 합니다. 이걸 다시 말하면 인접한 노드 중 방문하지 않은 모든 노드들을 저장해 두고, 가장 처음에 넣은 노드를 꺼내서 탐색하면 됩니다.

가장 처음에 넣은 노드들..? → **큐**를 이용하면 BFS를 구현할 수 있습니다!

구현의 방법은 다음과 같습니다.

1.  루트 노드를 큐에 넣습니다.
2.  현재 큐의 노드를 빼서 visited에 추가한다.
3.  현재 방문한 노드와 인접한 노드 중 방문하지 않은 노드를 큐에 추가한다.
4.  2부터 반복한다.
5.  큐가 비면 탐색을 종료한다.

### BFS 구현 코드

```python
from collections import deque

graph = {
    1: [2, 3, 4],
    2: [5],
    3: [5],
    4: [],
    5: [6, 7],
    6: [],
    7: [3],
}

def bfs_queue(start):
    visited = [start]
    q = deque([start])

    while q:
        node = q.popleft()
        for adj in graph[node]:
            if adj not in visited:
                q.append(adj)
                visited.append(adj)
    return visited

assert bfs_queue(1) == [1, 2, 3, 4, 5, 6, 7]

```
___

## 📌 Backtracking(백트래킹)
백트래킹은 해결책에 대한 후보를 구축해 나아가다 가능성이 없다고 판단되는 즉시 후보를 포기해 정답을 찾아가는 범용적인 알고리즘으로 제약 충족 문제에 특히 유용하다. 백트래킹은 가보고 되돌아오고를 반복한다. 
- 완전탐색 : 여러 개의 solution을 가진 문제에서, 모든 solution을 탐색하는 전략
- 대표적 예 : 재귀 호출 or 스택을 통한 DFS

### 백트래킹의 원리
- 어떤 노드의 유망성을 점검 후, 유망하지 않으면 배제시킨다. = 가지치기
- 해당 노드의 부모노드로 되돌아간 후 다른 자손노드를 검색한다. → 풀이시간 단축

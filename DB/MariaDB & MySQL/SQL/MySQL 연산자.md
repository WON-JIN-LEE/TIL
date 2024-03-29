# MySQL 연산자

## 산술연산자 
|||
|--|--|
|+| 왼쪽 피연산자에 오른쪽 피연산자 더함|
|-| 왼쪽 피연산자에서 오른쪽 피연산자를 뺌.|
|*| 왼쪽 피연산자에 오른쪽의 피연산자를 곱함.|
|/| 왼쪽 피연산자를 오른쪽 피연산자로 나눔.|
|DIV| 	왼쪽 피연산자를 오른쪽 피연산자로 나눈 후, 소수 부분을 버림.|
|%또는 MOD|  왼쪽 피연산자를 오른쪽 피연산자로 나눈 후, 그 나머지를 반환함.|

## 대입 연산자 
|||
|--|--|
|= | 왼쪽 피연산자에 오른쪽 피연산자를 대입함. (SET 문이나 UPDATE 문의 SET 절에서만 대입연산자로 사용됨)|
|:= | 왼쪽 피연산자에 오른쪽 피연산자를 대입함.|

- MySQL에서 '=' 연산자는 두 가지 의미로 해석됩니다.
- 우선 SET 문이나 UPDATE 문의 SET 절에서 사용되면, 왼쪽 피연산자에 오른쪽 피연산자를 대입하는 대입 연산자로 해석됩니다.
- SET 문이나 UPDATE 문의 SET 절 이외에서 사용되면, 왼쪽 피연산자와 오른쪽 피연산자를 비교하는 비교 연산자로 해석됩니다.

## 비교 연산자
비교 연산자는 피연산자 사이의 상대적인 크기를 판단하여, 참(true)이면 1을 반환하고 거짓(false)이면 0을 반환합니다.

|||
|--|--|
|=	|왼쪽 피연산자와 오른쪽 피연산자가 같으면 참을 반환함.|
|!=, <>|	왼쪽 피연산자와 오른쪽 피연산자가 같지 않으면 참을 반환함.|
|<	|왼쪽 피연산자가 오른쪽 피연산자보다 작으면 참을 반환함.|
|<=	|왼쪽 피연산자가 오른쪽 피연산자보다 작거나 같으면 참을 반환함.|
|>	|왼쪽 피연산자가 오른쪽 피연산자보다 크면 참을 반환함.|
|>=	|왼쪽 피연산자가 오른쪽 피연산자보다 크거나 같으면 참을 반환함.|
|<=>	|양쪽의 피연산자가 모두 NULL이면 참을 반환하고, 하나의 피연산자만 NULL이면 거짓을 반환함.|
|IS	|왼쪽 피연산자와 오른쪽 피연산자가 같으면 참을 반환함. (오른쪽 피연산자가 불리언 값인 TRUE, FALSE, UNKNOWN 값일 때 사용함)|
|IS NOT | 왼쪽 피연산자와 오른쪽 피연산자가 같지 않으면 참을 반환함. (오른쪽 피연산자가 불리언 값인 TRUE, FALSE, UNKNOWN 값일 때 사용함)|
|IS NULL | 피연산자의 값이 NULL이면 참을 반환함.|
|IS NOT NULL | 피연산자의 값이 NULL이 아니면 참을 반환함.|
|BETWEEN min AND max |	피연산자의 값이 min 값보다 크거나 같고, max 값보다 작거나 같으면 참을 반환함.|
|NOT BETWEEN min AND max | 피연산자의 값이 min 값보다 작거나 max 크면 참을 반환함.|
|IN() |	피연산자의 값이 인수로 전달받은 리스트에 존재하면 참을 반환함.|
|NOT IN() | 피연산자의 값이 인수로 전달받은 리스트에 존재하지 않으면 참을 반환함.|

## 논리 연산자
논리 연산자는 논리식을 판단하여, 참(true)이면 1을 반환하고 거짓(false)이면 0을 반환합니다.

|||
|--|--|
|AND|논리식이 모두 참이면 참을 반환함.|
|&&|논리식이 모두 참이면 참을 반환함.|
|OR|논리식 중에서 하나라도 참이면 참을 반환함.|
||||논리식 중에서 하나라도 참이면 참을 반환함.|
|XOR|논리식이 서로 다르면 참을 반환함.|
|NOT|논리식의 결과가 참이면 거짓을, 거짓이면 참을 반환함.|
|!|논리식의 결과가 참이면 거짓을, 거짓이면 참을 반환함.|

## 비트 연산자
비트 연산자는 논리 연산자와 비슷하지만, 비트(bit) 단위로 논리 연산을 수행합니다.

|||
|--|--|
|&|대응되는 비트가 모두 1이면 1을 반환함. (AND 연산)|
|||대응되는 비트 중에서 하나라도 1이면 1을 반환함. (OR 연산)|
|^|대응되는 비트가 서로 다르면 1을 반환함. (XOR 연산)|
|~|비트를 1이면 0으로, 0이면 1로 반전시킴. (NOT 연산)|
|<<|지정한 수만큼 비트를 전부 왼쪽으로 이동시킴. (left shift 연산)|
|>>|부호를 유지하면서 지정한 수만큼 비트를 전부 오른쪽으로 이동시킴. (right shift 연산)|


MySQL에서는 '0'과 '1'로만 이루어진 문자열 앞에 'b'를 붙여 2진수를 표현할 수 있습니다.
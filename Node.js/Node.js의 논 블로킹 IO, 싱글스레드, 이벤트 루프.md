# π»Node.jsμ λΌ λΈλ‘νΉ IO, μ±κΈμ€λ λ, μ΄λ²€νΈ λ£¨ν
Block IO vs Non-Block IO & Sync vs Asyncμ λν μ€λͺμ [μ¬κΈ°](https://jinblog123.tistory.com/397)λ₯Ό μ°Έκ³ ν΄μ£ΌμΈμ.

Node.jsμ λͺ¨λ  I/O λ©μλλ λΌλΈλ‘νΉμΈ λΉλκΈ° λ°©μμ μ κ³΅νκ³  μ½λ°± ν¨μλ₯Ό λ°λλ€. μΌλΆ λ©μλλ κ°μ μμμ νλ λΈλ‘νΉ λ©μλλ κ°μ§λλ° μ΄λ¦ λ§μ§λ§μ Syncκ° λΆλλ€.

## Node.jsμ non-blocking I/O
Node.jsμμμ λΌλΈλ‘νΉ I/O λͺ¨λΈμ λΈλ‘νΉ μμ(Input, Outputκ³Ό κ΄λ ¨λ μμ / http, Database CRUD, third party api, filesystem)λ€μ λ°±κ·ΈλΌμ΄λ(libuvμ μ€λ λ ν)μμ μννκ³ , μ΄λ₯Ό λΉλκΈ° μ½λ°±ν¨μλ‘ μ΄λ²€νΈ λ£¨νμ μ λ¬νλ κ²μ λ§νλ€.

## Node.jsλ μ±κΈμ€λ λμΈκ°μ?

- μ±κΈ μ€λ λ : νλ‘μΈμ€ λ΄μμ νλμ μ€λ λκ° νλμ μμ²­λ§μ μννλ€. ν΄λΉ μμ²­μ΄ μνλ  λ λ€λ₯Έ μμ²­μ ν¨κ» μνν  μ μλ€.
- λ©ν°μ€λ λ : μ€λ λ νμμ μ€νμ μμ²­λ§νΌ μ€λ λλ₯Ό λ§€μΉ­νμ¬ μμμ μννλ€.

Node.jsλ μ±κΈμ€λ λ λΌλΈλ‘νΉ λͺ¨λΈλ‘ κ΅¬μ±λμ΄ μλ€. νλμ μ€λ λλ‘ λμνμ§λ§, λΉλκΈ° I/O μμμ ν΅ν΄ μμ²­λ€μ μλ‘ λΈλ‘νΉνμ§ μλλ€.

μ¦, **λμμ λ§μ μμ²­λ€μ λΉλκΈ°λ‘ μνν¨μΌλ‘μ¨ μ±κΈμ€λ λμΌμ§λΌλ λΌλΈλ‘νΉμ΄ κ°λ₯νλ€.**


## Node.jsλ μμ ν μ±κΈμ€λ λμΈκ°μ?
- Node.jsκ° μμ ν μ±κΈμ€λ λκ° μλ μ΄μ λ μΌλΆ Blocking μμλ€μ libuvμ μ€λ λ ν(Thread pool)μμ μνλλλ°, μ΄ **μ€λ λ νμ΄ λ©ν°μ€λ λμ΄κΈ° λλ¬Έμ΄λ€.**
___

## Node.js 
νν Node.jsλ₯Ό μ±κΈ μ€λ λ λΌ λΈλ‘νΉμ΄λΌκ³  νλ€. Node.jsλ νλμ μ€λ λλ‘ λμνμ§λ§ I/O μμμ΄ λ°μν κ²½μ° μ΄λ₯Ό λΉλκΈ°μ μΌλ‘ μ²λ¦¬ν  μ μλ€. λΆλͺ νλμ μ€λ λλ νλμ μ€ν νλ¦λ§μ κ°μ§κ³  μκ³  νμΌ μ½κΈ°μ κ°μ΄ κΈ°λ€λ €μΌ νλ μμμ μ€ννλ©΄ κ·Έ μμμ΄ λλκΈ° μ μλ μλ¬΄κ²λ ν  μ μμ΄μΌλ§ νλ€. κ·Έλ¬λ Node.jsλ νλμ μ€λ λλ§μΌλ‘ μ¬λ¬ λΉλκΈ° μμλ€μ λΈλ‘νΉ μμ΄ μνν  μ μκ³  κ·Έ κΈ°λ°μλ **μ΄λ²€νΈ λ£¨ν**κ° μ‘΄μ¬νλ€.

## Node.jsμ λ΄λΆ κ΅¬μ‘°
![](https://velog.velcdn.com/images%2Fjulianneyi%2Fpost%2Ff4f5de18-eb11-4b87-8679-17bb6a0f6169%2Fimage.png)
λΈλμ κ΅¬μ‘°λ 
- libuvλ C++λ‘ μμ±λ, Node.jsκ° μ¬μ©νλ λΉλκΈ° I/O λΌμ΄λΈλ¬λ¦¬
- libuvμ λ€λ₯Έ μ μμ€ κΈ°λ₯λ€μ λ©ννκ³  νμΆμν€κΈ° μν λ°μΈλ© μΈνΈ(socket, http, ...)
- V8, ν¬λ‘¬ λΈλΌμ°μ λ₯Ό μν κ΅¬κΈμ΄ κ°λ°ν JavaScript μμ§μΌλ‘ Node.jsκ° λ§€μ° λΉ λ₯΄κ³  ν¨μ¨μ μΈ μ΄μ  μ€ νλμ΄κΈ°λ ν©λλ€. V8μ νμ μ μΈ μ€κ³μ μλ κ·Έλ¦¬κ³  ν¨μ¨μ μΈ λ©λͺ¨λ¦¬ κ΄λ¦¬λ‘ λμ νκ°λ₯Ό λ°κ³  μμ΅λλ€.
- κ³ μμ€ Node.js APIλ₯Ό κ΅¬ννκ³  μλ μ½μ΄ JavaScript λΌμ΄λΈλ¬λ¦¬
  
μ 4κ°μ§λ‘ Node.jsμ νλ«νΌμ κ΅¬μΆνκ³  μμ΅λλ€.

## Libuv νμ, Node.jsμ I/O μμ§
κ° μ΄μμ²΄μ λ APIμ κ°μ μ΄λ²€νΈ λλ©ν°νλ μλ₯Ό μν μμ²΄ μΈν°νμ΄μ€λ₯Ό κ°μ§κ³  μμ΅λλ€. κ²λ€κ° I/O μμμ λμΌν OS λ΄μμλ λ¦¬μμ€ μ νμ λ°λΌ λ§€μ° λ€λ₯΄κ² λμν  μ μμ΅λλ€.

μλ₯Ό λ€μ΄ Unixμμ μΌλ° νμΌ μμ€νμ λΌ λΈλ‘νΉ μμμ μ§μνμ§ μκΈ° λλ¬Έμ λΌ λΈλ‘νΉ λμμ μν΄μλ μ΄λ²€νΈ λ£¨ν μΈλΆμ λ³λμ μ€λ λλ₯Ό μ¬μ©ν΄μΌ ν©λλ€.

μλ‘ λ€λ₯Έ μ΄μμ²΄μ  κ°μ λΆμΌμΉμ±μ μ΄λ²€νΈ λλ©ν°νλ μλ₯Ό μν λ³΄λ€ λμ λ λ²¨μ μΆμνλ₯Ό νμλ‘ νκ² λμμ΅λλ€. μ΄λ°ν μ΄μ λ‘ Node.js μ½μ΄ νμ΄ Node.jsλ₯Ό **μ£Όμ μ΄μμ²΄μ μμ νΈνλκ² ν΄μ£Όλ©° μλ‘ λ€λ₯Έ λ¦¬μμ€ μ νμ λΌ λΈλ‘νΉ λμμ νμ€ννκΈ° μν΄ libuvλΌκ³  λΆλ¦¬λ CλΌμ΄λΈλ¬λ¦¬λ₯Ό λ§λ€μμ΅λλ€.** Node.jsμ κ΅¬μ±μμ μ€μμ κ°μ₯ μ€μνλ€κ³  λ§ν  μ μμ΅λλ€.

Libuvλ κΈ°λ³Έ μμ€ν νΈμΆμ μΆμννλ κ² μΈμλ μ΄λ²€νΈ λ£¨νμ μμ±, μ΄λ²€νΈ νμ κ΄λ¦¬, λΉλκΈ° I/O μμμ μ€ν λ° λ€λ₯Έ μ νμ μμμ νμ λ΄κΈ° μν APIλ€μ μ κ³΅ν©λλ€.

## Libuv λμ
libuv μκ² νμΌ μ½κΈ°μ κ°μ λΉλκΈ° μμμ μμ²­νλ©΄ libuvλ μ΄ μμμ μ»€λμ΄ μ§μνλμ§ νμΈνλ€. λ§μ½ μ§μνλ€λ©΄ libuvκ° λμ  μ»€λμκ² λΉλκΈ°μ μΌλ‘ μμ²­νλ€κ° μλ΅μ΄ μ€λ©΄ κ·Έ μλ΅μ μ°λ¦¬μκ² μ λ¬ν΄μ€λ€. λ§μ½ μμ²­ν μμμ μ»€λμ΄ μ§μνμ§ μλλ€λ©΄ μ΄λ»κ² ν κΉ? λ°λ‘ μμ λ§μ μμ»€ μ€λ λκ° λ΄κΈ΄ **μ€λ λ νμ μ¬μ©νλ€.**

libuvλ κΈ°λ³Έμ μΌλ‘ 4κ°μ μ€λ λλ₯Ό κ°μ§λ μ€λ λ νμ μμ±νλ€. νκ²½ λ³μ μ€μ μΌλ‘ μ΅λ 128κ°κΉμ§ μ€λ λ κ°μλ₯Ό λλ¦΄ μ μλ€. κ·Έλ¦¬κ³  μ€λ λ νμ μλ μ€λ λκ° μμμ μλ£νλ©΄ libuvκ° μ°λ¦¬μκ² μμ²­ν μμμ΄ μλ£λμλ€κ³  μΉμ νκ² μλ €μ€λ€.

μ¦, μ λ¦¬νλ©΄ λ€μκ³Ό κ°λ€.
- libuvλ μ΄μμ²΄μ μ μ»€λμ μΆμνν΄μ λΉλκΈ° APIλ₯Ό μ§μνλ€.
- libuvλ μ»€λμ΄ μ΄λ€ λΉλκΈ° APIλ₯Ό μ§μνκ³  μλμ§ μκ³  μλ€.
- λ§μ½ μ»€λμ΄ μ§μνλ λΉλκΈ° μμμ libuvμκ² μμ²­νλ©΄ libuvλ λμ  μ»€λμκ² μ΄ μμμ λΉλκΈ°μ μΌλ‘ μμ²­ν΄μ€λ€.
- λ§μ½ μ»€λμ΄ μ§μνμ§ μλ λΉλκΈ° μμμ libuvμκ² μμ²­νλ©΄ libuvλ λ΄λΆμ κ°μ§κ³ μλ μ€λ λ νμκ² μ΄ μμμ μμ²­ν΄μ€λ€.

Node.jsλ I/O μμμ μμ μ λ©μΈ μ€λ λκ° μλ λ€λ₯Έ μ€λ λμ μμν¨μΌλ‘μ¨ μ±κΈ μ€λ λλ‘ λΌ λΈλ‘νΉ I/Oλ₯Ό μ§μνλ€. λ€λ₯΄κ² λ§νλ©΄ **Node.jsλ I/O μμμ libuvμκ² μμν¨μΌλ‘μ¨ λΌ λΈλ‘νΉ I/Oλ₯Ό μ§μνκ³  κ·Έ κΈ°λ°μλ μ΄λ²€νΈ λ£¨νκ° μλ€.**

## Node.jsμμμ μ΄λ²€νΈ λ£¨ν
- μ΄λ²€νΈ λ£¨νλ Node.jsκ° μ¬λ¬ λΉλκΈ° μμμ κ΄λ¦¬νκΈ° μν κ΅¬νμ²΄λ€.
- λκΈ° μμμ΄ μλλΌ file.readFile('test.txt', callback)κ³Ό κ°μ λΉλκΈ° μμλ€μ λͺ¨μμ κ΄λ¦¬νκ³  μμλλ‘ μ€νν  μ μκ² ν΄μ£Όλ λκ΅¬μ΄λ€.
  

![](https://www.korecmblog.com/static/2dcc70f2d6c5e3f8d2dae0179a149283/131f1/event-loop.webp)

μ΄λ²€νΈ λ£¨νλ 6κ°μ νμ΄μ¦λ₯Ό κ°μ§κ³  μμΌλ©°, νμ΄μ¦λ₯Ό λΌμ΄λ λ‘λΉ(RR) λ°©μμΌλ‘ μννλ€. νμ΄μ¦λ κ°μλ§λ€ νλ₯Ό κ°μ§κ³  μκ³ , FIFO(First In First Out) μμλ‘ μ½λ°± ν¨μλ€μ μ²λ¦¬νλ€.


λΌμ΄λ λ‘λΉ μ€μΌμ€λ§
- μλΆν  μμ€νμ μν΄ μ€κ³λ μ μ ν μ€μΌμ€λ§μ νλλ‘μ, νλ‘μΈμ€λ€ μ¬μ΄μ μ°μ μμλ₯Ό λμ§ μκ³ , μμλλ‘ μκ°λ¨μλ‘ CPUλ₯Ό ν λΉνλ λ°©μμ CPU μ€μΌμ€λ§ μκ³ λ¦¬μ¦μλλ€. 
- μ¦, 6κ°μ νμ΄μ¦μ λͺ¨λ μΌμ ν μκ°μ ν λΉνκ³  μ°¨λ‘λλ‘ μννλ μ€μΌμ€λ§ λ°©μμλλ€.

___

![](https://velog.velcdn.com/images%2Fnewsilver1028%2Fpost%2F1985ca77-c5c2-4007-8d0e-c63cce64cf07%2Fimage.png
)

## μ΄λ²€νΈ λ£¨νμ "λ¨κ³" μ€λͺ
κ° λ¨κ³λ μ€νν  μ½λ°±μ FIFO νλ₯Ό κ°μ§λλ€. μ΄ νμλ μ΄λ²€νΈ λ£¨νκ° μ€νν΄μΌ νλ μμλ€μ΄ μμλλ‘ λ΄κ²¨μλ€. κ° λ¨κ³λ μμ λ§μ λ°©λ²μ μ νμ μ΄λ―λ‘ λ³΄ν΅ μ΄λ²€νΈ λ£¨νκ° ν΄λΉ λ¨κ³μ μ§μνλ©΄ ν΄λΉ λ¨κ³μ νμ λ μμμ μννκ³  νλ₯Ό λͺ¨λ μμ§νκ±°λ μ½λ°±μ μ΅λ κ°μλ₯Ό μ€νν  λκΉμ§ ν΄λΉ λ¨κ³μ νμμ μ½λ°±μ μ€νν©λλ€. νλ₯Ό λͺ¨λ μμ§νκ±°λ μ½λ°± μ νμ μ΄λ₯΄λ©΄ μ΄λ²€νΈ λ£¨νλ λ€μ λ¨κ³λ‘ μ΄λν©λλ€.

1. timers Phase
   - setTimeout()κ³Ό setInterval() κ°μ ν¨μκ° λ§λ€μ΄ λ΄λ νμ΄λ¨Έλ€μ λ€λ£¬λ€. 
   - Timer Phaseλ min-heapμ μ΄μ©ν΄μ νμ΄λ¨Έλ₯Ό κ΄λ¦¬νλ€. μ΄ λλΆμ μ€ν μκ°μ΄ κ°μ₯ μ΄λ₯Έ νμ΄λ¨Έλ₯Ό ν¨μ¨μ μΌλ‘ μ°Ύμ μ μλ€.

2. pending callbacks Phase
   - I/O μμ λΈλ‘ λ΄μ μ½λ°±ν¨μλ€μ pollλ¨κ³μ νλ‘ λκ²¨μ€λ€.
   - μ΄ νμ΄μ¦λ pending_queueμ λ΄κΈ°λ μ½λ°±λ€μ κ΄λ¦¬νλ€. μ΄ νμ λ΄κΈ°λ μ½λ°±λ€μ μ΄μ  μ΄λ²€νΈ λ£¨ν λ°λ³΅μμ μνλμ§ λͺ»νλ I/O μ½λ°±λ€μ΄λ€.
   - μμ€νμ μ€ν νλ μ νμ μν΄ νμ μμΈ λͺ¨λ  μμμ μ€ννμ§ λͺ»νκ³  λ€μ νμ΄μ¦λ‘ λμ΄κ° μλ μλ€. μ΄λ μ²λ¦¬νμ§ λͺ»νκ³  λμ΄κ° μμλ€μ μμλκ³  μ€ννλ νμ΄μ¦λ€.

3. Idle, Prepare Phase
   - μ΄ νμ΄μ¦λ€μ Node.jsμ λ΄λΆμ μΈ κ΄λ¦¬λ₯Ό μν νμ΄μ¦λ‘ μλ°μ€ν¬λ¦½νΈλ₯Ό μ€ννμ§ μλλ€. κ³΅μ λ¬Έμμμλ λ³λ€λ₯Έ μ€λͺμ΄ μκ³  μ½λμ μ§μ μ μΈ μ€νμ μν₯μ λ―ΈμΉμ§ μλλ€.

4. poll Phase
    - μ΄ νμ΄μ¦λ μλ‘μ΄ I/O μ΄λ²€νΈλ₯Ό λ€λ£¨λ©° watcher_queueμ μ½λ°±λ€μ μ€ννλ€. watcher_queueμλ I/Oμ λν κ±°μ λͺ¨λ  μ½λ°±λ€μ΄ λ΄κΈ΄λ€. μ½κ² λ§νλ©΄ setTimeout, setImmediate, close μ½λ°± λ±μ μ μΈν λͺ¨λ  μ½λ°±μ΄ μ¬κΈ°μ μ€νλλ€κ³  μκ°νλ©΄ λλ€. μλ₯Ό λ€λ©΄ μλμ κ°μ μ½λ°±λ€μ΄ μ€νλλ€.
        - λ°μ΄ν°λ² μ΄μ€μ μΏΌλ¦¬λ₯Ό λ³΄λΈ ν κ²°κ³Όκ° μμ λ μ€νλλ μ½λ°±
        - HTTP μμ²­μ λ³΄λΈ ν μλ΅μ΄ μμ λ μ€νλλ μ½λ°±
        - νμΌμ λΉλκΈ°λ‘ μ½κ³  λ€ μ½μμ λ μ€νλλ μ½λ°±
    - μ΄λ²€νΈ λ£¨νκ° μ’λ£λμλ€λ©΄ λ°λ‘ λ€μ νμ΄μ¦λ‘ λμ΄κ°λ€.
   - λ§μ½ Close Callbacks Phase, Pending Callbacks Phaseμμ μ€νν  μμμ΄ μλ€λ©΄ λ°λ‘ λ€μ νμ΄μ¦λ‘ λμ΄κ°λ€.
   - λ§μ½ Timer Phaseμμ μ¦μ μ€νν  μ μλ νμ΄λ¨Έκ° μλ€λ©΄ λ°λ‘ λ€μ νμ΄μ¦λ‘ λμ΄κ°λ€.
   - λ§μ½ Timer Phaseμμ μ¦μ μ€νν  μ μλ νμ΄λ¨Έλ μμ§λ§ nμ΄ νμ μ€νν  μ μλ νμ΄λ¨Έκ° μλ€λ©΄ nμ΄ κΈ°λ€λ¦° ν λ€μ νμ΄μ¦λ‘ λμ΄κ°λ€.


5. check Phase
   - μ΄ νμ΄μ¦λ μ€μ§ setImmediateμ μ½λ°±λ§μ μν νμ΄μ¦λ€. setImmediateκ° νΈμΆλλ©΄ Check Phaseμ νμ λ΄κΈ°κ³  Node.jsκ° Check Phaseμ μ§μνλ©΄ μ°¨λ‘λλ‘ μ€νλλ€.

   - κ³΅μ λ¬Έμμμ setImmediateμ process.nextTickμ μ°¨μ΄μ μ£Όλͺ©νκ³  μλ€. μ λ¦¬νλ©΄ μλμ κ°λ€. 
        - process.nextTickμ κ°μ νμ΄μ¦μμ νΈμΆν μ¦μ μ€νλλ€.
        - setImmediateλ λ€μ ν±μμ μ€νλλ€. μ ννλ Node.jsκ° ν±μ κ±°μ³ Check Phaseμ μ§μνλ©΄ μ€νλλ€.
   - λ°λΌμ λμλ§ λ³΄λ©΄ process.nextTickμ μ¦μ μ€νλκ³  setImmediateλ λ€μ ν±μ μ€νλλ€.

6. close callbacks Phase
   - socket.on('close', () => {});κ³Ό κ°μ close μ΄λ²€νΈ νμμ νΈλ€λ¬λ₯Ό μ²λ¦¬νλ νμ΄μ¦λ€. μ ννκ²λ uv_close()λ₯Ό λΆλ₯΄λ©΄μ μ’λ£λ νΈλ€λ¬μ μ½λ°±λ€μ μ²λ¦¬νλ νμ΄μ¦λ€.
# ๐ปpm2์ forever, nohup
๋ง๋  node ์๋ฒ๋ฅผ ๋ฐ๋ชฌ ํ๋ก์ธ์ค๋ก ์๋ฒ๋ฅผ ๋์ฐ๊ฒ ๋๋๋ฐ ์ด ๊ณผ์ ์์ nohup, forever, pm2 ๋ฑ ์ฌ๋ฌ ํจํค์ง์ ๋์์ ๋ฐ์์ ์๋ฒ๋ฅผ ๋ฐฑ๊ทธ๋ผ์ด๋๋ก ์๋ฒ๋ฅผ ๋์ฐ๊ฒ ํ  ์ ์์ต๋๋ค.

## pm2
ํ๋ก์ธ์ค ๊ด๋ฆฌ์(process manager)๋ก Node.js๋ก ๋ง๋ค์ด์ง ํ๋ก๊ทธ๋จ์ ํ๋ก์ธ์ค๋ฅผ ํธ๋ฆฌํ๊ฒ ๊ด๋ฆฌํ  ์ ์๋๋ก ๋์์ค๋๋ค.

-  Node.js ๊ธฐ๋ฐ ํ๋ก์ธ์ค ๊ด๋ฆฌ 
-  ๋ฌด์ค๋จ ์๋น์ค
-  ํ๋ก์ธ์ค ๋ชจ๋ํฐ๋ง ๋๊ตฌ

์์ ๊ธฐ๋ฅ์ ์ด์ฉํ  ์ ์์ต๋๋ค.

## forever
forever์ script ํ์ผ์ ๋ฌด์ค๋จ ์คํ(๋ฐฑ๊ทธ๋ผ์ด๋)ํ๋ node.js package์๋๋ค.
forever๋ณด๋ค๋ pm2๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์ด ์ข์ง๋ง, ํ์ฌ ์๋ฒ์์ ์ฌ์ฉํ๋ node์ ๋ฒ์ ์ด v8 ๋ฏธ๋ง์ด๋ผ๋ฉด pm2๋ฅผ ์ง์ํ์ง ์๊ธฐ ๋๋ฌธ์ forever๋ฅผ npm์ผ๋ก ์ค์น๋ฐ์์ ์ฌ์ฉํ๋ฉด ๋  ๊ฒ ๊ฐ์ต๋๋ค.

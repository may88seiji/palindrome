# palindrome
回文の真偽判定

##考え方
.replace(/[\W_]/g, '')で英数字以外の記号を取り除く
.toLowerCase()で小文字に変換して変数iに格納する。
split('').reverse().join('')で分割、逆順、結合をして変数iと比較する。


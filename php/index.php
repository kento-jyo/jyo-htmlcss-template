PHPをまなびます
<?php
//// 変数のルール
echo ("■変数のルール"). "<br>";
$num;
$num = 10;
echo $num;

// $num = 50;
/* echo $num. "<br>"; */

$num = 1;
$num01 = 2;
$num_01 =3;

echo $num. "<br>";
echo $num01. "<br>";
echo $num_01. "<br>";


//// 変数の型
// 整数intと小数float
echo ("■整数intと小数float"). "<br>";
$num01 = 123;
$num02 = 1.23;

echo $num01."<br>";
echo $num02."<br>";
var_dump($num02);
echo "<br>";

// 文字列string
echo ("■文字列string"). "<br>";
$str01 = "Hello World";
echo $str01."<br>";
echo gettype($str01). "<br>";

// ブール型bool（不等号を変えればtrue false切り替えれる）
echo ("■ブール型bool"). "<br>";
$a = 10;
$b = 1;
$bool01 = ($a < $b);

echo $bool01. "<br>";
echo gettype($bool01). "<br>";


//// 演算子
// 基本的な演算子
echo ("■基本的な演算子"). "<br>";
$x = 10;
$y = 2;

echo ($x + $y). "<br>";
echo ($x - $y). "<br>";
echo ($x * $y). "<br>";
echo ($x / $y). "<br>";
echo ($x % $y). "<br>";

// 関係演算子,等価
echo ("■関係演算子,等価"). "<br>";
echo ($x == $y). "<br>";
echo ($x != $y). "<br>";
echo ($x > $y). "<br>";
echo ($x < $y). "<br>";
echo ($x >= $y). "<br>";
echo ($x <= $y). "<br>";

// 論理演算子
echo ("■論理演算子"). "<br>";
echo ($x >= 5 && $y <= 10). "<br>";
echo ($y >= 5 && $x <= 10). "<br>";

echo ($x == 3 || $y == 2). "<br>";
echo ($x == 1 || $y == 1). "<br>";

// 代入演算子
echo ("■代入演算子"). "<br>";
$x = 10;
$y = 12;
$z = 20;

$x += 5;
echo $x. "<br>";
$z += 20;
echo $z. "<br>";
$x -= 3;
echo $x. "<br>";
$x *= 2;
echo $x. "<br>";
$x /= 4;
echo $x. "<br>";
$x %= 3;
echo $x. "<br>";

// インクリメント
$x++;
$y--;

echo ($x). "<br>";
echo ($y). "<br>";
?>
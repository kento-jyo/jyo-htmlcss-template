const userName = "賢人";
let age = 25;

// テンプレートリテラルで表示
console.log(`【初期状態】名前: ${userName}, 年齢: ${age}`);



const user = {
    id: 1,
    name: "賢人",
    hobby: "プログラミング"
};

// 分割代入で hobby だけ抜き出す
const { hobby } = user;
console.log(`趣味は ${hobby} です✨`);

// スプレッド演算子で「新しい趣味」を追加した別オブジェクトを作る（memcpy + α）
const updatedUser = { ...user, hobby: "JavaScriptマスター", rank: "A" };
console.log("更新後のデータ:", updatedUser);



// C言語の関数宣言よりずっと楽ちん！
const introduce = (name, targetHobby) => {
    return `${name}さんの新しい趣味は ${targetHobby} です！`;
};

console.log(introduce(userName, updatedUser.hobby));
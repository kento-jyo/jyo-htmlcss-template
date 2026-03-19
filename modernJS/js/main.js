// main.js

// const,letの違い
const userName = "賢人";
let age = 25;


// テンプレートリテラル
console.log(`【初期状態】名前: ${userName}, 年齢: ${age}`);


// 分割代入
const user = {
    id: 1,
    name: "賢人",
    hobby: "プログラミング"
};

const { id, name, hobby } = user;
console.log(`私の社員idは${id}で、名前は${name}、趣味は ${hobby} です✨`);


// スプレッド演算子
const updatedUser = { ...user, hobby: "JavaScriptマスター", rank: "A" };
console.log("更新後のデータ:", updatedUser);


// アロー関数
const introduce = (name, targetHobby) => {
    return `${name}さんの新しい趣味は ${targetHobby} です！`;
};

console.log(introduce(userName, updatedUser.hobby));
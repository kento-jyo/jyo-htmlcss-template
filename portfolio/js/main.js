// main.js

// 各要素の取得（マスク用のクラスも追加）
const buttonContainer = document.querySelector('.p-button__container');
const hamburger = document.querySelector('.p-hamburger');
const hamburgerIcon = document.querySelector('.p-hamburger__icon');
const xbuttonIcon = document.querySelector('.p-xbutton__icon');
const mask = document.querySelector('.p-hamburger__mask'); // ← マスクを取得！
const body = document.body; // ← bodyを取得！

// メニューの開閉処理を関数にまとめてスッキリさせる
const toggleMenu = () => {
    hamburger.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xbuttonIcon.classList.toggle('active');
    mask.classList.toggle('active'); // マスクの表示・非表示
    body.classList.toggle('is-fixed'); // スクロールロックの切り替え
};

// ボタンをクリックした時
buttonContainer.addEventListener('click', () => {
    toggleMenu();
});

// 背景の幕をクリックした時も閉じるようにする（親切設計！）
mask.addEventListener('click', () => {
    toggleMenu();
});

// --- 以降、スムーススクロールの処理（そのまま） ---

const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = href === "#" || href === "" ? document.documentElement : document.querySelector(href);

    if (target) {
      // メニューが開いている時にリンクを押したら閉じる処理を足すとさらに良いよ！
      if (hamburger.classList.contains('active')) {
          toggleMenu();
      }

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
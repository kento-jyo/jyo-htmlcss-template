// main.js

// ハンバーガーメニューの開閉
const buttonContainer = document.querySelector('.p-button__container');
const hamburger = document.querySelector('.p-hamburger');
const hamburgerIcon = document.querySelector('.p-hamburger__icon');
const xbuttonIcon = document.querySelector('.p-xbutton__icon');

buttonContainer.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xbuttonIcon.classList.toggle('active');
});


// スムーススクロール（現在はcssで「scroll-behavior: smooth;」を入れるだけで実装できるのであまり使われない）
let index1 = document.getElementById('index1');
let index2 = document.getElementById('index2');
let index3 = document.getElementById('index3');
let index4 = document.getElementById('index4');

// 全ての「#」から始まるリンク（ページ内リンク）を取得
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    console.log(e);
    // 1. デフォルトの挙動（一瞬で飛ぶ）をキャンセル
    e.preventDefault();

    // 2. リンク先のIDを取得（例: #index1）
    const href = link.getAttribute('href');
    const target = document.querySelector(href);

    // 3. 目的地の要素が存在する場合のみ実行
    if (target) {
      // 4. 要素の位置を取得（target.getBoundingClientRect().topはクリックした場所からスクロール先の距離、window.pageYOffsetはページの上端から現在のスクロール位置までの距離）
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

      // 5. 画面を目的地まで滑らかに移動させる
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

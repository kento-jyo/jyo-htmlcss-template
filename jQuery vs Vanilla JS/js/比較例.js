// main.js

//// 1.プラグインが多い場合
// jQueryの場合
$(function () {
    // ① スライダーを起動（自動再生、矢印あり、ドットナビあり）
    // Vanilla JSでこれをゼロから書くと数百行かかるけど、jQueryならこれだけ！
    $('.js-slider').slick({
        autoplay: true,
        dots: true,
        arrows: true
    });

    // ② ページ内スムーススクロール
    // jQueryなら「全部のリンク」に対して一気に設定できる
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500); // 0.5秒でスルスル動く
        }
    });
});


// Vanilla JSの場合
document.addEventListener('DOMContentLoaded', () => {
    // ① スライダーを起動（Splide.jsなどのVanilla用ライブラリを使用）
    // jQueryのslickに代わる「Splide」などを使うのが一般的。
    // ライブラリごとに書き方が違うので、都度ドキュメントを読む必要があるよ。
    const splide = new Splide('.js-slider', {
        type: 'loop',
        autoplay: true,
        pagination: true, // slickのdotsにあたる
        arrows: true,
    });
    splide.mount();

    // ② ページ内スムーススクロール
    // jQueryなら1行だった「全リンクへの適用」を、ループで回して設定する。
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // 移動先のIDを取得
            const href = link.getAttribute('href');
            const target = document.querySelector(href === "#" || href === "" ? 'html' : href);

            if (target) {
                // 目的地までの距離を計算（さっき勉強した足し算！）
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

                // 滑らかに移動
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});



//// 2.CSS無しで簡易アニメーションだけを作る場合
// jQueryの場合
$(function () {
    // ボタンを押したら、ふわっと出して、3秒後にスルスル消す
    $('.js-show-msg').on('click', function () {
        $('.js-target-box')
            .fadeIn(500)         // 0.5秒でふわっと表示
            .delay(2000)         // 2秒待機
            .slideUp(500);       // 0.5秒でスルスル上に消える
    });
});


// Vanilla JSの場合
const btn = document.querySelector('.js-show-msg');
const box = document.querySelector('.js-target-box');

btn.addEventListener('click', () => {
    box.classList.add('is-active');

    // 2.5秒後に消すクラスをつける（管理が少し面倒）
    setTimeout(() => {
        box.classList.remove('is-active');
    }, 2500);
});
/*
CSS側：アニメーションのルールをこっちに書く必要がある
.js-target-box {
  opacity: 0;
  transition: opacity 0.5s;
}
.js-target-box.is-active {
  opacity: 1;
}
*/



///////////// メモ /////////////
//// 表現がほとんど同じもの
// jQury
var $elem = $(".someClass")
// Vanilla JS
var elem = document.querySelector(".someClass");

// jQury
$elem.prepend($otherElem)
$elem.before($otherElem)
$elem.replaceWith($otherElem)
$elem.closest("div")

// Vanilla JS
elem.prepend(otherElem);
elem.before(otherElem);
elem.replaceWith(otherElem);
$elem.closest("div")


//// jQueryの方が容易になるもの
// jQury
$elem.fadeIn()



// Vanilla JS
var elem = document.querySelector(".someClass");
elem.style.display = "block";
requestAnimationFrame(() => elem.style.opacity = 1);

//// jQueryを使用した方が良い場面
// 「jQueryプラグインの資産」があるかどうか
// ビルドツールを使わないクイックプロトタイピング
// さまざまなブラウザコンテキストでの複雑なDOM操作
// CSSキーフレームのない単純なアニメーション
// HTMLサーバー応答を使用した単純なAJAX
// 保守が必要なく、爆速でコーディングしたい場合

//// jQueryを使用しない方が良い場面
// 最新のコンポーネント駆動型フロントエンドの構築
// セレクター、AJAX、イベント、アニメーションなど、jQuery のかつてのキラー機能を実装する場合
// 最新のブラウザのみをターゲットにする
// すでに最新のツールを使用しているプロジェクト
// 保守が必要な場合（将来的にはVanilla JSが一般的になるため）
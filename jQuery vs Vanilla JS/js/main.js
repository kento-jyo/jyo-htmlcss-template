// main.js

//// 1.プラグインが多い場合
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


//// 2.CSS無しで簡易アニメーションだけを作る場合
$(function () {
    // ボタンを押したら、ふわっと出して、3秒後にスルスル消す
    $('.js-show-msg').on('click', function () {
        $('.js-target-box')
            .fadeIn(500)         // 0.5秒でふわっと表示
            .delay(2000)         // 2秒待機
            .slideUp(500);       // 0.5秒でスルスル上に消える
    });
});

const modal = document.querySelector('.js-modal'); //querySelectorは指定した要素を最初の一つだけ取得するメソッドです
const modalOverLay = document.querySelector('.js-modal-overLay');
const modalContents = document.querySelector('.js-modal-contents');

const modalOpen = document.querySelectorAll('.js-modal-open');//querySelectorAllは指定した要素を全て配列で取得するメソッドです
const modalClose = document.querySelectorAll('.js-modal-close');
const body = document.body;//bodyを取得
const accordionHeaders = document.querySelectorAll(".js-accordion-item");
const accordionContents = document.querySelectorAll(".js-accordion-contents");

const cultureNums = document.querySelectorAll('.culture-num');
const cultureEns = document.querySelectorAll('.culture-en');
const cultureImgs = document.querySelectorAll('.culture-img1, .culture-img2, .culture-img3');

//forEachは配列の要素を一つずつ取り出して処理を行うメソッドです
modalOpen.forEach(item => {//item（名前はなんでも良い）は引数と呼ばれるもので、配列の要素を一つずつ取り出して処理を行う際に使います
    
    item.addEventListener("click", ()=>{//addEventListernerは指定した要素にイベントを設定するメソッドです。今回はclickイベントをつけています
    
        const getSrc = item.getAttribute("src"); //get Attributeは指定した属性の値を取得するメソッドです。今回はitemのsrc属性の値を取得しています
       
        modalContents.src = getSrc;//modalContentsのsrc属性にgetSrcの値を代入しています。
        
        modal.classList.add('is-show');//classList.addは指定したクラスを追加するメソッドです。今回はmodalにis−showクラスを追加しています。
        
        body.style.overflow = "hidden";//ページスクロールを無効化
    });
});
//overLayをクリックしたら閉じる
modalOverLay.addEventListener("click", ()=> {//addEventListernerは指定した要素にイベントを設定するメソッドです。今回はclickイベントをつけています
    modal.classList.remove("is-show");//classList.removeは指定したクラスを削除するメソッドです。前でmodalに追加したis−showクラスを削除しています。
    body.style.overflow = ("");//前に設定したhiddenのページスクロールを無効化から有効へ
});
//×をクリックしたら閉じる
modalClose.forEach(button => {//配列の要素を一つずつ取り出して処理を行う
    button.addEventListener("click", () => {//addEventListernerは指定した要素にイベントを設定するメソッドです。今回はclickイベントをつけています
        modal.classList.remove("is-show"); // クラスを削除して非表示にする
        body.style.overflow = ("");//前に設定したhiddenのページスクロールを無効化から有効へ
    });
});

//クリックしたらaccordion
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        // 開閉の切り替え
        content.classList.toggle("is-show");
    });
});

// クリックイベントを追加　ABOUTO US画像の切り替え
cultureNums.forEach((num, index) => {
    num.addEventListener("click", () => {
        // すべての画像を非表示にする
        cultureImgs.forEach(img => img.classList.remove('is-show'));

        // クリックされた番号に対応する画像を表示
        if (index === 0) {
            document.querySelector('.culture-img1').classList.add('is-show');
        } else if (index === 1) {
            document.querySelector('.culture-img2').classList.add('is-show');
        } else if (index === 2) {
            document.querySelector('.culture-img3').classList.add('is-show');
        }
    });
});

// クリックイベントを追加 ABOUTO USの文字の色の変化
cultureNums.forEach((num, index) => {
    num.addEventListener("click", () => {
        // すべての要素の色をリセット
        cultureNums.forEach(num => num.classList.remove('is-show'));
        cultureEns.forEach(en => en.classList.remove('is-show'));

        // クリックした番号に対応する要素の色を変更
        cultureNums[index].classList.add('is-show');
        cultureEns[index].classList.add('is-show');
    });
});
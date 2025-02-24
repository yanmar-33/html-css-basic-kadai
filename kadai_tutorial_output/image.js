const modal = document.querySelector('.js-modal'); //querySelectorは指定した要素を最初の一つだけ取得するメソッドです
const modalOverLay = document.querySelector('.js-modal-overLay');
const modalContents = document.querySelector('.js-modal-contents');
const modalOpen = document.querySelectorAll('.js-modal-open');//querySelectorAllは指定した要素を全て配列で取得するメソッドです

//forEachは配列の要素を一つずつ取り出して処理を行うメソッドです
modalOpen.forEach(item => {
    //item（名前はなんでも良い）は引数と呼ばれるもので、配列の要素を一つずつ取り出して処理を行う際に使います
    item.addEventListener("click", ()=>{
    //addEventListernerは指定した要素にイベントを設定するメソッドです。今回はclickイベントをつけています
        const getSrc = item.getAttribute("src");
        //get Attributeは指定した属性の値を取得するメソッドです。今回はitemのsrc属性の値を取得しています
        modalContents.src = getSrc;
        //modalContentsのsrc属性にgetSrcの値を代入しています。
        modal.classList.add('is-show');
        //classList.addは指定したクラスを追加するメソッドです。今回はmodalにis−showクラスを追加しています。
    })
})
//overLayをクリックしたら閉じる
modalOverLay.addEventListener("click", ()=> {
    modal.classList.remove("is-show");
});
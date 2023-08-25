const mySwiper = new Swiper ('.swiper', {
  parallax: true, //パララックスにするか
  speed: 1500,
  autoplay: { //自動再生する
     delay: 5000, //次のスライドに切り替わるまでの時間
  },
  allowTouchMove: true, //フリック可能にするか
  loop: true, //最後に達したら先頭に戻る
  centeredSlides : true, // アクティブなスライドをセンターにするか
});

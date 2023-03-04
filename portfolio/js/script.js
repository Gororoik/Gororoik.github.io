function gorZoom () {
     document.querySelector('.gor__img').addEventListener('load', function(event) {
        document.querySelector('.gor__img').classList.toggle('gorzoom');
     })
};

gorZoom();

function scroll () {
   if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      document.querySelector('.scroll').classList.add('scroll-show');
   } else {
      document.querySelector('.scroll').classList.remove('scroll-show');
   }
}

document.addEventListener('scroll', (event) => {
   scroll();
})

document.querySelector('.lan').addEventListener('click', (event) => {
   event.langClicked = true;
   if (document.querySelector('.langs').classList.contains('langs-show')) {
      document.querySelector('.langs').classList.remove('langs-show');
      document.querySelector('.langs').classList.add('langs-unshow');
   } else if (document.querySelector('.langs').classList.contains('langs-unshow')) {
      document.querySelector('.langs').classList.remove('langs-unshow');
      document.querySelector('.langs').classList.add('langs-show');
   } else if (!document.querySelector('.langs').classList.contains('langs-unshow') && !document.querySelector('.langs').classList.contains('langs-show')) {
      document.querySelector('.langs').classList.add('langs-show');
   }
});

document.body.addEventListener('click', (event) => {
   if (event.langClicked || event.target.classList.contains('lang') || event.target.classList.contains('a')) return;
   document.querySelector('.langs').classList.remove('langs-show');
   document.querySelector('.langs').classList.add('langs-unshow');
})

let menuBtnClose = document.querySelector('.menu-close');
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function() {
   menuBtn.classList.toggle('menu-btn_unshow')
   menu.classList.toggle('active');
   menuBtnClose.classList.toggle('menu-close_show');
});
menuBtnClose.addEventListener('click', function() {
   menuBtn.classList.toggle('menu-btn_unshow')
   menu.classList.toggle('active');
   menuBtnClose.classList.toggle('menu-close_show');
});


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

// scroll();

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

   // if (document.querySelector('.langs').classList.contains('langs-show') && document.querySelector('.langs').classList.contains('langs-unshow')) {
   //    document.querySelector('.langs').classList.remove('langs-show');
   // };
   // if (document.querySelector('.langs').classList.contains('langs-unshow')) {
   //    document.querySelector('.langs').classList.add('langs-show')
   // }
   // document.querySelector('.langs').classList.toggle('langs-show');
   console.log('smthing');

});

document.body.addEventListener('click', (event) => {
   if (event.langClicked || event.target.classList.contains('lang') || event.target.classList.contains('a')) return;
   document.querySelector('.langs').classList.remove('langs-show');
   document.querySelector('.langs').classList.add('langs-unshow');
})

// function yellZoom () {
//     document.querySelector('.yellow-bg svg').classList.toggle('gorzoom');
// };

// // setTimeout((gorzoom()), 2000)
// window.onload(setTimeout((gorZoom()), 2000));
// window.onload(setTimeout((yellZoom()), 2000));

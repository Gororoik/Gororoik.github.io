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

// function yellZoom () {
//     document.querySelector('.yellow-bg svg').classList.toggle('gorzoom');
// };

// // setTimeout((gorzoom()), 2000)
// window.onload(setTimeout((gorZoom()), 2000));
// window.onload(setTimeout((yellZoom()), 2000));

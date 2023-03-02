function gorZoom () {
     document.querySelector('.gor__img').addEventListener('load', function(event) {
        document.querySelector('.gor__img').classList.toggle('gorzoom');
     })
};

gorZoom();

// function yellZoom () {
//     document.querySelector('.yellow-bg svg').classList.toggle('gorzoom');
// };

// // setTimeout((gorzoom()), 2000)
// window.onload(setTimeout((gorZoom()), 2000));
// window.onload(setTimeout((yellZoom()), 2000));

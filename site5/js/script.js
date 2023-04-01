// const scale = D5kbdaRDyXxzPGcbRUxKtmB9aDk2JLBALR

// console.log(document.querySelectorAll('scal'))

window.addEventListener('load', (event) => {
    document.getElementById('navbar').classList.toggle('blur');
    document.getElementById('navbar').classList.toggle('opacity');
    setTimeout(() => document.querySelector('.span1').classList.toggle('span1-show'), 500);
    setTimeout(() => document.querySelector('.span2').classList.toggle('span2-show'), 1200);
    setTimeout(() => document.querySelector('.span3').classList.toggle('span3-show'), 500);
    document.querySelector('.span2').classList.toggle('glow');
    document.querySelector('.main__bg').classList.toggle('blur');
    document.querySelectorAll('.scale').forEach((el) => {
        el.classList.toggle('scale');
    });
    // console.log('jajem gagulikin');
});


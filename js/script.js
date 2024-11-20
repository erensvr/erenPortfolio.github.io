//skills
const htmlBar = document.querySelector('.bar-html');
const cssBar = document.querySelector('.bar-css');
const jsBar = document.querySelector('.bar-js');
const cBar = document.querySelector('.bar-c');
const cSharpBar = document.querySelector('.bar-csharp');
const sqlBar = document.querySelector('.bar-sql');

var t1 = new TimelineLite();

t1.fromTo(htmlBar, 1.5, {width: `calc(0% - 6px)`}, {width: `calc(100% - 6px)`, ease: Power4.easeOut})
  .fromTo(cssBar, 1.5, {width: `calc(0% - 6px)`}, {width: `calc(100% - 6px)`, ease: Power4.easeOut})
  .fromTo(jsBar, 1.5, {width: `calc(0% - 6px)`}, {width: `calc(45% - 6px)`, ease: Power4.easeOut})
  .fromTo(cBar, 1.5, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
  .fromTo(cSharpBar, 1.5, {width: `calc(0% - 6px)`}, {width: `calc(45% - 6px)`, ease: Power4.easeOut})
  .fromTo(sqlBar, 1.5, {width: `calc(0% - 6px)`}, {width: `calc(35% - 6px)`, ease: Power4.easeOut});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller);
//works
const showRequiredCategory = (event) => {
    const getId = event.id;
    const links = document.querySelectorAll('.work-category button');

    links.forEach(link => link.classList.remove('active'));
    event.classList.add('active');

    const getCategory = document.querySelector(`.category-${getId}`);
    const categories = document.querySelectorAll('div[class^="category-"]');
    categories.forEach(category => {
        category.classList.remove('showCategory');
        category.classList.add('hideCategory');
    });
    getCategory.classList.remove('hideCategory');
    getCategory.classList.add('showCategory');
};

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); // 'show' sınıfını ekler veya kaldırır
}

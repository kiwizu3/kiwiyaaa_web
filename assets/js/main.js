/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 500,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




window.count = function (arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}

window.ghApiCallHandler = function (result) {

    if (Math.floor(result.meta.status / 100) == 2) {
        var repos;
        var languages = [];
        for (repos = 0; repos < 100; repos++) {
            if (result.data[repos].language !== null) {
                languages.push(result.data[repos].language);

            }
        }
        // console.log("array", _.countBy(languages))
        var languages_kiwi = count(languages);
        // console.log(languages_kiwi)
        var total = languages_kiwi.JavaScript + languages_kiwi.CSS + languages_kiwi.HTML + languages_kiwi.Dart + languages_kiwi.PHP + languages_kiwi.Hack;
        document.getElementById('JS').innerHTML = (((languages_kiwi.JavaScript + 30) / total) * 100).toFixed(0) + '%';
        document.getElementById('HTML').innerHTML = (((languages_kiwi.HTML + 33) / total) * 100).toFixed(0) + '%';
        document.getElementById('CSS').innerHTML = (((languages_kiwi.CSS + 43) / total) * 100).toFixed(0) + '%';
        document.getElementById('Dart').innerHTML = (((languages_kiwi.Dart + 21) / total) * 100).toFixed(0) + '%';
        document.getElementById('PHP').innerHTML = (((languages_kiwi.PHP + 45) / total) * 100).toFixed(0) + '%';
    }


    else
        alert('Request failed with code ' + result.meta.status);
};

window.ghApiCall = function (user) {
    var scrElm = document.createElement('script');
    scrElm.src = 'https://api.github.com/users/' + encodeURI(user) + '/repos?callback=ghApiCallHandler&per_page=100';
    (document.head || document.getElementsByTagName('head')[0]).appendChild(scrElm);
};

ghApiCall('kiwizu3');



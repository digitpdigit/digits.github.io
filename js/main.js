var s = skrollr.init();
///TIMELINE ANIMATIONS

// Variables
var _picRight   = "#pic-right";
var _picLeft    = "#pic-left";
var _window     = "#window";
var _footer     = ".footer";
var _logo       = ".logo";
var _ham        = ".hamburger-btn";
var _home       = ".home";
var _contents   = ".content";
var scroll_height   = window.innerHeight;
var scroll_width    = window.innerWidth;

// Uniting Pics
function unite() {
    var tl = gsap.timeline();
    tl.from(_picLeft, {duration: 1, x: '-20px', y: '-20px', opacity: 0});
    tl.from(_picRight, {duration: 1, x: '20px', y: '20px', opacity: 0}, 0);
    tl.from(_window, {duration: .8, x:-20, opacity: 0});
    
    return tl;
}
// Content Animation
function contentEnter(){
    var tl = gsap.timeline();
    tl.fromTo(_contents, {scaleX:0, opacity:0}, {scaleX:1, duration:.7, opacity:1}, 3);
    return tl;
    
}

// Starting position
function moving(){
    var tl = gsap.timeline();
    tl.fromTo(_logo,{duration:0, opacity:0}, {duration: 0, y:scroll_height/2.5, scaleX:3.5, scaleY:3.5, opacity:1}); 
    unite();
    if (scroll_width < 1023){
        tl.to(_logo, {duration: 1, y:(0), scaleX:1.2, scaleY:1.2, opacity:1}, 2)
        console.log('mobile');
    }
    if (scroll_width > 1023){
        tl.to(_logo, {duration: 1, y:(25), scaleX:.8, scaleY:.8, opacity:1}, 2)
        console.log('desktop');
    }  
    contentEnter();
    return tl;
}

// Main Entering Animation
function enter(){
    moving();
}
console.log(scroll_height);


// MEDIA QUERIES
const master = gsap.timeline();
master.add(enter())

const mediaQuery = window.matchMedia('(max-width:1023px)');

function onChangeMedia(e){
    let tl = gsap.timeline()
    if (e.matches){
        tl.from(_ham, {duration:1, opacity:0}, '>1');
        tl.to(_logo, {y:0, duration:.5, scaleX:1.2, scaleY:1.2}, '>2')
        document.getElementById("footer").style.display = "none";
        document.querySelector(".container").removeAttribute('data-0')
        document.querySelector(".container").removeAttribute('data-800')
    }
    else{
        tl.fromTo(_footer, {opacity:0}, {opacity:1, duration:1, display:'flex'}, '>1')
        tl.to(_logo, {y:25, duration:.5, scaleX:.8, scaleY:.8}, '>2')
        document.querySelector(".container").setAttribute('data-0', 'transform:translateX(0%);')
        document.querySelector(".container").setAttribute('data-800', 'transform:translateX(-66.6%);')
        console.log('desktop');
    }

};
onChangeMedia(mediaQuery);
mediaQuery.addListener(onChangeMedia);

/// Mobile show footers
let ham_active = 0;
function showFooter(){
    let tl = gsap.timeline();

    if (ham_active === 0){
    tl.fromTo(_footer,{opacity:0},{opacity:1,display:'flex',duration:2});
    ham_active += 1;
    }else{
    tl.to(_footer,{opacity:0, display:'none', duration:2});
    ham_active -= 1;
    }
}

/// SCROLLING TO SECTIONS
const links = document.querySelectorAll(".footer a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
 
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

window.addEventListener('scroll', () =>{
    const scrolledX = window.pageXOffset;
    const scrolledY = window.pageYOffset;
    console.log(scrolledY, scrolledX);
    
})

function scrollToSections(y_offset){
    if (mediaQuery.matches){
        
    }else{
        window.scrollTo({
            top: y_offset,
            behavior: "smooth"

        })
    }
}


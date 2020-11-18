/// SCROLLING TO SECTIONS
const links = document.querySelectorAll(".nav-menu a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
 
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// MEDIA QUERIES
// Variables
const nav_menu  = '.nav-menu';
const mediaQuery = window.matchMedia('(max-width:1023px)');

function onChangeMedia(e){
    
    if (e.matches){
       // mobile
       document.querySelector('.nav-menu').style.display = 'none';       
    }
    else{
        document.querySelector('.nav-menu').style.display = 'flex';        
        document.querySelector('.nav-menu').style.opacity = 1;
    }

};
onChangeMedia(mediaQuery);
mediaQuery.addListener(onChangeMedia);

/// Onclick
var ham_active  = 0
function showMenu(){
    let tl = gsap.timeline();

    if (ham_active === 0){
        tl.fromTo(nav_menu, {opacity:0}, {opacity:0.99, duration:1, display:'flex'})
        ham_active += 1;
    }else{
        tl.to(nav_menu,{opacity:0, display:'none', duration:1});
        ham_active -= 1;
    }
}


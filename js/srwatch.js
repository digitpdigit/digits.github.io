/// SCROLLING TO SECTIONS
const links = document.querySelectorAll(".menu a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
 
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scrollBy({
    top: offsetTop,
    behavior: "smooth"
  });
}

// MEDIA QUERIES
// Variables
const menu  = '.menu';
const mediaQuery = window.matchMedia('(max-width:1023px)');

function onChangeMedia(e){
    
    if (e.matches){
       // mobile
       document.querySelector(menu).style.display = 'none';       
    }
    else{
        document.querySelector(menu).style.display = 'flex';        
        document.querySelector(menu).style.opacity = 1;
    }

};
onChangeMedia(mediaQuery);
mediaQuery.addListener(onChangeMedia);

/// Onclick
var ham_active  = 0
function showMenu(){
    let tl = gsap.timeline();

    if (ham_active === 0){
        tl.fromTo(menu, {opacity:0}, {opacity:0.99, duration:1, display:'flex'})
        ham_active += 1;
    }else{
        tl.to(menu,{opacity:0, display:'none', duration:1});
        ham_active -= 1;
    }
}


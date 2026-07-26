/*==================================
Sticky Navbar
==================================*/

window.addEventListener("scroll",function(){

    const navbar=document.querySelector(".custom-navbar");

    if(window.scrollY>80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


/*==================================
Active Menu
==================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*==================================
AOS
==================================*/

AOS.init({

duration:900,

once:true

});
/*==================================
Animated Counter
==================================*/

const counters = document.querySelectorAll(".counter");

const speed = 100;

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.getAttribute("data-target");

const updateCounter=()=>{

const count=+counter.innerText;

const increment=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+increment;

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

observer.unobserve(counter);

}

});

},

{

threshold:.6

});

counters.forEach(counter=>{

observer.observe(counter);

});
/*==================================
Gallery Swiper
==================================*/

new Swiper(".gallerySwiper",{

    loop:true,

    speed:700,

    spaceBetween:25,

    autoplay:{

        delay:3000,

        disableOnInteraction:false

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev"

    },

    breakpoints:{

        0:{

            slidesPerView:1

        },

        576:{

            slidesPerView:2

        },

        992:{

            slidesPerView:3

        },

        1200:{

            slidesPerView:4

        }

    }

});

/*==================================
Testimonials Swiper
==================================*/

new Swiper(".testimonialSwiper",{

    loop:true,

    speed:700,

    spaceBetween:30,

    autoplay:{

        delay:5000,

        disableOnInteraction:false

    },

    pagination:{

        el:".testimonialSwiper .swiper-pagination",

        clickable:true

    },

    breakpoints:{

        0:{

            slidesPerView:1

        },

        992:{

            slidesPerView:2

        }

    }

});

/*==================================
Back To Top
==================================*/

const topBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
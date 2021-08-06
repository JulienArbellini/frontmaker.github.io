// console.log('test');

const navSlide =() => {
    // alert('coucou');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks =  document.querySelectorAll('.nav-links li');
    

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = '';
            }
            else{
    
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

    
}

const parallax = () =>{
    // alert('coucou');
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();

    timeline
    .to(".rock", 10, { y: -300 })
    .to(".girl", 10, { y: -200 }, "-=10")
    .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
    .to(".content", 10, { top: -100 }, "-=10")
    .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 5 })
    .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 5 });

    let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "50%",
    triggerHook: 0,
    })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);
    }

const app = () => {
    navSlide();
    parallax();
}

app();


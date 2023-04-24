gsap.registerPlugin(ScrollToPlugin);

const videoPage_1 = document.querySelector("#video-page-1");
const video_2 = document.querySelector("#video-2");

//영상 첫 그라데이션 
gsap.fromTo(".video-box",
  {opacity:0},
  {
    scrollTrigger:{
      trigger:".video-box",
      toggleActions: "play none resume none",
      start:"0% top",
      end:"20% top",
      scrub: true,

      // markers:true,    //@@@
      id:"show"
    },
    opacity:1
  });

  //left & header show up
gsap.fromTo(".left-bar",
{opacity:0},
{
  scrollTrigger:{
    trigger:".video-box",
    toggleActions: "play none resume none",
    start:"0% top",
    end:"20% top",
    scrub: true,

    // markers:true,    //@@@
    id:"show"
  },
  opacity:1
});
gsap.fromTo(".anim-header",
{opacity:0},
{
  scrollTrigger:{
    trigger:".video-box",
    toggleActions: "play none resume none",
    start:"0% top",
    end:"20% top",
    scrub: true,

    // markers:true,    //@@@
    id:"show"
  },
  opacity:1
});

  gsap.fromTo(".group-1",
  {y:"50vh", opacity:0},
  {
    scrollTrigger:{
      trigger:".video-page-1",
      toggleActions: "play none resume none",
       
      start:"0 top",
      end:"50% top",
      scrub: true,
      // markers:true,    //@@@
      id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });

  //첫 영상 전체
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger:".video-page-1",
      start: "top top",
      end: "380% top",
      scrub: true,
      pin: ".video-box",
      // markers: true,    //@@@
    id:"anim-1"
    },
  });


  gsap.fromTo(".group-1",
  {y:0,opacity:1},
  {
    scrollTrigger:{
      trigger:".video-page-1",
      toggleActions: "play none resume none",
      start:"330% top",
      end:"360% top",
      scrub: true,

      // markers:true,    //@@@
      id:"t-up2"

    },
    y:"-50vh",
    opacity:0,

    duration: 50,
  });


//------------------------------------black-box------------------------------------
  

  // left swich
  gsap.to(".list-first",
  {
    scrollTrigger:{
      trigger:".black-box",
      toggleActions: "play none resume none",
      start:"0 top",
      end:"20% top",
      scrub: true,
      ease: true,
      toggleClass: "off",

      // markers:true,    //@@@
      id:"t-up"
    },
    y:"-45vh",
    opacity:0.5,
    transformOrigin: '0 50%',
    scale:0.7,
    duration: 50,
    
  });
  gsap.to(".list-rest",
  {
    scrollTrigger:{
      trigger:".black-box",
      toggleActions: "play none resume none",
      scrub: true,
      ease: true,

      start: "top top",
      end: "20% top",
      
      toggleClass: "on",

      // markers:true,    //@@@
      id:"t2-up"
    },
    y:"-35vh",
    opacity:1,
    transformOrigin: '0 50%',
    scale:1.5,
    duration: 50,
  });


  gsap.fromTo(".black-box",
  {
    opacity:0
  },
  {
    scrollTrigger:{
      trigger:".black-box",
      toggleActions: "play none resume none",
      start:"0% top",
      end:"-1% top",
      scrub: true,
      // markers:true,    //@@@
      id:"show"
    },
    opacity:1
  });
  gsap.fromTo(".group-2",
  {y:"50vh", opacity:0},
  {
    scrollTrigger:{
      trigger:".black-box",
      toggleActions: "play none resume none",
       
      start:"5% top",
      end:"40% top",
      scrub: true,
      // markers:true,    //@@@
      // id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });
  
let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".black-box",
      start: "top top",
      end: "450% top",
      scrub: true,
      pin: ".black-box",
      // markers: true,    //@@@
    }
  });


  videoPage_1.onloadedmetadata = function () {
    tl1.to(videoPage_1, { currentTime: videoPage_1.duration });
  };
  video_2.onloadedmetadata = function () {
    tl2.to(video_2, { currentTime: video_2.duration });
  };

  let navbar = document.querySelector(".anim-main-header");

  let toBlack_2 = gsap.to(".logo .img-switch", {
    paused: true,
    attr: { src: "img/logo/logo_Smartcube.png" },
  });
  let toBlack_3 = gsap.to(".header-icon .img-switch", {
    paused: true,
    attr: { src: "img/logo/logo_language.png" } 
  });

  navbar.addEventListener("mouseenter", () => toBlack_2.play());
  navbar.addEventListener("mouseenter", () => toBlack_3.play());

  navbar.addEventListener("mouseleave", () => toBlack_2.reverse());
  navbar.addEventListener("mouseleave", () => toBlack_3.reverse());

  document.querySelector(".list-first").addEventListener("click", function() {
    gsap.to(window, { duration: 0.75, scrollTo: {y:innerHeight*2-(innerHeight*0.1)}});
  });
  document.querySelector(".list-rest").addEventListener("click", function() {
    gsap.to(window, { duration: 0.75, scrollTo: {y:innerHeight*8-(innerHeight*0.3)}});
  });
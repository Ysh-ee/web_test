const p1_1 = document.querySelector("#p1-1");
const p1_2 = document.querySelector("#p1-2");
const p1_3 = document.querySelector("#p1-3");
const p1_scan = document.querySelector("#p1_scan");
const p1_5 = document.querySelector("#p1-5");

//left set pos
gsap.to(".n2",
{
  scrollTrigger:{
    toggleActions: "play none resume none",
    start:"0 top",
    end:"10% top",
    // markers:true,    //@@@
    id:"setPos"
  },
  y:"-82%",
  opacity:0.5,
  transformOrigin: '0 50%',
  
});
gsap.to(".n3",
{
  scrollTrigger:{
    toggleActions: "play none resume none",
    start:"0 top",
    end:"10% top",
    // markers:true,    //@@@
    id:"setPos"
  },
  y:"-86%",
  opacity:0.5,
  transformOrigin: '0 50%',
});
gsap.to(".n4",
{
  scrollTrigger:{
    toggleActions: "play none resume none",
    start:"0 top",
    end:"10% top",
    // markers:true,    //@@@
    id:"setPos"
  },
  y:"-92%",
  opacity:0.5,
  transformOrigin: '0 50%',
});
gsap.to(".n5",
{
  scrollTrigger:{
    toggleActions: "play none resume none",
    start:"0 top",
    end:"10% top",
    // markers:true,    //@@@
    id:"setPos"
  },
  y:"-96%",
  opacity:0.5,
  transformOrigin: '0 50%',
});
//left & header show up
gsap.fromTo(".left-bar",
{opacity:0},
{
  scrollTrigger:{
    trigger:".video-box-1",
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
    trigger:".video-box-1",
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
      trigger:"#p1-1",
      toggleActions: "play none resume none",
      start:"20% top",
      end:"50% top",
      scrub: true,

      // markers:true,    //@@@
      id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger:"#p1-1",
      start: "top top",
      end: "350% top",
      // end: "200% top",
      scrub: true,
      pin: ".video-box-1",
      // markers: true,    //@@@
      id:"anim-1"
    },
  });

  gsap.fromTo(".group-1",
  {y:0,opacity:1},
  {
    scrollTrigger:{
      trigger:"#p1-1",
      toggleActions: "play none resume none",
      start:"320% top",
      end:"350% top",
      // start:"180% top",
      // end:"200% top",
      scrub: true,

      // markers:true,    //@@@
      id:"t-up2"

    },
    y:"-50vh",
    opacity:0,

    duration: 50,
  });

//------------------------------------222222------------------------------------

// left mid-up1
gsap.to(".list-first",
{
  scrollTrigger:{
    trigger:".video-box-2",
    toggleActions: "play none resume none",
    start:"0 top",
    end:"20% top",
    scrub: true,
    ease: true,

    // markers:true,    //@@@
    id:"mid-up1"
  },
  y:"-45vh",
  opacity:0.5,
  transformOrigin: '0 50%',
  scale:0.7,
  duration: 50,
});
//left bot-mid2
gsap.fromTo(".n2",
{y:"-82%", opacity:0.5},
  {
    scrollTrigger:{
      trigger:".video-box-2",
      toggleActions: "play none resume none",
      scrub: true,
      ease: true,

      start: "top top",
      end: "20% top",
      
      // markers:true,    //@@@
      id:"bot-mid2"
    },
    y:"-25vh",
    opacity:1,
    transformOrigin: '0 50%',
    scale:1.5,
    duration: 50,
  });

  

gsap.fromTo(".video-box-2",
  {
    opacity:0
  },
  {
    scrollTrigger:{
      trigger:".video-box-2",
      toggleActions: "play none resume none",
      start:"0% top",
      end:"1% top",
      scrub: true,

      // markers:true,    //@@@
      id:"show2"
    },
    opacity:1
  });

  gsap.fromTo(".group-2",
  {y:"50vh", opacity:0},
  {
    scrollTrigger:{
      trigger:".video-box-2",
      toggleActions: "play none resume none",
      start:"0 top",
      end:"40% top",
      // end:"20% top",
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
      trigger: ".video-box-2",
      start: "top top",
      end: "350% top",
      // end: "200% top",
      scrub: true,
      pin: ".video-box-2",
      // markers: true,    //@@@
    //   duration:5000
    }
  });

  gsap.fromTo(".group-2",
  {y:0,opacity:1},
  {
    scrollTrigger:{
      trigger:"#p1-2",
      toggleActions: "play none resume none",
      start:"320% top",
      end:"350% top",
      // start:"180% top",
      // end:"200% top",
      scrub: true,

      // markers:true,    //@@@
      id:"t-up2"

    },
    y:"-50vh",
    opacity:0,

    duration: 50,
  });
  
  //left 2 mid-up
  gsap.fromTo(".n2",
  {y:"-25vh", opacity:1},
  {
    scrollTrigger:{
      trigger:".video-box-2",
      toggleActions: "play none resume none",
      scrub: true,
      ease: true,

      start: "80 top",
      end: "90% top",
      
      // markers:true,    //@@@
      id:"mid-up2"
    },
    y:"-66vh",
    opacity:0.5,
    transformOrigin: '0 50%',
    scale:1,
    duration: 50,
  });
  //left3 bot-mid
  gsap.fromTo(".n3",
  {y:"-86%", opacity:0.5},
  {
    scrollTrigger:{
      trigger:".video-box-2",
      toggleActions: "play none resume none",
      scrub: true,
      ease: true,

      start: "80 top",
      end: "90% top",
      
      // markers:true,    //@@@
      id:"bot-mid3"
    },
    y:"-29vh",
    opacity:1,
    transformOrigin: '0 50%',
    scale:1.5,
    duration: 50,
  });

  //------------------------------------33333------------------------------------

  // left 3 mid-up
  gsap.fromTo(".n3",
  {y:"-29vh", opacity:1},
  {
    scrollTrigger:{
      trigger:".video-box-3",
      toggleActions: "play none resume none",
      start:"350% top",
      end:"370% top",
      scrub: true,
      ease: true,
  
      // markers:true,    //@@@
      id:"mid-up3"
    },
    y:"-66vh",
    opacity:0.5,
    transformOrigin: '0 50%',
    scale:1,
    duration: 50,
  });
//left 4 bot-mid
gsap.fromTo(".n4",
{y:"-92%", opacity:0.5},
  {
    scrollTrigger:{
      trigger:".video-box-3",
      toggleActions: "play none resume none",
      scrub: true,
      ease: true,

      start:"350% top",
      end:"370% top",
      
      // markers:true,    //@@@
      id:"bot-mid4"
    },
    y:"-33vh",
    opacity:1,
    transformOrigin: '0 50%',
    scale:1.5,
    duration: 50,
  });
gsap.fromTo(".video-box-3",
{opacity:0},
{
  scrollTrigger:{
    trigger:".video-box-3",
    toggleActions: "play none resume none",
    start:"0% top",
    end:"1% top",
    scrub: true,

    // markers:true,    //@@@
    id:"show2"
  },
  opacity:1
});

gsap.fromTo(".group-3",
{y:"50vh", opacity:0},
{
  scrollTrigger:{
    trigger:".video-box-3",
    toggleActions: "play none resume none",
    start:"0 top",
    // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
    end:"40% top",
    scrub: true,
    // ease: "back",

    // markers:true,    //@@@
    id:"t-up"
  },
  y:0,
  opacity:1,
  duration: 50,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-box-3",
    start: "top top",
    end: "350% top",
    // end: "200% top",
    scrub: true,
    pin: ".video-box-3",
    // markers: true,    //@@@
  //   duration:5000
  }
});

gsap.fromTo(".group-3",
{y:0,opacity:1},
{
  scrollTrigger:{
    trigger:"#p1-3",
    toggleActions: "play none resume none",
    start:"320% top",
    end:"350% top",
    // start:"180% top",
    // end:"200% top",
    scrub: true,

    // markers:true,    //@@@
    id:"t-up3"

  },
  y:"-50vh",
  opacity:0,

  duration: 50,
});

// left 4 mid-up 
gsap.fromTo(".n4",
{y:"-33vh", opacity:1},
{
  scrollTrigger:{
    trigger:".black-box",
    toggleActions: "play none resume none",
    start:"500% top",
    end:"520% top",
    scrub: true,
    ease: true,

    // markers:true,    //@@@
    id:"mid-up4"
  },
  y:"-66vh",
  opacity:0.5,
  transformOrigin: '0 50%',
  scale:1,
  duration: 50,
  // color:"black",
});

//turn black
gsap.to(".list-text",{
  scrollTrigger:{
    trigger:".black-box",
    toggleActions: "play none resume none",
    start:"500% top",
    end:"520% top",
    scrub: true,
    ease: true,

    // markers:true,    //@@@
    id:"mid-up4 black"
  },
  color:"black",
});
gsap.to(".toblack",{
  scrollTrigger:{
    trigger:".black-box",
    toggleActions: "play none resume none",
    start:"500% top",
    end:"520% top",
    scrub: true,
    ease: true,

    // markers:true,    //@@@
    id:"mid-up4 black"
  },
  borderColor:"#000",
});
//header text color
gsap.to(".color-white",{
  scrollTrigger:{
    trigger:".black-box",
    toggleActions: "play none resume none",
    start:"500% top",
    end:"520% top",
    scrub: true,
    ease: true,

    // markers:true,    //@@@
    id:"mid-up4 black"
  },
  color:"black",
});
//header img color
gsap.to(".logo .img-switch", {
  scrollTrigger:{
    trigger:".black-box",
    toggleActions: "play none resume none",
    start:"500% top",
    end:"520% top",
    scrub: true,
    ease: true,
    // markers:true,    //@@@
    id:"mid-up4 black"
  },
   attr: { src: "img/logo_Smartcube.png" } 
  });
gsap.to(".header-icon .img-switch", {
  scrollTrigger:{
    trigger:".black-box",
    toggleActions: "play none resume none",
    start:"500% top",
    end:"520% top",
    scrub: true,
    ease: true,
    // markers:true,    //@@@
    id:"mid-up4 black"
  },
    attr: { src: "img/logo_language.png" } 
  });



//-----------------------------------444-black-box------------------------------------
  
//left 5 bot-mid
gsap.fromTo(".n5",
{y:"-96%", opacity:0.5},
  {
    scrollTrigger:{
      trigger:".video-box-5",
      toggleActions: "play none resume none",
      scrub: true,
      ease: true,

      start:"500% top",
      end:"520% top",
      
      // markers:true,    //@@@
      id:"bot-mid5555555"
    },
    y:"-37vh",
    // x:"1vw",
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
      // ease: "back",

      // markers:true,    //@@@
      id:"show4"
    },
    opacity:1
  });

  gsap.fromTo(".group-4",
  {y:"50vh", opacity:0},
  {
    scrollTrigger:{
      trigger:".black-box",
      toggleActions: "play none resume none",
      start:"0 top",
      end:"40% top",
      // end:"20% top",
      scrub: true,

      // markers:true,    //@@@
      // id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });

let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".black-box",
      start: "top top",
      end: "500% top",
      // end: "300% top",
      scrub: true,
      pin: ".black-box",
      // markers: true,    //@@@
    //   duration:5000
    }
  });
  gsap.fromTo(".group-4",
{y:0,opacity:1},
{
  scrollTrigger:{
    trigger:"#p1_scan",
    toggleActions: "play none resume none",
    start:"5200% top",
    end:"5500% top",
    // start:"3200% top",
    // end:"3500% top",
    scrub: true,

    // markers:true,    //@@@
    id:"t-up4"

  },
  y:"-50vh",
  opacity:0,

  duration: 50,
});
//------------------------------------555555------------------------------------

gsap.fromTo(".video-box-5",
{
  opacity:0
},
{
  scrollTrigger:{
    trigger:".video-box-5",
    toggleActions: "play none resume none",
    start:"0% top",
    end:"1% top",
    scrub: true,

    // markers:true,    //@@@
    id:"show5"
  },
  opacity:1
});

gsap.fromTo(".group-5",
{y:"50vh", opacity:0},
{
  scrollTrigger:{
    trigger:".video-box-5",
    toggleActions: "play none resume none",
    start:"0 top",
    end:"40% top",
    // end:"20% top",
    scrub: true,

    // markers:true,    //@@@
    id:"t-up5"
  },
  y:0,
  opacity:1,
  duration: 50,
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-box-5",
    start: "top top",
    end: "350% top",
    scrub: true,
    pin: ".video-box-5",
    // markers: true,    //@@@
  //   duration:5000
  }
});

  p1_1.onloadedmetadata = function () {
    tl1.to(p1_1, { currentTime: p1_1.duration });
  };
  p1_2.onloadedmetadata = function () {
    tl2.to(p1_2, { currentTime: p1_2.duration });
  };
  p1_3.onloadedmetadata = function () {
    tl3.to(p1_3, { currentTime: p1_3.duration });
  };
  p1_scan.onloadedmetadata = function () {
    tl4.to(p1_scan, { currentTime: p1_scan.duration });
  };
  p1_5.onloadedmetadata = function () {
    tl5.to(p1_5, { currentTime: p1_5.duration });
  };

  window.onload = function(){
    setTimeout(function(){
      scrollTo(0,0);
    },100);
  }

  let navbar = document.querySelector(".anim-main-header");

  let toBlack_1 = gsap.to(".header-navbar", {
    paused: true,
    color:"black",
  });

  let toBlack_2 = gsap.to(".logo .img-switch", {
    paused: true,
    attr: { src: "img/logo_Smartcube.png" },
  });
  let toBlack_3 = gsap.to(".header-icon .img-switch", {
    paused: true,
    attr: { src: "img/logo_language.png" } 
  });
  
  navbar.addEventListener("mouseenter", () => toBlack_1.play());
  navbar.addEventListener("mouseenter", () => toBlack_2.play());
  navbar.addEventListener("mouseenter", () => toBlack_3.play());

  navbar.addEventListener("mouseleave", () => toBlack_1.reverse());
  navbar.addEventListener("mouseleave", () => toBlack_2.reverse());
  navbar.addEventListener("mouseleave", () => toBlack_3.reverse());

  // let to2 = gsap.to("n2", {
  //   duration: 2, 
  //   scrollTo: {
  //     y: 400, autoKill: true
  //   }, 
  //   ease: "power2"});
  
  //   to2.addEventListener("click", click2);

  //   function click2(){

  //   }

    document.querySelectorAll(".to1").forEach((btn, index) => {
      btn.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo:{y:"#box" + (index + 1), offsetY:"-10vh"}});
      });
    });


// gsap.to(".box", { x: 200,});
gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.section').forEach(section => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: 'top top',
//     pin: true,
//     pinSpacing: false
//   });
// });

// intro 1 그라데이션 --------------------------------------------------------------------------------
const introAnim = gsap.from(".introOpacity", { opacity: 0, paused: true });
const ST = ScrollTrigger.create({
  trigger: ".intro",
  start: "top top",
  end: "70% top",
//   markers:true,   //@@@
  animation: introAnim, 
  pin: ".intro", 
  scrub: true     
});
// The relevant part to keeping the progress
// ScrollTrigger.addEventListener("refreshInit", () => progress = ST.progress);
// ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));

//intro 2
gsap.from(".intro2",{
    scrollTrigger:{
        trigger:".intro2",
        start:"bottom 50%",
        end:"top 30%",
        scrub:1,
        // markers:true   //@@@
    },
    y:200,
    ease:"none",
    duration: 5
});

//intro3 arrow
gsap.from(".intro-arrow",{
    scrollTrigger:{
        trigger:".intro",
        start:"top top",
        end:"20% top",
        scrub:1,
        // markers:true  //@@@
    },
    y:100,
    ease:"none",
    duration: 3
});

//horizontal ------------------------------------------------------------------------------------------
const datago = gsap.to(".h-data", { opacity: 0, paused: true });
const netcome = gsap.from(".h-network", { opacity: 0, paused: true });
const netgo = gsap.to(".h-network", { opacity: 0, paused: true });
const aicome = gsap.from(".h-ai", { opacity: 0, paused: true });
const aigo = gsap.to(".h-ai", { opacity: 0, paused: true });

const ST2 = ScrollTrigger.create({
    trigger: ".horizon-box",
    start: "top top",
    end: "+=2000",
    // markers:true,    //@@@
    // animation: dataleft, 
    pin: ".horizon-box", 
    scrub: true     
  });

  //data show up
gsap.from(".h-data",{
    scrollTrigger:{
        trigger:".two",
        start:"10% bottom",
        end:"15% bottom",
        scrub:2,
        // markers:true    //@@@
    },
    y:500,
    ease:"none",
    duration: 1
});
//data goes left anim
gsap.to(".h-data",{
    scrollTrigger:{
        trigger:".two",
        start:"20% 550",
        end:"25% 550",
        scrub:1,
        // markers:true   //@@@
    },
    x:-1000,
    ease:"none",
    duration: 1
});
//transparent data go
const DataGoes = ScrollTrigger.create({
    trigger: ".two",
    start: "20% 550",
    end: "25% 550",
    // markers:true,    //@@@
    animation: datago, 
    scrub: true     
  });

  //net comes and goes--------------------
  //anim net comes
  gsap.from(".h-network",{
    scrollTrigger:{
        trigger:".two",
        start:"20% 550",
        end:"25% 550",
        scrub:1,
        // markers:true   //@@@
    },
    x:1000,
    ease:"none",
    duration: 1
});
//transparent net comes
  const NetComes = ScrollTrigger.create({
    trigger: ".two",
    start: "20% 550",
    end: "25% 550",
    // markers:true,    //@@@
    animation: netcome, 
    scrub: true     
  });

  //anim net goes
//   gsap.to(".h-network",{
//     scrollTrigger:{
//         trigger:".two",
//         start: "20% 500",
//         end: "25% 500",
//         scrub:1,
//         markers:true   //@@@
//     },
//     x:-1000,
//     ease:"none",
//     // duration: 1
// });
// -------------------------video-----------------------------------video----------------------------------------------
const video1_end = gsap.from(".video-1-img-g", { opacity: 0, paused: true });
//video 1 end anim 
const video1_anim = ScrollTrigger.create({
    trigger: ".video-1-g",
    start: "top top",
    end: "20% top",
    // markers:true,   //@@@
    animation: video1_end, 
    scrub: true     
  });
  //video 1 to video 2 Pin
const video1_hide = gsap.to(".video-1", { opacity: 0, paused: true });

  const videoPin = ScrollTrigger.create({
    trigger: ".video-1-g",
    start: "top top",
    end: "30% top",
    // markers:true,   //@@@
    animation: video1_hide, 
    pin: ".video-1-g",
    scrub: true     
  });
//오른쪽 화살표 애니 <
gsap.to(".video-1-img-arrow",{
    scrollTrigger:{
        trigger:".video-1-g",
        start:"top top",
        end:"10% top",
        scrub:1,
        // markers:true   //@@@??--?
    },
    x:-50,
    ease:"none",
    duration: 1
});
  //비디오 띄움
const video2_show = gsap.from(".video-2-g", { opacity: 0, paused: true });
const video1_hide2 = gsap.to(".video-1-img-g", { opacity: 0, paused: true });

  //video 2 transparent???
  const video2show_anim = ScrollTrigger.create({
    trigger: ".video-1-g",
    start: "10% top",
    end: "20% top",
    // markers:true,   //@@@-------??
    animation: video2_show,
    scrub: true     
  });
  //hide hide img1
  const video1imghide_anim = ScrollTrigger.create({
    trigger: ".video-1-g",
    start: "10% top",
    end: "20% top",
    // markers:true,   //@@@
    animation: video1_hide2,
    scrub: true     
  });
  //video 2video 2Pin Pin
  const videoPin2 = ScrollTrigger.create({
    trigger: ".video-1-g",
    start: "10% top",
    end: "530% top", //-------------------------was 150  230
    // markers:true,   //@@@-------??
    animation:video1_hide2,
    pin: ".video-1-g",
    scrub: true ,
    duration: 1

  });
//----------------video1 play----------------
const video_1 = document.querySelector("#video-1");

let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-1-g",
      start: "10% bottom",
      end: "100% center",
      scrub: true,
    //   pin: ".video-1-g",
      // markers: true,    //@@@
      // onEnter: () => video.play(),
      // duration:500
    }
  });
  //----------------video2 play----------------
const video_2 = document.querySelector("#video-2");

let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video-2",
      start: "150% 500",
      end: "250% 300",
      scrub: true,
    }
  });
//----------------video3 play----------------
  const video_3 = document.querySelector("#video-3");

let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video-2",
      start: "200% top",
      end: "350% top",
      scrub: true,
    }
  });
  //----------------video4 play----------------
  const video_4 = document.querySelector("#video-4");

let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video-2",
      start: "580% top",
      end: "750% 20%",
      scrub: true,
      // markers: true,    //@@@
    //   onEnter: () => video.play(),
    }
  });


  video_1.onloadedmetadata = function () {
    tl1.to(video_1, { currentTime: video_1.duration });
  };
  video_2.onloadedmetadata = function () {
    tl2.to(video_2, { currentTime: video_2.duration });
  };
  video_3.onloadedmetadata = function () {
    tl3.to(video_3, { currentTime: video_3.duration });
  };
  video_4.onloadedmetadata = function () {
    tl4.to(video_4, { currentTime: video_4.duration });
  };
  // video_3.onloadedmetadata = function () {
  //   tl3.to(video_3, { currentTime: video_3.duration })
  //   .to(video_4, { currentTime: video_4.duration });
  // };
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  if (isTouchDevice()) {
    video_1.play();
    video_1.pause();
  }
//----------------video1 img

//video 2 upuuppup
gsap.to("#video-2",{
  scrollTrigger:{
      trigger:"#video-2",
      start:"200% 300",
      end:"300% 100",
      scrub:1,
      // markers:true    //@@@
  },
  y:-1000,
  ease:"none",
  duration: 1
});
//video 3 follow up
gsap.from("#video-3",{
  scrollTrigger:{
      trigger:"#video-2",
      start:"200% 300",
      end:"300% 100",
      scrub:1,
      // markers:true    //@@@
  },
  y:1000,
  ease:"none",
  duration: 1
});

//video 4 show up
gsap.from(".video-4-g",{
  scrollTrigger:{
      trigger:"#video-2",
      start:"500% center",
      end:"550% center",
      scrub:1,
      // markers:true    //@@@
  },
  y:1000,
  ease:"none",
  duration: 1
});
//video 3 goes up
gsap.to(".video-2-g",{
  scrollTrigger:{
      trigger:"#video-2",
      start:"500% center",
      end:"550% center",
      scrub:1,
      // markers:true    //@@@
  },
  y:-1000,
  ease:"none",
  duration: 1
});


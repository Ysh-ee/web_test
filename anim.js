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
    end: "+=2500",
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
//         start: "20% 550",
//         end: "25% 550",
//         scrub:1,
//         markers:true   //@@@
//     },
//     x:-1000,
//     ease:"none",
//     // duration: 1
// });
// -------------------------video--------------------------------------------------
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
  const videoPin = ScrollTrigger.create({
    trigger: ".video-1-g",
    start: "top top",
    end: "20% top",
    // markers:true,   //@@@
    animation: "", 
    pin: ".video-1-g",
    scrub: true     
  });
//오른쪽 화살표 애니 <
gsap.to(".video-1-img-arrow",{
    scrollTrigger:{
        trigger:".video-1-g",
        start:"5% top",
        end:"10% top",
        scrub:1,
        // markers:true   //@@@??--?
    },
    x:-30,
    ease:"none",
    duration: 1
});
  //비디오 띄움
const video2_show = gsap.from(".video-2-g", { opacity: 0, paused: true });

  //video 2 Pin???
  const videoPin2 = ScrollTrigger.create({
    trigger: ".video-1-g",
    start: "13% top",
    end: "20% top",
    // markers:true,   //@@@-------??
    animation: video2_show, 
    pin: ".video-1-g",
    scrub: true     
  });
//----------------video1 play----------------
const video_1 = document.querySelector("#video-1");

let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-1-g",
      start: "25% top",
      end: "80% top",
      scrub: true,
    //   pin: ".video-1-g",
    //   markers: true,    //@@@
    //   onEnter: () => video.play(),
    }
  });
  //----------------video2 play----------------
const video_2 = document.querySelector("#video-2");

let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video-2",
      start: "80% 500",
      end: "120% 500",
      scrub: true,
    //   pin: "#video-2",
    //   markers: true,    //@@@
    //   onEnter: () => video.play(),
    }
  });
//   //비디오 띄움
// const video2_show = gsap.from(".video-2-g", { opacity: 0, paused: true });

  


  video_1.onloadedmetadata = function () {
    tl.to(video_1, { currentTime: video_1.duration });
  };
  video_2.onloadedmetadata = function () {
    tl2.to(video_2, { currentTime: video_2.duration });
  };
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





// video_1.pause();
// video_1.currentTime = 0;

// gsap.fromTo(video_1,{currentTime: 3 * i}, {
//     scrollTrigger:{
//         trigger:"video-1",
//         scrub: 2,
//         start:"top bottom",
//         end: "bottom bottom",
//         pin: true,
//         markers:true,    //@@@
//         onEnter: () => video.play(),
//     },
//     currentTime: 3 * (i+1),
//     duration:1,
//     ease: "none",
// });

// gsap.fromTo(video_1,{currentTime: 3 * i}, {
//     scrollTrigger.create({
//         trigger:"video-1",
//         scrub: 2,
//         start:"top bottom",
//         end: "bottom bottom",
//         pin: true,
//         markers:true,    //@@@
//         onEnter: () => video.play(),
//     }),
//     currentTime: 3 * (i+1),
//     duration:1,
//     ease: "none",
// });


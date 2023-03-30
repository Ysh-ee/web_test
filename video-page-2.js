const videoPage_1 = document.querySelector("#video-page-1");
const video_2 = document.querySelector("#video-2");

gsap.fromTo(".video-box",
  {opacity:0},
  {
    scrollTrigger:{
      trigger:".video-box",
      toggleActions: "play none resume none",
      start:"0% top",
      end:"10% top",
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
      start:"5% top",
      // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
      end:"20% top",
      scrub: true,
      // ease: "back",

      // markers:true,    //@@@
      id:"t-up"
    },
    y:0,
    opacity:1,
    // ease: true,
    // ease: "bounce({strength:0.5, endAtStart:true})",
    // ease: "back.out(1.4)",//---//
    // bounds: true,
    duration: 50,
  });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger:".video-page-1",
      start: "top top",
      end: "200% top",
      scrub: true,
      // ease: "steps(" + frame_count + ")",
      pin: ".video-box",
      // markers: true,    //@@@
      // onEnter: () => video.play(),
    //   duration:5000
    id:"anim-1"
    },
  });


  gsap.fromTo(".group-1",
  {y:0,opacity:1},
  {
    scrollTrigger:{
      trigger:".video-page-1",
      toggleActions: "play none resume none",
      start:"180% top",
      end:"200% top",
      // start:"60% center",
      // end:"100% center",
      scrub: true,

      // markers:true,    //@@@
      id:"t-up2"

    },
    y:"-50vh",
    opacity:0,

    duration: 50,
  });

  // gsap.to(".group-1",{
  //   scrollTrigger:{
  //     // trigger:".video-box",
  //     toggleActions: "play none resume none",
  //     start:"60% top",
  //     // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
  //     end:"80% top",
  //     scrub: true,

  //     markers:true    //@@@
  //   },
  //   y:"-10vh",
  //   duration: 50,
  // });

//------------------------------------black-box------------------------------------
  // $("group-1").on("mouseenter", function() {
  //   TweenMax.to(this, 0.2, {scale:1, delay:0.4})
  // })
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
      // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
      end:"20% top",
      scrub: true,
      // ease: "back",

      // markers:true,    //@@@
      // id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });
  // const black = gsap.from(".black-box", { opacity: 0, paused: true });
  // const ST = ScrollTrigger.create({
  //   trigger: ".video-box",
  //   start: "120% center",
  //   end: "130% center",
    
  //   animation: black, // can be left out
  //   pin: ".video-box", // can be left out
  //   markers:true,    //@@@
  //   scrub: true      // can be left out
  // });
// gsap.fromTo(".black-box",
// {
//   // y: 0,
//   opacity:0.2
// },
// {
//   scrollTrigger:{
//     trigger: ".black-box",
//     start: "100% bottom", 
//     end: "200% top", 
//     pin: ".video-box", 
//     pinSpacing: false,

//     markers:true,    //@@@
//     id:"blackBox"
//   },
//   // y: "-100vh"
// });
  // ScrollTrigger.create({
  //   trigger: ".black-box",
  //   start: "top top", 
  //   end: "10% top", 
  //   pin: ".video-box", 
  //   pinSpacing: false,
  //     markers:true    //@@@

  // });

//   gsap.from(".group-2",{
//     scrollTrigger:{
//       trigger:".black-box",
//       toggleActions: "play none resume none",
//       start:"20% top",
//       // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
//       end:"40% top",
//       scrub: true,

//       markers:true,    //@@@
//       id:"text-2"
//     },
//     y:"70vh",
//     duration: 50,
//   });

let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".black-box",
      start: "top top",
      end: "300% top",
      scrub: true,
      pin: ".black-box",
      // markers: true,    //@@@
      // onEnter: () => video.play(),
    //   duration:5000
    }
  });


  videoPage_1.onloadedmetadata = function () {
    tl1.to(videoPage_1, { currentTime: videoPage_1.duration });
    // tlUp.to("group-1",{y:0, opacity:1})
    //     .to("group-1",{y:"-20vh", opacity:0});
  };
  video_2.onloadedmetadata = function () {
    tl2.to(video_2, { currentTime: video_2.duration });
  };

 
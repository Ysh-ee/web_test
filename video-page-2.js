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
      // end:"10% top",
      scrub: true,

      // markers:true,    //@@@
      id:"show"
    },
    opacity:1
  });

  //첫 left
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

  gsap.fromTo(".group-1",
  {y:"50vh", opacity:0},
  {
    scrollTrigger:{
      trigger:".video-page-1",
      toggleActions: "play none resume none",
      // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
      start:"0 top",
      end:"50% top",
      //start:"0 top",
      // end:"30% top",
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

  //첫 영상 전체
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger:".video-page-1",
      start: "top top",
      end: "380% top",
      // start: "top top",
      // end: "220% top",
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

  //left swich
  // gsap.to(".list-first",
  // {
  //   scrollTrigger:{
  //     trigger:".black-box",
  //     toggleActions: "play none resume none",
  //     start:"0 top",
  //     end:"10% top",
  //     scrub: true,
  //     ease: true,
  //     toggleClass: "off",

  //     // markers:true,    //@@@
  //     id:"t-up"
  //   },
  //   y:"-45vh",
  //   duration: 50,
    
  // });
  // gsap.to(".list-last",
  // {
  //   scrollTrigger:{
  //     trigger:".list-last",
  //     toggleActions: "play none resume none",
  //     // start:"0 top",
  //     // end:"10% top",
  //     scrub: true,
  //     ease: true,

  //     start: "top 53%",
  //     end: "bottom 62%",
  //     toggleClass: "on",

  //     // markers:true,    //@@@
  //   },
  //   y:"-40vh",
  //   duration: 50,
  // });


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
      // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
      start:"5% top",
      end:"40% top",
      scrub: true,
      // ease: "back",

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

 
  // const textOn = gsap.utils.toArray(".list-g .list-text");

  // textOn.forEach((txt, i) =>{
  //   gsap.to(txt, { 
  //       scrollTrigger: {
  //         trigger: txt,
  //         // containerAnimation: tl1,
  //         // containerAnimation: scrollPics,
  //         scrub: true,
  //         //51% 64%
  //         start: "top 51%",
  //         end: "bottom 64%",
  //         toggleClass: "on",
  //         markers:true,    //@@@
        
  //       id: i
  //       }
  //     })
  // });
const videoPage_1 = document.querySelector("#video-page-1");
const video_2 = document.querySelector("#video-2");



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

      // markers:true,    //@@@
      id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger:".video-page-1",
      start: "top top",
      end: "200% top",
      scrub: true,
      // ease: "steps(" + frame_count + ")",
      pin: ".video-box-1",
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


//------------------------------------black-box------------------------------------
  
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

      markers:true,    //@@@
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

let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".black-box",
      start: "top top",
      end: "300% top",
      scrub: true,
      pin: ".black-box",
      // markers: true,    //@@@
    //   duration:5000
    }
  });


  videoPage_1.onloadedmetadata = function () {
    tl1.to(videoPage_1, { currentTime: videoPage_1.duration });
  };
  video_2.onloadedmetadata = function () {
    tl2.to(video_2, { currentTime: video_2.duration });
  };

 
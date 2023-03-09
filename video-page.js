const videoPage_1 = document.querySelector("#video-page-1");
const video_2 = document.querySelector("#video-2");



  gsap.from(".group-1",{
    scrollTrigger:{
      // trigger:".video-box",
      toggleActions: "play none resume none",
      start:"5% top",
      // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
      end:"40% top",
      scrub: true,

      // markers:true    //@@@
    },
    y:"70vh",
    // ease: true,
    // ease: "bounce({strength:0.5, endAtStart:true})",
    // ease: "back.out(1.4)",//---//
    // bounds: true,
    duration: 50,
  });

  

  // var frame_count  = 200;
  let tl1 = gsap.timeline({
    scrollTrigger: {
      // trigger: ".video-box",
      start: "top top",
      end: "400% top",
      scrub: true,
      // ease: "steps(" + frame_count + ")",
      pin: ".video-box",
      // markers: true,    //@@@
      // onEnter: () => video.play(),
    //   duration:5000
    }
  });

  // $("group-1").on("mouseenter", function() {
  //   TweenMax.to(this, 0.2, {scale:1, delay:0.4})
  // })
  gsap.from(".group-2",{
    scrollTrigger:{
      trigger:".black-box",
      toggleActions: "play none resume none",
      start:"20% top",
      // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
      end:"40% top",
      scrub: true,

      // markers:true    //@@@
    },
    y:"70vh",
    // ease: true,
    // ease: "bounce({strength:0.5, endAtStart:true})",
    // ease: "back.out(1.4)",//---//
    // bounds: true,
    duration: 50,
  });

let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".black-box",
      start: "top top",
      end: "400% top",
      scrub: true,
      pin: ".black-box",
      // markers: true,    //@@@
      // onEnter: () => video.play(),
    //   duration:5000
    }
  });


  videoPage_1.onloadedmetadata = function () {
    tl1.to(videoPage_1, { currentTime: videoPage_1.duration });
  };
  video_2.onloadedmetadata = function () {
    tl2.to(video_2, { currentTime: video_2.duration });
  };

 
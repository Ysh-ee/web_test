const videoPage_1 = document.querySelector("#video-page-1");
// const videoPage_2 = document.querySelector("#video-page-2");



  gsap.from(".group-1",{
    scrollTrigger:{
      // trigger:".video-box",
      toggleActions: "play none resume none",
      start:"20% top",
      // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
      end:"150% top",
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

  let tl1 = gsap.timeline({
    scrollTrigger: {
      // trigger: ".video-box",
      start: "top top",
      end: "800% top",
      scrub: true,
      pin: ".video-box",
      // markers: true,    //@@@
      // onEnter: () => video.play(),
    //   duration:5000
    }
  });

  // $("group-1").on("mouseenter", function() {
  //   TweenMax.to(this, 0.2, {scale:1, delay:0.4})
  // })

// let tl2 = gsap.timeline({
//     scrollTrigger: {
//     //   trigger: ".video-box",
//       start: "top top",
//       end: "3800% top",
//       scrub: true,
//       pin: ".video-box",
//     //   markers: true,    //@@@
//       // onEnter: () => video.play(),
//     //   duration:5000
//     }
//   });


  videoPage_1.onloadedmetadata = function () {
    tl1.to(videoPage_1, { currentTime: videoPage_1.duration });
  };
  // videoPage_2.onloadedmetadata = function () {
  //   tl2.to(videoPage_2, { currentTime: videoPage_2.duration });
  // };

 
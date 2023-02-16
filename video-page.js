const videoPage_1 = document.querySelector("#video-page-1");
const videoPage_2 = document.querySelector("#video-page-2");

let tl1 = gsap.timeline({
    scrollTrigger: {
    //   trigger: ".video-box",
      start: "top top",
      end: "1200% top",
      scrub: true,
      pin: ".video-box",
    //   markers: true,    //@@@
      // onEnter: () => video.play(),
    //   duration:5000
    }
  });

  gsap.from(".group-1",{
    scrollTrigger:{
      // trigger:".video-box",
      toggleActions: "restart none resume none",
      start:"top top",
      // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
      end:"center top",
      // markers:true    //@@@
    },
    y:800,
    ease: 3,
    // duration: 10,
  });

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

 
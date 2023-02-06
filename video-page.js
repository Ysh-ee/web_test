const videoPage_1 = document.querySelector("#video-page-1");
const videoPage_2 = document.querySelector("#video-page-2");

let tl1 = gsap.timeline({
    scrollTrigger: {
    //   trigger: ".video-box",
      start: "top top",
      end: "4500% top",
      scrub: true,
      pin: ".video-box",
    //   markers: true,    //@@@
      // onEnter: () => video.play(),
    //   duration:5000
    }
  });

let tl2 = gsap.timeline({
    scrollTrigger: {
    //   trigger: ".video-box",
      start: "top top",
      end: "3800% top",
      scrub: true,
      pin: ".video-box",
    //   markers: true,    //@@@
      // onEnter: () => video.play(),
    //   duration:5000
    }
  });


  videoPage_1.onloadedmetadata = function () {
    tl1.to(videoPage_1, { currentTime: videoPage_1.duration });
  };
  videoPage_2.onloadedmetadata = function () {
    tl2.to(videoPage_2, { currentTime: videoPage_2.duration });
  };
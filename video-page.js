const videoPage_1 = document.querySelector("#video-page");

let tl1 = gsap.timeline({
    scrollTrigger: {
    //   trigger: ".video-box",
      start: "top top",
      end: "2500% top",
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
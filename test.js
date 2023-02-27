gsap.registerPlugin(ScrollTrigger);

var frame_count  = 9,
    offset_value = 738;

gsap.to(".sprite-1", {
  backgroundPosition: (-offset_value * frame_count * 1) + "px 50%",
  ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  scrollTrigger: {
    trigger: ".video-box",
    start: "top top",
    end: "+=" + (frame_count * offset_value),
    pin: true,
    scrub: true
  }
});
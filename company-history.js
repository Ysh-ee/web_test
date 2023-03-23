


// gsap.registerPlugin(ScrollTrigger);
console.clear();

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);




let scrollYears = gsap.to(".his-scroll-years", {
    xPercent: -300,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
    //   trigger: ".his-block",
    //   pin: ".his-block",
      scrub: 1,
      //snap: directionalSnap(1 / (sections.length - 1)),
    //   start: "10% top",
      end: "+=380%",
    start: "bottom bottom",
    // end: "bottom center",
    //   markers:true    //@@@
    }
  });

let scrollPics = gsap.to(".his-scroll-pics", {
    xPercent: -85,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".his-block",
      pin: ".his-block",
      scrub: 1,
      //snap: directionalSnap(1 / (sections.length - 1)),
    //   start: "10% top",
      end: "+=300%",
    start: "bottom bottom",
    // end: "bottom center",
    //   markers:true    //@@@
    }
  });
//---------------------start------------------
ScrollTrigger.create({
    trigger: ".first",
    containerAnimation: scrollYears,
    toggleClass: "active",
    start: "-20% center",
    end: "120% center",
    // markers:true,    //@@@
    
    id: "22"
  });

gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".his2021",
      scrub: true,
      containerAnimation: scrollPics,
    start: "10% 65%",
      end: "25% 65%",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",

  });
  
  ScrollTrigger.create({
    trigger: ".year21",
    containerAnimation: scrollYears,
    toggleClass: "active",
    start: "40% center",
    end: "120% center",
    // markers:true,    //@@@
    id: "21"
  });

  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".his2020",
      scrub: true,
      containerAnimation: scrollPics,
    start: "10% center",
      end: "25% center",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
  });
  ScrollTrigger.create({
    trigger: ".year20",
    containerAnimation: scrollYears,
    toggleClass: "active",
    start: "40% center",
    end: "120% center",
    // markers:true,    //@@@
    id: "20"
  });
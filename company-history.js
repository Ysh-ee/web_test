


gsap.registerPlugin(ScrollTrigger);
console.clear();

// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);




let scrollYears = gsap.to(".his-scroll-years", {
    xPercent: -350,
    ease: "none", 
    scrollTrigger: {
    //   trigger: ".his-block",
    //   pin: ".his-block",
      scrub: 1,
      //snap: directionalSnap(1 / (sections.length - 1)),
    //   start: "10% top",
      end: "+=300%",
    start: "bottom bottom",
    // end: "bottom center",
    //   markers:true    //@@@
    }
  });

let scrollPics = gsap.to(".his-scroll-pics", {
    xPercent: -85,
    ease: "none", 
    scrollTrigger: {
      trigger: ".his-block",
      pin: ".his-block",
      scrub: 1,
      end: "+=300%",
    start: "bottom bottom",
    // end: "bottom center",
    //   markers:true    //@@@
    }
  });
//---------------------------------line anim--start--------------------------------


gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".his-1",
      scrub: true,
      containerAnimation: scrollPics,
      start: "160% center",
      end: "180% center",
    id:"22-1",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".his-2",
      scrub: true,
      containerAnimation: scrollPics,
      start: "160% center",
      end: "170% center",
    id:"22-2",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-3", {
    scrollTrigger: {
      trigger: ".his-3",
      scrub: true,
      containerAnimation: scrollPics,
      start: "180% center",
      end: "200% center",
    id:"22-3",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------21
  gsap.from(".line-4", {
    scrollTrigger: {
      trigger: ".his-4",
      scrub: true,
      containerAnimation: scrollPics,
      start: "140% center",
      end: "160% center",
    id:"21-1",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-5", {
    scrollTrigger: {
      trigger: ".his-5",
      scrub: true,
      containerAnimation: scrollPics,
      start: "190% center",
      end: "210% center",
    id:"21-2",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

   //-------------20
   gsap.from(".line-6", {
    scrollTrigger: {
      trigger: ".his-6",
      scrub: true,
      containerAnimation: scrollPics,
      start: "160% center",
      end: "180% center",
    id:"20-1",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-7", {
    scrollTrigger: {
      trigger: ".his-7",
      scrub: true,
      containerAnimation: scrollPics,
      start: "140% center",
      end: "160% center",
    id:"20-2",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------19
  gsap.from(".line-8", {
    scrollTrigger: {
      trigger: ".his-8",
      scrub: true,
      containerAnimation: scrollPics,
      start: "150% center",
      end: "170% center",
    id:"19",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------18
  gsap.from(".line-9", {
    scrollTrigger: {
      trigger: ".his-9",
      scrub: true,
      containerAnimation: scrollPics,
      start: "370% center",
      end: "420% center",
    id:"18",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------17
  gsap.from(".line-10", {
    scrollTrigger: {
      trigger: ".his-10",
      scrub: true,
      containerAnimation: scrollPics,
      start: "160% center",
      end: "180% center",
    id:"17-1",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-11", {
    scrollTrigger: {
      trigger: ".his-11",
      scrub: true,
      containerAnimation: scrollPics,
      start: "130% center",
      end: "150% center",
    id:"17-2",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-12", {
    scrollTrigger: {
      trigger: ".his-12",
      scrub: true,
      containerAnimation: scrollPics,
      start: "180% center",
      end: "210% center",
    id:"17-3",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------14
  gsap.from(".line-13", {
    scrollTrigger: {
      trigger: ".his-13",
      scrub: true,
      containerAnimation: scrollPics,
      start: "220% center",
      end: "250% center",
    id:"14",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------13
  gsap.from(".line-14", {
    scrollTrigger: {
      trigger: ".his-14",
      scrub: true,
      containerAnimation: scrollPics,
      start: "120% center",
      end: "150% center",
    id:"13",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------12
  gsap.from(".line-15", {
    scrollTrigger: {
      trigger: ".his-15",
      scrub: true,
      containerAnimation: scrollPics,
      start: "280% center",
      end: "320% center",
    id:"12",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------11
  gsap.from(".line-16", {
    scrollTrigger: {
      trigger: ".his-16",
      scrub: true,
      containerAnimation: scrollPics,
      start: "125% center",
      end: "135% center",
    id:"11",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
//--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//   const lines = gsap.utils.toArray('.his-line-00');
// //   const hisCard = gsap.utils.toArray('.his-one');
//   lines.forEach(line => {
//   gsap.from(line, { 
//     // x: 300,
//     scrollTrigger: {
//         trigger: "his-temp",
//         // trigger: hisCard[i],
//         scrub: true,
//         containerAnimation: scrollPics,
//         start: "150% center",
//         end: "180% center",
//         markers:true    //@@@
//     },
//     scaleX: 0,
//     transformOrigin: "left center", 
//     ease: "none",
//   })
// });
//--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//-----o
  const cirs = gsap.utils.toArray('.cir-red');
  cirs.forEach(cir =>{
    gsap.to(cir, { 
        scrollTrigger: {
          trigger: cir,
          containerAnimation: scrollPics,
          scrub: true,
          toggleClass: "active",
          start: "left center",
          end: "1200% left",
        //   markers:true,    //@@@
        
        // id: i
        }
      })
  });

  //----------------------xxx----------------------------------------
//   const years = gsap.utils.toArray('.his-year');
//   years.forEach(year =>{
//     gsap.to(year, { 
//         x: -200,
//         scrollTrigger: {
//           trigger: cir,
//           containerAnimation: scrollPics,
//           scrub: true,
//           toggleClass: "active",
//           start: "left center",
//           end: "1200% left",
//           markers:true,    //@@@
        
//         // id: i
//         }
//       })
//   });

// gsap.to(".his-scroll-years",{
//     x: "-33%",
//     scrollTrigger: {
//         trigger: '.cir-2',
//         containerAnimation: scrollPics,
//         scrub: true,
//     //   toggleClass: "active",
//         start: "left center",
//         end: "120% center",
//         markers:true,    //@@@
//     // id: "123"
//     }
// })
//ㅠㅠㅠㅠㅠㅠㅠㅠ
// gsap.to(".his-scroll-years",{
//     x: "-66%",
//     scrollTrigger: {
//         trigger: '.cir-3',
//         containerAnimation: scrollPics,
//         scrub: true,
//     //   toggleClass: "active",
//         start: "left center",
//         end: "120% center",
//         markers:true,    //@@@
//     // id: "123"
//     }
// })
//======xxxxx=====xxxxx=====xxxxx=====xxxxx
// years.forEach((year, i) => {
  
//     var tl = gsap.timeline({
      
//       scrollTrigger: {
//         trigger: "section.black",
//         scroller: ".scroller",
//         start: () => "top -" + (window.innerHeight*i),
//         end: () => "+=" + window.innerHeight,
//         scrub: true,
//         toggleActions: "play none reverse none",
//         invalidateOnRefresh: true,     
//       }
      
//     })
    
//     tl
//     .to(text, { duration: 0.33, opacity: 1, x:"50%" })  
//     .to(text, { duration: 0.33, opacity: 0, x:"50%" }, 0.66)
//     ;
    
//   });
//=====xxxxx=====xxxxx=====xxxxx=====xxxxx=====xxxxx

//년도
ScrollTrigger.create({
    trigger: ".first",
    // pin:".his-scroll-years",
    containerAnimation: scrollYears,
    toggleClass: "active",
    start: "-20% center",
    end: "120% center",
    // markers:true,    //@@@
    
    id: "2022"
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

  ScrollTrigger.create({
    trigger: ".year20",
    containerAnimation: scrollYears,
    toggleClass: "active",
    start: "40% center",
    end: "120% center",
    // markers:true,    //@@@
    id: "20"
  });
// gsap.to(".box", { x: 200,});
gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.section').forEach(section => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: 'top top',
//     pin: true,
//     pinSpacing: false
//   });
// });

// intro 1 그라데이션 --------------------------------------------------------------------------------
const introAnim = gsap.from(".introOpacity", { opacity: 0, paused: true });
const ST = ScrollTrigger.create({
  trigger: "body",
  start: 0,
  end: "center 120%",
//   markers:true,   //@@@
  animation: introAnim, 
  pin: ".intro", 
  scrub: true     
});
// The relevant part to keeping the progress
// ScrollTrigger.addEventListener("refreshInit", () => progress = ST.progress);
// ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));

//intro 2
gsap.from(".intro2",{
    scrollTrigger:{
        trigger:".intro2",
        start:"top 50%",
        end:"top 30%",
        scrub:1,
        // markers:true   //@@@
    },
    y:200,
    ease:"none",
    duration: 5
});

//intro3 arrow
gsap.from(".intro3",{
    scrollTrigger:{
        trigger:".intro2",
        start:"top top",
        end:"top top",
        scrub:1,
        // markers:true  //@@@
    },
    y:100,
    ease:"none",
    duration: 5
});

//horizontal ------------------------------------------------------------------------------------------
const datago = gsap.to(".h-data", { opacity: 0, paused: true });
const netcome = gsap.from(".h-network", { opacity: 0, paused: true });
const netgo = gsap.to(".h-network", { opacity: 0, paused: true });
const aicome = gsap.from(".h-ai", { opacity: 0, paused: true });
const aigo = gsap.to(".h-ai", { opacity: 0, paused: true });

const ST2 = ScrollTrigger.create({
    trigger: "horizon-box",
    start: "1231px top",
    end: "bottom bottom",
    // markers:true,    //@@@
    // animation: dataleft, 
    pin: ".two", 
    scrub: true     
  });

  //data show up
gsap.from(".h-data",{
    scrollTrigger:{
        trigger:".two",
        start:"40% bottom",
        end:"50% bottom",
        scrub:1,
        // markers:true    //@@@
    },
    y:500,
    ease:"none",
    duration: 1
});
//data goes left anim
gsap.to(".h-data",{
    scrollTrigger:{
        trigger:".two",
        start:"540px 550",
        end:"640px 550",
        scrub:1,
        // markers:true   //@@@
    },
    x:-1000,
    ease:"none",
    duration: 1
});
//transparent data go
const DataGoes = ScrollTrigger.create({
    trigger: ".two",
    start: "540px 550",
    end: "640px 550",
    // markers:true,    //@@@
    animation: datago, 
    scrub: true     
  });

  //net comes and goes--------------------
  //anim net comes
  gsap.from(".h-network",{
    scrollTrigger:{
        trigger:".two",
        start:"540px 550",
        end:"640px 550",
        scrub:1,
        // markers:true   //@@@
    },
    x:1000,
    ease:"none",
    // duration: 1
});
//transparent net comes
  const NetComes = ScrollTrigger.create({
    trigger: ".two",
    start: "540px 550",
    end: "640px 550",
    markers:true,    //@@@
    animation: netcome, 
    scrub: true     
  });

  //anim net goes
//   gsap.to(".h-network",{
//     scrollTrigger:{
//         trigger:".two",
//         start:"540px 550",
//         end:"640px 550",
//         scrub:1,
//         markers:true   //@@@
//     },
//     x:-1000,
//     ease:"none",
//     // duration: 1
// });



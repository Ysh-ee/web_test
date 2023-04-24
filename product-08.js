gsap.registerPlugin(ScrollTrigger);

gsap.from(".artic-img",{
  scrollTrigger:{
    trigger:".wrapper",
    toggleActions: "restart none resume none",
    start:"top center",
    // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
    end:"center center",
    // markers:true    //@@@
  },
  x:500,
  ease: 3,
  duration: 1,
});

//---------text anim (left to mid)
gsap.from(".artic-group",{
  scrollTrigger:{
    trigger:".wrapper",
    toggleActions: "restart none resume none",
    start:"top center",
    // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
    end:"center center",
    // markers:true    //@@@
  },
  x:-500,
  ease: true,
  duration: 1,
});

gsap.from(".wrapper",{
    scrollTrigger:{
      xPercent: 150 * (".wrapper".length - 150),
      snap: 150 / (".wrapper".length - 150),
        trigger:".wrapper",
        start:"top top",
        // end:"bottom top",
        scrub:20,
        pinSpacing: false,
        pin: true, 
        // markers:true    //@@@
    },
});

//------------------------function-hori-------
// let scrollTween = gsap.to(".hori-item-group", {
//     xPercent: -30,
//     ease: "none",  
//     scrollTrigger: {
//       trigger: ".hori-scroll",
//       pin: true,
//       scrub: 0.5,
//       //snap: directionalSnap(1 / (sections.length - 1)),
//       end: "+=2000",
//     //   markers:true    //@@@

//     }
//   });


//   ------------------scrollchange---------

let blocks = gsap.utils.toArray("block"),
    currentBlock = blocks[0];

// gsap.defaults({overwrite: 'auto', duration: 0.3});

// stretch out the body height according to however many sections there are. 
// gsap.set("scroll-change-group", {height: (blocks.length * 100) + "%"});

// create a ScrollTrigger for each section
blocks.forEach((block, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    trigger:".scroll-change-group",
    // start: () => (3+i - 0.1) * (innerHeight/3*(i+3) ),
    // end: () => (3+i + 0.1) * (innerHeight/3 ),
    // start:"top top",

    // start: () => 3 * innerHeight + ((i+2)*50) +150,
    // end: () => 3 *innerHeight + ((i+2)*50) +400,

    start: () => (i+2) * innerHeight + ((i+1)*(innerHeight*0.4)) +(innerHeight*0.7),
    end: () => (i+2) *innerHeight + ((i+1)*(innerHeight*0.4)) +(innerHeight*0.9),

    // start: () => (i - 0.3) * innerHeight + 1000,
    // end: () => (i + 0.3) * innerHeight +1000,
    // when a new section activates (from either direction), set the section accordinglyl.
    // pin: true,
    // markers:true,    //@@@
    onToggle: self => self.isActive && setSection(block)
  });
});

gsap.from(".scroll-change-group",{
    scrollTrigger:{
        trigger:".scroll-change-group",
        start:"top top",
        end:"400% top",
        scrub:20,
        // pinSpacing: false,
        pin: true, 
        // markers:true    //@@@
    },
});




function setSection(newSection) {
  if (newSection !== currentBlock) {
    gsap.to(currentBlock, { autoAlpha: 0})
    gsap.to(newSection, { autoAlpha: 1});
    currentBlock = newSection;
  }
}

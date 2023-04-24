gsap.registerPlugin(ScrollTrigger);

gsap.from(".artic-img",{
  scrollTrigger:{
    trigger:".wrapper",
    toggleActions: "restart none resume none",
    start:"top center",
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
        scrub:20,
        pinSpacing: false,
        pin: true, 
        // markers:true    //@@@
    },
});

//   ------------------scrollchange---------

let blocks = gsap.utils.toArray("block"),
    currentBlock = blocks[0];

blocks.forEach((block, i) => {
  ScrollTrigger.create({
    trigger:".scroll-change-group",

    start: () => (i+2) * innerHeight + ((i+1)*(innerHeight*0.4)) +(innerHeight*0.7),
    end: () => (i+2) *innerHeight + ((i+1)*(innerHeight*0.4)) +(innerHeight*0.9),
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

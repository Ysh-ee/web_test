gsap.registerPlugin(ScrollTrigger);

//-------- img anim(right to mid)
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

//덮 hori-scroll
gsap.from(".wrapper",{
    scrollTrigger:{
      xPercent: 150 * (".wrapper".length - 150),
      snap: 150 / (".wrapper".length - 150),
        trigger:".wrapper",
        start:"top top",
        scrub:2,
        pinSpacing: false,
        pin: true, 

        // markers:true    //@@@
    },
    
});

//------------------------function-hori-------
let scrollTween = gsap.to(".hori-item-group", {
    xPercent: -30,
    ease: "none",  
    scrollTrigger: {
      trigger: ".hori-scroll",
      pin: true,
      scrub: 0.1,
      end: "+=2000",
    //   markers:true    //@@@

    }
  });


//   ------------------scrollchange---------

let blocks = gsap.utils.toArray("block"),
    currentBlock = blocks[0];

blocks.forEach((block, i) => {
  ScrollTrigger.create({
    trigger:".scroll-change-group",
    start: () => 3 * innerHeight + ((i+2)*950),
    end: () => 3 *innerHeight + ((i+2)*950) +150,
    // markers:true,    //@@@
    onToggle: self => self.isActive && setSection(block)
  });
});
gsap.from(".scroll-change-group",{
    scrollTrigger:{
        trigger:".scroll-change-group",
        start:"top top",
        end:"300% top",
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

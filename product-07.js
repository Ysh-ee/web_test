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

//------------------------function-hori-------
let scrollTween = gsap.to(".hori-item-group", {
    xPercent: -30,
    ease: "none",  
    scrollTrigger: {
      trigger: ".hori-scroll",
      pin: true,
      scrub: 0.5,
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
    start: () => 1 * innerHeight + ((i+2)*10) +150,
    end: () => 1 *innerHeight + ((i+2)*10) +300,
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
    },
});

function setSection(newSection) {
  if (newSection !== currentBlock) {
    gsap.to(currentBlock, { autoAlpha: 0})
    gsap.to(newSection, { autoAlpha: 1});
    currentBlock = newSection;
  }
}

//hardware, software
let scrollTween2 = gsap.to(".hori-item-group-2", {
    xPercent: -40,
    ease: "none",  
    scrollTrigger: {
      trigger: ".hori-scroll-hard",
      pin: true,
      scrub: 0.5,
      end: "+=2000",
    //   markers:true    //@@@

    }
  });

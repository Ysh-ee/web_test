gsap.registerPlugin(ScrollTrigger);

//-------- img anim(right to mid)
gsap.from(".artic-img",{
  scrollTrigger:{
    trigger:".wrapper",
    toggleActions: "play none resume none",
    start:"top center",
    end:"center center",
    // markers:true    //@@@
  },
});
//---------text anim (left to mid)
gsap.from(".artic-group",{
  scrollTrigger:{
    trigger:".wrapper",
    toggleActions: "play none resume none",
    start:"top center",
    end:"center center",
    // markers:true    //@@@
  },
  x:-500,
  ease: true,
  duration: 1,
});
var animR = gsap.from(".artic-img", {
  x:500,
  ease: 3,
  duration: 1,
  opacity: 0,
  });


  document.querySelector("#play1").onclick = function() { return animR.restart(); }
  document.querySelector("#play2").onclick = function() { return animR.restart(); }
  document.querySelector("#play3").onclick = function() { return animR.restart(); }
  document.querySelector("#play4").onclick = function() { return animR.restart(); }

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
    start: () => 3 * innerHeight + ((i+2)*950) +50,
    end: () => 3 *innerHeight + ((i+2)*950) +300,
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

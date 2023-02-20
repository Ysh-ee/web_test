gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-1",{
    scrollTrigger:{
        trigger:".scroll-pin-1",
        start:"top top",
        end:"135% top",
        scrub:20,
        pinSpacing: false,
        pin: ".scroll-pin-1", 
        // markers:true    //@@@
    },
});
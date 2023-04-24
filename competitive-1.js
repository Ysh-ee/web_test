gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-1",{
    scrollTrigger:{
        trigger:".scroll-pin-1",
        start:"50% center",
        end:"185% center",
        pinSpacing: false,
        pin: ".scroll-pin-1", 
        // markers:true    //@@@
    },
});
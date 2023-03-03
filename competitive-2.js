gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-3",{
    scrollTrigger:{
        
        trigger:".scroll-pin2-1",
        start:"50% center",
        end:"270% center",
        pin: true, 
        pinSpacing: false,
        // markers:true    //@@@
    },
});

gsap.from(".section-4",{
    scrollTrigger:{
        
        trigger:".scroll-pin2-2",
        start:"50% center",
        end:"365% center",
        pin: ".scroll-pin2-2", 
        pinSpacing: false,
        
        // markers:true    //@@@
    },
});
const p1_1 = document.querySelector("#p1-1");
const p1_2 = document.querySelector("#p1-2");
const p1_3 = document.querySelector("#p1-3");
const p1_scan = document.querySelector("#p1_scan");
const p1_5 = document.querySelector("#p1-5");



  gsap.fromTo(".group-1",
  {y:"50vh", opacity:0},
  {
    scrollTrigger:{
      trigger:"#p1-1",
      toggleActions: "play none resume none",
      start:"20% top",
      end:"50% top",
      scrub: true,

      // markers:true,    //@@@
      id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger:"#p1-1",
      start: "top top",
      end: "350% top",
      // end: "200% top",
      scrub: true,
      pin: ".video-box-1",
      // markers: true,    //@@@
      id:"anim-1"
    },
  });

  gsap.fromTo(".group-1",
  {y:0,opacity:1},
  {
    scrollTrigger:{
      trigger:"#p1-1",
      toggleActions: "play none resume none",
      start:"320% top",
      end:"350% top",
      // start:"180% top",
      // end:"200% top",
      scrub: true,

      // markers:true,    //@@@
      id:"t-up2"

    },
    y:"-50vh",
    opacity:0,

    duration: 50,
  });

//------------------------------------222222------------------------------------

gsap.fromTo(".video-box-2",
  {
    opacity:0
  },
  {
    scrollTrigger:{
      trigger:".video-box-2",
      toggleActions: "play none resume none",
      start:"0% top",
      end:"1% top",
      scrub: true,

      // markers:true,    //@@@
      id:"show2"
    },
    opacity:1
  });

  gsap.fromTo(".group-2",
  {y:"50vh", opacity:0},
  {
    scrollTrigger:{
      trigger:".video-box-2",
      toggleActions: "play none resume none",
      start:"0 top",
      end:"40% top",
      // end:"20% top",
      scrub: true,

      // markers:true,    //@@@
      // id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });

let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-box-2",
      start: "top top",
      end: "350% top",
      // end: "200% top",
      scrub: true,
      pin: ".video-box-2",
      // markers: true,    //@@@
    //   duration:5000
    }
  });

  gsap.fromTo(".group-2",
  {y:0,opacity:1},
  {
    scrollTrigger:{
      trigger:"#p1-2",
      toggleActions: "play none resume none",
      start:"320% top",
      end:"350% top",
      // start:"180% top",
      // end:"200% top",
      scrub: true,

      // markers:true,    //@@@
      id:"t-up2"

    },
    y:"-50vh",
    opacity:0,

    duration: 50,
  });

  //------------------------------------33333------------------------------------

gsap.fromTo(".video-box-3",
{opacity:0},
{
  scrollTrigger:{
    trigger:".video-box-3",
    toggleActions: "play none resume none",
    start:"0% top",
    end:"1% top",
    scrub: true,

    // markers:true,    //@@@
    id:"show2"
  },
  opacity:1
});

gsap.fromTo(".group-3",
{y:"50vh", opacity:0},
{
  scrollTrigger:{
    trigger:".video-box-3",
    toggleActions: "play none resume none",
    start:"0 top",
    // end: () => "+=" + document.querySelector(".artic-img").offsetWidth + " center",
    end:"40% top",
    scrub: true,
    // ease: "back",

    // markers:true,    //@@@
    id:"t-up"
  },
  y:0,
  opacity:1,
  duration: 50,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-box-3",
    start: "top top",
    end: "350% top",
    // end: "200% top",
    scrub: true,
    pin: ".video-box-3",
    // markers: true,    //@@@
  //   duration:5000
  }
});

gsap.fromTo(".group-3",
{y:0,opacity:1},
{
  scrollTrigger:{
    trigger:"#p1-3",
    toggleActions: "play none resume none",
    start:"320% top",
    end:"350% top",
    // start:"180% top",
    // end:"200% top",
    scrub: true,

    // markers:true,    //@@@
    id:"t-up3"

  },
  y:"-50vh",
  opacity:0,

  duration: 50,
});
//-----------------------------------444-black-box------------------------------------
  
  gsap.fromTo(".black-box",
  {
    opacity:0
  },
  {
    scrollTrigger:{
      trigger:".black-box",
      toggleActions: "play none resume none",
      start:"0% top",
      end:"-1% top",
      scrub: true,
      // ease: "back",

      // markers:true,    //@@@
      id:"show4"
    },
    opacity:1
  });

  
  gsap.fromTo(".group-4",
  {y:"50vh", opacity:0},
  {
    scrollTrigger:{
      trigger:".black-box",
      toggleActions: "play none resume none",
      start:"0 top",
      end:"40% top",
      // end:"20% top",
      scrub: true,

      // markers:true,    //@@@
      // id:"t-up"
    },
    y:0,
    opacity:1,
    duration: 50,
  });

let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".black-box",
      start: "top top",
      end: "500% top",
      // end: "300% top",
      scrub: true,
      pin: ".black-box",
      // markers: true,    //@@@
    //   duration:5000
    }
  });
  gsap.fromTo(".group-4",
{y:0,opacity:1},
{
  scrollTrigger:{
    trigger:"#p1_scan",
    toggleActions: "play none resume none",
    start:"5200% top",
    end:"5500% top",
    // start:"3200% top",
    // end:"3500% top",
    scrub: true,

    // markers:true,    //@@@
    id:"t-up4"

  },
  y:"-50vh",
  opacity:0,

  duration: 50,
});
//------------------------------------555555------------------------------------

gsap.fromTo(".video-box-5",
{
  opacity:0
},
{
  scrollTrigger:{
    trigger:".video-box-5",
    toggleActions: "play none resume none",
    start:"0% top",
    end:"1% top",
    scrub: true,

    // markers:true,    //@@@
    id:"show5"
  },
  opacity:1
});

gsap.fromTo(".group-5",
{y:"50vh", opacity:0},
{
  scrollTrigger:{
    trigger:".video-box-5",
    toggleActions: "play none resume none",
    start:"0 top",
    end:"40% top",
    // end:"20% top",
    scrub: true,

    // markers:true,    //@@@
    id:"t-up5"
  },
  y:0,
  opacity:1,
  duration: 50,
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-box-5",
    start: "top top",
    end: "350% top",
    scrub: true,
    pin: ".video-box-5",
    // markers: true,    //@@@
  //   duration:5000
  }
});

  p1_1.onloadedmetadata = function () {
    tl1.to(p1_1, { currentTime: p1_1.duration });
  };
  p1_2.onloadedmetadata = function () {
    tl2.to(p1_2, { currentTime: p1_2.duration });
  };
  p1_3.onloadedmetadata = function () {
    tl3.to(p1_3, { currentTime: p1_3.duration });
  };
  p1_scan.onloadedmetadata = function () {
    tl4.to(p1_scan, { currentTime: p1_scan.duration });
  };
  p1_5.onloadedmetadata = function () {
    tl5.to(p1_5, { currentTime: p1_5.duration });
  };

 
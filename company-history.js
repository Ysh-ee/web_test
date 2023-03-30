


gsap.registerPlugin(ScrollTrigger);
console.clear();

// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

let scrollYears = gsap.to(".his-scroll-years", {
    xPercent: -350,
    ease: "none", 
    scrollTrigger: {
    //   trigger: ".his-block",
    //   pin: ".his-block",
      scrub: 1,
    //   snap:0.094,
      //snap: directionalSnap(1 / (sections.length - 1)),
    //   start: "10% top",
      end: "+=300%",
    start: "bottom bottom",
    // end: "bottom center",
      // markers:true    //@@@
    }
  });


// let scrollYears = gsap.to(".his-scroll-years", {
//     xPercent: -350,
//     ease: "none", 
//     scrollTrigger: {
//     //   trigger: ".his-block",
//     //   pin: ".his-block",
//       scrub: 1,
//       //snap: directionalSnap(1 / (sections.length - 1)),
//     //   start: "10% top",
//       end: "+=300%",
//     start: "bottom bottom",
//     // end: "bottom center",
//     //   markers:true    //@@@
//     }
//   });

let scrollPics = gsap.to(".his-scroll-pics", {
    xPercent: -85,
    ease: "none", 
    scrollTrigger: {
      trigger: ".his-block",
      pin: ".his-block",
      scrub: 1,
      end: "+=300%",
    start: "bottom bottom",
    // end: "bottom center",
      // markers:true    //@@@
    }
  });


  //-----o
  const cirs = gsap.utils.toArray('.cir-red');
  cirs.forEach(cir =>{
    gsap.to(cir, { 
        scrollTrigger: {
          trigger: cir,
          containerAnimation: scrollPics,
          scrub: true,
          toggleClass: "active",
          start: "left center",
          end: "1200% left",
          // markers:true,    //@@@
        
        // id: i
        }
      })
  });
  //--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------

// let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

// const spacing = 0.2,    // spacing of the cards (stagger)
// 	snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
// 	cards = gsap.utils.toArray('.his-scroll-years .his-year'),
// 	seamlessLoop = buildSeamlessLoop(cards, spacing),
// 	scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
// 		totalTime: 0,
// 		duration: 0.5,
// 		ease: "power3",
// 		paused: true
// 	}),
// 	trigger = ScrollTrigger.create({
//         trigger: ".his-block",
// 		start: "bottom bottom",
//         // containerAnimation: scrollPics,

// 		onUpdate(self) {
// 			// if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
// 			// 	wrapForward(self);
// 			// } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
// 			// 	wrapBackward(self);
// 			// } else {
//         scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
// 				scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
// 				self.wrapping = false;
// 			// }
// 		},
// 		end: "+=1500",
// 		// pin: ".his-block",
//     markers:true,    //@@@

// 	});

// function scrubTo(totalTime) { // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
// 	let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
// 	if (progress > 1) {
// 		// wrapForward(trigger);
// 	} else if (progress < 0) {
// 		// wrapBackward(trigger);
// 	} else {
// 		trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
// 	}
// }

// // document.querySelector(".next").addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
// // document.querySelector(".prev").addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));

// function buildSeamlessLoop(items, spacing) {
// 	let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
// 		startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
// 		loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
// 		rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
// 		seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
// 			paused: true,
// 			repeat: -0, // to accommodate infinite scrolling/looping ((-1
// 			// onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
// 			// 	this._time === this._dur && (this._tTime += this._dur - 0.01);
// 			// }
// 		}),
// 		l = items.length + overlap * 2,
// 		time = 0,
// 		i, index, item;

// 	// set initial state of items
// 	gsap.set(items, {xPercent: 400, opacity: 0,	scale: 0});

// 	// now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
// 	for (i = 0; i < l; i++) {
// 		index = i % items.length;
// 		item = items[index];
// 		time = i * spacing;
// 		rawSequence.fromTo(item, {scale: 1, opacity: 0, color:"black",}, 
//                                  {scale: 1, opacity: 1, color:"#d61f26", 
//                                   zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}
//                                  , time)
// 		           .fromTo(item, {xPercent: 400}, 
//                                  {xPercent: -400, duration: 1, ease: "none", immediateRender: false},
//                                   time);
// 		// i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
// 	}
	
// 	// here's where we set up the scrubbing of the playhead to make it appear seamless. 
// 	rawSequence.time(startTime);
// 	seamlessLoop.to(rawSequence, {
// 		time: loopTime,
// 		duration: loopTime - startTime,
// 		ease: "none"
// 	}).fromTo(rawSequence, {time: overlap * spacing + 1}, {
// 		time: startTime,
// 		duration: startTime - (overlap * spacing + 1),
// 		immediateRender: false,
// 		ease: "none"
// 	});
// 	return seamlessLoop;
// }
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//---------------------------------line anim--start--------------------------------


gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".his-1",
      scrub: true,
      containerAnimation: scrollPics,
      start: "160% center",
      end: "180% center",
    id:"22-1",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".his-2",
      scrub: true,
      containerAnimation: scrollPics,
      start: "160% center",
      end: "170% center",
    id:"22-2",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-3", {
    scrollTrigger: {
      trigger: ".his-3",
      scrub: true,
      containerAnimation: scrollPics,
      start: "180% center",
      end: "200% center",
    id:"22-3",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------21
  gsap.from(".line-4", {
    scrollTrigger: {
      trigger: ".his-4",
      scrub: true,
      containerAnimation: scrollPics,
      start: "140% center",
      end: "160% center",
    id:"21-1",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-5", {
    scrollTrigger: {
      trigger: ".his-5",
      scrub: true,
      containerAnimation: scrollPics,
      start: "190% center",
      end: "210% center",
    id:"21-2",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

   //-------------20
   gsap.from(".line-6", {
    scrollTrigger: {
      trigger: ".his-6",
      scrub: true,
      containerAnimation: scrollPics,
      start: "160% center",
      end: "180% center",
    id:"20-1",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-7", {
    scrollTrigger: {
      trigger: ".his-7",
      scrub: true,
      containerAnimation: scrollPics,
      start: "140% center",
      end: "160% center",
    id:"20-2",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------19
  gsap.from(".line-8", {
    scrollTrigger: {
      trigger: ".his-8",
      scrub: true,
      containerAnimation: scrollPics,
      start: "150% center",
      end: "170% center",
    id:"19",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------18
  gsap.from(".line-9", {
    scrollTrigger: {
      trigger: ".his-9",
      scrub: true,
      containerAnimation: scrollPics,
      start: "370% center",
      end: "420% center",
    id:"18",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------17
  gsap.from(".line-10", {
    scrollTrigger: {
      trigger: ".his-10",
      scrub: true,
      containerAnimation: scrollPics,
      start: "160% center",
      end: "180% center",
    id:"17-1",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-11", {
    scrollTrigger: {
      trigger: ".his-11",
      scrub: true,
      containerAnimation: scrollPics,
      start: "130% center",
      end: "150% center",
    id:"17-2",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });
  gsap.from(".line-12", {
    scrollTrigger: {
      trigger: ".his-12",
      scrub: true,
      containerAnimation: scrollPics,
      start: "180% center",
      end: "210% center",
    id:"17-3",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------14
  gsap.from(".line-13", {
    scrollTrigger: {
      trigger: ".his-13",
      scrub: true,
      containerAnimation: scrollPics,
      start: "220% center",
      end: "250% center",
    id:"14",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------13
  gsap.from(".line-14", {
    scrollTrigger: {
      trigger: ".his-14",
      scrub: true,
      containerAnimation: scrollPics,
      start: "120% center",
      end: "150% center",
    id:"13",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------12
  gsap.from(".line-15", {
    scrollTrigger: {
      trigger: ".his-15",
      scrub: true,
      containerAnimation: scrollPics,
      start: "280% center",
      end: "320% center",
    id:"12",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });

  //-------------11
  gsap.from(".line-16", {
    scrollTrigger: {
      trigger: ".his-16",
      scrub: true,
      containerAnimation: scrollPics,
      start: "125% center",
      end: "135% center",
    id:"11",
    //   markers:true    //@@@
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none",
  });


// document.querySelector(".next").addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));

  //--------------------------TRIGGER CIRSSSSSSSSS-------------@@@@@@--------------
//   cirs.forEach((cir,i) =>{
//     gsap.to(".his-scroll-years", {
//         x: -1*i,
//         ease: "none", 
//         scrollTrigger: {
//           trigger: cir,
//           containerAnimation: scrollPics,
//           //   pin: ".his-block",
//         //   scrub: 1,
//         //   snap:0.094,
//           //snap: directionalSnap(1 / (sections.length - 1)),
//         //   start: "10% top",
//           end: "center center",
//         start: "bottom center",
//         // end: "bottom center",
//           markers:true    //@@@
//         }
//       });
//   })
  //--------------------------TRIGGER CIRSSSSSSSSS-------------@@@@@@--------------


  //----------------------xxx----------------------------------------
//   const years = gsap.utils.toArray('.his-year');
//   years.forEach(year =>{
//     gsap.to(year, { 
//         x: -200,
//         scrollTrigger: {
//           trigger: cir,
//           containerAnimation: scrollPics,
//           scrub: true,
//           toggleClass: "active",
//           start: "left center",
//           end: "1200% left",
//           markers:true,    //@@@
        
//         // id: i
//         }
//       })
//   });

// gsap.to(".his-scroll-years",{
//     x: "-33%",
//     scrollTrigger: {
//         trigger: '.cir-2',
//         containerAnimation: scrollPics,
//         scrub: true,
//     //   toggleClass: "active",
//         start: "left center",
//         end: "120% center",
//         markers:true,    //@@@
//     // id: "123"
//     }
// })
//ㅠㅠㅠㅠㅠㅠㅠㅠ
// gsap.to(".his-scroll-years",{
//     x: "-66%",
//     scrollTrigger: {
//         trigger: '.cir-3',
//         containerAnimation: scrollPics,
//         scrub: true,
//     //   toggleClass: "active",
//         start: "left center",
//         end: "120% center",
//         markers:true,    //@@@
//     // id: "123"
//     }
// })

//------------------------------------------------------

//년도
// ScrollTrigger.create({
//     trigger: ".first",
//     // pin:".his-scroll-years",
//     containerAnimation: scrollPics,
//     toggleClass: "active",
//     start: "-20% center",
//     end: "120% center",
//     markers:true,    //@@@
    
//     id: "2022"
//   });



  ScrollTrigger.create({
    trigger: ".year21",
    containerAnimation: scrollYears,
    toggleClass: "active",
    start: "40% center",
    end: "120% center",
    // markers:true,    //@@@
    id: "21"
  });

  ScrollTrigger.create({
    trigger: ".year20",
    containerAnimation: scrollYears,
    toggleClass: "active",
    start: "40% center",
    end: "120% center",
    // markers:true,    //@@@
    id: "20"
  });



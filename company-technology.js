gsap.registerPlugin(ScrollTrigger);
// ScrollToPlugin


//   let panelsSection = document.querySelector("#panels"),
// 	panelsContainer = document.querySelector("#panels-container"),
// 	tween;

// document.querySelectorAll(".item").forEach(anchor => {
// 	anchor.addEventListener("click", function(e) {
// 		e.preventDefault();
// 		let targetElem = document.querySelector(e.target.getAttribute("href")),
// 			y = targetElem;
// 		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
// 			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
// 				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
// 			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
// 		}
// 		gsap.to(window, {
// 			scrollTo: {
// 				y: y,
// 				autoKill: false
// 			},
// 			duration: 1
// 		});
// 	});
// });

// /* Panels */
// const panels = gsap.utils.toArray("#panels-container .panel");
// tween = gsap.to(panels, {
// 	xPercent: -100 * ( panels.length - 1 ),
// 	ease: "none",
// 	scrollTrigger: {
// 		trigger: "#panels-container",
// 		pin: true,
// 		start: "bottom bottom",
// 		scrub: 0.5,
// 		// snap: {
// 		// 	snapTo: 1 / (panels.length - 1),
// 		// 	inertia: false,
// 		// 	duration: {min: 0.1, max: 0.1}
// 		// },
// 		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth),
//     markers:true    //@@@
// 	}
// });



let scrollTween = gsap.to(".hori-scroll", {
  xPercent: -1830,
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".tec-block",
    pin: ".tec-block",
    scrub: 0.5,
    // duration:1000,
    //snap: directionalSnap(1 / (sections.length - 1)),
  //   start: "10% top",
    end: "+=4000",
  start: "bottom bottom",
    // markers:true    //@@@
  }
});
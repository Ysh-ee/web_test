gsap.registerPlugin(ScrollTrigger);

let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

const spacing = 0.190,    // spacing of the cards (stagger)
	snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
	cards = gsap.utils.toArray('.cards li'),
	texts = gsap.utils.toArray('.cards li div'),
	seamlessLoop = buildSeamlessLoop(cards, spacing, texts),
	
	scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
		totalTime: 0,
		duration: 0.5,
		ease: "slow",
		paused: true
	}),
	trigger = ScrollTrigger.create({
		start: ".card-scroll",
		onUpdate(self) {
			console.log(cards.length)
			scrub.vars.totalTime = snap((iteration + self.progress) * (cards.length / 10) -0.2);
			scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
		},
		pin: ".card-scroll",
		end:"300% top",
        // markers:true    //@@@
	}); 

function buildSeamlessLoop(items, spacing, texts) {
	let overlap = Math.ceil(1 / spacing ), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
		startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
		loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
		rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
		seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
			paused: true,
			repeat: -1, // to accommodate infinite scrolling/looping
			onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
				this._time === this._dur && (this._tTime += this._dur - 0.01);
			}
		}),
		l = items.length + overlap * 2,
		time = 0,
		i, index, item;
		console.log("+");

	// set initial state of items
	gsap.set(items, {xPercent: 400, opacity: 0,	scale: 0.53});

	// now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
	for (i = 0; i < l; i++) {
		text = texts[index];
		index = i % items.length;
		item = items[index];
		time = i * spacing;
		rawSequence.fromTo(item, 
							{scale: 0.53, opacity: 0}, 
							{scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}, 
							time)
		           .fromTo(item, 
							{xPercent: 320}, 
							{xPercent: -320, duration: 1, ease: "none", immediateRender: false}, 
							time);
	}
	
	rawSequence.time(startTime);
	seamlessLoop.to(rawSequence, {
		time: loopTime,
		duration: loopTime - startTime,
		ease: "none"
	})
	.fromTo(rawSequence, {time: overlap * spacing + 1}, {
		time: startTime,
		duration: startTime - (overlap * spacing + 1),
		immediateRender: false,
		ease: "none"
	});
	return seamlessLoop;
}
//   --------------------------------------------------scrollchange-------------------------------------

let blocks = gsap.utils.toArray("block"),
    currentBlock = blocks[0];

blocks.forEach((block, i) => {
  ScrollTrigger.create({
    trigger:".scroll-change-group",

	start: () => (i+7) * innerHeight + ((i+2)*(innerHeight*0.4)) +(innerHeight*0.1),
    end: () => (i+7) *innerHeight + ((i+2)*(innerHeight*0.4)) +(innerHeight*0.8),

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
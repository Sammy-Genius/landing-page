let tl = gsap.timeline();

tl.from(".logo", {duration: 1, x: -40, opacity:0, ease: Power2.easeInOut})
.from("ul", {duration: 1, x: 40, opacity:0, stagger:0.5, ease: Power2.easeInOut})
.from("h1", {duration: 1, opacity: 0, y: -80, stagger:0.5, ease: "bounce"})
.from(".pics", {duration: 1, opacity: 0, x: 80, ease: Power2.easeInOut}, "-=.5")
.from("p", {duration: 1, opacity: 0, x: 80, scale: .3, ease: Power2.easeInOut}, "-=1")
.from("h3", {duration: 1.2, opacity: 0, scale: .3, ease: "back"})
.from("#img1", {duration: 1, rotateY:90}, "-=.5")
.from("#img1", {duration: 1, rotateX:180}, "-=.5")
.from("#img4", {duration: 1, rotateX:180}, "+=.5")
.from("#img4", {duration: 1, rotateY:360}, "+=.5")
.from("#img2", {duration: 1, rotateX:360}, "+=.5")
.from("#img2", {duration: 1, rotateY:180}, "+=.5")
.from("#img3", {duration: 1, opacity:0, scale:0.3, ease:"elastic"}, "+=.5")
.from("#img3", {duration: 1, rotateY:180}, "+=.5")



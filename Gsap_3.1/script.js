gsap.to("#page2 h2", {
  transform: "translateX(-160%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 5,
    pin: true,
  },
});

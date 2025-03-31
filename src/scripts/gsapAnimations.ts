import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function setupScrollAnimations() {

  gsap.from(".fade-up", {
    opacity: 0,
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".fade-up",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  })

  gsap.from(".fade-down", {
    opacity: 0,
    y: -150,
    duration: 1,
    scrollTrigger: {
      trigger: ".fade-down",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  })

  gsap.to(".sticky-section", {
    scrollTrigger: {
      trigger: ".sticky-section",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1,
    }
  })

  gsap.from(".slide-left-to-right", {
    opacity: 0,
    x: -200, // Move from left (-100px)
    duration: 1,
    scrollTrigger: {
      trigger: ".slide-left-to-right",
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  })
  
  gsap.from(".slide-right-to-left", {
    opacity: 0,
    x: 200,
    duration: 1,
    scrollTrigger: {
      trigger: ".slide-right-to-left",
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  })
}
import { tns } from "/node_modules/tiny-slider/src/tiny-slider"

var aboutSlider = tns({
  container: '.about-slider',
  items: 12,
  slideBy: 1,
  speed: 400,
  autoplay: true,
  nav: false,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    320: {
      edgePadding: 10,
      gutter: 10,
      items: 1
    },
    768: {
      gutter: 15,
      items: 2
    },
    960: {
      items: 3,
      edgePadding: 0,
      gutter: 0
    },
    1024: {
      items: 4
    },
    1280: {
      items: 5
    },
    1360: {
      items: 6
    }
  }
});
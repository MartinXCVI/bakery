import { tns } from "tiny-slider";
import type { TinySliderInstance, TinySliderSettings } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css"; // Tiny Slider CSS


const sliderSettings: TinySliderSettings = {
  container: '.index-slider',
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
      edgePadding: 5,
      gutter: 10
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
}

const indexSlider: TinySliderInstance = tns(sliderSettings)
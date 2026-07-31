import { CarouselSettings } from "@/lib/carousel";

export function generateHTML(settings: CarouselSettings) {
    return `<div class="carousel">
  <div class="carousel-track">
    <div class="slide">Slide 1</div>
    <div class="slide">Slide 2</div>
    <div class="slide">Slide 3</div>
  </div>
</div>`;
}

export function generateCSS(settings: CarouselSettings) {
    return `.carousel{
  width:${settings.width}px;
  overflow:hidden;
}

.carousel-track{
  display:flex;
  gap:${settings.gap}px;
}

.slide{
  width:${settings.width}px;
  height:${settings.height}px;
  border-radius:${settings.borderRadius}px;
  background:#3b82f6;
}`;
}

export function generateJS(settings: CarouselSettings) {
    return `const options = {
  autoplay: ${settings.autoplay},
  navigation: ${settings.navigation},
  pagination: ${settings.pagination},
  infinite: ${settings.infinite},
  speed: ${settings.speed}
};

console.log(options);`;
}
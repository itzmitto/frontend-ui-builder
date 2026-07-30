export type CarouselSettings = {
  slides: number;
  gap: number;
  width: number;
  height: number;
  borderRadius: number;
  autoplay: boolean;
  navigation: boolean;
  pagination: boolean;
  infinite: boolean;
  speed: number;
};

export const defaultCarouselSettings: CarouselSettings = {
  slides: 3,
  gap: 24,
  width: 320,
  height: 220,
  borderRadius: 16,
  autoplay: false,
  navigation: true,
  pagination: true,
  infinite: true,
  speed: 3000,
};
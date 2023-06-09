export const utilService = {
  isFromTwoWeeksAgo,
  getSliderSettings,
};

function isFromTwoWeeksAgo(date: Date): boolean {
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  return +date >= twoWeeksAgo.getTime();
}

interface SliderSettings {
  arrows: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: ResponsiveSettings[];
}

interface ResponsiveSettings {
  breakpoint: number;
  settings: SliderSettings;
}

function getSliderSettings(): SliderSettings {
  const settings: SliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [],
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [],
        },
      },
    ],
  };
  return settings;
}

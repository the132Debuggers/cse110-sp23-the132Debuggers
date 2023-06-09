const images = [
  './images/backgrounds/choose-house.webp',
  './images/backgrounds/home.webp',
  './images/backgrounds/sort-or-choose.webp',
  './images/backgrounds/sorting-hat.webp',

  './images/gryffindor/common-room.webp',
  './images/hufflepuff/common-room.webp',
  './images/ravenclaw/common-room.webp',
  './images/slytherin/common-room.webp',

  './images/gryffindor/avatar.webp',
  './images/hufflepuff/avatar.webp',
  './images/ravenclaw/avatar.webp',
  './images/slytherin/avatar.webp',
];

export default function preload() {
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

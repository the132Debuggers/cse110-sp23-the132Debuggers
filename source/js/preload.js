const images = ['/source/images/backgrounds/choose-house.webp',
  '/source/images/backgrounds/home.webp',
  '/source/images/backgrounds/sort-or-choose.webp',
  '/source/images/backgrounds/sorting-hat.webp',

  '/source/images/gryffindor/common-room.webp',
  '/source/images/hufflepuff/common-room.webp',
  '/source/images/ravenclaw/common-room.webp',
  '/source/images/slytherin/common-room.webp',

  '/source/images/gryffindor/avatar.webp',
  '/source/images/hufflepuff/avatar.webp',
  '/source/images/ravenclaw/avatar.webp',
  '/source/images/slytherin/avatar.webp',
];

export default function preload() {
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

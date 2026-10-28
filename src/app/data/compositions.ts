export type CompositionItem = {
  title: string;
  period: string;
  description: string;
  audioPath?: string;
  imagePath?: string;
  imagePosition?: string;
  link?: string;
  linkLabel?: string;
};

export const compositionItems: CompositionItem[] = [
  {
    title: 'Misty Forest',
    period: 'December 2024',
    description: 'Live sound processing in Max/MSP with clarinet material and MIDI keyboard control.',
    imagePath: '/images/mistyforest.JPG',
    link: 'https://drive.google.com/file/d/1WbNbeAdn0Ur-jCnHQwMYf94Q1NTPanlA/view?usp=sharing',
    linkLabel: 'Watch Video',
  },
  {
    title: 'Lonely Travel',
    period: 'September 2022',
    description: 'Original experimental piece depicting a solitary journey.',
    imagePath: '/images/lonelytravel.png',
    imagePosition: 'center 32%',
    link: 'https://soundcloud.com/x3kus4lyferg/lonely-travelzixuan-guo/s-p1dvk2QNHXc?si=eb69c73e05524f0981aeb11e728773dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    linkLabel: 'SoundCloud',
  },
  {
    title: 'Dancing in the Rain',
    period: 'April 2023',
    description: 'Instrumental piano composition inspired by a rainy city walk.',
    imagePath: '/images/dancingintherain.jpg',
    link: 'https://music.163.com/#/song?id=2037854978',
    linkLabel: 'NetEase Music',
  },
  {
    title: 'Breaking Free',
    period: 'January 2024',
    description: 'Early EDM production experiment combining live guitar, vocals, and electronic arrangement.',
    imagePath: '/images/breakingfree.jpeg',
    audioPath: '/audio/Breaking%20Free%E6%B7%B7%E9%9F%B324.1.12.mp3',
  },
  {
    title: 'Playing Bass in a Mountain',
    period: 'February 2024',
    description: 'Mixed media playing with bass guitar and MIDI keyboard.',
    imagePath: '/images/PlayingBass.png',
    link: 'https://drive.google.com/file/d/1VccAunN-d9St-IpUV4t4oykC-xq7hWeY/view',
    linkLabel: 'Watch Video',
  },
  {
    title: 'The Evil Within 2 Trailer Soundtrack',
    period: 'October 2023',
    description: 'Original soundtrack composition.',
    imagePath: '/images/theevilwithin2.jpeg',
    link: 'https://drive.google.com/file/d/1vblBLnAz_0w1KRGSQpfg43YEfnx_ey83/view',
    linkLabel: 'Watch Video',
  },
  {
    title: 'Walking Through the Dark',
    period: 'November 2024',
    description: 'Code music composed and played in SuperCollider.',
    imagePath: '/images/walkingthroughthedark.png',
    link: 'https://drive.google.com/file/d/1M4xdQEVmX5z_XDGprVyPCwwtLLL8Ll4v/view',
    linkLabel: 'Watch Video',
  },
];

export const featuredCompositionTitles = [
  'Misty Forest',
  'Lonely Travel',
  'Playing Bass in a Mountain',
];

export const featuredCompositionItems = featuredCompositionTitles
  .map((title) => compositionItems.find((item) => item.title === title))
  .filter((item): item is CompositionItem => Boolean(item));

export type AudioItem = {
  title: string;
  period: string;
  note: string;
  audioPath: string;
  imagePath?: string;
};

export const audioItems: AudioItem[] = [
  {
    title: 'String Trio',
    period: 'June 4, 2025',
    note: 'Stereo recording at Dolan recording studio',
    audioPath: '/audio/StringTrio.mp3',
    imagePath: '/images/stringTrio.png',
  },
  {
    title: 'Piano Solo',
    period: 'June 5, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/PianoSolo.mp3',
    imagePath: '/images/pianoSolo.png',
  },
  {
    title: 'Piano Trio',
    period: 'June 6, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/PianoTrio.mp3',
    imagePath: '/images/pianoTrio.png',
  },
  {
    title: 'Guitar Violin Tango',
    period: 'June 10, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/GuitarViolinTango.mp3',
    imagePath: '/images/guitarViolinTango.png',
  },
  {
    title: 'Percussion Trio',
    period: 'June 11, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/PercussionTrio.mp3',
    imagePath: '/images/percussionTrio.png',
  },
  {
    title: 'Jazz Organ',
    period: 'June 12, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/JazzOrgan.mp3',
    imagePath: '/images/jazzOrgan.png',
  },
  {
    title: 'Marimba Quintet',
    period: 'June 17, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/MarimbaQuintet.mp3',
    imagePath: '/images/MarimbaQuintet.png',
  },
  {
    title: 'Wind Quintet',
    period: 'June 18, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/WindQuentet.mp3',
    imagePath: '/images/windquintet.png',
  },
  {
    title: 'Jazz Sextet',
    period: 'June 23, 2025',
    note: '3D recording at 370 Jay Street',
    audioPath: '/audio/JazzSextet.mp3',
    imagePath: '/images/JazzSextet.png',
  },
  {
    title: 'Eastern Folk',
    period: 'June 24, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/EasternFolk.mp3',
    imagePath: '/images/EasternFolk.png',
  },
  {
    title: 'Quartango',
    period: 'June 25, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/Quartango%20.mp3',
    imagePath: '/images/Quartango.png',
  },
  {
    title: 'Brass Quartet',
    period: 'June 26, 2025',
    note: '3D recording at Paulson Center',
    audioPath: '/audio/BrassQuartet.mp3',
    imagePath: '/images/BrassQuartet.png',
  },
];

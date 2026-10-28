export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

export const galleryImages: GalleryImage[] = [
  { src: '/images/gallery/IMG_7437.jpeg', alt: 'Gallery Photo 1', title: 'Gallery Photo 1' },
  { src: '/images/gallery/IMG_7436.jpeg', alt: 'Gallery Photo 2', title: 'Gallery Photo 2' },
  { src: '/images/gallery/IMG_4008.jpg', alt: 'Gallery Photo 3', title: 'Gallery Photo 3' },
  { src: '/images/gallery/IMG_4645.jpg', alt: 'Gallery Photo 4', title: 'Gallery Photo 4' },
  { src: '/images/gallery/IMG_4691.jpeg', alt: 'Gallery Photo 5', title: 'Gallery Photo 5' },
  { src: '/images/gallery/IMG_4853.JPG', alt: 'Gallery Photo 6', title: 'Gallery Photo 6' },
  { src: '/images/gallery/IMG_4965.JPG', alt: 'Gallery Photo 7', title: 'Gallery Photo 7' },
  { src: '/images/gallery/IMG_6764.jpeg', alt: 'Gallery Photo 9', title: 'Gallery Photo 9' },
  { src: '/images/gallery/IMG_6777.jpeg', alt: 'Gallery Photo 10', title: 'Gallery Photo 10' },
  { src: '/images/gallery/IMG_3581.JPG', alt: 'Gallery Photo 11', title: 'Gallery Photo 11' },
];

export const featuredGalleryImages = galleryImages.slice(0, 4);

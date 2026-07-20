import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Image } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent } from './ui/dialog';

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: '/images/gallery/IMG_7437.jpeg',
      alt: 'Gallery Photo 1',
      title: 'Gallery Photo 1',
    },
    {
      src: '/images/gallery/IMG_7436.jpeg',
      alt: 'Gallery Photo 2',
      title: 'Gallery Photo 2',
    },
    {
      src: '/images/gallery/IMG_4008.jpg',
      alt: 'Gallery Photo 3',
      title: 'Gallery Photo 3',
    },
    {
      src: '/images/gallery/IMG_4645.jpg',
      alt: 'Gallery Photo 4',
      title: 'Gallery Photo 4',
    },
    {
      src: '/images/gallery/IMG_4691.jpeg',
      alt: 'Gallery Photo 5',
      title: 'Gallery Photo 5',
    },
    {
      src: '/images/gallery/IMG_4853.JPG',
      alt: 'Gallery Photo 6',
      title: 'Gallery Photo 6',
    },
    {
      src: '/images/gallery/IMG_4965.JPG',
      alt: 'Gallery Photo 7',
      title: 'Gallery Photo 7',
    },
    {
      src: '/images/gallery/IMG_6764.jpeg',
      alt: 'Gallery Photo 9',
      title: 'Gallery Photo 9',
    },
    {
      src: '/images/gallery/IMG_6777.jpeg',
      alt: 'Gallery Photo 10',
      title: 'Gallery Photo 10',
    },
    {
      src: '/images/gallery/IMG_3581.JPG',
      alt: 'Gallery Photo 11',
      title: 'Gallery Photo 11',
    },
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 bg-[#0f0f12] relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 38, 53, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 38, 53, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center mb-8">
            <motion.div
              className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image size={28} className="text-primary" />
            </motion.div>
            <motion.h2
              className="text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gallery
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0, rotateY: 0 } : { opacity: 0, scale: 0.5, y: 50, rotateY: -15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.08,
                  ease: "easeOut"
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent flex items-end justify-center p-6 z-20"
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="text-white"
                    initial={false}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {image.title}
                  </motion.h3>
                </motion.div>
                
                {/* Border animation on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-lg z-30 pointer-events-none"
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Dialog with animation */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedImage && (
              <ImageWithFallback
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            )}
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

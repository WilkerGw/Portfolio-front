// src/components/ProjectModal.tsx

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/data/projects';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (project) {
      setCurrentIndex(0);
    }
  }, [project]);

  if (!project) {
    return null;
  }

  // A galeria agora é composta apenas pelo array de imagens
  const images = project.images || [];
  const hasMultipleItems = images.length > 1;

  const paginate = (newDirection: number) => {
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  // A função isVideo foi removida

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-3 text-gray-300 bg-black/50 rounded-full hover:bg-white hover:text-black transition-colors"
            aria-label="Fechar modal"
          >
            <X size={28} />
          </button>

          {hasMultipleItems && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-20 p-3 text-gray-300 bg-black/50 rounded-full hover:bg-white hover:text-black transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <div
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence initial={false} custom={1}>
              <motion.div
                key={currentIndex}
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full flex items-center justify-center"
              >
                {/* O código agora renderiza apenas a tag <img> */}
                <img
                  src={images[currentIndex]}
                  alt={`${project.title} - Imagem ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

           {hasMultipleItems && (
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    paginate(1);
                }}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-20 p-3 text-gray-300 bg-black/50 rounded-full hover:bg-white hover:text-black transition-colors"
                aria-label="Próximo"
            >
                <ChevronRight size={32} />
            </button>
           )}

            {hasMultipleItems && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 px-3 py-1 text-white bg-black/50 rounded-full text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
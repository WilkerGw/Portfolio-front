// src/components/ProjectModal.tsx

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '@/data/projects'; // Importando o tipo

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose} // Fecha o modal ao clicar no fundo
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl h-[90vh] bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-lg shadow-green-500/20 overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Evita que o clique dentro do modal o feche
          >
            {/* Botão de Fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-gray-400 bg-gray-800/50 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>

            {/* Conteúdo do Modal */}
            <div className="p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>

              {/* Vídeo Principal */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <video
                  src={project.ProjectVideo}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover aspect-video bg-black"
                />
              </div>

              {/* Galeria de Imagens */}
              {project.images && project.images.length > 0 && (
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.images.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="rounded-lg overflow-hidden"
                      >
                         <img
                            src={img}
                            alt={`${project.title} - Imagem ${index + 1}`}
                            className="w-full h-full object-cover aspect-video"
                         />
                      </motion.div>
                    ))}
                 </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
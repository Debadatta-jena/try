"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "@/lib/types";
import { galleryPhotos } from "@/data/gallery";

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'images' | 'categories'>('images');
  const photos = galleryPhotos;

  const categories = [...new Set(photos.map((p) => p.category))];

  const filtered = activeCategory
    ? photos.filter((p) => p.category === activeCategory)
    : photos;

  const displayPhotos = viewMode === 'images' ? photos : filtered;
  const currentIndex = selectedPhoto ? displayPhotos.findIndex((p) => p.id === selectedPhoto.id) : -1;

  function navigate(direction: number) {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < displayPhotos.length) {
      setSelectedPhoto(displayPhotos[newIndex]);
    }
  }

  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Photo Gallery</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cherished moments captured through the years
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <button
              onClick={() => {
                setViewMode('images');
                setActiveCategory(null);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'images'
                  ? 'bg-white text-slate-900'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              Image Section
            </button>
            <button
              onClick={() => setViewMode('categories')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'categories'
                  ? 'bg-white text-slate-900'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              Category Section
            </button>
          </motion.div>
          <div className="text-center mb-10 text-sm text-white/60 max-w-3xl mx-auto px-4 sm:px-0">
            {viewMode === 'images'
              ? 'All photos from the image folder are shown here. Later you can classify them into categories.'
              : 'Select a category to filter the gallery after you have classified the images.'}
          </div>
          {viewMode === 'categories' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !activeCategory
                    ? 'bg-white text-slate-900'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                    activeCategory === cat
                      ? 'bg-white text-slate-900'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}

          {displayPhotos.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-white/70">
              No family photos found yet. Add images to the <code className="rounded bg-slate-900 px-2 py-1">public/images/</code> folder and update the gallery data.
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedPhoto(photo)}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer group"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-sm font-semibold bg-black/40 rounded-full px-3 py-1">Click to view</span>
                    </div>
                    <span className="absolute top-3 left-3 text-xs bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1 text-white/80 capitalize">
                      {photo.category}
                    </span>
                    <span className="absolute top-3 right-3 text-xs text-white/60">{photo.date}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{photo.title}</h3>
                    <p className="text-white/60 text-sm line-clamp-2">{photo.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Lightbox */}
          <AnimatePresence>
            {selectedPhoto && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={() => setSelectedPhoto(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative max-w-3xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="absolute -top-12 right-0 text-white/70 hover:text-white z-10"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  <div className="aspect-video rounded-2xl overflow-hidden mb-4 relative bg-black/10">
                    <Image
                      src={selectedPhoto.src}
                      alt={selectedPhoto.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => navigate(-1)}
                      disabled={currentIndex <= 0}
                      className="p-2 text-white/70 hover:text-white disabled:opacity-30"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <div className="text-center text-white flex-1">
                      <h3 className="text-xl font-semibold">{selectedPhoto.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{selectedPhoto.description}</p>
                      <p className="text-white/50 text-xs mt-1">{selectedPhoto.date} &middot; {selectedPhoto.category}</p>
                    </div>
                    <button
                      onClick={() => navigate(1)}
                      disabled={currentIndex >= displayPhotos.length - 1}
                      className="p-2 text-white/70 hover:text-white disabled:opacity-30"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </div>

                  <p className="text-center text-white/40 text-xs mt-4">
                    {currentIndex + 1} of {displayPhotos.length}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

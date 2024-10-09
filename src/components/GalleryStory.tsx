import React from 'react';

const GalleryStory: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-4xl mx-auto p-10 bg-white/70 backdrop-blur-sm rounded-lg shadow-2xl">
        <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 text-center tracking-wide">
          Artistry Reimagined
        </h1>
        <div className="font-cormorant text-2xl md:text-3xl text-gray-700 space-y-6">
          <p className="text-center italic font-light">
            Where traditional craftsmanship meets digital innovation
          </p>
          <p className="text-center">
          Immerse yourself in an exquisite collection of art that redefines the boundaries of creativity. This gallery offers a unique experience, showcasing a carefully curated selection of works that seamlessly fuse classic artistic methods with the latest technological innovations. As you explore this collection, you'll discover how the timeless allure of traditional techniques can coexist with the dynamic potential of modern technology, resulting in art that captivates the senses and challenges the imagination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryStory;
import React from 'react'

export default function AboutTheArtist() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto"> {/* Increased max width from 3xl to 5xl */}
          <h2 className="font-cinzel text-2xl font-bold text-center mb-8 text-gray-800">The Artist Behind the Prompts</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="/images/me.png"
              alt="Programmer Portrait"
              className="rounded-full shadow-lg w-48 h-48 object-cover"
            />
            <div>
              <p className="font-cormorant text-2xl text-gray-600 mb-4">
                Meet Amir Koblyansky, a programmer with a passion for art. While he loved visiting galleries, his artistic skills were limited to doodles during coding sessions, often resulting in comical stick figures.
              </p>
              <p className="font-cormorant text-2xl text-gray-600 mb-4">
                One day, while tackling a tricky piece of code, Amir discovered Generative AI and thought, "What if I could use technology to express my artistic side?" Inspired, he began exploring AI art generation with Midjourney.
              </p>
              <p className="font-cormorant text-2xl text-gray-600">
                After experimenting, Amir created vibrant artworks that blended classic sophistication with modern creativity. Now, he proudly shares his whimsical creations, proving that even a programmer can embrace art through technology and humor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
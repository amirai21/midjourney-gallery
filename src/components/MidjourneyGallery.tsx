import React, { useState, useEffect } from 'react'
import Header from './Header'
import AboutTheArtist from './AboutTheArtist'
import Gallery from './Gallery'
import ArtPieceModal from './ArtPieceModal'
import GalleryStory from './GalleryStory'


interface ArtPieceType {
  id: number
  title: string
  description: string
  imageFileName: string // Changed from imageUrl to imageFileName
}

const artPieces: ArtPieceType[] = [
  {
    id: 1,
    title: "Neon Dreamscape",
    description: "A vibrant cityscape bathed in neon lights, reflecting a futuristic urban environment where technology and nature intertwine. A vibrant cityscape bathed in neon lights, reflecting a futuristic urban environment where technology and nature intertwine.",
    imageFileName: "pixel.png"
  },
  {
    id: 2,
    title: "Quantum Butterfly",
    description: "An ethereal butterfly with wings made of swirling galaxies, symbolizing the delicate balance between chaos and order in the universe.",
    imageFileName: "isacc_asimov_1.png"
  },
  {
    id: 3,
    title: "Cybernetic Oasis",
    description: "A lush oasis in the midst of a vast desert, where mechanical plants and robotic animals coexist with their organic counterparts.",
    imageFileName: "bar_3.png"
  },
  {
    id: 4,
    title: "Temporal Echoes",
    description: "Multiple versions of a person walking through a surreal landscape, each representing a different point in time, blurring the lines between past, present, and future.",
    imageFileName: "bibi_1.png"
  },
  {
    id: 5,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "machine_1.png"
  },
  {
    id: 6,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "with_dogs_2.png"
  },
  {
    id: 7,
    title: "Neon Dreamscape",
    description: "A vibrant cityscape bathed in neon lights, reflecting a futuristic urban environment where technology and nature intertwine.",
    imageFileName: "cat_2.png"
  },
  {
    id: 8,
    title: "Quantum Butterfly",
    description: "An ethereal butterfly with wings made of swirling galaxies, symbolizing the delicate balance between chaos and order in the universe.",
    imageFileName: "chuck_hacker.png"
  },
  {
    id: 9,
    title: "Cybernetic Oasis",
    description: "A lush oasis in the midst of a vast desert, where mechanical plants and robotic animals coexist with their organic counterparts.",
    imageFileName: "dogs_at_train_1.png"
  },
  {
    id: 10,
    title: "Temporal Echoes",
    description: "Multiple versions of a person walking through a surreal landscape, each representing a different point in time, blurring the lines between past, present, and future.",
    imageFileName: "bar_1.png"
  },
  {
    id: 11,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "isacc_asimov_2.png"
  },
  {
    id: 12,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "little_redhead_birthday.png"
  },
  {
    id: 13,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "liz_in_train_1.png"
  },
  {
    id: 14,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "kite_1.png"
  },
  {
    id: 15,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "chihuauwa_1.png"
  },
  {
    id: 16,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "cat_1.png"
  },
  {
    id: 17,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "stalin_stalone_2.png"
  },
  {
    id: 18,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "island_1.png"
  },
  {
    id: 19,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "ukrainian_girl_2.png"
  },
  {
    id: 20,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "ukrainian_girl_3.png"
  },
  {
    id: 21,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "ukrainian_girl_4.png"
  },
  {
    id: 22,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "space_with_dogs_1.png"
  },
  {
    id: 23,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "stalin_stalone_1.png"
  },
  {
    id: 24,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "party.png"
  },
  {
    id: 25,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "bar_dogs_1.png"
  },
  {
    id: 26,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "cat_5.png"
  },
  {
    id: 27,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "elon_1.png"
  },
  {
    id: 28,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "forest_1.png"
  },
  {
    id: 29,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "island_1.png"
  },
  {
    id: 30,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "chihuahua_rocket_1.png"
  },
  {
    id: 31,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "johney_depp_1.png"
  },
  {
    id: 32,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "messi.png"
  },
  {
    id: 33,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "robot_1.png"
  },
  {
    id: 34,
    title: "Fractured Realms",
    description: "A landscape split into multiple floating islands, each representing a different biome or dimension, connected by ethereal bridges of light.",
    imageFileName: "ast_cat_1.png"
  },
  {
    id: 35,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "pink_dolphins.png"
  },
  {
    id: 36,
    title: "Bioluminescent Symphony",
    description: "An underwater scene where musical instruments are replaced by glowing sea creatures, creating a visual representation of an otherworldly melody.",
    imageFileName: "arnold_1.png"
  }
]

export default function MidjourneyGallery() {
  const [selectedPiece, setSelectedPiece] = useState<ArtPieceType | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Header scrollProgress={scrollProgress} />
      <GalleryStory />
      <Gallery 
        artPieces={artPieces.map(piece => ({ 
          ...piece, 
          imageUrl: `/images/midjourney/${piece.imageFileName}` 
        }))} 
        onSelectPiece={(piece) => setSelectedPiece(piece)} 
      />
      {selectedPiece && (
        <ArtPieceModal piece={selectedPiece} onClose={() => setSelectedPiece(null)} />
      )}
      <AboutTheArtist />
    </div>
  )
}
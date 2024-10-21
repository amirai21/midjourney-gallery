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
    title: "Pixel's Code",
    description: "A charming portrait of Pixel, a Cavalier King Charles Spaniel, on a coding session",
    imageFileName: "pixel.png"
  },
  {
    id: 2,
    title: "Asimov's Wisdom",
    description: "An insightful representation of Isaac Asimov, the legendary science fiction writer, standing with an air of contemplation, embodying his visionary mind and intellect.",
    imageFileName: "isacc_asimov_1.png"
  },
  {
    id: 3,
    title: "Bar Scene",
    description: "A lively and crowded bar scene, full of chatter and clinking glasses, bringing the sense of community and camaraderie in a cozy evening setting.",
    imageFileName: "bar_3.png"
  },
  {
    id: 4,
    title: "Bibi's Whiskey and Cigar",
    description: "A striking image of Benjamin Netanyahu, holding a glass of whiskey in one hand and a cigar in the other, exuding a sense of power and reflection.",
    imageFileName: "bibi_1.png"
  },
  {
    id: 5,
    title: "AI's Lonely Tears",
    description: "A melancholic portrayal of artificial intelligence, with glowing circuits and a human-like expression, conveying the sadness of being misunderstood in a digital world.",
    imageFileName: "machine_1.png"
  },
  {
    id: 6,
    title: "Commute with Companions",
    description: "A peaceful scene of a man sitting in a train cabin with his two loyal dogs by his side as he commutes to work, illustrating the quiet companionship of a morning routine.",
    imageFileName: "with_dogs_2.png"
  },
  {
    id: 7,
    title: "Curious Cat",
    description: "A whimsical portrait of a curious cat, gazing intently with bright eyes that reflect a mix of mischief and wonder, inviting you into its playful world.",
    imageFileName: "cat_2.png"
  },
  {
    id: 8,
    title: "Chuck Norris: Hacker Extraordinaire",
    description: "Chuck Norris, the legendary martial artist, dons a hacker persona, seated at a high-tech console, ready to infiltrate the digital world with his unparalleled skills.",
    imageFileName: "chuck_hacker.png"
  },
  {
    id: 9,
    title: "Dogs on the Train",
    description: "A surreal depiction of anthropomorphic dogs, with human bodies and dog heads, sitting in a train cabin, engaged in conversation as they head toward their next adventure.",
    imageFileName: "dogs_at_train_1.png"
  },
  {
    id: 10,
    title: "Futuristic Bar Line",
    description: "A vibrant futuristic bar scene with patrons in neon-lit attire, waiting in line to order drinks from a high-tech bartender in an otherworldly setting.",
    imageFileName: "bar_1.png"
  },
  {
    id: 11,
    title: "Asimov's Legacy",
    description: "Another portrayal of the influential science fiction writer Isaac Asimov, his figure bathed in thought as he navigates the vast universe of ideas and technology.",
    imageFileName: "isacc_asimov_2.png"
  },
  {
    id: 12,
    title: "Magical Birthday",
    description: "A little red-haired girl celebrates her birthday surrounded by magical creatures in a whimsical and enchanting atmosphere, full of wonder and joy.",
    imageFileName: "little_redhead_birthday.png"
  },
  {
    id: 13,
    title: "Liz’s Creepy Train Ride",
    description: "A scene of Liz sitting on a train with monsters lurking ominously behind her, turning an otherwise peaceful ride into a nightmare of fear and suspense.",
    imageFileName: "liz_in_train_1.png"
  },
  {
    id: 14,
    title: "Beach Kite Adventure",
    description: "A father and daughter walk along the beach, flying a kite, accompanied by their strange-looking cat, blending serenity and surrealism.",
    imageFileName: "kite_1.png"
  },
  {
    id: 15,
    title: "Chihuahua’s Revenge",
    description: "A tiny but fierce Chihuahua bites the finger of someone trying to pet it, showing that even the smallest of dogs have a fiery spirit.",
    imageFileName: "chihuauwa_1.png"
  },
  {
    id: 16,
    title: "The British Cat",
    description: "A regal British Shorthair cat with a dignified posture, representing the calm, cool, and collected demeanor of this iconic feline breed.",
    imageFileName: "cat_1.png"
  },
  {
    id: 17,
    title: "Not a Stalin",
    description: "A surreal image of a historical figure resembling Stalin, in a juxtaposition of strength and politics.",
    imageFileName: "stalin_stalone_2.png"
  },
  {
    id: 18,
    title: "Island Retreat",
    description: "A peaceful and secluded island surrounded by calm waters, offering a serene escape from the hustle of daily life.",
    imageFileName: "island_1.png"
  },
  {
    id: 19,
    title: "Ukrainian Pride",
    description: "A powerful image of a young Ukrainian girl in traditional clothing, representing her heritage and resilience.",
    imageFileName: "ukrainian_girl_2.png"
  },
  {
    id: 20,
    title: "Ukrainian Spirit",
    description: "A portrayal of a Ukrainian girl in traditional attire, standing proudly, symbolizing the strength and unity of her people.",
    imageFileName: "ukrainian_girl_3.png"
  },
  {
    id: 21,
    title: "Ukrainian Dreams",
    description: "An ethereal image of a Ukrainian girl in traditional dress, representing hope, courage, and the dreams of a brighter future.",
    imageFileName: "ukrainian_girl_4.png"
  },
  {
    id: 22,
    title: "Space Family Reunion",
    description: "A futuristic scene of someone piloting a spaceship with their dogs, traveling to another planet to visit their family, mixing technology and warmth.",
    imageFileName: "space_with_dogs_1.png"
  },
  {
    id: 23,
    title: "Stallone-Stalin",
    description: "A surreal and humorous image of a hybrid between Sylvester Stallone and Joseph Stalin, blending the worlds of Hollywood action and political authority.",
    imageFileName: "stalin_stalone_1.png"
  },
  {
    id: 24,
    title: "Psychedelic Mushroom Party",
    description: "A colorful and trippy cartoon party scene filled with dancing mushrooms and whimsical characters in a vibrant, surreal setting.",
    imageFileName: "party.png"
  },
  {
    id: 25,
    title: "Bar Buddies",
    description: "Two friends sit together at a bar, sharing a beer and conversation, capturing the simple pleasures of camaraderie in a warm and cozy setting.",
    imageFileName: "bar_dogs_1.png"
  },
  {
    id: 26,
    title: "Curious Cat's Wonder",
    description: "An inquisitive cat caught in a moment of curiosity, its eyes wide with fascination as it explores its surroundings.",
    imageFileName: "cat_5.png"
  },
  {
    id: 27,
    title: "Elon Musk Tango",
    description: "An unexpected scene of Elon Musk dancing the tango with a red-haired woman, blending his futuristic image with the elegance of a classic dance.",
    imageFileName: "elon_1.png"
  },
  {
    id: 28,
    title: "Forest of Dreams",
    description: "A magical forest scene, with towering trees and a sense of quiet wonder as the forest seems alive with possibilities.",
    imageFileName: "forest_1.png"
  },
  {
    id: 29,
    title: "Island Paradise",
    description: "A tranquil island getaway, surrounded by crystal-clear waters and the serenity of nature untouched.",
    imageFileName: "island_1.png"
  },
  {
    id: 30,
    title: "Chihuahua Rocket",
    description: "An exhilarating image of a Chihuahua speeding through the sky on a rocket, combining whimsy and adventure.",
    imageFileName: "chihuahua_rocket_1.png"
  },
  {
    id: 31,
    title: "Johnny Depp's Solitary Picnic",
    description: "A contemplative image of Johnny Depp sitting alone in Central Park, enjoying a quiet picnic amidst the peaceful greenery of the park.",
    imageFileName: "johney_depp_1.png"
  },
  {
    id: 32,
    title: "Messi Comforts a Baby",
    description: "Lionel Messi holds a crying baby, gently comforting the child in a touching moment that showcases the softer side of the football star.",
    imageFileName: "messi.png"
  },
  {
    id: 33,
    title: "AI Becoming Human",
    description: "An AI with human features, displaying emotions and lifelike expressions, blurring the line between machine and human consciousness.",
    imageFileName: "robot_1.png"
  },
  {
    id: 34,
    title: "Astronaut with Cat Ears",
    description: "An astronaut with cat ears stands triumphantly on the moon, blending the futuristic journey of space exploration with playful feline features.",
    imageFileName: "ast_cat_1.png"
  },
  {
    id: 35,
    title: "Pink Dolphins in the Jungle",
    description: "A stunning painting of pink dolphins gracefully swimming through a jungle river, merging the surreal with the natural in a beautiful dreamscape.",
    imageFileName: "pink_dolphins.png"
  },
  {
    id: 36,
    title: "The Last Action Star",
    description: "Arnold Schwarzenegger sits in a moody bar, the dim lights casting a neon glow on his iconic face.",
    imageFileName: "arnold_1.png"
  }
];


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
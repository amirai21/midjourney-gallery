import React from 'react'
import ArtPiece from './ArtPiece'

interface ArtPieceType {
  id: number
  title: string
  description: string
  imageFileName: string  // Changed from imageUrl to imageFileName
}

interface GalleryProps {
  artPieces: ArtPieceType[]
  onSelectPiece: (piece: ArtPieceType) => void
}

export default function Gallery({ artPieces, onSelectPiece }: GalleryProps) {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artPieces.map((piece) => (
          <ArtPiece 
            key={piece.id} 
            piece={piece}
            onClick={() => onSelectPiece(piece)} 
          />
        ))}
      </div>
    </main>
  )
}
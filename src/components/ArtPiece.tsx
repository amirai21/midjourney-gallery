import React from 'react'

interface ArtPieceProps {
  piece: {
    title: string
    description: string
    imageFileName: string
  }
  onClick: () => void
}

export default function ArtPiece({ piece, onClick }: ArtPieceProps) {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={`/images/midjourney/${piece.imageFileName}`}
        alt={`Art piece: ${piece.title}`}
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-semibold mb-2">{piece.title}</h3>
        <p className="text-white text-sm line-clamp-2">{piece.description}</p>
      </div>
    </div>
  )
}
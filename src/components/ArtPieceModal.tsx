import React from 'react'
import { getImageUrl } from '../utils/imageUtils'

interface ArtPieceModalProps {
  piece: {
    title: string
    description: string
    imageFileName: string
  }
  onClose: () => void
}

export default function ArtPieceModal({ piece, onClose }: ArtPieceModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-2 rounded-lg max-w-7xl w-full mx-4 h-[95vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-2">{piece.title}</h2>
        <div className="flex-grow relative mb-1 overflow-hidden"> {/* Reduced margin-bottom to mb-1 */}
          <img
            src={`${process.env.PUBLIC_URL}/images/midjourney/${piece.imageFileName}`}
            alt={piece.title}
            className="object-contain w-full h-[98%]" // Image takes 95% of the height
          />
        </div>
        <div className="flex justify-center items-center mb-2"> {/* Margin-bottom for spacing */}
          <p className="text-gray-600 text-center">{piece.description}</p>
        </div>
        <div className="flex justify-center">
          <button 
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
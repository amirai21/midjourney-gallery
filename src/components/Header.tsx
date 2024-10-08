import React from 'react'

interface HeaderProps {
  scrollProgress: number
}

export default function Header({ scrollProgress }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-300 to-blue-300 shadow h-8 flex items-center justify-between px-4"> {/* Reduced height to h-8 */}
      <h1 className="text-white text-base font-extrabold tracking-wide text-center flex-grow"></h1> {/* Centered text */}
      <div 
        className="h-1 bg-blue-200" 
        style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s' }} 
      />
    </div>
  )
}
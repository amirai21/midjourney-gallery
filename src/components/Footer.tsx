import React from 'react';
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function SocialFooter() {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="hover:text-blue-200 transition-colors duration-300" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-200 transition-colors duration-300" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-blue-200 transition-colors duration-300" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
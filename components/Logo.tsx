'use client'

import Image from 'next/image'
import { useState } from 'react'

interface LogoProps {
  size?: number
  showText?: boolean
  textColor?: string
  logoPath?: string
}

export default function Logo({ 
  size = 48, 
  showText = false, 
  textColor = 'text-white',
  logoPath = '/Salama_logo.png' // Default path, can be overridden
}: LogoProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex items-center">
      {/* Salama Logo - Image or fallback SVG */}
      <div className="flex-shrink-0" style={{ height: size, maxWidth: '200px' }}>
        {!imageError ? (
          <Image
            src={logoPath}
            alt="Salama Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain h-full w-auto"
            style={{ height: size, width: 'auto', maxWidth: '200px' }}
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          // Fallback SVG if image fails to load
          <svg 
            width={size} 
            height={size} 
            viewBox="0 0 36 36" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 8 8 C 8 4 12 4 14 6 C 16 8 16 12 14 14 C 12 16 8 16 8 20 C 8 24 12 24 14 22 C 16 20 16 16 18 14 C 20 12 24 12 26 14 C 28 16 28 20 26 22 C 24 24 20 24 20 28 C 20 32 24 32 26 30"
              stroke="#FFC107"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        )}
      </div>
      {showText && (
        <div className={`flex flex-col ${textColor}`}>
          <span className="text-xs leading-tight">سلامة</span>
          <span className="font-medium text-sm leading-tight">SALAMA</span>
        </div>
      )}
    </div>
  )
}

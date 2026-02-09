'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'
import WelcomeBanner from '@/components/WelcomeBanner'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/quotes')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <WelcomeBanner />
      
      <div 
        className="content-container flex flex-col items-center justify-center py-16 min-h-[calc(100vh-180px)] cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-col items-center space-y-6">
          {/* Rotating Image */}
          <div className="flex justify-center">
            <Image
              src="/image.png"
              alt="Salama Insurance"
              width={150}
              height={150}
              className="animate-spin-slow object-contain"
              style={{ animationDuration: '3s' }}
              unoptimized
            />
          </div>
          
          {/* Loading Message */}
          <div className="text-center">
            <h2 className="text-salama-teal-dark text-2xl font-normal">
              Hold tight, your quote is on the way!
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import { CheckCircle, Home as HomeIcon, Plane } from 'lucide-react'
import Header from '@/components/Header'

export default function ConfirmationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 pb-24 relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/image.png)',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          opacity: 0.1
        }}
      />
      <div className="relative z-10">
        <Header />
      
      {/* Yellow Banner */}
      <div className="bg-salama-yellow px-4 py-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10 text-salama-teal-dark" />
          </div>
          <h1 className="text-gray-900 text-xl font-medium mb-2">Thank you for trusting Salama.</h1>
          <p className="text-gray-700 text-sm">Your Motor Insurance Policy Is Ready</p>
        </div>
      </div>

      <div className="content-container py-6 space-y-6">
        {/* Your Policy Card */}
        <div className="card border-2 border-salama-teal-light">
          <h2 className="text-salama-teal-dark font-medium text-lg mb-4">Your Policy</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Vehicle Details</span>
              <span className="text-gray-900 font-medium">Toyota Camry 2024</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Policy Start Date</span>
              <span className="text-gray-900 font-medium">11 Feb 2026</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Policy End Date</span>
              <span className="text-gray-900 font-medium">11 Mar 2027</span>
            </div>
          </div>
        </div>

        {/* Download Policy Button */}
        <button className="w-full bg-salama-teal-dark text-white py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
          Download Policy
        </button>
        

        {/* Other Products Section */}
        <div>
          <p className="text-salama-teal-dark font-medium mb-4 text-center">
            Salama Provides A Wide Range Of Insurance Products Designed To Meet Your Needs
          </p>
          <div className="space-y-3">
            <button className="w-full card border-2 border-salama-yellow flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-salama-yellow rounded-lg flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-salama-teal-dark" />
                </div>
                <span className="text-gray-900 font-medium">Home Insurance</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </button>
            <button className="w-full card border-2 border-salama-yellow flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-salama-yellow rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-salama-teal-dark" />
                </div>
                <span className="text-gray-900 font-medium">Travel Insurance</span>
              </div>
              <span className="text-gray-400">&gt;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 safe-area-bottom">
        <button
          onClick={() => router.push('/')}
          className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
        >
          Home Page
        </button>
        <button
          onClick={() => router.push('/quotes')}
          className="flex-1 bg-salama-teal-dark text-white py-3 rounded-2xl font-medium hover:opacity-90 transition-opacity"
        >
          Start Again
        </button>
      </div>
      </div>
    </div>
  )
}

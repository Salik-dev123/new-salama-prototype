'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, Calendar } from 'lucide-react'
import Header from '@/components/Header'
import NavigationButtons from '@/components/NavigationButtons'

export default function OrderSummaryPage() {
  const router = useRouter()
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [policyStartDate, setPolicyStartDate] = useState('11 Feb 2026')

  const handleNext = () => {
    router.push('/payment')
  }

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
        <h1 className="text-gray-900 text-2xl font-medium">Order Summary</h1>
      </div>

      <div className="content-container py-6 pb-12 space-y-4">
        {/* Review your info */}
        <button
          onClick={() => router.push('/additional-information')}
          className="w-full card flex items-center justify-between hover:bg-gray-50 transition-colors -mt-4 border-2 border-salama-teal-light"
        >
          <span className="text-salama-teal-dark font-medium">Review your info</span>
          <ChevronRight className="w-5 h-5 text-salama-teal-dark" />
        </button>

        {/* Policy Information Card */}
        <div className="card border-2 border-salama-teal-light">
          <h2 className="text-salama-teal-dark font-medium mb-4">Policy Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Vehicle Model</span>
              <span className="text-gray-900 font-medium">Toyota Camry 2024</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Plate Number</span>
              <span className="text-gray-900 font-medium">A 57123</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Insured Value</span>
              <span className="text-gray-900 font-medium">AED 35,765</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Policy Start Date</span>
              <div className="flex items-center gap-2 relative">
                <span className="text-gray-900 font-medium">{policyStartDate}</span>
                <button
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <Calendar className="w-4 h-4 text-salama-teal-dark" />
                </button>
                {showCalendar && (
                  <div className="absolute right-0 top-full mt-2 z-20">
                    <input
                      type="date"
                      className="p-2 border border-gray-300 rounded-lg shadow-lg bg-white"
                      onChange={(e) => {
                        const date = new Date(e.target.value)
                        const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                        setPolicyStartDate(formattedDate)
                        setShowCalendar(false)
                      }}
                      onBlur={() => setShowCalendar(false)}
                      autoFocus
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Details Card */}
        <div className="card border-2 border-salama-yellow">
          <h2 className="text-salama-teal-dark font-medium mb-4">Pricing Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <div className="flex-1 min-w-0">
                <span className="text-gray-600">Plan</span>
                <p className="text-gray-500 text-sm">(Comprehensive Plan)</p>
              </div>
              <span className="text-gray-900 font-medium whitespace-nowrap ml-4">AED 1,200</span>
            </div>
            <div className="py-2 border-b border-gray-200">
              <span className="text-gray-600">Add-Ons</span>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm flex-1 min-w-0 pr-4">Personal Accident Passengers AED 200,000</span>
                  <span className="text-gray-900 font-medium whitespace-nowrap">AED 60</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm flex-1 min-w-0 pr-4">No Claims Discount Protection</span>
                  <span className="text-gray-900 font-medium whitespace-nowrap">AED 60</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <div className="flex-1 min-w-0">
                <span className="text-gray-600">VAT</span>
                <p className="text-gray-500 text-sm">(5%)</p>
              </div>
              <span className="text-gray-900 font-medium whitespace-nowrap ml-4">AED 66</span>
            </div>
            <div className="flex justify-between items-center py-2 pt-4">
              <span className="text-salama-teal-dark font-medium flex-1 min-w-0">Total Amount</span>
              <span className="text-salama-teal-dark font-medium text-xl whitespace-nowrap ml-4">AED 1,386</span>
            </div>
          </div>
        </div>

        {/* Terms Acceptance */}
        <div className="card flex items-center gap-3">
          <button
            onClick={() => setTermsAccepted(!termsAccepted)}
            className={`w-12 h-6 rounded-full transition-colors ${
              termsAccepted ? 'bg-salama-teal-dark' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                termsAccepted ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
          <p className="text-gray-700 text-sm flex-1">
            I Hereby accept all The{' '}
            <span className="text-salama-teal-dark font-medium underline">Terms & Conditions</span>
          </p>
        </div>
      </div>

        <NavigationButtons onNext={handleNext} nextDisabled={!termsAccepted} />
      </div>
    </div>
  )
}

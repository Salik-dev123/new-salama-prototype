'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Header from '@/components/Header'
import NavigationButtons from '@/components/NavigationButtons'

type Section = 'personal' | 'vehicle'

export default function AdditionalInformationPage() {
  const router = useRouter()
  const [expandedSections, setExpandedSections] = useState<Set<Section>>(new Set<Section>(['personal', 'vehicle']))

  const toggleSection = (section: Section) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(section)) {
        newSet.delete(section)
      } else {
        newSet.add(section)
      }
      return newSet
    })
  }

  const handleUpdate = () => {
    router.push('/order-summary')
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
        <h1 className="text-gray-900 text-2xl font-medium">Additional Information</h1>
      </div>

      <div className="content-container py-6 space-y-3">
        {/* Personal Details */}
        <div>
          <button
            onClick={() => toggleSection('personal')}
            className={`w-full card flex items-center justify-between border-2 ${
              expandedSections.has('personal')
                ? 'border-salama-teal-light' 
                : 'bg-salama-yellow-light border-salama-yellow'
            }`}
            style={{
              backgroundColor: expandedSections.has('personal') ? '#E0F2F1' : undefined
            }}
          >
            <span className="font-medium text-salama-teal-dark">
              Personal Details
            </span>
            {expandedSections.has('personal') ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {expandedSections.has('personal') && (
            <div className="card mt-2 space-y-4 border-2 border-salama-teal-light" style={{ backgroundColor: '#E0F2F1' }}>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Address</label>
                <input type="text" className="input-field" defaultValue="Dubai Marina, Block A" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Emirates ID</label>
                <input type="text" className="input-field" defaultValue="784-1987-4341546-7" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Emirate</label>
                <div className="relative">
                  <select className="input-field pr-10 appearance-none">
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Residential Location</label>
                <input type="text" className="input-field" defaultValue="Dubai Marina" />
              </div>
            </div>
          )}
        </div>

        {/* Vehicle Details */}
        <div>
          <button
            onClick={() => toggleSection('vehicle')}
            className={`w-full card flex items-center justify-between border-2 ${
              expandedSections.has('vehicle')
                ? 'border-salama-teal-light' 
                : 'bg-salama-yellow-light border-salama-yellow'
            }`}
            style={{
              backgroundColor: expandedSections.has('vehicle') ? '#E0F2F1' : undefined
            }}
          >
            <span className="font-medium text-salama-teal-dark">
              Vehicle Details
            </span>
            {expandedSections.has('vehicle') ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {expandedSections.has('vehicle') && (
            <div className="card mt-2 space-y-4 border-2 border-salama-teal-light" style={{ backgroundColor: '#E0F2F1' }}>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Engine Number</label>
                <input type="text" className="input-field" defaultValue="DL987654321" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Vehicle Color</label>
                <div className="relative">
                  <select className="input-field pr-10 appearance-none">
                    <option>White</option>
                    <option>Black</option>
                    <option>Silver</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Plate Number</label>
                <input type="text" className="input-field" defaultValue="A57123" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Place of Registration</label>
                <input type="text" className="input-field" defaultValue="Dubai" />
              </div>
            </div>
          )}
        </div>
      </div>

        <NavigationButtons onNext={handleUpdate} nextLabel="Update" />
      </div>
    </div>
  )
}

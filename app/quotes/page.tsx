'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Edit } from 'lucide-react'
import Header from '@/components/Header'
import NavigationButtons from '@/components/NavigationButtons'
import BottomSheet from '@/components/BottomSheet'

type PlanType = 'comprehensive' | 'third-party'

interface AddOn {
  id: string
  name: string
  price: number
  selected: boolean
}

export default function QuotesPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('comprehensive')
  const [sumInsured, setSumInsured] = useState(35765)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [addOns, setAddOns] = useState<AddOn[]>([
    { id: '1', name: 'Personal Accident Benefit - Driver\n(Up to AED 200,000)', price: 60, selected: false },
    { id: '2', name: 'Personal Accident Benefit - Passengers\n(Up to AED 200,000)', price: 60, selected: true },
    { id: '3', name: 'No Claims Discount Protection', price: 60, selected: true },
    { id: '4', name: '24 Hours Accident & Breakdown Recovery', price: 60, selected: false },
    { id: '5', name: 'Territorial coverage extended to other GCC countries', price: 60, selected: false },
    { id: '6', name: 'Off Road Cover', price: 60, selected: false },
  ])

  const toggleAddOn = (id: string) => {
    setAddOns(addOns.map(addon => 
      addon.id === id ? { ...addon, selected: !addon.selected } : addon
    ))
  }

  const handleNext = () => {
    router.push('/order-summary')
  }

  const handleGetUpdatedPlan = () => {
    setIsBottomSheetOpen(false)
    // You can add logic here to update plans based on new sum insured
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
      
        {/* Your Quotes Title */}
        <div className="bg-salama-yellow py-4 mb-4">
          <div className="content-container">
            <h1 className="text-gray-900 text-xl font-medium">Your Quotes</h1>
          </div>
        </div>
      
        {/* Top Section - Two Side by Side Cards */}
        <div className="content-container">
        <div className="flex gap-3 items-stretch">
          {/* Vehicle Model Card - 65% */}
          <div className="bg-white rounded-xl p-3 flex-[0.65] flex flex-col justify-between">
            <p className="text-gray-500 text-xs mb-1">Vehicle Model</p>
            <h3 className="text-gray-900 font-medium text-sm">Toyota Camry 2024</h3>
          </div>
          
          {/* Sum Insured Card - 35% */}
          <div 
            className="bg-white rounded-xl p-3 flex-[0.35] cursor-pointer hover:bg-gray-50 transition-colors flex flex-col justify-between"
            onClick={() => setIsBottomSheetOpen(true)}
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-gray-500 text-xs">Sum Insured</p>
              <Edit className="w-3 h-3 text-salama-teal-dark" />
            </div>
            <p className="text-salama-teal-dark font-medium text-sm">
              AED {sumInsured.toLocaleString('en-US')}
            </p>
          </div>
        </div>
        </div>
      
        <div className="content-container py-6">
        {/* Plan Options */}
          <div className="space-y-4">
            {/* Comprehensive Plan */}
            <div className="border-2 rounded-lg p-4" style={{ 
              borderColor: selectedPlan === 'comprehensive' ? '#05696B' : '#E5E7EB',
              backgroundColor: selectedPlan === 'comprehensive' ? '#E0F2F1' : 'white'
            }}>
              <div className="flex items-start gap-3">
                <button
                  onClick={() => setSelectedPlan('comprehensive')}
                  className="mt-1"
                >
                  {selectedPlan === 'comprehensive' ? (
                    <div className="w-6 h-6 bg-salama-teal-dark rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  )}
                </button>
                <div className="flex-1">
                  <h3 className={`font-medium mb-1 ${
                    selectedPlan === 'comprehensive' ? 'text-salama-teal-dark' : 'text-gray-700'
                  }`}>Comprehensive Plan</h3>
                  <button className={`w-full py-2 rounded-full font-medium ${
                    selectedPlan === 'comprehensive' 
                      ? 'bg-salama-teal-dark text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    Premium AED 1,200
                  </button>
                </div>
              </div>
            </div>

            {/* Third Party Liability Plan */}
            <div className="border-2 rounded-lg p-4" style={{ 
              borderColor: selectedPlan === 'third-party' ? '#05696B' : '#E5E7EB',
              backgroundColor: selectedPlan === 'third-party' ? '#E0F2F1' : 'white'
            }}>
              <div className="flex items-start gap-3">
                <button
                  onClick={() => setSelectedPlan('third-party')}
                  className="mt-1"
                >
                  {selectedPlan === 'third-party' ? (
                    <div className="w-6 h-6 bg-salama-teal-dark rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  )}
                </button>
                <div className="flex-1">
                  <h3 className={`font-medium mb-1 ${
                    selectedPlan === 'third-party' ? 'text-salama-teal-dark' : 'text-gray-700'
                  }`}>Third Party Liability Plan</h3>
                  <button className={`w-full py-2 rounded-full font-medium ${
                    selectedPlan === 'third-party' 
                      ? 'bg-salama-teal-dark text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    Premium AED 1,000
                  </button>
                </div>
              </div>
            </div>
          </div>

        {/* Add-ons Section */}
        <h1 className="text-salama-teal-dark text-xl font-medium mb-4 pt-6">Add-ons</h1>
        <div className="space-y-3">
          {addOns.map((addon) => (
            <div
              key={addon.id}
              className={`card flex items-center justify-between ${
                addon.selected ? 'border-2 border-salama-yellow bg-salama-yellow-light' : ''
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <button onClick={() => toggleAddOn(addon.id)}>
                  {addon.selected ? (
                    <div className="w-6 h-6 bg-salama-yellow rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-salama-teal-dark" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  )}
                </button>
                <span className={`text-sm flex-1 whitespace-pre-line ${
                  addon.selected ? 'text-salama-teal-dark' : 'text-gray-700'
                }`}>{addon.name}</span>
              </div>
              <span className={`font-medium ${
                addon.selected ? 'text-salama-teal-dark' : 'text-gray-700'
              }`}>AED {addon.price}</span>
            </div>
          ))}
        </div>
      </div>

      <NavigationButtons onNext={handleNext} />

      {/* Bottom Sheet for Sum Insured */}
      <BottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)}>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-600 text-sm mb-2 text-center">Sum Insured (AED)</label>
            <div className="bg-gray-50 rounded-lg border border-salama-teal-light p-4">
              <div className="text-salama-teal-dark font-medium text-lg mb-4">
                AED {sumInsured.toLocaleString('en-US')}
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="30343"
                  max="37334"
                  value={sumInsured}
                  onChange={(e) => setSumInsured(Number(e.target.value))}
                  className="w-full h-2 bg-salama-teal-light rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #F7C513 0%, #F7C513 ${((sumInsured - 30343) / (37334 - 30343)) * 100}%, #B2DFDB ${((sumInsured - 30343) / (37334 - 30343)) * 100}%, #B2DFDB 100%)`
                  }}
                />
                <div className="flex justify-between text-gray-600 text-xs mt-2">
                  <span>30,343</span>
                  <span>37,334</span>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleGetUpdatedPlan}
            className="w-full bg-salama-teal-dark text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get Updated Plan
          </button>
        </div>
      </BottomSheet>
      </div>
    </div>
  )
}

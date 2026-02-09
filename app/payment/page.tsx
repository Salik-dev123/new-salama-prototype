'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import NavigationButtons from '@/components/NavigationButtons'

export default function PaymentPage() {
  const router = useRouter()

  const handleComplete = () => {
    router.push('/upload-documents')
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
        <h1 className="text-gray-900 text-2xl font-medium">Payment</h1>
      </div>

      <div className="content-container py-6">

        {/* Card Details Form */}
        <h2 className="text-salama-teal-dark font-medium text-lg mb-4">Card Details</h2>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Card Number</label>
            <input
              type="text"
              className="input-field"
              defaultValue="4111 1111 1111 1111"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Card Holder Name</label>
            <input
              type="text"
              className="input-field"
              defaultValue="Ahmed Al Mansouri"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Expiry Date</label>
              <input
                type="text"
                className="input-field"
                defaultValue="12/26"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">CVV</label>
              <input
                type="text"
                className="input-field"
                defaultValue="123"
              />
            </div>
          </div>
        </div>

        {/* Total Amount */}
        <div className="bg-salama-yellow rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">Total Amount to Pay</span>
            <span className="text-gray-900 font-medium text-xl">AED 1,386</span>
          </div>
        </div>
      </div>

        <NavigationButtons
          onNext={handleComplete}
          nextLabel="Complete Pay"
          nextClassName="bg-salama-teal-dark"
        />
      </div>
    </div>
  )
}

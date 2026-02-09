'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface NavigationButtonsProps {
  onBack?: () => void
  onNext?: () => void
  nextLabel?: string
  nextDisabled?: boolean
  nextClassName?: string
}

export default function NavigationButtons({
  onBack,
  onNext,
  nextLabel = 'Next',
  nextDisabled = false,
  nextClassName = 'bg-salama-teal-dark',
}: NavigationButtonsProps) {
  const router = useRouter()

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      router.back()
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 safe-area-bottom">
      <button
        onClick={handleBack}
        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 text-gray-900" />
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className={`flex-1 ${nextClassName} text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {nextLabel}
      </button>
    </div>
  )
}

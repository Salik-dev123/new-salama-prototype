'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Upload } from 'lucide-react'
import Header from '@/components/Header'
import NavigationButtons from '@/components/NavigationButtons'

interface Document {
  id: string
  name: string
  uploaded: boolean
}

export default function UploadDocumentsPage() {
  const router = useRouter()
  const [documents, setDocuments] = useState<Document[]>([
    { id: '1', name: 'Mulkiya Front', uploaded: true },
    { id: '2', name: 'Mulkiya Back', uploaded: true },
    { id: '3', name: 'Emirates ID Front', uploaded: false },
    { id: '4', name: 'Emirates ID Back', uploaded: false },
    { id: '5', name: 'Driving License Front', uploaded: false },
    { id: '6', name: 'Driving License Back', uploaded: false },
  ])

  const handleUpload = (id: string) => {
    setDocuments(docs => 
      docs.map(doc => doc.id === id ? { ...doc, uploaded: true } : doc)
    )
  }

  const handleNext = () => {
    router.push('/confirmation')
  }

  const allUploaded = documents.every(doc => doc.uploaded)

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
        <h1 className="text-gray-900 text-2xl font-medium">Upload Documents</h1>
      </div>

      <div className="content-container py-6 space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={`card flex items-center justify-between ${
              doc.uploaded ? 'border-2 border-salama-yellow' : ''
            }`}
          >
            <span className={`font-medium ${
              doc.uploaded ? 'text-salama-teal-dark' : 'text-salama-teal-dark'
            }`}>
              {doc.name}
            </span>
            {doc.uploaded ? (
              <div className="w-8 h-8 bg-salama-yellow rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-salama-teal-dark" />
              </div>
            ) : (
              <button
                onClick={() => handleUpload(doc.id)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <Upload className="w-5 h-5 text-salama-teal-dark" />
              </button>
            )}
          </div>
        ))}
      </div>

        <NavigationButtons onNext={handleNext} nextDisabled={!allUploaded} />
      </div>
    </div>
  )
}

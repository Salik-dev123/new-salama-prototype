'use client'

interface WelcomeBannerProps {
  userName?: string
}

export default function WelcomeBanner({ userName = 'Ahmed Al Mansouri' }: WelcomeBannerProps) {
  const initials = userName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="px-4 py-5" style={{ backgroundColor: '#F7C513' }}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-salama-teal-dark text-xl font-normal">Welcome</h2>
          <p className="text-salama-teal-dark text-2xl font-semibold mt-1">{userName}</p>
        </div>
        <div className="w-16 h-16 bg-salama-yellow rounded-full flex items-center justify-center border-2 border-salama-teal-dark">
          <span className="text-salama-teal-dark font-medium text-lg">{initials}</span>
        </div>
      </div>
    </div>
  )
}

'use client'

import Logo from './Logo'

export default function Header() {
  return (
    <div className="bg-salama-teal-dark">
      <div className="flex items-center px-4 py-3">
        <Logo size={43} showText={false} />
      </div>
    </div>
  )
}

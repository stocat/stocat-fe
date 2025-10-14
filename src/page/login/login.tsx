import { useState } from 'react'
import Slogan from './components/Slogan'
import PageIndicator from './components/PageIndicator'
import ActionButtons from './components/ActionButtons'
import LoginMethodSheet from './components/LoginMethodSheet'

export default function Login() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      
      <div className="relative w-full max-w-[480px] h-screen bg-white md:rounded-2xl md:border border-gray-200 overflow-hidden flex flex-col items-center justify-between px-6 py-8">
      
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="w-48 h-48 mb-6 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
          <span className="text-sm">Illustration</span>
        </div>

        <Slogan />

        <PageIndicator />
      </div>

      <ActionButtons onOpenLoginSheet={() => setIsSheetOpen(true)} />

      {isSheetOpen && (
        <LoginMethodSheet onClose={() => setIsSheetOpen(false)} />
      )}
      </div>
    </div>
  )
}

import SocialIcon from './SocialIcon'
import MailIcon from './MailIcon'

//미완!

interface LoginMethodSheetProps {
  onClose: () => void
}

export default function LoginMethodSheet({ onClose }: LoginMethodSheetProps) {
  return (
    <div
      aria-modal="true"
      role="dialog"
      className="absolute inset-0 z-50"
    >
      {/* <button
        aria-label="닫기"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-2xl">
        <div className="py-3 flex justify-center">
          <div className="h-1 w-10 rounded-full bg-gray-200" />
        </div>

        <div className="px-6 pb-6">
          <h2 className="text-center text-sm text-gray-500 mb-4">로그인 방법 선택</h2>

          <div className="flex items-center justify-center gap-4 mb-4">
            <SocialIcon label="N" bg="bg-green-500" />
            <SocialIcon label="G" bg="bg-red-500" />
            <SocialIcon label="f" bg="bg-blue-600" />
            <SocialIcon label="" bg="bg-black" />
          </div>

          <button
            type="button"
            className="w-full h-12 rounded-xl border border-gray-200 text-gray-900 text-sm font-medium flex items-center justify-center gap-2"
          >
            <MailIcon />
            이메일로 로그인
          </button>

          <div className="mt-4 text-center text-gray-400 text-xs">
            계정이 기억나지 않나요?{' '}
            <button type="button" className="underline text-gray-600">계정 찾기</button>
          </div>
        </div>
      </div> */}
    </div>
  )
}



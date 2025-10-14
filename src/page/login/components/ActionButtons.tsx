interface ActionButtonsProps {
  onOpenLoginSheet: () => void
}

export default function ActionButtons({ onOpenLoginSheet }: ActionButtonsProps) {
  return (
    <div className="w-full">
      <div className="flex gap-2">
        <button
          type="button"
          className="flex-1 h-12 rounded-xl border border-gray-350 text-gray-900 text-sm font-bold cursor-pointer"
          onClick={onOpenLoginSheet}
        >
          로그인
        </button>
        <button
          type="button"
          className="flex-1 h-12 rounded-xl bg-gray-900 text-white text-sm font-medium cursor-pointer"
        >
          회원가입
        </button>
      </div>

      <div className="mt-4 text-center text-gray-400 text-xs font-bold">
        계정이 기억나지 않나요?{' '}
        <button type="button" className="underline text-gray-600 cursor-pointer">계정 찾기</button>
      </div>
    </div>
  )
}



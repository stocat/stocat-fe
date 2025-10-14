export default function SocialIcon({ label, bg }: { label: string; bg: string }) {
  return (
    <button
      type="button"
      className={`w-10 h-10 rounded-full ${bg} text-white flex items-center justify-center text-base font-semibold`}
      aria-label={`소셜 로그인 ${label}`}
    >
      <span aria-hidden>{label}</span>
    </button>
  )
}



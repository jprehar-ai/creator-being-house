import type { LucideIcon } from "lucide-react"

interface PageBannerProps {
  keyword: string
  icon: LucideIcon
}

export function PageBanner({ keyword, icon: Icon }: PageBannerProps) {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm">
        <Icon className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700 tracking-wider uppercase">{keyword}</span>
        <Icon className="h-5 w-5 text-gray-600" />
      </div>
    </div>
  )
}

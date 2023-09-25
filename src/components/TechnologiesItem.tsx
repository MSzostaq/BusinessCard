import { Icon } from '@/components/Icon'
import ICONS from '@/constants/icons'

export function TechnologiesItem({
  icon,
  copy,
}: {
  icon: keyof typeof ICONS
  copy: string
}) {
  return (
    <li className="flex items-center justify-start space-x-2 mb-3">
      <Icon name={icon} className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8" />
      <p className="text-sm font-semibold sm:text-base md:text-lg xl:text-xl text-gray-800">
        {copy}
      </p>
    </li>
  )
}

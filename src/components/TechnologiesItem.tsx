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
    <li className="flex items-center justify-start space-x-1">
      <Icon name={icon} className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8" />
      <p className="text-base font-semibold sm:text-lg md:text-xl xl:text-2xl">
        {copy}
      </p>
    </li>
  )
}

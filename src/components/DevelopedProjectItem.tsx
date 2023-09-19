import Link from 'next/link'

import { Icon } from '@/components/Icon'
import ICONS from '@/constants/icons'

export function DevelopedProjectItem({
  copy,
  icon,
  href,
  name,
}: DevelopedProjectItemProps) {
  return (
    <div className="flex items-start justify-start space-x-1 w-11/12 xl:w-3/5">
      <Icon name={icon} className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8" />
      <div className="flex flex-col">
        <Link
          href={href}
          target="_blank"
          className="flex items-center space-x-2 w-max"
        >
          <p className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl xl:text-2xl underline">
            {name}
          </p>
          <Icon name="link" className="w-5 h-5" />
        </Link>
        <p>{copy}</p>
      </div>
    </div>
  )
}

type DevelopedProjectItemProps = {
  copy: string
  icon: keyof typeof ICONS
  href: string
  name: string
}

import Link from 'next/link'

import { Icon } from '@/components/Icon'
import ICONS from '@/constants/icons'

export function SocialMediaLink({
  icon,
  href,
}: {
  icon: keyof typeof ICONS
  href: string
}) {
  return (
    <Link href={href} target="_blank">
      <Icon
        name={icon}
        className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 hover:opacity-70"
      />
    </Link>
  )
}

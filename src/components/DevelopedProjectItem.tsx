import Link from 'next/link'

import { Icon } from '@/components/Icon'

export function DevelopedProjectItem({
  copy,
  href,
  name,
}: DevelopedProjectItemProps) {
  return (
    <div className="flex items-start justify-start">
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
  href: string
  name: string
}

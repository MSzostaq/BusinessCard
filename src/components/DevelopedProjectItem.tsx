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
          <p className="mb-1 text-base font-bold text-gray-800 sm:text-lg lg:text-xl underline">
            {name}
          </p>
          <Icon name="link" className="w-5 h-5 fill-gray-600" />
        </Link>
        <p className="text-gray-800 text-sm xl:text-base">{copy}</p>
      </div>
    </div>
  )
}

type DevelopedProjectItemProps = {
  copy: string
  href: string
  name: string
}

import clsx from 'clsx'
import { HTMLAttributes } from 'react'

import ICONS from '@/constants/icons'

export function Icon(props: IconProps) {
  const { className, name, ...rest } = props

  return (
    <div {...rest} className={clsx(className)}>
      {ICONS[name]}
    </div>
  )
}

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  name: keyof typeof ICONS
}

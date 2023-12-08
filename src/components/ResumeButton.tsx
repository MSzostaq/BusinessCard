import Link from 'next/link'

import { Icon } from '@/components/Icon'

export function ResumeButton() {
  return (
    <li className="flex items-center justify-start w-full mb-6 md:mb-0">
      <Link
        aria-label="resume"
        href="/docs/cv.pdf"
        target="_blank"
        className="bg-blue-700 rounded-lg px-4 py-3 mt-4 md:mt-3 flex items-center justify-center space-x-2"
      >
        <Icon name="cv" className="fill-white w-5 h-5" />
        <p className="text-white font-bold text-lg">Resume</p>
      </Link>
    </li>
  )
}

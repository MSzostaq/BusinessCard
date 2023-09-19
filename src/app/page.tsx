import Image from 'next/image'

import { DevelopedProjectItem } from '@/components/DevelopedProjectItem'
import { ResumeButton } from '@/components/ResumeButton'
import { SocialMediaLink } from '@/components/SocialMediaLink'
import { TechnologiesItem } from '@/components/TechnologiesItem'

export default function Home() {
  return (
    <>
      <title>Frontend Developer - Maciej Szostak</title>
      <main className="overflow-x-hidden">
        <div className="flex items-start flex-col justify-center h-full w-full p-2 sm:p-6 lg:p-12 xl:p-20 2xl:p-32">
          <div className="flex flex-col lg:flex-row items-start lg:space-x-5 xl:space-x-8 w-full">
            <div className="w-full lg:w-2/5 flex lg:justify-end">
              <div className="rounded-full w-40 h-40 md:w-44 md:h-44 mx-2 mt-4 lg:mx-0 md:mt-0 lg:mt-3">
                <Image
                  src={`/avatar.png`}
                  alt="avatar"
                  width={128}
                  height={128}
                  className="rounded-full w-40 h-40 md:w-44 md:h-44"
                />
              </div>
            </div>
            <div className="w-full lg:w-3/5 justify-start lg:mt-8 px-2">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 xl:text-7xl text-gray-800 tracking-wide">
                Maciej Szostak
              </h1>
              <h2 className="tracking-wide text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-gray-700">
                Frontend Developer
              </h2>
              <div className="flex space-x-2 mb-1 mt-2 md:mt-3 xl:mt-4">
                <SocialMediaLink
                  href="https://github.com/MSzostaq"
                  icon="github"
                />
                <SocialMediaLink
                  href="https://www.linkedin.com/in/mszostaq/"
                  icon="linkedin"
                />
              </div>
              <ol className="mt-6 lg:mt-8 2xl:mt-8">
                <li className="mb-1 lg:mb-2 text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold tracking-wide text-gray-800">
                  My tech stack
                </li>
                <TechnologiesItem copy="React / NextJS" icon="react" />
                <TechnologiesItem
                  copy="TypeScript / JavaScript"
                  icon="typescript"
                />
                <TechnologiesItem
                  copy="CSS3 / SASS / TailwindCSS / CSS in JS"
                  icon="css"
                />
                <TechnologiesItem copy="HTML" icon="html" />
              </ol>
              <ol className="mt-6 lg:mt-8 2xl:mt-10 w-11/12 xl:w-3/5">
                <li className="mb-1 lg:mb-2 text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold tracking-wide text-gray-800">
                  Projects
                </li>
                <DevelopedProjectItem
                  copy="Marketing platform which allows influencers to find and
                      apply to campaigns designed by well known brands."
                  href="https://brandbuddies.pl"
                  name="BrandBuddies"
                />
                <DevelopedProjectItem
                  copy="Ecommerce platform which allows influencers to connect and advertise
                      their products on the marketplace."
                  href="https://fansi.pl"
                  name="Fansi"
                />
                <ResumeButton />
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

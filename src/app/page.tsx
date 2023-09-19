import Image from 'next/image'

import { DevelopedProjectItem } from '@/components/DevelopedProjectItem'
import { SocialMediaLink } from '@/components/SocialMediaLink'
import { TechnologiesItem } from '@/components/TechnologiesItem'

export default function Home() {
  return (
    <>
      <title>Frontend Developer - Maciej Szostak</title>
      <main className=" overflow-x-hidden">
        <div className="flex items-start flex-col justify-center h-full w-full p-2 sm:p-6 lg:p-12 xl:p-20 2xl:p-32">
          <div className="flex flex-col lg:flex-row items-start space-x-2 xl:space-x-4 w-full">
            <div className="w-full lg:w-2/5 flex lg:justify-end">
              <div className="rounded-full w-40 h-40 md:w-44 md:h-44">
                <Image
                  src={'/avatar.jpeg'}
                  alt="avatar"
                  layout="responsive"
                  width={100}
                  height={100}
                  className="rounded-full w-40 h-40 md:w-44 md:h-44"
                />
              </div>
            </div>
            <div className="w-full lg:w-3/5 justify-start lg:mt-8">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 xl:text-7xl text-gray-900 tracking-wide">
                Maciej Szostak
              </h1>
              <h2 className="tracking-wide text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-gray-700">
                Frontend Developer
              </h2>
              <div className="flex space-x-2 mb-1 mt-2">
                <SocialMediaLink
                  href="https://github.com/MSzostaq"
                  icon="github"
                />
                <SocialMediaLink
                  href="https://www.linkedin.com/in/mszostaq/"
                  icon="linkedin"
                />
                <SocialMediaLink href="/docs/cv.pdf" icon="cv" />
              </div>
              <ol className="mt-4 space-y-2 lg:mt-5 2xl:mt-6">
                <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold tracking-wide">
                  Technologies that I have experience with:
                </p>
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
              <ol className="mt-4 space-y-2 lg:mt-5 2xl:mt-6 w-11/12 xl:w-3/5">
                <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold tracking-wide text-gray-900">
                  Developed:
                </p>
                <DevelopedProjectItem
                  copy="Marketing platform which allows influencers to find and
                      apply to campaigns designed by well known brands."
                  href="https://brandbuddies.pl"
                  name="BrandBuddies"
                />
                <DevelopedProjectItem
                  copy="Ecommerce platform, consisting of admins' and influencers'
                      panel which allows influencers to connect and advertise
                      their products on the marketplace."
                  href="https://fansi.pl"
                  name="Fansi"
                />
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

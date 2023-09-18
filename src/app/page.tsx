import { Icon } from '@/components/Icon'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <title>Frontend Developer - Maciej Szostak</title>
      <main className="h-screen w-screen overflow-hidden">
        <div className="flex items-center flex-col justify-center h-full w-full p-2 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start space-x-2 xl:space-x-4 w-full">
            <div className="w-full lg:w-2/5 flex lg:justify-end">
              <img
                src={'/avatar.jpeg'}
                alt="avatar"
                className="rounded-full w-40 h-40 md:w-44 md:h-44"
              />
            </div>
            <div className="w-full lg:w-3/5 justify-start lg:mt-8">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 xl:text-7xl text-gray-900 tracking-wide">
                Maciej Szostak
              </h1>
              <h2 className="tracking-wide text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-gray-700">
                Frontend Developer
              </h2>
              <div className="mt-4 space-y-2 lg:mt-5 2xl:mt-6">
                <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold tracking-wide">
                  Technologies that I have experience with:
                </p>
                <li className="flex items-center justify-start space-x-1">
                  <Icon
                    name="react"
                    className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                  <p className="text-base font-semibold sm:text-lg md:text-xl xl:text-2xl">
                    React / NextJS
                  </p>
                </li>
                <li className="flex items-center justify-start space-x-1">
                  <Icon
                    name="typescript"
                    className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                  <p className="text-base font-semibold sm:text-lg md:text-xl xl:text-2xl">
                    TypeScript / JavaScript
                  </p>
                </li>
                <li className="flex items-center justify-start space-x-1">
                  <Icon
                    name="css"
                    className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                  <p className="text-base font-semibold sm:text-lg md:text-xl xl:text-2xl">
                    CSS3 / SASS / TailwindCSS / CSS in JS
                  </p>
                </li>
                <li className="flex items-center justify-start space-x-1">
                  <Icon
                    name="html"
                    className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                  <p className="text-base font-semibold sm:text-lg md:text-xl xl:text-2xl">
                    HTML
                  </p>
                </li>
              </div>
              <div className="mt-4 space-y-2 lg:mt-5 2xl:mt-6">
                <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold tracking-wide text-gray-900">
                  Developed:
                </p>
                <Link
                  href={'https://brandbuddies.pl'}
                  target="_blank"
                  className="flex items-center justify-start space-x-1"
                >
                  <div className="w-3 h-3 bg-gray-900 rounded-full" />
                  <p className="text-base font-semibold sm:text-lg md:text-xl xl:text-2xl underline">
                    BrandBuddies
                  </p>
                </Link>
                <Link
                  href={'https://fansi.pl'}
                  target="_blank"
                  className="flex items-center justify-start space-x-1"
                >
                  <div className="w-3 h-3 bg-gray-900 rounded-full" />
                  <p className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl xl:text-2xl underline">
                    Fansi
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 flex items-center flex-col">
            <div className="flex space-x-2 mb-1">
              <Link href={'https://github.com/MSzostaq'} target="_blank">
                <Icon
                  name="github"
                  className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 hover:opacity-70"
                />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/mszostaq/'}
                target="_blank"
              >
                <Icon
                  name="linkedin"
                  className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 hover:opacity-70"
                />
              </Link>
              <Link href={'/docs/cv.pdf'} target="_blank">
                <Icon
                  name="cv"
                  className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 hover:opacity-70"
                />
              </Link>
            </div>
            <div>
              <p>&copy; 2023 Maciej Szostak</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

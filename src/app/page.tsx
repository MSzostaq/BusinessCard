import { Icon } from '@/components/Icon'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <title>Frontend Developer - Maciej Szostak</title>
      <main className="px-12 h-screen">
        <div className="flex flex-col h-full w-full">
          <div className="flex w-full items-center ">
            <div className="w-1/3 h-1/3">
              <Image
                src={'/avatar.jpeg'}
                alt="avatar"
                layout="responsive"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="">
              <div>
                <h1 className="font-bold text-4xl">Maciej Szostak</h1>
                <h2 className="text-2xl font-medium">Frontend Developer</h2>
              </div>
              <div>
                <p>Technologies that i have experienice with:</p>
                <li className="flex items-center justify-start">
                  <Icon name="react" className="w-5 h-5" />
                  <p>React/NextJS</p>
                </li>
                <li className="flex items-center justify-start">
                  <Icon name="typescript" className="w-5 h-5" />
                  <p>TypeScript/JavaScript</p>
                </li>
                <li className="flex items-center justify-start">
                  <Icon name="html" className="w-5 h-5" />
                  <p>HTML</p>
                </li>
                <li className="flex items-center justify-start">
                  <Icon name="css" className="w-5 h-5" />
                  <p>CSS</p>
                </li>
              </div>
            </div>
          </div>
          <div>
            <p>2023 Maciej Szostak</p>
          </div>
        </div>
      </main>
    </>
  )
}

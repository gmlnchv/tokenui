import { HomeLayout } from 'fumadocs-ui/layouts/home'
import Image from 'next/image'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="home-layout">
      <HomeLayout
        nav={{
          title: (
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Token UI Logo" width={24} height={24} className="size-6" />
              <span className="font-serif text-xl font-medium tracking-tight">Token UI</span>
            </div>
          ),
          url: '/',
        }}
        links={[
          {
            text: 'Components',
            url: '/docs/components/token',
          },
        ]}
      >
        {children}
      </HomeLayout>
    </div>
  )
}

'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import BrandSection from '@/components/BrandSection'
import Loading from './loading'

// Dynamically import components for better performance
const TeamDemos = dynamic(() => import('@/components/TeamDemos'), {
  loading: () => <Loading />
})

const TabGroup = dynamic(() => import('@/components/TabGroup'), {
  loading: () => <Loading />
})

const MarketingSection = dynamic(() => import('@/components/MarketingSection'), {
  loading: () => <Loading />
})

const ScrollingText = dynamic(() => import('@/components/ScrollingText'), {
  loading: () => <Loading />
})

const FastestWay = dynamic(() => import('@/components/FastestWay'), {
  loading: () => <Loading />
})

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-[72px]">
        <Suspense fallback={<Loading />}>
          <TeamDemos />
          <TabGroup />
          <MarketingSection />
          <ScrollingText />
          <FastestWay />
          <BrandSection />
        </Suspense>
      </div>
    </main>
  )
}
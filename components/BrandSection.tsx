'use client'

import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { trackEvent } from '@/lib/utils/analytics'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function BrandSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <>
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-2 gap-16">
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-video">
              <Image 
                src="https://profilerankings.com/wp-content/uploads/2025/01/home_video2.gif"
                alt="Dashboard Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-600 font-medium">2</span>
            <span className="text-sm font-medium">Edit</span>
          </div>

          <h2 className="text-[40px] leading-tight font-bold text-gray-900 mb-6">
            On-brand, everytime.
          </h2>

          <p className="text-lg text-gray-600 mb-16 leading-relaxed">
            Our easy-to-use builder unlocks creativity while maintaining brand consistency. 
            Boost engagement with voiceovers, branching, and other interactive elements.
          </p>
          
          <div className="mt-auto">
            <blockquote className="text-gray-600 text-base mb-4">
              "We've loved using Arcade to spice up our socials and add interactive demos to our blog posts!"
            </blockquote>
            <div className="h-[40px] relative">
              <Image 
                src="/64ac298adf8d9105d5eab203_aaron.svg"
                alt="Aaron Lu signature"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                className="opacity-80"
              />
            </div>
          </div>

          <Button 
            variant="link" 
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 w-fit group"
            onClick={() => trackEvent('button_click', { button: 'learn_more_brand' })}
          >
            Learn more
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="transform transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
    
    {/* Testimonials Section */}
    <div className="bg-gradient-to-b from-white to-blue-50/20 py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[48px] leading-tight font-bold text-center mb-6">
          You're in great company.
        </h2>
        <p className="text-xl text-gray-600 text-center mb-20">
          How our customers use Arcade to drive impact
        </p>

        <div className="relative">
          <div className="bg-white rounded-[32px] shadow-lg p-16 mb-32">
            <blockquote className="text-[36px] leading-tight font-medium text-gray-900 mb-12 max-w-4xl">
              "Arcade is one of the most important ways for us to showcase the product and allow our web visitors and prospects to self-educate even before they jump into the product."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Danielle Rundle"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-lg">Danielle Rundle</div>
                <div className="text-gray-600">VP Product and Marketing @ Nudge Security</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start max-w-5xl mx-auto">
            <div className="text-center px-8">
              <div className="text-[56px] font-bold text-blue-600 mb-2">2<span className="text-2xl">x</span></div>
              <div className="text-gray-600 text-sm">Conversion rate over<br />live 1:1 demos</div>
            </div>
            <div className="text-center px-8">
              <div className="text-[56px] font-bold text-blue-600 mb-2">45<span className="text-2xl">%</span></div>
              <div className="text-gray-600 text-sm">Faster to help move<br />prospects onwards</div>
            </div>
            <div className="text-center px-8">
              <div className="text-[56px] font-bold text-blue-600 mb-2">10<span className="text-2xl">x</span></div>
              <div className="text-gray-600 text-sm">Faster to create<br />demos vs. video</div>
            </div>
          </div>

          <div className="flex justify-center mt-24">
            <Button className="rounded-full px-8 py-6 text-base font-medium">
              More customer stories
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
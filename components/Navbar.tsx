'use client'

import { useEffect, useState } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { trackEvent } from '@/lib/utils/analytics'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (action: string) => {
    trackEvent('nav_click', { action })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
      <header className={`relative max-w-7xl mx-auto px-4 transition-all duration-200 ${
        isScrolled ? 'py-2 border rounded-2xl mx-4 my-4 shadow-sm bg-white' : ''
      }`}>
        <nav className="px-6">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex items-center gap-10">
              <Image 
                src="/logo.svg" 
                alt="Profile Rankings"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-medium text-gray-800">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-6 w-[400px] bg-white rounded-xl shadow-lg">
                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer" onClick={() => handleNavClick('product_overview')}>
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                              <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                              <path d="M4 13a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />
                              <path d="M4 21a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Product Overview</h3>
                            <p className="text-sm text-gray-500">Effortlessly beautiful demos</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer" onClick={() => handleNavClick('lead_generation')}>
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Lead Generation</h3>
                            <p className="text-sm text-gray-500">Drive demand and pipeline</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer" onClick={() => handleNavClick('personalization')}>
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Personalization</h3>
                            <p className="text-sm text-gray-500">Tailored storytelling at scale</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer" onClick={() => handleNavClick('integrations')}>
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                              <path d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3" />
                              <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Integrations</h3>
                            <p className="text-sm text-gray-500">Connect Arcade with other tools</p>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-medium text-gray-800">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-6 w-[400px] bg-white rounded-xl shadow-lg">
                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Enterprise</h3>
                            <p className="text-sm text-gray-500">Custom solutions for large teams</p>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-medium text-gray-800">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-6 w-[400px] bg-white rounded-xl shadow-lg">
                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Documentation</h3>
                            <p className="text-sm text-gray-500">Start building beautiful demos</p>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-medium text-gray-800">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-6 w-[400px] bg-white rounded-xl shadow-lg">
                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">About</h3>
                            <p className="text-sm text-gray-500">Learn about our mission</p>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button 
                      className="text-[16px] font-medium text-gray-800 px-4 py-2 hover:bg-gray-50 rounded-md"
                      onClick={() => handleNavClick('pricing')}
                    >
                      Pricing
                    </button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="text-[16px] font-medium text-gray-800"
                onClick={() => handleNavClick('login')}
              >
                Log in
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 text-[15px]"
                onClick={() => handleNavClick('get_started')}
              >
                Get started for free
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
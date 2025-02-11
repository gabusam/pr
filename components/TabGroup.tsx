'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { trackEvent } from '@/lib/utils/analytics'
import type { TabItem } from '@/types'

export default function TabGroup() {
  const [activeTab, setActiveTab] = useState('marketing')
  const { ref, isVisible } = useIntersectionObserver()
  
  const tabs: TabItem[] = [
    { id: 'marketing', label: 'Marketing' },
    { id: 'product', label: 'Product' },
    { id: 'sales', label: 'Sales & Pre-sales' },
    { id: 'customer', label: 'Customer Success' },
    { id: 'enablement', label: 'Enablement & Training' },
  ]

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    trackEvent('tab_change', { tab: tabId })
  }

  return (
    <div ref={ref} className="flex justify-center px-4">
      <div className="bg-[#F8FAFC] rounded-2xl w-full max-w-7xl">
        <div className="flex justify-center">
          <div className="flex gap-4 px-6 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  'px-5 py-2.5 text-[15px] transition-all rounded-full',
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 font-medium shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
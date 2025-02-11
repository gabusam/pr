import { Chrome, Apple } from 'lucide-react'

export default function FastestWay() {
  return (
    <div className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[56px] leading-tight font-bold text-center mb-4">
          The fastest way to tell your story.
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-24">
          Designed for scale, Arcade allows teams to build interactive demos without relying on technical or creative resources.
        </p>

        <div className="grid grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 font-medium">1</span>
              <span className="bg-yellow-100 px-2 py-0.5 text-sm font-medium rounded">Record</span>
            </div>

            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-yellow-100 px-3 py-1 rounded">No code required.</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Record on any device using Arcade's Chrome extension, desktop app, or uploaded media. Steps are automatically stitched together.
            </p>

            <div className="space-y-4">
              <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <Chrome className="w-5 h-5" />
                Install Extension
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>

              <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <Apple className="w-5 h-5" />
                Download Desktop App
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="mt-12">
              <blockquote className="text-gray-600 text-lg">
                "The simplicity is only surpassed by the result. Excellent product!"
              </blockquote>
              <div className="mt-4">
                <p className="font-serif text-xl italic">Paul Dietzel</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-2xl p-4 aspect-square"></div>
            <div className="bg-gray-50 rounded-2xl p-4 aspect-square"></div>
            <div className="bg-gray-50 rounded-2xl p-4 aspect-square col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
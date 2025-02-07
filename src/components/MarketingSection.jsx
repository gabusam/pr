export default function MarketingSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-2 gap-16">
        <div className="pt-12">
          <h1 className="text-[56px] leading-tight font-bold text-gray-900 mb-6">
            Arcade<br />for marketing
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Build compelling, on-brand demos in minutes to drive leads, boost product adoption, and more effectively tell your product's story.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-gray-600">Chapters</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-gray-600">Call-to-action buttons</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-gray-600">Export to GIF/Video</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-gray-600">White-labeled Arcades</span>
            </div>
          </div>

          <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img 
                  src="https://profilerankings.com/wp-content/uploads/2025/01/home_video2.gif"
                  alt="Product Demo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 right-8 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-10">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-sm font-medium whitespace-nowrap">Up to 5x trial conversion</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-2 gap-16">
        {/* Left side content remains the same */}
        <div className="pt-12">
          {/* ... existing content ... */}
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-5 to-blue-50 rounded-2xl p-1 shadow-lg">
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
            <span className="text-sm font-medium whitespace-nowrap">More than 2x increase in new customers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

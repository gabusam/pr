import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <div className="flex justify-center pt-4 px-4">
      <header className="bg-white rounded-2xl shadow-sm border w-full max-w-7xl">
        <nav className="px-6">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex items-center gap-10">
              <img 
                src="/profile-rankings-logo.png" 
                alt="Profile Rankings" 
                className="h-8"
              />
              
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-medium text-gray-800">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-6 w-[400px] bg-white rounded-xl shadow-lg">
                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
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

                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
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

                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
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

                        <div className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
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
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-medium text-gray-800">
                      Resources
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-medium text-gray-800">
                      Company
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button className="text-[16px] font-medium text-gray-800 px-4 py-2 hover:bg-gray-50 rounded-md">
                      Pricing
                    </button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-[16px] font-medium text-gray-800">Log in</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 text-[15px]">
                Get started for free
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

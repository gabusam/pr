export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuPositions, setMenuPositions] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateMenuPositions = () => {
      const triggers = document.querySelectorAll('[data-menu-trigger]')
      const positions = {}
      
      triggers.forEach(trigger => {
        const rect = trigger.getBoundingClientRect()
        const menuName = trigger.getAttribute('data-menu-trigger')
        positions[menuName] = rect.left
      })
      
      setMenuPositions(positions)
    }

    updateMenuPositions()
    window.addEventListener('resize', updateMenuPositions)
    return () => window.removeEventListener('resize', updateMenuPositions)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md"></div>
      <nav className={`relative z-50 flex items-center justify-between px-6 py-4 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="flex items-center">
          <Logo />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="text-[16px] font-medium text-gray-800"
                data-menu-trigger="solutions"
              >
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent 
                style={{ '--trigger-left': `${menuPositions.solutions}px` }}
              >
                <div className="grid gap-4 p-6 w-[400px] bg-white rounded-xl shadow-lg">
                  {/* Solutions content */}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="text-[16px] font-medium text-gray-800"
                data-menu-trigger="resources"
              >
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent 
                style={{ '--trigger-left': `${menuPositions.resources}px` }}
              >
                <div className="grid gap-4 p-6 w-[400px] bg-white rounded-xl shadow-lg">
                  {/* Resources content */}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="text-[16px] font-medium text-gray-800"
                data-menu-trigger="company"
              >
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent 
                style={{ '--trigger-left': `${menuPositions.company}px` }}
              >
                <div className="grid gap-4 p-6 w-[400px] bg-white rounded-xl shadow-lg">
                  {/* Company content */}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </div>
  )
}
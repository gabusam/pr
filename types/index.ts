export interface NavItem {
  title: string
  href?: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  items?: NavItem[]
}

export interface MarketingFeature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface TeamDemo {
  title: string
  description: string
  image: string
  stats?: {
    value: string
    label: string
  }[]
}

export interface TabItem {
  id: string
  label: string
  content?: React.ReactNode
}

export interface ScrollingTextItem {
  text: string
  icon?: React.ReactNode
  highlight?: string
}
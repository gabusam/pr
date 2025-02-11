type EventName = 'page_view' | 'button_click' | 'demo_start' | 'demo_complete' | 'signup_start' | 'signup_complete'

interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

export const trackEvent = (name: EventName, properties?: EventProperties) => {
  // Replace with your analytics implementation
  console.log(`[Analytics] ${name}`, properties)
}

export const trackPageView = (url: string) => {
  trackEvent('page_view', { url })
}
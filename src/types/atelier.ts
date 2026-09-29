export interface ServiceTier {
  id: string
  name: string
  price: string
  isPopular?: boolean
  description: string
  tags: string[]
  icon: 'badge' | 'stream' | 'brush' | 'sparkle' | 'star' | 'coffee'
}

export interface SocialChannel {
  name: string
  stat: string
  href: string
  tag?: string
}

export interface GalleryShowcaseItem {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  imageUrl: string
  tags: string[]
}

export interface TippingChannel {
  name: string
  description: string
  href: string
  badgeText?: string
}
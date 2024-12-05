export const openGraphImage = {
  images: [
   {
      url: 'https://fakestoreapi.com/icons/intro.svg',
      alt: "eStore"
   }
  ]
}

export const keyWords = [
  'retail',
  'clothing',
  'technology',
  'jewelry',
  'eCommerce',
  "store",
  "shop",
]

export const robots = {
  index: false,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

export const icons = {
  icons: {
    icon: '/favicon.ico'
  }
}

export const title = "eStore"
export const description = "An e-commerce store for all your needs"

export const twitter = {
  card: 'summary',
  title: title,
  description: description,
  site: '@eStore',
  creator: '@eStore',
  image: {
    url: `${process.env.HOST}/favicon.ico`,
    alt: 'eStore Logo ',
  },
}

export const verification = {
  google: 'google',
  yandex: 'yandex',
  yahoo: 'yahoo',
  other: {
    me: ['my-email', 'my-link'],
  },
}

export const alternates = {
  canonical: process.env.HOST,
  languages: {
    'en-AU': `${process.env.HOST}/en-AU`,
  }
}

export const basicFields = {
  generator: 'Next.js',
  applicationName: 'eStore',
  referrer: 'origin-when-cross-origin',
  keywords: keyWords,
  authors: [{ name: 'Liam Alton', url: process.env.HOST }],
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  creator: 'Liam Alton',
  publisher: 'Liam Alton',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: process.env.HOST ? new URL(process.env.HOST): '',
  alternates: {
    canonical: '/',
    languages: {
      'en-AU': '/en-AU',
    }
  },
  robots: robots,
  icons: icons,
  manifest: `${process.env.HOST}/manifest.json`,
  twitter: twitter,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: verification,
  category: 'technology'
}

export const openGraphBasicFields = {
  url: process.env.HOST,
  siteName: 'eStore',
  locale: 'en_AU',
  authors: [{ name: 'Liam Alton', url: process.env.HOST }]
}
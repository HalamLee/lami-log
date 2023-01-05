const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Lami',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'frontend developer',
    bio: '삶이 온통 사람의 길이니',
    email: 'halam.lee.lami@gmail.com',
    linkedin: '',
    github: 'halamlee',
    instagram: '',
  },
  projects: [
    {
      name: 'Easy Gitmoji',
      href: 'https://easy-gitmoji.halamlee.com/'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'lami-log',
    description: 'welcome to morethan-log!',
    theme: 'dark' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://www.halamlee.com/',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG

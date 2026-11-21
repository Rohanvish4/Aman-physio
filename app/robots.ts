import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    host: 'https://urmilaphysiocare.com',
    sitemap: 'https://urmilaphysiocare.com/sitemap.xml',
  };
}

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kindredkira.com';

    const routes = [
        '',
        '/about',
        '/founders',
        '/pricing',
        '/usecases',
        '/blog',
        '/capabilities',
        '/experience',
        '/waiting-list',
        '/contact',
        '/privacy',
        '/terms',
        '/security',
        '/deep-empathy',
        '/natural-voice',
        '/proactive-care',
        '/infinite-memory',
        '/zero-judgment',
        '/adaptive-growth',
        '/loyalty',
        '/adhd-body-doubling',
        '/anti-ghosting',
        '/burnout-support',
        '/decision-support',
        '/insomnia-chat',
        '/loneliness-support',
        '/mental-load',
        '/relationship-anxiety',
        '/therapy-gap',
        '/digital-best-friend',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}

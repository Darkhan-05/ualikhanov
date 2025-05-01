export const ENDPOINTS = {
    ASSETS: '/assets/',
    GET: {
        NEWS_LAST: '/api/newses?populate=image&sort=createdAt:desc&pagination[limit]=2',
    }
} as const;
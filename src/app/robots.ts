import { MetadataRoute } from 'next';

const baseUrl = 'https://www.planetxdevs.com';

/**
 * AI assistants and search crawlers we explicitly welcome.
 * We *want* Planet X Devs to appear in AI answers and summaries, so every
 * major AI crawler and AI-search bot is given full access. Listing them
 * explicitly (rather than relying on the `*` rule alone) signals intent and
 * covers crawlers that look for their own user-agent block first.
 */
const aiCrawlers = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Claude-SearchBot',
  // Google (Gemini / AI Overviews training)
  'Google-Extended',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Apple Intelligence
  'Applebot',
  'Applebot-Extended',
  // Common Crawl (feeds many LLMs)
  'CCBot',
  // Others
  'Amazonbot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'DuckAssistBot',
  'YouBot',
  'Timpibot',
  'Bytespider',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/wireframes/', '/style-guide'],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

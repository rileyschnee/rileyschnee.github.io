import type { APIRoute } from 'astro';

const robotsTxt = `
# Block AI Training and Agents
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Anthropic AI
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: OAI-SearchBot
Disallow: /

# Allow Recruiters & Search Engine Sourcing
User-agent: *
Allow: /
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

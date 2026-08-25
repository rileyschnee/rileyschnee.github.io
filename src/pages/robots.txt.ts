import type { APIRoute } from 'astro';

/* Bots to block: primarily training bots! */
const badBots = ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic AI', 'ClaudeBot', 'Claude-Web', 'CCBot', 'PerplexityBot', 'OAI-SearchBot', 'Meta-ExternalAgent', 'Bytespider'];

const botRules = badBots.map(bot => `User-agent: ${bot}\nDisallow: /`).join('\n\n');

export const GET: APIRoute = () => {
  return new Response(botRules, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

export type AiTool = {
  id: number;
  name: string;
  category: string;
  description: string;
  tags: string[];
  pricing: string;
  rating: number;
  featured?: boolean;
};

const categoryMeta: Record<
  string,
  { focus: string; tags: string[]; pricingOptions: string[] }
> = {
  'AI Writing': {
    focus: 'create polished content and high-converting copy',
    tags: ['writing', 'content', 'copy'],
    pricingOptions: ['Free', 'Pro', 'Business'],
  },
  'Image Generation': {
    focus: 'generate visuals, mockups, and creative assets',
    tags: ['design', 'images', 'art'],
    pricingOptions: ['Free', 'Creator', 'Studio'],
  },
  'Video AI': {
    focus: 'turn ideas into short-form and branded videos',
    tags: ['video', 'editing', 'marketing'],
    pricingOptions: ['Starter', 'Pro', 'Scale'],
  },
  'Coding Assistant': {
    focus: 'accelerate product development and debugging',
    tags: ['coding', 'devops', 'productivity'],
    pricingOptions: ['Free', 'Team', 'Enterprise'],
  },
  'Research & Analysis': {
    focus: 'surface insights from data and online research',
    tags: ['research', 'analysis', 'insights'],
    pricingOptions: ['Free', 'Pro', 'Team'],
  },
  'SEO & Marketing': {
    focus: 'improve rankings and enable smarter campaigns',
    tags: ['seo', 'marketing', 'growth'],
    pricingOptions: ['Starter', 'Growth', 'Agency'],
  },
  'Design & Branding': {
    focus: 'design consistent branding and visual assets',
    tags: ['branding', 'design', 'creative'],
    pricingOptions: ['Free', 'Pro', 'Brand'],
  },
  Productivity: {
    focus: 'reduce busywork and keep teams aligned',
    tags: ['workflow', 'organization', 'ops'],
    pricingOptions: ['Free', 'Plus', 'Business'],
  },
  'Voice & Audio': {
    focus: 'generate realistic voice, narration, and sound content',
    tags: ['voice', 'audio', 'podcast'],
    pricingOptions: ['Free', 'Creator', 'Studio'],
  },
  Automation: {
    focus: 'automate repetitive tasks and digital workflows',
    tags: ['automation', 'workflow', 'ops'],
    pricingOptions: ['Free', 'Professional', 'Scale'],
  },
  'Customer Support': {
    focus: 'deliver faster, smarter customer experiences',
    tags: ['support', 'service', 'crm'],
    pricingOptions: ['Starter', 'Pro', 'Scale'],
  },
  'Business Intelligence': {
    focus: 'turn data into dashboards and strategic decisions',
    tags: ['analytics', 'reports', 'data'],
    pricingOptions: ['Free', 'Business', 'Enterprise'],
  },
  'Sales & CRM': {
    focus: 'increase pipeline quality and improve sales efficiency',
    tags: ['sales', 'crm', 'pipeline'],
    pricingOptions: ['Free', 'Growth', 'Enterprise'],
  },
  'Developer Tools': {
    focus: 'build software faster with AI-powered workflows',
    tags: ['developer', 'build', 'code'],
    pricingOptions: ['Free', 'Pro', 'Team'],
  },
  Education: {
    focus: 'support learning, coaching, and better study outcomes',
    tags: ['learning', 'education', 'coaching'],
    pricingOptions: ['Free', 'Plus', 'School'],
  },
  'Social Media': {
    focus: 'plan, publish, and optimize content across channels',
    tags: ['social', 'content', 'engagement'],
    pricingOptions: ['Free', 'Creator', 'Agency'],
  },
};

const toolCatalog: Record<string, string[]> = {
  'AI Writing': [
    'ChatGPT',
    'Claude',
    'Jasper',
    'Copy.ai',
    'Writesonic',
    'Rytr',
    'GrammarlyGO',
    'Frase',
  ],
  'Image Generation': [
    'Midjourney',
    'Stable Diffusion',
    'DALL-E',
    'Leonardo AI',
    'Runway Gen-2',
    'Adobe Firefly',
    'Ideogram',
    'Craiyon',
  ],
  'Video AI': [
    'Pika',
    'Synthesia',
    'Descript',
    'Veed',
    'CapCut AI',
    'HeyGen',
    'Lumen5',
    'Runway',
  ],
  'Coding Assistant': [
    'GitHub Copilot',
    'Codeium',
    'Tabnine',
    'Replit AI',
    'Cursor',
    'Amazon CodeWhisperer',
    'Sourcegraph Cody',
    'CodeRabbit',
  ],
  'Research & Analysis': [
    'Perplexity',
    'Elicit',
    'Consensus',
    'Scite',
    'Grok',
    'You.com',
    'Semantic Scholar',
    'Scholarcy',
  ],
  'SEO & Marketing': [
    'Surfer SEO',
    'MarketMuse',
    'SEMrush AI',
    'Ahrefs AI',
    'Clearscope',
    'Outranking',
    'NeuralText',
    'BuzzSumo AI',
  ],
  'Design & Branding': [
    'Canva Magic',
    'Figma AI',
    'Adobe Express',
    'Looka',
    'Brandmark',
    'VistaCreate',
    'Uizard',
    'Miro AI',
  ],
  Productivity: [
    'Notion AI',
    'Otter.ai',
    'Granola',
    'Zapier AI',
    'Motion',
    'ClickUp AI',
    'Trello AI',
    'Taskade AI',
  ],
  'Voice & Audio': [
    'ElevenLabs',
    'Descript Audio',
    'Murf',
    'PlayHT',
    'Lovo AI',
    'WellSaid Labs',
    'Speechify',
    'Resemble AI',
  ],
  Automation: [
    'Make',
    'n8n',
    'Bardeen',
    'UiPath AI',
    'Pipedream',
    'Airtable AI',
    'Workato',
    'Zapier',
  ],
  'Customer Support': [
    'Intercom AI',
    'Drift',
    'Zendesk AI',
    'Freshdesk AI',
    'Tidio',
    'Hiver',
    'Gorgias',
    'Ada',
  ],
  'Business Intelligence': [
    'Tableau AI',
    'Power BI Copilot',
    'Looker',
    'Mode',
    'ThoughtSpot',
    'Qlik',
    'Sisense',
    'Hex',
  ],
  'Sales & CRM': [
    'HubSpot AI',
    'Salesforce Einstein',
    'Apollo AI',
    'Clari',
    'Gong',
    'Outreach',
    'Drip',
    'Close AI',
  ],
  'Developer Tools': [
    'Windsurf',
    'Lovable',
    'v0',
    'Codegen',
    'Cline',
    'Bolt.new',
    'Readdy',
    'Piece',
  ],
  Education: [
    'Quizlet AI',
    'Khanmigo',
    'Coursera Coach',
    'Duolingo Max',
    'Socratic',
    'Edpuzzle',
    'Tutor.ai',
    'Study.com AI',
  ],
  'Social Media': [
    'Buffer AI',
    'Later',
    'Hootsuite AI',
    'Sprout Social',
    'Predis.ai',
    'SocialBee',
    'Ocoya',
    'Publer',
  ],
};

export const aiTools: AiTool[] = Object.entries(toolCatalog).flatMap(
  ([category, tools], categoryIndex) =>
    tools.map((toolName, toolIndex) => {
      const meta = categoryMeta[category];
      const pricing = meta.pricingOptions[toolIndex % meta.pricingOptions.length];
      const rating = Number((4.5 + (toolIndex % 5) * 0.1).toFixed(1));

      return {
        id: categoryIndex * 100 + toolIndex + 1,
        name: toolName,
        category,
        description: `${toolName} helps teams ${meta.focus} with AI-powered workflows, faster decisions, and better output quality.`,
        tags: meta.tags,
        pricing,
        rating,
        featured: toolIndex < 3,
      };
    })
);

export const totalTools = aiTools.length;

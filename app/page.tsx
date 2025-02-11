'use client';

import { ArrowRight, Database, FileText, Mail, MessageSquare, Phone, PieChart, Search, Settings, Share2, Shield, Target, Users } from 'lucide-react';
import { verlagBold, verlagBook } from './fonts';

const integrations = [
  {
    name: 'LinkedIn',
    description: 'Import contacts and companies from LinkedIn.',
    image: 'https://clay.earth/images/integrations/linkedin.svg'
  },
  {
    name: 'Salesforce',
    description: 'Sync contacts and accounts bi-directionally.',
    image: 'https://clay.earth/images/integrations/salesforce.svg'
  },
  {
    name: 'HubSpot',
    description: 'Keep your HubSpot CRM in sync with Clay.',
    image: 'https://clay.earth/images/integrations/hubspot.svg'
  },
  {
    name: 'Apollo',
    description: 'Enrich your contacts with data from Apollo.',
    image: 'https://clay.earth/images/integrations/apollo.svg'
  },
  {
    name: 'Clearbit',
    description: 'Get company and person data from Clearbit.',
    image: 'https://clay.earth/images/integrations/clearbit.svg'
  },
  {
    name: 'Gmail',
    description: 'Import contacts and sync email activity.',
    image: 'https://clay.earth/images/integrations/gmail.svg'
  },
  {
    name: 'Slack',
    description: 'Get notifications and updates in Slack.',
    image: 'https://clay.earth/images/integrations/slack.svg'
  },
  {
    name: 'Zapier',
    description: 'Connect Clay to thousands of apps.',
    image: 'https://clay.earth/images/integrations/zapier.svg'
  },
  {
    name: 'Notion',
    description: 'Sync your Clay data with Notion databases.',
    image: 'https://clay.earth/images/integrations/notion.svg'
  },
  {
    name: 'Analytics',
    description: 'Track and analyze your contact data.',
    icon: PieChart
  },
  {
    name: 'CRM',
    description: 'Manage customer relationships effectively.',
    icon: Users
  },
  {
    name: 'Email Marketing',
    description: 'Send targeted email campaigns.',
    icon: Mail
  },
  {
    name: 'Database',
    description: 'Store and manage your data securely.',
    icon: Database
  },
  {
    name: 'Search',
    description: 'Find contacts and companies quickly.',
    icon: Search
  },
  {
    name: 'Security',
    description: 'Protect your data with advanced security.',
    icon: Shield
  },
  {
    name: 'Reports',
    description: 'Generate detailed business reports.',
    icon: FileText
  }
];

export default function Home() {
  return (
    <main className={`min-h-screen bg-[#F6F5F1] ${verlagBook.variable} ${verlagBold.variable}`}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[28px] tracking-[1px] font-verlag-bold text-[#1F1F1F] mb-6 uppercase">
            Integrations
          </h1>
          <p className="text-[28px] tracking-[1px] font-verlag-book text-[#1F1F1F] mb-12">
            Clay integrates with the tools you already use to enrich your data and take action.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {integrations.map((integration, i) => (
            <div 
              key={i}
              className="card-hover-effect h-[200px] rounded-[6px] p-6 group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 bg-[#F6F5F1] rounded-lg flex items-center justify-center">
                  {integration.image ? (
                    <img 
                      src={integration.image} 
                      alt={integration.name}
                      className="h-6 w-6 object-contain"
                      srcSet={`${integration.image} 1x, ${integration.image} 2x`}
                    />
                  ) : integration.icon && (
                    <integration.icon className="h-6 w-6 text-[#1F1F1F]" />
                  )}
                </div>
                <ArrowRight className="h-5 w-5 text-[#1F1F1F] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-90" />
              </div>
              <h3 className="text-[20px] tracking-[1px] font-verlag-bold text-[#D4733E] mb-3">
                {integration.name}
              </h3>
              <p className="text-[16px] tracking-[1px] font-verlag-book text-[#1F1F1F] leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[28px] tracking-[1px] font-verlag-book text-[#1F1F1F] mb-6">
            Don't see what you're looking for?
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-[#1F1F1F] rounded-lg text-[28px] tracking-[1px] font-verlag-bold text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition-colors duration-300">
            Request an integration
          </button>
        </div>
      </div>
    </main>
  );
}
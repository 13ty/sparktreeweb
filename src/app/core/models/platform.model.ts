export interface Platform {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export const PLATFORMS: Platform[] = [
  {
    id: 'spark-tree',
    name: 'Spark Tree',
    tagline: 'The Marketplace',
    description: 'Spark Tree is our flagship platform, where local businesses can showcase their products and services to a targeted audience.',
    features: [
      'Create company profiles',
      'List products and services',
      'Connect with customers',
      'Access business resources'
    ]
  },
  {
    id: 'spark-leaf',
    name: 'Spark Leaf',
    tagline: 'The Collaboration Hub',
    description: 'Spark Leaf is our collaboration platform, designed to bring together creatives, entrepreneurs, and experts from diverse backgrounds.',
    features: [
      'Join interest groups',
      'Share knowledge',
      'Collaborate on projects',
      'Attend exclusive events'
    ]
  },
  {
    id: 'spark-seed',
    name: 'Spark Seed',
    tagline: 'The Incubator',
    description: 'Spark Seed is our incubator program, dedicated to supporting early-stage startups and entrepreneurs.',
    features: [
      'Mentorship programs',
      'Funding opportunities',
      'Startup networking',
      'Expert guidance'
    ]
  }
];

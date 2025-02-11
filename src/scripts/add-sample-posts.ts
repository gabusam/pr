import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const samplePosts = [
  {
    title: "What is a Flat File?",
    slug: "what-is-a-flat-file",
    excerpt: "The ultimate guide to flat files, their use cases and format specifics",
    content: `
# What is a Flat File?

A flat file is a type of database that stores data in a plain text or binary file. Each line in the file typically represents one record, with fields separated by delimiters like commas, tabs, or fixed-width columns.

## Common Flat File Formats

1. CSV (Comma-Separated Values)
2. TSV (Tab-Separated Values)
3. Fixed-width format
4. JSON (JavaScript Object Notation)
5. XML (Extensible Markup Language)

## Use Cases

- Data exchange between different systems
- Simple data storage for small applications
- Backup and archival purposes
- Data migration projects
- Configuration files

## Advantages and Disadvantages

### Advantages
- Simple to understand and use
- Human-readable
- Platform-independent
- Easy to version control

### Disadvantages
- Limited data validation
- No built-in indexing
- Not suitable for complex relationships
- Limited concurrent access
    `,
    image_url: "https://images.unsplash.com/photo-1555532538-dcdbd01d373d?q=80&w=1000",
    published: true,
    published_at: "2025-01-30T00:00:00.000Z"
  },
  {
    title: "The Most Popular Code-based Business Intelligence Tools, Reviewed",
    slug: "popular-code-based-bi-tools-reviewed",
    excerpt: "Comparing the most popular BI-as-code tools: Evidence, Streamlit, Dash, Observable, Shiny and Quarto",
    content: `
# Code-based Business Intelligence Tools Review

In this comprehensive review, we'll examine the most popular code-based business intelligence tools available today. We'll compare their features, performance, and use cases to help you make an informed decision.

## Evidence

Evidence combines the power of SQL and markdown to create beautiful data documentation. It's designed for teams that want to version control their analytics and create reproducible reports.

### Key Features
- SQL-first approach
- Version control friendly
- Beautiful default styling
- Easy deployment options

## Streamlit

Streamlit turns data scripts into shareable web apps. It's popular among data scientists who want to create interactive dashboards quickly.

### Key Features
- Python-based
- Rich widget library
- Real-time updates
- Easy deployment

## Dash

Dash by Plotly enables you to build analytical web applications using Python, R, or Julia.

### Key Features
- React-based components
- Enterprise-ready
- Advanced customization
- Multiple language support
    `,
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    published: true,
    published_at: "2024-10-30T00:00:00.000Z"
  },
  {
    title: "Commercial Support for Evidence",
    slug: "commercial-support-for-evidence",
    excerpt: "Launching commercial support for teams self-hosting Evidence apps, with access to maintainers, priority support, and expert guidance.",
    content: `
# Commercial Support for Evidence

We're excited to announce the launch of commercial support for Evidence. This new offering is designed to help teams who are self-hosting Evidence applications get the most out of their implementation.

## What's Included

### Priority Support
- Direct access to Evidence maintainers
- Guaranteed response times
- Private Slack channel

### Expert Guidance
- Architecture reviews
- Performance optimization
- Best practices consulting

### Training
- Team onboarding sessions
- Custom workshops
- Documentation support

## Pricing Tiers

We offer flexible pricing tiers to accommodate teams of all sizes:

1. Standard Support
2. Premium Support
3. Enterprise Support

Each tier includes different levels of support and response times to match your needs.
    `,
    image_url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000",
    published: true,
    published_at: "2024-11-15T00:00:00.000Z"
  }
];

async function addSamplePosts() {
  for (const post of samplePosts) {
    const { error } = await supabase
      .from('posts')
      .insert([post]);
    
    if (error) {
      console.error(`Error inserting post "${post.title}":`, error);
    } else {
      console.log(`Successfully added post: ${post.title}`);
    }
  }
}

addSamplePosts()
  .catch(console.error)
  .finally(() => process.exit(0));
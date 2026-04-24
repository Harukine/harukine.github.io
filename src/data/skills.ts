export interface SkillGroup {
  category: string;
  tags: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'AI & Data',
    tags: ['Azure OpenAI', 'AI Search', 'AI Foundry', 'Vector Indexing', 'Prompt Engineering'],
  },
  {
    category: 'Cloud & Platform',
    tags: ['Azure AKS', 'AWS', 'GCP', 'Platform Engineering', 'Kubernetes', 'Terraform', 'Bicep'],
  },
  {
    category: 'Languages & Frameworks',
    tags: ['C#', '.NET 8', 'TypeScript', 'Go', 'Python', 'NestJS', 'React', 'Spring Boot'],
  },
  {
    category: 'Databases',
    tags: ['PostgreSQL', 'ClickHouse', 'SQL Server', 'DynamoDB'],
  },
  {
    category: 'Security & Architecture',
    tags: ['Auth0', 'OAuth2', 'System Design', 'Microservices', 'RBAC', 'Managed Identity'],
  },
  {
    category: 'Infrastructure & CI/CD',
    tags: ['GitHub Actions', 'Data Pipelines', 'Helm', 'NGINX Ingress', 'GitOps'],
  },
  {
    category: 'Spoken Languages',
    tags: ['English (Native)', 'Japanese (Basic/Learning)'],
  },
];

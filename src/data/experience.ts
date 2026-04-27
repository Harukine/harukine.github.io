export interface Job {
  company: string;
  role: string;
  date: string;
  location: string;
  current?: boolean;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    company: 'Eitoss',
    role: 'Senior Software Engineer',
    date: 'July 2023 – October 2025',
    location: 'Remote',
    current: false,
    bullets: [
      'Designed and shipped production .NET 8 APIs for RAG using Azure OpenAI and AI Search, featuring optimized response streaming and prompt templates.',
      'Built automated ingestion and indexing pipelines (Storage → Analyze → Index) with incremental re-indexing and data validation.',
      'Hardened Azure cloud security by implementing Managed Identity for OpenAI, Storage, and Search services, eliminating credential leakage and secret rotation overhead.',
      'Implemented Auth0 (OIDC/OAuth2) for SPA and API with RBAC via custom claims and roles to secure enterprise data across distributed services.',
      'Orchestrated AKS deployments via Helm; managed NGINX Ingress, HPA (autoscaling), and blue-green rollouts to ensure high availability.',
    ],
  },
  {
    company: 'Foresight Insurance Analytics',
    role: 'Software Engineer',
    date: 'Nov 2022 – June 2023',
    location: 'Toronto, Ontario',
    bullets: [
      'Delivered production Node.js (Express) APIs and Vue SPAs with clear contracts and robust integration testing.',
      'Integrated OpenPilot components, resolving critical compatibility issues and hardening error-handling logic for production stability.',
      'Managed containerized workloads on AKS and DigitalOcean, ensuring reliable performance and scalable resource allocation.',
      'Validated and deployed releases to NVIDIA Jetson TX2 edge devices; authored technical deployment and hardware validation runbooks.',
      'Ported critical algorithmic modules to C# .NET Core to leverage native performance, <strong>cutting compute time by 60%.</strong>',
    ],
  },
  {
    company: 'KetteQ',
    role: 'Software Developer',
    date: 'Feb 2022 – Sept 2022',
    location: 'Remote',
    bullets: [
      'Architected and deployed new RESTful APIs with Spring Boot, Hibernate & Flyway.',
      'Designed normalized schemas in PostgreSQL and ClickHouse, optimizing indexes to significantly improve query performance for data-heavy dashboards.',
      'Built event-driven AWS components (Lambda, SQS, DynamoDB) featuring idempotency, retries, and Dead Letter Queues (DLQs).',
      'Optimized Angular dashboards with virtual scrolling and server-side pagination for high-volume data visualization and responsiveness.',
    ],
  },
  {
    company: 'Uptake',
    role: 'Software Developer',
    date: 'July 2021 – Jan 2022',
    location: 'Toronto, Ontario',
    bullets: [
      'Architected and deployed new ASP.NET web APIs and updated existing cloud-integrated services.',
      'Optimized T-SQL stored procedures and reporting queries in SQL Server, <strong>cutting nightly ETL duration by 45%.</strong>',
      'Delivered new Angular components using AG-Grid & DevExtreme, enhancing data visualization for 100+ users.',
    ],
  },
  {
    company: 'HearMeCheer',
    role: 'Software Developer',
    date: 'Nov 2020 – June 2021',
    location: 'Toronto, Ontario',
    bullets: [
      'Developed and optimized core React components, improving state management and component reusability for the fan engagement dashboard.',
      'Optimized the Developer Experience (DevEx) by architecting OpenAPI/Swagger specifications for Express.js audio APIs, driving a <strong>30% improvement</strong> in engineering onboarding efficiency.',
      'Enhanced Go-based audio processing server, <strong>scaling to handle 500k concurrent fan streams</strong> during live sports events.',
    ],
  },
  {
    company: 'Yupp Technology',
    role: 'Software Developer',
    date: 'Sept 2019 – Aug 2020',
    location: 'Toronto, Ontario',
    bullets: [
      'Developed and shipped core features for the native iOS application, implementing complex UI components and real-time data synchronization with the NestJS microservice backend.',
      'Architected a scalable NestJS microservice architecture utilizing PostgreSQL for persistent storage and RabbitMQ for resilient, webhook-driven data ingestion.',
      'Orchestrated a production-grade 8-node Kubernetes cluster, implementing end-to-end TLS encryption and hardening service-to-service communication.',
    ],
  },
];

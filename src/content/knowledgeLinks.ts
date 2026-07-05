export interface KnowledgeLink {
  title: string
  url: string
  description: string
}

export interface KnowledgeCategory {
  id: string
  title: string
  icon: string
  links: KnowledgeLink[]
}

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    id: 'purview',
    title: 'Microsoft Purview — Grundlagen',
    icon: '🛡️',
    links: [
      {
        title: 'Microsoft Purview Dokumentation',
        url: 'https://learn.microsoft.com/purview/',
        description: 'Zentraler Einstieg in alle Purview-Lösungen (Data Security, Governance, Compliance).',
      },
      {
        title: 'Microsoft Purview Portal',
        url: 'https://purview.microsoft.com/',
        description: 'Das Purview-Portal — zentrale Verwaltung aller Lösungen.',
      },
      {
        title: 'Information Protection & Sensitivity Labels',
        url: 'https://learn.microsoft.com/purview/information-protection',
        description: 'Klassifizierung und Schutz sensibler Daten mit Sensitivity Labels.',
      },
      {
        title: 'Data Loss Prevention (DLP)',
        url: 'https://learn.microsoft.com/purview/dlp-learn-about-dlp',
        description: 'Verhindern von Datenabfluss über Endpoints, Exchange, SharePoint, Teams u.v.m.',
      },
      {
        title: 'Insider Risk Management',
        url: 'https://learn.microsoft.com/purview/insider-risk-management',
        description: 'Erkennung und Management riskanter Insider-Aktivitäten.',
      },
      {
        title: 'Audit & eDiscovery',
        url: 'https://learn.microsoft.com/purview/audit-solutions-overview',
        description: 'Auditing-Lösungen als Grundlage für Forensik und Compliance.',
      },
    ],
  },
  {
    id: 'ai-security',
    title: 'AI Security & DSPM for AI',
    icon: '🤖',
    links: [
      {
        title: 'Data Security Posture Management (DSPM)',
        url: 'https://learn.microsoft.com/purview/data-security-posture-management-learn-about',
        description: 'Die neue DSPM-Generation: AI-gestützte Datensicherheits-Posture inkl. Security Copilot Agents.',
      },
      {
        title: 'DSPM for AI (classic)',
        url: 'https://learn.microsoft.com/purview/dspm-for-ai',
        description: 'AI-Nutzung absichern: Insights, One-Click-Policies, Data Risk Assessments für Copilot & Co.',
      },
      {
        title: 'Security for AI — Discover AI apps and data',
        url: 'https://learn.microsoft.com/security/security-for-ai/discover',
        description: 'Microsofts Framework zur Absicherung von AI-Workloads (Discover → Protect → Govern).',
      },
      {
        title: 'Training: Identify and mitigate AI data security risks',
        url: 'https://learn.microsoft.com/training/modules/purview-identify-mitigate-ai-risks/',
        description: 'Learn-Modul: DSPM for AI konfigurieren, AI-Risiken erkennen und mitigieren.',
      },
      {
        title: 'Von Purview unterstützte AI-Sites',
        url: 'https://learn.microsoft.com/purview/ai-microsoft-purview-supported-sites',
        description: 'Welche Dritt-AI-Apps (ChatGPT, Gemini …) Purview überwachen und schützen kann.',
      },
    ],
  },
  {
    id: 'marketplace',
    title: 'Marketplace & Partner Center',
    icon: '🏪',
    links: [
      {
        title: 'Transacting on Microsoft Marketplace',
        url: 'https://learn.microsoft.com/partner-center/marketplace-offers/transacting-commercial-marketplace',
        description: 'Der komplette Weg zum transactable Offer — Schritt für Schritt.',
      },
      {
        title: 'MACC-Eligibility (Azure Consumption Commitment)',
        url: 'https://learn.microsoft.com/partner-center/marketplace-offers/azure-consumption-commitment-enrollment',
        description: 'Wie Marketplace-Käufe auf das Azure-Commitment der Kunden angerechnet werden.',
      },
      {
        title: 'Marketplace Rewards',
        url: 'https://learn.microsoft.com/partner-center/membership/marketplace-rewards',
        description: 'GTM-Benefits, die mit Marketplace-Publishing freigeschaltet werden.',
      },
      {
        title: 'Mastering the Marketplace',
        url: 'https://aka.ms/MasteringTheMarketplace',
        description: 'On-Demand-Videos, Hands-on-Labs und Sample Code für transactable Offers.',
      },
      {
        title: 'SaaS Accelerator',
        url: 'https://aka.ms/SaaSAccelerator',
        description: 'Referenzimplementierung, um transactable SaaS-Offers schnell zu publizieren.',
      },
      {
        title: 'Microsoft Marketplace',
        url: 'https://marketplace.microsoft.com',
        description: 'Der Marketplace aus Kundensicht — Wettbewerbsanalyse und Inspiration.',
      },
    ],
  },
  {
    id: 'cosell',
    title: 'Co-Sell & GTM',
    icon: '🤝',
    links: [
      {
        title: 'Co-Sell mit Microsoft — Übersicht',
        url: 'https://learn.microsoft.com/partner-center/referrals/co-sell-overview',
        description: 'Wie Co-Selling mit Microsoft-Sales-Teams und Partnern funktioniert.',
      },
      {
        title: 'Co-Sell Requirements',
        url: 'https://learn.microsoft.com/partner-center/referrals/co-sell-requirements',
        description: 'Voraussetzungen für Co-sell-ready und Azure IP Co-sell eligible Status.',
      },
      {
        title: 'Sell with Microsoft',
        url: 'https://partner.microsoft.com/partnership/sell-with-microsoft',
        description: 'Programmatischer Überblick: gemeinsam mit Microsoft verkaufen.',
      },
      {
        title: 'Solutions Partner Designations',
        url: 'https://partner.microsoft.com/partnership/solutions-partner',
        description: 'Solutions-Partner-Designierungen (u.a. Security) — Anforderungen und Benefits.',
      },
    ],
  },
  {
    id: 'skilling',
    title: 'Skilling & Zertifizierung',
    icon: '🎓',
    links: [
      {
        title: 'SC-401: Information Security Administrator',
        url: 'https://learn.microsoft.com/credentials/certifications/information-security-administrator/',
        description: 'Die Purview-Data-Security-Zertifizierung für Delivery-Teams.',
      },
      {
        title: 'SC-100: Cybersecurity Architect Expert',
        url: 'https://learn.microsoft.com/credentials/certifications/cybersecurity-architect-expert/',
        description: 'Architekten-Zertifizierung inkl. Data-Security-Strategie.',
      },
      {
        title: 'Purview-Trainings auf Microsoft Learn',
        url: 'https://learn.microsoft.com/training/browse/?products=microsoft-purview',
        description: 'Alle kostenlosen Learn-Module und Lernpfade rund um Purview.',
      },
      {
        title: 'Microsoft Tech Community',
        url: 'https://techcommunity.microsoft.com/',
        description: 'Produkt-Blogs, Ankündigungen und Community-Austausch (Security & Compliance).',
      },
    ],
  },
]

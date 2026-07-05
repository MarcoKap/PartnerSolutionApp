export interface SolutionExample {
  id: string
  title: string
  tagline: string
  problem: string
  targetCustomer: string
  purviewComponents: string[]
  deliveryModel: string
  duration: string
  marketplaceFit: string
  upsell: string
}

export const solutionExamples: SolutionExample[] = [
  {
    id: 'dlp-quickstart',
    title: 'Purview Information Protection & DLP Quickstart',
    tagline: 'In 4–6 Wochen von Null zu produktivem Datenschutz',
    problem:
      'Kunden haben M365-E5-Lizenzen (oder Compliance-Add-ons) gekauft, aber Sensitivity Labels und DLP liegen brach. Sensible Daten fließen unkontrolliert über Teams, Mail und Endpoints ab.',
    targetCustomer: 'Mittelstand & gehobener Mittelstand mit M365 E3/E5, ohne dediziertes Data-Security-Team',
    purviewComponents: [
      'Information Protection (Sensitivity Labels)',
      'Data Loss Prevention (Exchange, SharePoint, Teams, Endpoint)',
      'Content Explorer / Activity Explorer',
    ],
    deliveryModel:
      'Festpreis-Paket in 3 Phasen: Discovery-Workshop → Label-Taxonomie & Policy-Design → Pilot-Rollout mit Hypercare. Erprobte Templates für Taxonomie und Policies.',
    duration: '4–6 Wochen, Festpreis',
    marketplaceFit:
      'Consulting-Service-Offer im Marketplace. Ideales Einstiegsangebot für Co-Sell mit Microsoft-Security-Sellern.',
    upsell: 'Managed DLP Operations (Policy-Tuning, Incident-Triage) als monatlicher Service',
  },
  {
    id: 'dspm-ai-assessment',
    title: 'AI Security Readiness Assessment (DSPM for AI)',
    tagline: 'Copilot sicher einführen — Oversharing finden, bevor es die AI tut',
    problem:
      'Kunden wollen Microsoft 365 Copilot oder eigene AI-Agents einführen, fürchten aber, dass die AI überprovisionierte Berechtigungen und veraltete Inhalte gnadenlos sichtbar macht.',
    targetCustomer: 'Alle Organisationen vor/während der Copilot-Einführung — aktuell der stärkste Nachfragetreiber',
    purviewComponents: [
      'DSPM for AI (Reports, One-Click-Policies)',
      'Data Risk Assessments (Oversharing in SharePoint/OneDrive)',
      'Sensitivity Labels als Remediation',
      'Audit für AI-Interaktionen',
    ],
    deliveryModel:
      'Standardisiertes Assessment (2–3 Wochen): DSPM-for-AI-Aktivierung, Datenanalyse, Risiko-Report mit priorisierter Remediation-Roadmap. Fester Report-Aufbau als IP.',
    duration: '2–3 Wochen, Festpreis',
    marketplaceFit:
      'Perfekt als Marketplace-Assessment-Offer — geringes Einstiegsrisiko für Kunden, hochaktuelles Thema, starkes Co-Sell-Interesse der Microsoft-Teams (Copilot-Adoption).',
    upsell: 'Remediation-Projekt + Managed AI Security Posture als Folgegeschäft',
  },
  {
    id: 'irm-assessment',
    title: 'Insider Risk Management Pilot',
    tagline: 'Innentäter-Risiken sichtbar machen — datenschutzkonform',
    problem:
      'Datenabfluss durch ausscheidende Mitarbeiter oder privilegierte Nutzer bleibt unentdeckt. Klassische DLP-Regeln erkennen keine Verhaltensmuster.',
    targetCustomer: 'Regulierte Branchen (Finanzen, Gesundheit, Verteidigung), Unternehmen mit hohem IP-Schutzbedarf',
    purviewComponents: [
      'Insider Risk Management (Policies, Analytics)',
      'Communication Compliance (optional)',
      'Integration mit DLP & Sensitivity Labels',
    ],
    deliveryModel:
      'Pilot mit Betriebsrats-/Datenschutz-Begleitpaket (DE-spezifischer Differenzierer!): Anonymisierte Analytics-Phase → Policy-Design → Betriebsvereinbarungs-Vorlage → Pilotbetrieb.',
    duration: '6–8 Wochen',
    marketplaceFit:
      'Consulting-Offer; der Datenschutz-/Mitbestimmungs-Baustein ist im DACH-Markt ein starkes Differenzierungsmerkmal.',
    upsell: 'IRM-Betrieb als Teil eines Data Security Managed Service',
  },
  {
    id: 'managed-service',
    title: 'Data Security Operations — Managed Service',
    tagline: 'Purview als Dauerbetrieb: Monitoring, Tuning, Reporting',
    problem:
      'Purview ist eingeführt, aber niemand pflegt Policies, triagiert Alerts oder passt Labels an neue Datenlagen an. Die Investition verpufft nach 12 Monaten.',
    targetCustomer: 'Bestandskunden nach Quickstart/Assessment; Kunden ohne eigenes Security-Operations-Team',
    purviewComponents: [
      'DLP & IRM Alert-Triage',
      'DSPM / DSPM for AI Monitoring',
      'Policy-Lifecycle-Management',
      'Monatliches Executive Reporting',
    ],
    deliveryModel:
      'Monatlicher Service mit SLA in 3 Größen (S/M/L nach Nutzerzahl & Alert-Volumen). Automatisiertes Reporting, standardisierte Runbooks, Shared-Team-Modell.',
    duration: 'Laufend, 12+ Monate Vertragslaufzeit',
    marketplaceFit:
      'Als SaaS-/Managed-Service-Offer transactable publizierbar — wiederkehrender Umsatz, MACC-Potenzial bei IP-Anteil (eigenes Reporting-Portal).',
    upsell: 'Erweiterung um eDiscovery-Support, Records Management, AI-Governance',
  },
]

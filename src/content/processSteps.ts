export interface ProcessStep {
  id: number
  title: string
  goal: string
  activities: string[]
  deliverables: string[]
  resources: { title: string; url: string }[]
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Ideation & Discovery',
    goal: 'Ein wiederkehrendes Kundenproblem identifizieren, das sich standardisieren lässt.',
    activities: [
      'Delivery-Projekte der letzten 12 Monate auf Wiederholungsmuster analysieren',
      'Kundengespräche & Markttrends auswerten (z.B. Copilot-Einführung → Datenschutzbedarf)',
      'Wettbewerbs- und Marketplace-Recherche: Was gibt es schon?',
      'Abgleich mit Microsoft-Prioritäten (Co-Sell-Potenzial)',
    ],
    deliverables: ['Problem Statement', 'Zielkundenprofil (ICP)', 'Long-List an Lösungsideen'],
    resources: [
      { title: 'Microsoft Marketplace (Marktrecherche)', url: 'https://marketplace.microsoft.com' },
    ],
  },
  {
    id: 2,
    title: 'Qualifizierung & Business Case',
    goal: 'Prüfen, ob sich die Idee wirtschaftlich als Paket oder Managed Service trägt.',
    activities: [
      'Marktgröße und Zahlungsbereitschaft abschätzen',
      'Delivery-Aufwand kalkulieren: Was ist standardisierbar, was bleibt individuell?',
      'Preismodell entwerfen (Festpreis-Paket, Assessment, monatlicher Managed Service)',
      'Co-Sell-/Marketplace-Eignung bewerten (MACC, IP Co-sell)',
    ],
    deliverables: ['Business Case (1-Pager)', 'Preismodell', 'Go/No-Go-Entscheidung'],
    resources: [
      { title: 'Co-Sell Requirements', url: 'https://learn.microsoft.com/partner-center/referrals/co-sell-requirements' },
      { title: 'MACC-Eligibility', url: 'https://learn.microsoft.com/partner-center/marketplace-offers/azure-consumption-commitment-enrollment' },
    ],
  },
  {
    id: 3,
    title: 'Solution Design',
    goal: 'Die Lösung fachlich und technisch so definieren, dass sie wiederholbar lieferbar ist.',
    activities: [
      'Scope festzurren: Was ist drin, was ist explizit nicht drin?',
      'Referenzarchitektur erstellen (z.B. Purview-Komponenten, Lizenzvoraussetzungen)',
      'Delivery-Methodik definieren (Phasen, Rollen, Aufwände)',
      'Abnahme-Kriterien und Erfolgs-KPIs festlegen',
    ],
    deliverables: ['Solution Design Document', 'Referenzarchitektur', 'Scope-/SOW-Vorlage'],
    resources: [
      { title: 'Purview-Dokumentation', url: 'https://learn.microsoft.com/purview/' },
      { title: 'Security for AI Framework', url: 'https://learn.microsoft.com/security/security-for-ai/discover' },
    ],
  },
  {
    id: 4,
    title: 'Build & Pilot',
    goal: 'Die Lösung bauen und mit 1–2 Pilotkunden validieren.',
    activities: [
      'Delivery-Assets erstellen: Runbooks, Skripte, Workshop-Materialien, Report-Templates',
      'Internes Enablement: Delivery-Team schulen und zertifizieren (SC-401)',
      'Pilotprojekte durchführen und Feedback strukturiert erfassen',
      'Aufwände messen — Basis für belastbare Paketpreise',
    ],
    deliverables: ['Delivery-Kit (Assets, Runbooks)', 'Pilot-Referenzen', 'Validierte Aufwandskalkulation'],
    resources: [
      { title: 'SC-401 Zertifizierung', url: 'https://learn.microsoft.com/credentials/certifications/information-security-administrator/' },
      { title: 'Purview-Trainings', url: 'https://learn.microsoft.com/training/browse/?products=microsoft-purview' },
    ],
  },
  {
    id: 5,
    title: 'Standardisierung & Paketierung',
    goal: 'Aus dem Pilotprojekt ein verkaufsfähiges, standardisiertes Angebot machen.',
    activities: [
      'Feste Paketvarianten schneiden (z.B. Assessment / Quickstart / Enterprise)',
      'Vertriebsmaterial erstellen: One-Pager, Pitch-Deck, Kalkulator',
      'Interne Prozesse aufsetzen: Angebotsvorlagen, Staffing-Modell, Qualitätssicherung',
      'Falls Managed Service: SLA-Definition, Betriebsmodell, Tooling',
    ],
    deliverables: ['Offering-Katalog mit Preisen', 'One-Pager & Pitch-Deck', 'SLA-/Betriebsdokument'],
    resources: [
      { title: 'Mastering the Marketplace', url: 'https://aka.ms/MasteringTheMarketplace' },
    ],
  },
  {
    id: 6,
    title: 'Marketplace & GTM Publishing',
    goal: 'Sichtbarkeit und Co-Sell freischalten: das Offer auf den Marketplace bringen.',
    activities: [
      'Offer-Typ wählen (Consulting Service, SaaS, Managed Service)',
      'Offer in Partner Center anlegen: Listing, Pricing, Collateral (One-Pager, Pitch-Deck)',
      'Co-sell-ready Status erreichen; bei IP-Offers: Azure IP Co-sell / MACC anstreben',
      'Marketing aktivieren: Marketplace Rewards, Launch-Kampagne, Referenzen',
    ],
    deliverables: ['Live Marketplace Offer', 'Co-sell-ready Status', 'GTM-Plan'],
    resources: [
      { title: 'Transacting on Microsoft Marketplace', url: 'https://learn.microsoft.com/partner-center/marketplace-offers/transacting-commercial-marketplace' },
      { title: 'Co-Sell Übersicht', url: 'https://learn.microsoft.com/partner-center/referrals/co-sell-overview' },
      { title: 'Marketplace Rewards', url: 'https://learn.microsoft.com/partner-center/membership/marketplace-rewards' },
    ],
  },
  {
    id: 7,
    title: 'Betrieb & Optimierung',
    goal: 'Den Managed Service profitabel betreiben und das Offering kontinuierlich verbessern.',
    activities: [
      'Delivery-Kennzahlen tracken: Marge pro Paket, Time-to-Deliver, CSAT',
      'Kundenfeedback in Roadmap überführen (neue Module, neue Purview-Features)',
      'Automatisierung ausbauen (Skripte, AI-Agents, Reporting)',
      'Upsell-Pfade pflegen: Assessment → Quickstart → Managed Service',
    ],
    deliverables: ['Service-Reviews & KPIs', 'Offering-Roadmap', 'Referenz-Stories'],
    resources: [
      { title: 'Tech Community (Produktneuheiten)', url: 'https://techcommunity.microsoft.com/' },
    ],
  },
]

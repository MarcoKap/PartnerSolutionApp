export interface ProcessStep {
  id: number
  title: string
  goal: string
  activities: string[]
  deliverables: string[]
  resources: { title: string; url: string }[]
  /** Abhakbare Punkte, bevor der nächste Schritt startet */
  checklist: string[]
  /** Häufige Fehler in diesem Schritt */
  pitfalls: string[]
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
    checklist: [
      'Mindestens 3 Kundenprojekte mit demselben Grundproblem identifiziert',
      'Problem in einem Satz formulierbar (ohne Produktnamen)',
      'Marketplace auf vergleichbare Angebote geprüft',
      'Microsoft-Ansprechpartner (PDM/PSA) über die Idee informiert',
    ],
    pitfalls: [
      'Von der Technik statt vom Kundenproblem her denken („Wir machen was mit Purview")',
      'Zu breite Idee — „Data Security Beratung" ist kein Offering, „Copilot-Readiness in 3 Wochen" schon',
      'Wettbewerbsrecherche überspringen und später Preisdruck erleben',
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
    checklist: [
      'Standardisierungsgrad geschätzt (Ziel: mindestens 70 % wiederholbar)',
      'Preisspanne mit 2–3 Bestandskunden validiert („Würdet ihr das kaufen?")',
      'Break-even berechnet: Ab wie vielen Verkäufen trägt sich die Investition?',
      'Bewusste Go/No-Go-Entscheidung dokumentiert — auch ein Nein ist ein Ergebnis',
    ],
    pitfalls: [
      'Business Case auf Basis des besten statt des typischen Projekts rechnen',
      'Managed-Service-Potenzial ignorieren und nur das Einmalgeschäft bewerten',
      'Ohne Zahlungsbereitschafts-Check direkt in den Build gehen',
    ],
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
    checklist: [
      'Out-of-Scope-Liste ist genauso lang und konkret wie die Scope-Liste',
      'Lizenzvoraussetzungen je Kundengröße dokumentiert (E3/E5/Add-ons)',
      'Abnahmekriterien messbar formuliert („Labels auf 100 % der SharePoint-Sites")',
      'Rollenmodell geklärt: Was liefert der Partner, was der Kunde?',
    ],
    pitfalls: [
      'Scope-Grenzen weich lassen — jede Unschärfe wird später kostenloses Zusatzwerk',
      'Architektur für den Enterprise-Fall bauen, obwohl der Mittelstand die Zielgruppe ist',
      'Kundenmitwirkung nicht einplanen (Betriebsrat, IT-Security, Fachbereiche)',
    ],
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
    checklist: [
      'Aufwände im Pilot pro Phase erfasst (nicht nur Gesamtsumme)',
      'Alle Assets zentral abgelegt und generalisiert (keine Kundennamen in Templates)',
      'Mindestens 2 Delivery-Mitarbeiter können das Offering ohne den Erfinder liefern',
      'Pilotkunde als Referenz gewonnen (Zitat, Logo-Freigabe, ideal: Case Study)',
    ],
    pitfalls: [
      'Pilot als normales Projekt behandeln und nichts dokumentieren',
      'Wissen bleibt beim Senior — das Offering ist dann eine Person, kein Produkt',
      'Feedback nur technisch erheben, nicht kommerziell (Preiswahrnehmung!)',
    ],
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
    checklist: [
      'Maximal 3 Paketgrößen — mehr Varianten verwirren Kunden und Vertrieb',
      'Der eigene Vertrieb kann das Paket in 2 Minuten pitchen (testen!)',
      'Angebotsvorlage existiert: Ein Standardangebot in unter 1 Stunde erstellbar',
      'Bei Managed Service: SLA, Eskalationswege und Exit-Klauseln definiert',
    ],
    pitfalls: [
      'Pakete nach internem Aufwand statt nach Kundennutzen schneiden',
      'Rabatt-Spielraum nicht definieren — der Vertrieb verramscht sonst die Marge',
      'One-Pager voller Feature-Listen statt Business-Outcomes',
    ],
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
    checklist: [
      'Offer-Listing von einem Nicht-Techniker gegenlesen lassen',
      'Co-Sell-Collateral hochgeladen: One-Pager + Pitch-Deck (Microsoft-Templates nutzen)',
      'Microsoft-Account-Teams aktiv über das Offer informiert (PDM, PSA)',
      'Marketplace Rewards aktiviert und Launch-Aktivitäten eingeplant',
    ],
    pitfalls: [
      '„Publish and pray" — ein Listing ohne aktive Co-Sell-Arbeit bringt kaum Leads',
      'Englischsprachige Reichweite verschenken (Listing nur auf Deutsch)',
      'Co-sell-ready Status anstreben, aber die Collateral-Qualität vernachlässigen',
    ],
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
    checklist: [
      'Marge pro Paket wird pro Quartal gemessen und mit dem Business Case verglichen',
      'Quartals-Review: Welche Purview-Neuerungen gehören ins Offering?',
      'Upsell-Quote getrackt: Wie viele Assessment-Kunden buchen Folgeleistungen?',
      'Kundenzufriedenheit systematisch erhoben (CSAT/NPS nach jeder Delivery)',
    ],
    pitfalls: [
      'Den Managed Service als Projektabschluss behandeln statt als Produkt mit Roadmap',
      'Effizienzgewinne nicht reinvestieren — Automatisierung ist der Margenhebel',
      'Referenzen nicht einsammeln, obwohl Kunden zufrieden sind',
    ],
    resources: [
      { title: 'Tech Community (Produktneuheiten)', url: 'https://techcommunity.microsoft.com/' },
    ],
  },
]

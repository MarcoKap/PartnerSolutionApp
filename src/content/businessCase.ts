export interface MarketStat {
  value: string
  label: string
  source: string
  sourceUrl: string
}

/** Belegte Zahlen für die KPI-Kacheln — Quellen bei Aktualisierung prüfen. */
export const marketStats: MarketStat[] = [
  {
    value: '8,45 $',
    label: 'verdienen Services-Partner je 1 $ Microsoft-Umsatz (Software-Partner: 10,93 $)',
    source: 'IDC / Microsoft, 2024',
    sourceUrl: 'https://blogs.microsoft.com/blog/2025/03/24/microsoft-at-50-the-journey-and-future-of-the-partner-ecosystem/',
  },
  {
    value: '46 % vs. 19 %',
    label: 'Bruttomarge: Managed Services schlagen Projektgeschäft um mehr als das Doppelte',
    source: 'Service Leadership Index, 2024',
    sourceUrl: 'https://www.connectwise.com/company/press/releases/2024-08-06-service-leadership-q2-data-report',
  },
  {
    value: '74 %',
    label: 'des MSP-Umsatzes ist heute wiederkehrend — der Markt hat den Wandel längst vollzogen',
    source: 'MSP-Branchenbenchmark, 2025',
    sourceUrl: 'https://pharallax.ai/guides/msp-revenue-benchmarks-2026/',
  },
  {
    value: '157+ Mrd. $',
    label: 'committete Azure-Kundenbudgets (MACC), +33 % pro Jahr — abrufbar über Marketplace-Offers',
    source: 'Microsoft, FY2025',
    sourceUrl: 'https://invisory.co/resources/blog/what-microsofts-boom-in-cloud-commits-macc-means-for-azure-marketplace/',
  },
  {
    value: '85 %',
    label: 'der Kunden mit Cloud-Commitment kaufen bereits Partnerlösungen über den Marketplace',
    source: 'Microsoft Azure Blog',
    sourceUrl: 'https://azure.microsoft.com/en-us/blog/microsoft-commercial-marketplace-spend-smarter-move-faster/',
  },
  {
    value: '6 Mio.',
    label: 'monatliche Besucher im Microsoft Marketplace — Reichweite ohne eigenes Marketing',
    source: 'Microsoft Azure Blog',
    sourceUrl: 'https://azure.microsoft.com/en-us/blog/microsoft-commercial-marketplace-spend-smarter-move-faster/',
  },
]

export interface Objection {
  objection: string
  answer: string
}

/** Typische Partner-Einwände mit Gegenargumenten (Accordion im Business Case). */
export const objections: Objection[] = [
  {
    objection: '„Unsere Kunden sind alle unterschiedlich — das lässt sich nicht standardisieren."',
    answer:
      'Die Kunden sind unterschiedlich, die Probleme selten: Labels einführen, DLP aufsetzen, Copilot absichern folgt bei 80 % der Kunden demselben Muster. Standardisiert wird die Methodik (Discovery-Fragen, Policy-Baukasten, Report-Struktur) — die restlichen 20 % bleiben individuell und werden als Add-on bepreist. Genau diese 80/20-Trennung ist der Margenhebel.',
  },
  {
    objection: '„Festpreis ist zu riskant — wenn wir uns verschätzen, zahlen wir drauf."',
    answer:
      'Beim ersten Projekt stimmt das — deshalb startet man mit einem Pilotkunden zu T&M-Konditionen und misst die Aufwände. Ab Projekt drei kennt man die echte Spanne. Das Risiko sinkt mit jeder Wiederholung, während es bei T&M konstant bleibt: Dort trägt der Vertrieb das Risiko in jedem einzelnen Deal neu.',
  },
  {
    objection: '„Der Marketplace lohnt sich nur für Software-Hersteller, nicht für uns."',
    answer:
      'Consulting Services und Managed Services sind eigene Offer-Typen im Marketplace. Der eigentliche Wert liegt nicht im Transaktionsvolumen, sondern in Sichtbarkeit bei Microsoft-Sellern (Co-Sell), MACC-Anrechnung beim Kunden und dem Signal an Account-Teams: Dieser Partner hat ein fertiges Angebot. 85 % der MACC-Kunden kaufen bereits Partnerlösungen über den Marketplace.',
  },
  {
    objection: '„Wir haben keine Kapazität, neben dem Tagesgeschäft ein Offering zu bauen."',
    answer:
      'Ein Offering entsteht nicht neben dem Tagesgeschäft, sondern daraus: Das nächste passende Kundenprojekt wird bewusst als Blaupause geführt — Aufwände messen, Assets ablegen, Templates generalisieren. Der Mehraufwand liegt bei 10–15 %, das Ergebnis ist wiederverwendbar. Microsoft unterstützt zudem mit Enablement, Templates und Co-Sell-Ressourcen.',
  },
  {
    objection: '„Managed Services drücken unseren Umsatz — ein Projekt bringt sofort mehr."',
    answer:
      'Ein Projekt bringt einmalig Umsatz bei ~19 % Bruttomarge, ein Managed Service bringt planbaren Umsatz bei ~46 % Marge (Service Leadership Index). Dazu kommt der Unternehmenswert: Wiederkehrender Umsatz wird bei Firmenbewertungen mit einem Mehrfachen des Projektgeschäfts bewertet. Die Frage ist nicht Umsatz heute, sondern Marge und Bewertung in drei Jahren.',
  },
  {
    objection: '„Purview ist doch nur ein Lizenz-Feature — was sollen wir da beraten?"',
    answer:
      'Die Lizenz ist der Anfang, nicht die Lösung: Label-Taxonomie, Policy-Design, Betriebsrats-Abstimmung, Alert-Triage und kontinuierliches Tuning macht das Produkt nicht von selbst. Genau diese Lücke zwischen „Lizenz vorhanden" und „Daten geschützt" ist das Geschäftsmodell — und mit der Copilot-Welle wächst sie gerade massiv.',
  },
]

export interface Argument {
  title: string
  text: string
}

export interface ArgumentGroup {
  id: string
  title: string
  subtitle: string
  icon: string
  args: Argument[]
}

export const argumentGroups: ArgumentGroup[] = [
  {
    id: 'packages',
    title: 'Warum standardisierte Lösungen & Pakete?',
    subtitle: 'Vom Zeit-gegen-Geld-Geschäft zum skalierbaren Offering',
    icon: '📦',
    args: [
      {
        title: 'Wiederholbarkeit statt Einzelanfertigung',
        text: 'Jedes Projekt von Null zu starten kostet Marge. Ein standardisiertes Paket nutzt erprobte Assets (Runbooks, Skripte, Templates) — die Delivery wird mit jedem Kunden schneller und profitabler.',
      },
      {
        title: 'Höhere Marge durch Festpreis',
        text: 'Bei Time & Material zahlt der Kunde für Aufwand, beim Paket für Ergebnis. Effizienzgewinne durch Standardisierung bleiben beim Partner — die Marge steigt mit jeder Wiederholung.',
      },
      {
        title: 'Schnellere Vertriebszyklen',
        text: 'Ein klar geschnittenes Paket mit Festpreis ist leichter zu verkaufen als ein unbestimmtes Beratungsprojekt: Der Kunde versteht sofort Umfang, Ergebnis und Preis.',
      },
      {
        title: 'Geringeres Delivery-Risiko',
        text: 'Definierter Scope, erprobte Methodik, geschulte Teams — Eskalationen und Scope Creep werden drastisch reduziert.',
      },
      {
        title: 'IP-Aufbau & Unternehmenswert',
        text: 'Wiederverwendbare Assets sind Intellectual Property. Sie machen das Geschäft unabhängiger von einzelnen Köpfen und steigern den Unternehmenswert.',
      },
      {
        title: 'Skalierung ohne linearen Personalaufbau',
        text: 'Standardisierte Delivery lässt sich an Junior-Kollegen und Nearshore-Teams übergeben — Wachstum entkoppelt sich vom Senior-Engpass.',
      },
    ],
  },
  {
    id: 'marketplace',
    title: 'Warum Marketplace-Lösungen?',
    subtitle: 'Reichweite, Co-Sell und Kundenbudgets freischalten',
    icon: '🏪',
    args: [
      {
        title: 'Reichweite: Millionen Cloud-Kunden',
        text: 'Der Microsoft Marketplace ist die Schaufensterfläche gegenüber Microsofts weltweiter Kundenbasis — inklusive Suche, Kategorien und direkter Kaufmöglichkeit.',
      },
      {
        title: 'MACC: Kundenbudget anzapfen',
        text: 'Transactable Offers mit Azure IP Co-sell Status sind MACC-eligible: Der Kauf wird auf das Azure Consumption Commitment des Kunden angerechnet. Das Offering wird damit faktisch aus bereits committetem Budget bezahlt — ein enormer Kaufanreiz.',
      },
      {
        title: 'Co-Sell mit Microsoft-Sellern',
        text: 'Co-sell-ready Offers sind für Microsoft-Verkäufer sichtbar und referenzierbar. Bei IP Co-sell erhalten Microsoft-Seller Quota-Anrechnung, wenn sie die Partnerlösung mitverkaufen — sie haben also ein eigenes Interesse am Erfolg.',
      },
      {
        title: 'Marketplace Rewards & Incentives',
        text: 'Publizierte Offers schalten GTM-Benefits frei: Marketing-Unterstützung, Azure-Sponsorship, Sichtbarkeitskampagnen — kostenlose Vertriebspower.',
      },
      {
        title: 'Vertrauen & Governance',
        text: 'Beschaffung über den Marketplace vereinfacht Einkauf und Vertragswesen beim Kunden (zentrale Rechnung über Microsoft, bestehende Rahmenverträge).',
      },
      {
        title: 'Glaubwürdigkeit',
        text: 'Ein gelistetes, von Microsoft geprüftes Offer signalisiert Professionalität und Investment in die Partnerschaft — auch gegenüber Microsoft-Account-Teams.',
      },
    ],
  },
]

export interface LadderStage {
  stage: string
  description: string
  revenue: string
  margin: string
}

export const valueLadder: LadderStage[] = [
  {
    stage: 'Individuelles Projekt',
    description: 'Time & Material, jedes Mal neu konzipiert. Umsatz endet mit dem Projekt.',
    revenue: 'Einmalig, aufwandsgetrieben',
    margin: 'Niedrig–mittel, deckelt bei Auslastung',
  },
  {
    stage: 'Standardisiertes Paket',
    description: 'Festpreis-Offering mit definiertem Scope (z.B. Purview DLP Quickstart in 4 Wochen).',
    revenue: 'Einmalig, aber planbar und wiederholbar',
    margin: 'Steigt mit jeder Wiederholung',
  },
  {
    stage: 'Managed Service',
    description: 'Monatlich wiederkehrender Service (z.B. Data Security Operations: Monitoring, Tuning, Reporting).',
    revenue: 'Wiederkehrend (MRR) — planbares Wachstum',
    margin: 'Hoch durch Automatisierung & Skaleneffekte',
  },
  {
    stage: 'Marketplace / IP-Offering',
    description: 'Transactable Offer mit eigener IP — skaliert ohne proportionalen Delivery-Aufwand.',
    revenue: 'Skalierbar, MACC-fähig, Co-Sell-Hebel',
    margin: 'Am höchsten — Software-Ökonomie',
  },
]

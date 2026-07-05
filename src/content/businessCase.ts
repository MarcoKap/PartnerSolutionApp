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

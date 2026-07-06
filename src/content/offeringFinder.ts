export type OfferingType = 'assessment' | 'quickstart' | 'managed' | 'ip'

export interface FinderQuestion {
  question: string
  options: { label: string; weights: Partial<Record<OfferingType, number>> }[]
}

export const finderQuestions: FinderQuestion[] = [
  {
    question: 'Was ist euer primäres Ziel für die nächsten 12 Monate?',
    options: [
      { label: 'Schnell neue Kunden gewinnen (Türöffner)', weights: { assessment: 2 } },
      { label: 'Bestehende Purview-Kompetenz profitabler verkaufen', weights: { quickstart: 2 } },
      { label: 'Planbaren, wiederkehrenden Umsatz aufbauen', weights: { managed: 2 } },
      { label: 'Eigene IP entwickeln und skalieren', weights: { ip: 2 } },
    ],
  },
  {
    question: 'Wie groß ist euer Purview-erfahrenes Delivery-Team?',
    options: [
      { label: '1–2 Personen', weights: { assessment: 2, quickstart: 1 } },
      { label: '3–5 Personen', weights: { quickstart: 2, managed: 1 } },
      { label: '6+ Personen', weights: { managed: 2, ip: 1 } },
      { label: 'Eigenes Dev-Team zusätzlich vorhanden', weights: { ip: 2, managed: 1 } },
    ],
  },
  {
    question: 'Wie sieht eure typische Kundenbeziehung aus?',
    options: [
      { label: 'Viele Neukunden, eher punktuelle Projekte', weights: { assessment: 2, quickstart: 1 } },
      { label: 'Stammkunden mit wiederkehrenden Projekten', weights: { quickstart: 1, managed: 2 } },
      { label: 'Langfristige Betriebsverantwortung (Outsourcing/MSP)', weights: { managed: 2 } },
      { label: 'Breiter Markt, auch außerhalb der Bestandskunden', weights: { ip: 2, assessment: 1 } },
    ],
  },
  {
    question: 'Wie viel könnt ihr vorab investieren (Zeit/Geld)?',
    options: [
      { label: 'Wenig — es muss sich schnell selbst tragen', weights: { assessment: 2 } },
      { label: 'Ein Pilotprojekt mit Mehraufwand ist drin', weights: { quickstart: 2 } },
      { label: 'Wir können ein Betriebsmodell inkl. Tooling aufbauen', weights: { managed: 2 } },
      { label: 'Wir denken in Produktentwicklung (mehrere Monate)', weights: { ip: 2 } },
    ],
  },
]

export interface FinderResult {
  type: OfferingType
  title: string
  text: string
  /** Verweist auf die passende Beispiel-Lösung (id in solutions.ts) */
  exampleSolutionId: string
  nextSteps: string[]
}

export const finderResults: Record<OfferingType, FinderResult> = {
  assessment: {
    type: 'assessment',
    title: 'Assessment-Offering',
    text: 'Ein kompaktes Festpreis-Assessment (2–3 Wochen) ist euer idealer Einstieg: geringes Investment, schneller Proof, perfekter Türöffner für Folgegeschäft. Mit der Copilot-Welle ist das AI Security Readiness Assessment gerade der stärkste Aufhänger.',
    exampleSolutionId: 'dspm-ai-assessment',
    nextSteps: [
      'Festen Report-Aufbau als IP definieren (das ist euer Produkt)',
      'Preis zwischen 8–20 T€ positionieren — niedrige Einstiegshürde',
      'Remediation-Projekt als definierten Upsell-Pfad mitdenken',
    ],
  },
  quickstart: {
    type: 'quickstart',
    title: 'Quickstart-/Implementierungs-Paket',
    text: 'Ihr habt die Delivery-Erfahrung — verpackt sie in ein Festpreis-Paket mit klarem Scope (z.B. „Purview DLP produktiv in 6 Wochen"). Die Marge wächst mit jeder Wiederholung, das Vertriebsrisiko sinkt.',
    exampleSolutionId: 'dlp-quickstart',
    nextSteps: [
      'Das nächste passende Kundenprojekt bewusst als Pilot führen und Aufwände messen',
      'Out-of-Scope-Liste so konkret wie die Scope-Liste formulieren',
      'Nach 2–3 Deliveries als Consulting-Offer in den Marketplace',
    ],
  },
  managed: {
    type: 'managed',
    title: 'Managed Service',
    text: 'Euer Setup passt für den größten Margenhebel der Branche: wiederkehrender Umsatz bei ~46 % Bruttomarge statt ~19 % im Projektgeschäft. Startet mit einem klar geschnittenen Data-Security-Operations-Service in 2–3 Größen.',
    exampleSolutionId: 'managed-service',
    nextSteps: [
      'SLA-Modell in S/M/L definieren (nach Nutzerzahl und Alert-Volumen)',
      'Runbooks und Automatisierung von Tag 1 mitbauen — das ist die Marge',
      'Bestandskunden aus Projekten aktiv in den Service überführen',
    ],
  },
  ip: {
    type: 'ip',
    title: 'IP-/Marketplace-Lösung',
    text: 'Mit Dev-Kapazität und Skalierungsambition lohnt der Schritt zu eigener IP: ein Tool, Add-on oder Portal rund um Purview (z.B. Reporting, Onboarding-Automatisierung), transactable im Marketplace — MACC-fähig und Co-Sell-relevant.',
    exampleSolutionId: 'managed-service',
    nextSteps: [
      'Mit dem SaaS Accelerator die Transact-Infrastruktur abkürzen',
      'Azure IP Co-sell / MACC-Eligibility als Ziel von Anfang an einplanen',
      'IP mit einem Service bundeln — reine Tools verkaufen sich im DACH-Markt schwer',
    ],
  },
}

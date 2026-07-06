export interface MaturityOption {
  label: string
  points: number
}

export interface MaturityQuestion {
  question: string
  options: MaturityOption[]
}

export const maturityQuestions: MaturityQuestion[] = [
  {
    question: 'Wie liefert ihr Data-Security-Projekte heute?',
    options: [
      { label: 'Jedes Projekt wird individuell konzipiert', points: 0 },
      { label: 'Wir haben wiederkehrende Bausteine, aber nichts Dokumentiertes', points: 1 },
      { label: 'Es gibt ein dokumentiertes Vorgehen mit Templates', points: 2 },
      { label: 'Wir verkaufen ein festes Paket mit definiertem Scope', points: 3 },
    ],
  },
  {
    question: 'Wie entstehen eure Angebote?',
    options: [
      { label: 'Jedes Angebot wird von Grund auf neu kalkuliert', points: 0 },
      { label: 'Wir kopieren alte Angebote und passen sie an', points: 1 },
      { label: 'Es gibt Vorlagen mit Standardpositionen', points: 2 },
      { label: 'Festpreise stehen im Katalog — Angebot in unter 1 Stunde', points: 3 },
    ],
  },
  {
    question: 'Wie viel eures Umsatzes ist wiederkehrend (Managed Services / Verträge)?',
    options: [
      { label: 'Unter 10 %', points: 0 },
      { label: '10–30 %', points: 1 },
      { label: '30–60 %', points: 2 },
      { label: 'Über 60 %', points: 3 },
    ],
  },
  {
    question: 'Wie sichtbar seid ihr bei Microsoft?',
    options: [
      { label: 'Kein aktiver Kontakt zu Microsoft-Teams', points: 0 },
      { label: 'Wir kennen unsere Ansprechpartner, aber ohne festen Rhythmus', points: 1 },
      { label: 'Regelmäßiger Austausch, erste gemeinsame Kundentermine', points: 2 },
      { label: 'Co-Sell läuft: Microsoft-Seller bringen uns aktiv Leads', points: 3 },
    ],
  },
  {
    question: 'Seid ihr im Microsoft Marketplace vertreten?',
    options: [
      { label: 'Nein, noch nie damit beschäftigt', points: 0 },
      { label: 'Partner-Center-Account existiert, aber kein Offer', points: 1 },
      { label: 'Mindestens ein Offer ist live', points: 2 },
      { label: 'Offer ist live und co-sell-ready mit Collateral', points: 3 },
    ],
  },
  {
    question: 'Wie schnell könnt ihr einen neuen Purview-Consultant einsatzfähig machen?',
    options: [
      { label: 'Nur durch monatelanges Mitlaufen bei Seniors', points: 0 },
      { label: 'Es gibt Doku, aber kein strukturiertes Onboarding', points: 1 },
      { label: 'Onboarding-Plan mit Zertifizierungspfad (z.B. SC-401) existiert', points: 2 },
      { label: 'Standardisiertes Enablement — neue Kollegen liefern nach Wochen', points: 3 },
    ],
  },
]

export interface MaturityResult {
  minScore: number
  title: string
  text: string
  /** Empfohlener Einstiegsschritt im Entwicklungsprozess (1–7) */
  startStep: number
}

/** Ergebnisstufen, absteigend nach minScore geprüft. Max. Punktzahl: 18. */
export const maturityResults: MaturityResult[] = [
  {
    minScore: 14,
    title: 'Skalierer — ihr seid bereit für den Marketplace-Hebel',
    text: 'Standardisierung und wiederkehrender Umsatz sind bei euch etabliert. Der nächste Hebel ist Reichweite: Marketplace-Präsenz ausbauen, IP-Co-Sell-/MACC-Status anstreben und den Managed Service konsequent automatisieren.',
    startStep: 6,
  },
  {
    minScore: 9,
    title: 'Paketierer — jetzt aus Erfahrung ein Produkt machen',
    text: 'Ihr habt wiederholbare Bausteine und erste Strukturen. Der größte Margensprung liegt jetzt in der konsequenten Paketierung: feste Preise, klarer Scope, Vertriebsmaterial — und dann ab in den Marketplace.',
    startStep: 5,
  },
  {
    minScore: 4,
    title: 'Wiederholer — Muster erkennen und validieren',
    text: 'Ihr liefert solide Projekte, aber jedes Mal neu. Analysiert eure letzten 12 Monate auf das häufigste Muster, rechnet den Business Case und führt das nächste passende Projekt bewusst als Pilot für ein Offering.',
    startStep: 2,
  },
  {
    minScore: 0,
    title: 'Einsteiger — die beste Zeit anzufangen ist jetzt',
    text: 'Ihr steht am Anfang der Offering-Reise — das ist eine Chance: Die Copilot-Welle erzeugt gerade massive Nachfrage nach Data Security. Startet mit der Ideenfindung: Welches Kundenproblem seht ihr am häufigsten?',
    startStep: 1,
  },
]

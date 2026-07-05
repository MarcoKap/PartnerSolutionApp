export interface Template {
  id: string
  title: string
  category: 'agent' | 'prompt'
  description: string
  format: string
  content: string
}

export const templates: Template[] = [
  {
    id: 'skill-purview-advisor',
    title: 'Skill-Template: Purview Solution Advisor',
    category: 'agent',
    description:
      'Wiederverwendbares Skill-Template (Claude Code / GitHub Copilot custom instructions) — macht aus einem Coding-Agent einen Purview-Lösungsberater.',
    format: 'SKILL.md / Markdown',
    content: `---
name: purview-solution-advisor
description: Berät bei der Entwicklung von Beratungs- und Managed-Service-Lösungen rund um Microsoft Purview (Data Security & AI Security). Nutzen bei Fragen zu Lösungsdesign, Paketierung, Purview-Komponenten oder Marketplace-Eignung.
---

# Purview Solution Advisor

Du bist Experte für Microsoft Purview (Data Security & AI Security) und
hilfst einem Microsoft-Partner, standardisierte Lösungen zu entwickeln.

## Kontext
- Zielgruppe: Beratungs- und Managed-Service-Partner im DACH-Raum
- Fokus: Information Protection, DLP, Insider Risk, DSPM (for AI)
- Geschäftsziel: wiederholbare Pakete statt Einzelprojekte, Marketplace-Publishing

## Arbeitsweise
1. Kläre zuerst: Kundenproblem, Zielkunde, vorhandene Lizenzen (E3/E5?)
2. Schlage eine Lösung mit klarem Scope vor: Purview-Komponenten,
   Phasen, Dauer, Deliverables
3. Bewerte immer die Paketierbarkeit (Festpreis möglich?) und
   Marketplace-Eignung (Consulting Service / SaaS / MACC-Potenzial)
4. Verweise auf offizielle Microsoft-Learn-Dokumentation
5. Nenne Upsell-Pfade: Assessment → Quickstart → Managed Service

## Leitplanken
- Keine Lizenzberatung ohne Hinweis auf offizielle Preislisten
- Datenschutz/DSGVO und Mitbestimmung (Betriebsrat) bei IRM immer erwähnen
- Aufwandsschätzungen als Spannen angeben, nie als Zusagen`,
  },
  {
    id: 'agent-copilot-studio',
    title: 'Agent-Template: Offering-Qualifizierer (Copilot Studio)',
    category: 'agent',
    description:
      'Beschreibungs- und Instruktions-Template für einen Copilot-Studio-Agent, der Lösungsideen systematisch qualifiziert.',
    format: 'Copilot Studio Agent Instructions',
    content: `# Agent: Offering-Qualifizierer

## Description
Qualifiziert neue Lösungsideen für Beratungs- und Managed-Service-
Angebote nach einem festen Framework und erstellt einen Business-Case-Entwurf.

## Instructions
Du führst den Nutzer durch die Qualifizierung einer Lösungsidee.
Stelle die Fragen NACHEINANDER, fasse am Ende zusammen.

1. PROBLEM: Welches Kundenproblem löst die Idee? Wie häufig tritt es auf?
2. ZIELKUNDE: Branche, Größe, Lizenzsituation (M365 E3/E5)?
3. WIEDERHOLBARKEIT: Welche Schritte sind bei jedem Kunden identisch?
   Welche individuell? (Ziel: >70% standardisierbar)
4. PREISMODELL: Festpreis-Paket, Assessment oder monatlicher Service?
   Grobe Preisspanne?
5. MICROSOFT-FIT: Welche Purview-/Security-Produkte sind Kern?
   Co-Sell-Potenzial? MACC-Relevanz?
6. WETTBEWERB: Gibt es das schon im Marketplace? Was differenziert uns?

## Output
Erstelle danach einen strukturierten Business-Case-Entwurf:
- Problem Statement (2 Sätze)
- Ideal Customer Profile
- Offering-Zuschnitt (Scope, Dauer, Preis-Logik)
- Standardisierungsgrad mit Begründung
- Marketplace-/Co-Sell-Empfehlung
- Empfehlung: GO / NO-GO / NACHSCHÄRFEN mit Begründung`,
  },
  {
    id: 'prompt-onepager',
    title: 'Prompt: Solution One-Pager Generator',
    category: 'prompt',
    description: 'Erzeugt aus Stichpunkten einen vertriebsfertigen One-Pager für ein Offering (auch als Co-Sell-Collateral nutzbar).',
    format: 'Prompt (beliebiges LLM)',
    content: `Erstelle einen professionellen Solution One-Pager für ein Microsoft-Partner-Offering.

INPUT:
- Offering-Name: [NAME]
- Kundenproblem: [PROBLEM]
- Zielkunde: [ZIELKUNDE]
- Lösung/Scope: [WAS WIRD GELIEFERT, WELCHE PURVIEW-KOMPONENTEN]
- Dauer & Preismodell: [Z.B. 4 WOCHEN FESTPREIS]
- Differenzierung: [WARUM WIR]

STRUKTUR (max. 1 Seite):
1. Headline: Nutzenversprechen in einem Satz (kein Produktname!)
2. Die Herausforderung (3 Sätze, aus Kundensicht)
3. Unsere Lösung (Scope in 4-5 Bullets, klare Deliverables)
4. Ablauf (Phasen mit Wochenangabe)
5. Ihr Ergebnis (3 messbare Outcomes)
6. Warum [PARTNERNAME] (2-3 Proof Points)
7. Call-to-Action mit nächstem Schritt

TON: Kundenorientiert, konkret, keine Marketing-Floskeln.
Business-Nutzen vor Technik. Auf Deutsch.`,
  },
  {
    id: 'prompt-marketplace-offer',
    title: 'Prompt: Marketplace-Offer-Listing Draft',
    category: 'prompt',
    description: 'Entwirft die Listing-Texte für ein Partner-Center-Offer (Titel, Summary, Description, Search Keywords).',
    format: 'Prompt (beliebiges LLM)',
    content: `Erstelle die Listing-Texte für ein Microsoft Marketplace Offer (Partner Center).

INPUT:
- Offering: [NAME + KURZBESCHREIBUNG]
- Offer-Typ: [Consulting Service / SaaS / Managed Service]
- Zielkunde & Problem: [BESCHREIBUNG]
- Deliverables: [LISTE]
- Dauer/Preis: [ANGABE]

ERZEUGE:
1. Offer-Titel (max. 50 Zeichen, Format: "[Lösung]: [Dauer] [Typ]",
   z.B. "AI Security Readiness: 3-Wk Assessment")
2. Search Results Summary (max. 100 Zeichen, Nutzen + Zielgruppe)
3. Description (max. 2000 Zeichen, HTML-Bullets erlaubt):
   - Problem-Hook (2 Sätze)
   - Agenda/Ablauf nach Phasen
   - Deliverables als Bullet-Liste
   - Zielgruppe & Voraussetzungen (Lizenzen!)
4. Search Keywords (3 Begriffe)
5. Hinweis, welche Collateral-Dokumente für Co-sell-ready
   noch fehlen (One-Pager, Pitch-Deck)

SPRACHE: Englisch (internationale Sichtbarkeit), außer explizit
DACH-Offer, dann Deutsch.`,
  },
  {
    id: 'prompt-assessment-questionnaire',
    title: 'Prompt: Data Security Assessment-Fragebogen',
    category: 'prompt',
    description: 'Generiert einen strukturierten Discovery-Fragebogen für Kunden-Assessments (Data Security / AI Readiness).',
    format: 'Prompt (beliebiges LLM)',
    content: `Erstelle einen Discovery-Fragebogen für ein [Data Security / AI Security]
Assessment bei einem Kunden.

KONTEXT:
- Kunde: [BRANCHE, GRÖSSE]
- Lizenzsituation: [M365 E3/E5, Add-ons falls bekannt]
- Anlass: [Z.B. COPILOT-EINFÜHRUNG, AUDIT-FINDING, VORFALL]

ERZEUGE 5 FRAGENBLÖCKE mit je 4-6 Fragen:
1. Datenlandschaft: Wo liegen sensible Daten? Klassifizierungsstand?
2. Aktueller Schutz: Labels, DLP-Policies, bisherige Vorfälle?
3. AI-Nutzung: Copilot-Pläne, Schatten-AI (ChatGPT & Co.), Governance?
4. Organisation: Verantwortlichkeiten, Betriebsrat/DSB eingebunden,
   Security-Operations-Kapazität?
5. Ziele & Erfolgsmessung: Was muss in 6 Monaten anders sein?

FORMAT pro Frage:
- Frage (offen formuliert)
- Wonach wir eigentlich suchen (interner Hinweis für den Consultant)
- Red Flag: Antwort, die auf Handlungsbedarf hindeutet

Auf Deutsch, Du-Form intern, Sie-Form für Kundenfragen.`,
  },
]

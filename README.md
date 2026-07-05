# Partner Solution Hub

Enablement-Web-App für Microsoft-Partner: Beratungs- und Managed-Service-Lösungen
rund um **Microsoft Purview (Data Security & AI Security)** entwickeln.

## Inhalte

- **Entwicklungsprozess** — 7 Schritte von der Idee zum Marketplace-Offering
- **Business Case** — Argumente für standardisierte Pakete & Marketplace-Lösungen
- **Wissens-Hub** — kuratierte Links (Purview, DSPM for AI, Partner Center, Co-Sell)
- **Beispiel-Lösungen** — 4 Offering-Blaupausen (DLP Quickstart, AI Security Assessment, IRM Pilot, Managed Service)
- **Templates** — Skill-/Agent-Templates und Prompts mit Copy-Button
- **AI-Assistant** — Chat mit eigenem Azure-OpenAI-/OpenAI-Key oder GitHub-Token
  (GitHub Models, `models:read`) — Zugangsdaten bleiben lokal im Browser

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:5173/PartnerSolutionApp/
npm run build    # Produktions-Build nach dist/
```

## Content pflegen

Alle Inhalte liegen als typisierte Daten in `src/content/` — kein Layout-Code nötig:

| Datei | Inhalt |
|---|---|
| `knowledgeLinks.ts` | Link-Kategorien im Wissens-Hub |
| `processSteps.ts` | Schritte des Entwicklungsprozesses |
| `businessCase.ts` | Argumente & Value-Ladder |
| `solutions.ts` | Beispiel-Lösungen |
| `templates.ts` | Skill-/Agent-Templates & Prompts |

## Deployment (GitHub Pages)

1. Repo auf GitHub anlegen (Name **PartnerSolutionApp** — sonst `base` in `vite.config.ts` anpassen)
2. Pushen und in den Repo-Settings unter **Pages** die Source auf **GitHub Actions** stellen
3. Jeder Push auf `main` deployt automatisch via `.github/workflows/deploy.yml`

Die Seite ist dann unter `https://<user>.github.io/PartnerSolutionApp/` erreichbar.

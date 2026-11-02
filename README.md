# Open Health Media Toolkit (OHMT)

**A bilingual, privacy-conscious starter workspace for public-health communication planning.**

OHMT helps hospital teams, NGOs, and community organizations organize health-education content ideas and track their production. The interface supports English and Khmer. It is a lightweight static web app designed to run locally in a browser.

## Features

- Bilingual English / Khmer interface.
- Content idea board with department, format, audience, key message, status, reviewer/source, target date, and production notes.
- Search and filters for topics and production status.
- Production status tracking: Idea → Planned → In production → Clinical review → Published.
- Local browser storage; no account or backend required.
- JSON backup / restore and CSV export.
- Privacy reminders built into the workflow.
- Responsive layout for desktop, tablet, and mobile.

## Run locally

No build step or package installation is needed.

1. Clone or download this repository.
2. Open `index.html` in a modern browser.

For a local development server, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Important safety and privacy notes

- Do **not** enter patient names, phone numbers, medical record numbers, identifiable images, individual case details, or other confidential health information.
- This starter app stores entries in the browser's `localStorage`. Anyone with access to the same browser profile may be able to see them.
- This is a planning tool, not an electronic medical record, clinical decision-support system, or secure patient-data system.
- Content must be checked by appropriately qualified health professionals before publication.
- Check informed consent, image permissions, safeguarding, accessibility, and translation quality before releasing material.
- The Khmer translations are starter interface translations and should be reviewed by a fluent Khmer editor before institutional use.

## Data handling

Board entries remain in the browser where they were created unless the user exports a backup. OHMT does not transmit board content to a server. Clearing browser data may erase locally stored entries, so export backups regularly.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Contributions that improve accessibility, localization, documentation, and privacy are especially welcome.

## License

MIT. See [LICENSE](LICENSE).

## Project status

This is an early-stage starter project. Features, translations, and workflows should be tested and reviewed before institutional deployment. Do not represent the project as having external contributors, dependent repositories, package downloads, adoption numbers, or merged external pull requests unless those facts are independently verifiable. Creating this repository does not by itself establish eligibility for any open-source programme.

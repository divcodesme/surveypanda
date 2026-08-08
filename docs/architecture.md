# Architecture

SurveyPanda uses one main product repository with top-level `api` and `web` areas.

## Backend Authority

The API owns domain correctness:

- Survey schema validation.
- Question type validation.
- Response submission validation.
- Survey versioning.
- Analytics calculations.
- Export generation.
- Extension and registry behavior.
- Persistence boundaries.

## Frontend Responsibility

The web app renders API-provided data and keeps local code focused on:

- Creator dashboard interaction.
- Survey builder UI.
- Public survey runtime.
- Response and analytics views.
- API client and frontend-facing contracts.
- Defensive rendering.

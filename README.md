# SurveyPanda

SurveyPanda is an open-source survey builder and sharing application for creating forms, publishing shareable survey links, collecting responses, and reviewing response insights.

## Repository Structure

- `api`: NestJS backend, persistence, auth boundaries, APIs, server-side validation, survey versioning, analytics, exports, and extension behavior.
- `web`: React frontend for the creator dashboard, survey builder, public survey runtime, responses, analytics, API client, and frontend contracts.
- `docs`: Architecture, extension-point, self-hosting, roadmap, and decision records.
- `scripts`: Local development and maintenance helpers.
- `.github`: Issue templates, pull request template, and CI workflow.

## Stack

- Backend: Node.js, NestJS, TypeScript
- Database: PostgreSQL
- Frontend: React
- UI system: Chakra UI
- Package manager: Yarn

## Development

This repository currently contains the open-source foundation skeleton. Installable app dependencies and feature implementation will be added in follow-up work.

```sh
yarn install
yarn workspace @surveypanda/web dev
```

## Project Direction

SurveyPanda keeps the backend authoritative for domain rules, survey validation, response validation, survey versioning, analytics, exports, and extension contracts. The frontend renders API-provided data through typed client and contract layers.

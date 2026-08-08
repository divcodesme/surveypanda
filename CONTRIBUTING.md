# Contributing

Thanks for helping improve SurveyPanda.

## Local Setup

1. Install Node.js and Yarn.
2. Run `yarn install`.
3. Copy `.env.example` to `.env` and adjust values for your environment.
4. Run `yarn dev`.

## Development Standards

- Keep backend domain rules in `api`.
- Keep frontend business logic limited to rendering, API client behavior, and defensive UI handling.
- Add tests for validation, publishing, response submission, persistence, analytics, and permission boundaries when those areas are changed.
- Document extension contracts as they stabilize.

## Pull Requests

- Keep changes focused.
- Include tests or explain why tests are not applicable.
- Update docs when changing architecture, setup, or contributor workflows.

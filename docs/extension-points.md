# Extension Points

SurveyPanda should preserve clear internal contracts for future contributors.

## Backend

- Question type registry.
- Question configuration validation.
- Answer validation and serialization.
- Analytics summarizers.
- Export providers.
- Notification providers.
- Theme metadata contracts.

## Frontend

- API response contracts.
- Survey and question renderers.
- Theme application.

Actual installable plugin implementations should live in a later `surveypanda-plugins` repository after platform contracts stabilize.

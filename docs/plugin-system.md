# Plugin System

SurveyPanda will not start with a separate runtime plugin system in the MVP.

The main repository should first define stable extension contracts in `api/src/extensions` and registration behavior in `api/src/registry`. A separate plugin repository can be created later for installable plugin implementations.

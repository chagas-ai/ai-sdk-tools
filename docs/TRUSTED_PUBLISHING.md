# npm Trusted Publishing (OIDC)

This fork publishes packages using GitHub Actions OIDC (no `NPM_TOKEN`).

## One-time npm setup

1. In npm, open each package and configure **Trusted Publisher**:
   - Package: `@chagas-ai/agents`
   - Package: `@chagas-ai/artifacts`
   - Package: `@chagas-ai/devtools`
   - Package: `@chagas-ai/memory`
   - Package: `@chagas-ai/store`
2. Trusted publisher repository: `chagas-ai/ai-sdk-tools`
3. Workflow file: `.github/workflows/release.yml`
4. Environment (if requested by npm UI): `github`

## Workflow requirements

- Node.js >= 22.14 and npm >= 11.5.1 in the publishing workflow.
- `id-token: write` permission enabled.
- `NPM_CONFIG_PROVENANCE=true` is set for publish step.
- `changeset publish --provenance` is used in release scripts.

## Verification

After merging a release PR created by Changesets:

1. Confirm workflow publishes without `NPM_TOKEN`.
2. Confirm npm package page shows provenance/attestation.

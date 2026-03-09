# Upstream Sync Policy

This fork follows a **release-driven sync** policy with upstream `midday-ai/ai-sdk-tools`.

## Policy

- Sync only when upstream ships relevant bug fixes, security patches, or compatibility updates.
- Do not run time-based forced syncs.
- Keep fork-specific behavior minimal and documented.

## Sync Procedure

1. Fetch upstream and inspect release notes/diff.
2. Rebase or cherry-pick relevant commits into `main`.
3. Run CI and package build/typecheck for Chagas publishable packages.
4. Add/update changesets for affected `@chagas-ai/*` packages.
5. Merge and let release workflow publish new `-chagas.N` versions.

## Safety

- If a sync introduces regressions, pin consumers to previous `-chagas.N` and open a hotfix release.

---
"@chagas-ai/agents": patch
"@chagas-ai/artifacts": patch
"@chagas-ai/devtools": patch
"@chagas-ai/memory": patch
"@chagas-ai/store": patch
---

Initial Chagas fork release:

- add resumable stream `consumeSseStream` forwarding in agents UI responses.
- add `skipUserMessageSave` and first-class `preSaveUserMessage` options for deterministic memory persistence.
- add history tail dedupe by `message.id` to avoid duplicate prompt entries.
- migrate package namespace to `@chagas-ai/*` for maintained fork publishing.

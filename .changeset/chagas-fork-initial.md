---
"@chagas-ai/ai-sdk-tools-agents": patch
"@chagas-ai/ai-sdk-tools-artifacts": patch
"@chagas-ai/ai-sdk-tools-devtools": patch
"@chagas-ai/ai-sdk-tools-memory": patch
"@chagas-ai/ai-sdk-tools-store": patch
---

Initial Chagas fork release:

- add resumable stream `consumeSseStream` forwarding in agents UI responses.
- add `skipUserMessageSave` and first-class `preSaveUserMessage` options for deterministic memory persistence.
- add history tail dedupe by `message.id` to avoid duplicate prompt entries.
- migrate package namespace to `@chagas-ai/*` for maintained fork publishing.

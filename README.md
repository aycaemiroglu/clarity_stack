# Clarity Stack

Calm, low-friction task manager focused on open loops, emotional friction, and AI-assisted next steps — built with Expo, React Native, and Supabase.

---

## Why this project exists

Most productivity apps assume consistent focus, low emotional resistance, and a well-organized mind to begin with.  
For people with ADHD or ADHD-like patterns, this creates a second layer of friction:

- Tasks are too big to start, but no one helps you break them down
- Unfinished "open loops" accumulate and drain attention quietly
- Emotion and resistance around work go unacknowledged
- Tools punish you for falling behind instead of helping you continue

Clarity Stack is built around a different assumption: **the problem is usually activation, not effort.**  
The goal is to make the next step clear, not to build the perfect system.

---

## MVP Scope

The initial MVP is intentionally narrow and focused on daily usefulness.

| Feature | Description |
|---|---|
| **Auth** | Account creation and sign-in |
| **Inbox** | Quick capture without requiring upfront categorization |
| **Categories** | Simple grouping (e.g. Work, Home, Admin) |
| **Task CRUD** | Create, update, complete, and archive tasks |
| **Subtasks** | Break larger tasks into smaller actionable steps |
| **AI task breakdown** | On-demand decomposition of a task into subtasks |
| **Stuck mode** | "I'm stuck" flow that surfaces a gentle next step |
| **Emotion logging** | Log friction, resistance, or emotions tied to tasks or days |
| **Open loops** | Capture and surface unresolved mental loops |
| **Daily review** | Calm end-of-day reflection on what happened and what's next |
| **Reminder preferences** | Lightweight notification preferences (not a calendar system) |

The app is designed to be **fully useful on mobile alone**. Web is a secondary, complementary surface.

---

## Tech Stack

### Client
- [Expo](https://expo.dev) + [React Native](https://reactnative.dev) — mobile-first
- [TypeScript](https://www.typescriptlang.org) — strict mode throughout
- [Expo Router](https://expo.github.io/router) — file-based navigation
- [TanStack Query](https://tanstack.com/query) — server state and caching
- AsyncStorage — initial local persistence

### Backend / Data
- [Supabase](https://supabase.com) — auth, database, and APIs
- [Zod](https://zod.dev) — runtime validation for all external inputs and AI outputs
- AI via server-side provider abstraction — no keys exposed to the client

---

## Product Principles

**Mobile-first, ADHD-aware**  
Designed for phones and for brains that deal with task avoidance, overwhelm, and variable focus. The web surface follows mobile decisions, not the other way around.

**Calm by default**  
Low visual noise, clear primary actions, and supportive, non-judgmental language throughout. No shame-inducing streaks or failure states.

**Small steps over big plans**  
The app consistently asks "what is the next helpful step?" rather than pushing toward a perfect, optimized system.

**Honest MVP scope**  
Features are added when they serve a real and current need. Speculative architecture and premature complexity are avoided.

**Privacy for emotional content**  
Emotion logs, personal notes, and daily reflections are treated as sensitive data. They are not logged, not used for passive analysis, and not shared without explicit intent.

---

## Repository Standards

- **Language**: all code, comments, identifiers, file names, database fields, API contracts, schemas, and docs are in English.
- **Localization-ready**: architecture is prepared for future Turkish localization — translation keys are used, user-facing strings are not hardcoded inside logic.
- **TypeScript**: strict mode, no broad `any`, prefer `unknown` with safe narrowing where needed.
- **Validation**: Zod is used for all external inputs (forms, API responses, deep links) and all AI outputs before use or storage.
- **AI boundaries**: all AI calls are server-side behind a provider abstraction. No provider details in client code.
- **Security**: secrets live in environment configuration and are never committed. Sensitive user data is not logged.
- **Principles**: KISS, YAGNI, DRY, pragmatic SOLID, and a strong bias toward the smallest correct implementation.

---

## Planned Roadmap

This is an early, active repository. The roadmap is directional and will evolve with real usage.

### Near-term
- Core Supabase schema: tasks, categories, subtasks, emotion logs, open loops
- Mobile auth flow: sign up, sign in, sign out
- Inbox and category list with task CRUD on mobile
- Subtasks UI and logic
- TanStack Query integration for server state
- AI provider abstraction and first AI flows (task breakdown, stuck mode)
- Daily review and open loops screens

### Medium-term
- Reminder preferences and notification behavior
- Emotion logging visualization (calm, non-diagnostic presentation)
- Web companion experience for review and light task management
- Basic, privacy-respecting analytics and telemetry

### Future (exploratory)
- Full Turkish localization
- Weekly review tooling and gentle trend summaries
- Deeper friction pattern insights (always user-controlled, never diagnostic)

---

## Status

Early development. Core architecture and standards are in place. Feature implementation is in progress.

---

*Built carefully. Scope kept intentionally small.*

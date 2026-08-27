# Latin Sounds — Record Shop Archive

An interactive action-research intervention experienced as a digital independent record shop.

The product direction is deliberately **not** a Spotify/Discogs-style database with filters. The record shop is the interface to the archive: visitors move through a spatial environment, browse alphabetically, load recordings into two decks, listen through the official YouTube IFrame Player API, mix A ↔ B, interpret what they hear and eventually contribute records back to the archive.

## Current status

**Development Build 001 / scaffold.** This first commit establishes a locally runnable vertical slice, not the finished research MVP.

Implemented in this scaffold:

- React + TypeScript + Vite application
- Phaser 4.2.1 shop-floor prototype with keyboard movement
- alphabetical development rack UI
- two visible YouTube IFrame API decks with custom Play/Pause
- deck volume, master volume and equal-power crossfader logic
- Zustand mixer state
- development-only placeholder archive records
- YouTube URL parser
- unit tests for crossfader calculations and YouTube URL parsing
- Supabase dependency and environment placeholders ready for the persistence phase
- responsive/raw independent-record-shop visual direction

Still to implement before the research MVP can be called complete:

- real verified archive dataset
- spatial rack proximity/open interactions in Phaser
- record detail / Side A-B workflow integrated with the shop world
- Supabase schema, migrations, anonymous auth and RLS
- research-event logging and meaningful-listen tracking
- interpretation questions and participant-generated tags
- `SUBMIT A RECORD` moderation flow
- `YOUR VISIT` research/session artefact backed by real events
- research-data export scripts
- Playwright E2E suite
- deployment configuration and production QA

## Run locally

Requirements: Node.js 22.12+.

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Verify

```bash
npm run typecheck
npm test
npm run build
```

## Environment

Copy `.env.example` to `.env.local` when Supabase is connected.

Browser-safe variables:

```text
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

The service-role key is only for future server-side/local research exports and must never be exposed in frontend source.

## Architecture direction

```text
src/
  components/   React UI and listening-station components
  data/         development seed archive
  domain/       archive types
  game/         Phaser shop world
  mixer/        pure audio-control calculations
  store/        Zustand application state
  youtube/      YouTube IFrame API adapter and URL parsing
```

Next architectural layers will add `archive/`, `research/`, `lib/supabase`, `supabase/migrations`, submission workflows and export scripts while keeping game objects decoupled from persistence and playback.

## YouTube constraint

Music playback must use the official YouTube IFrame Player API. The application must not download, extract, proxy or conceal YouTube media. Video remains visible as part of the listening-station/CRT metaphor, while custom controls live outside the iframe.

## Research principle

The system should generate evidence from how participants browse, listen, compare and classify music. It should not encode a predetermined conclusion about categories such as “Latin.” Curator classification and listener interpretation must remain distinguishable in the data model.

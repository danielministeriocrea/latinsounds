# Latin Sounds — Record Shop Archive

An interactive action-research intervention experienced as a digital independent record shop.

The product direction is deliberately **not** a Spotify/Discogs-style database with filters. The record shop is the interface to the archive: visitors move through a spatial environment, browse alphabetically, load recordings into two decks, listen through the official YouTube IFrame Player API, mix A ↔ B, interpret what they hear and eventually contribute records back to the archive.

## Current status

**Development Build 001 / scaffold.** This is the first version-controlled foundation, not the finished research MVP.

Implemented now:

- React + TypeScript + Vite application scaffold
- alphabetical development rack UI
- two-deck record loading state
- deck volume, master volume and equal-power crossfader logic
- Zustand mixer state
- development-only placeholder archive records
- YouTube URL parser
- unit test scaffold for crossfader calculations
- Phaser, Supabase and YouTube dependencies prepared for the next implementation layer
- responsive/raw independent-record-shop visual direction

Still to implement before the research MVP can be called complete:

- Phaser shop-floor navigation and rack proximity interactions
- visible YouTube IFrame API players with custom Play/Pause
- real verified archive dataset
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
  data/         development seed archive
  domain/       archive types
  mixer/        pure audio-control calculations
  store/        Zustand application state
  youtube/      YouTube URL parsing and next player layer
```

Next architectural layers add the Phaser game world, YouTube player adapter, `archive/`, `research/`, `lib/supabase`, `supabase/migrations`, submission workflows and export scripts while keeping game objects decoupled from persistence and playback.

## YouTube constraint

Music playback will use the official YouTube IFrame Player API. The application must not download, extract, proxy or conceal YouTube media. Video should remain visible as part of the listening-station/CRT metaphor, while custom controls live outside the iframe.

## Research principle

The system should generate evidence from how participants browse, listen, compare and classify music. It should not encode a predetermined conclusion about categories such as “Latin.” Curator classification and listener interpretation must remain distinguishable in the data model.

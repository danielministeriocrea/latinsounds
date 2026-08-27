import { useMemo, useState } from 'react'
import { seedRecords } from './data/seedRecords'
import type { ArchiveRecord, DeckId, RecordSide } from './domain/archive'
import { effectiveDeckVolumes } from './mixer/equalPower'
import { useMixerStore } from './store/useMixerStore'

type LoadedDeck = { record: ArchiveRecord | null; side: RecordSide | null }
const emptyDeck: LoadedDeck = { record: null, side: null }

export default function App() {
  const [deckA, setDeckA] = useState<LoadedDeck>(emptyDeck)
  const [deckB, setDeckB] = useState<LoadedDeck>(emptyDeck)
  const [visitCount, setVisitCount] = useState(0)
  const {
    crossfader,
    deckAVolume,
    deckBVolume,
    masterVolume,
    setCrossfader,
    setDeckAVolume,
    setDeckBVolume,
    setMasterVolume,
  } = useMixerStore()

  const volumes = useMemo(
    () => effectiveDeckVolumes(crossfader, deckAVolume, deckBVolume, masterVolume),
    [crossfader, deckAVolume, deckBVolume, masterVolume],
  )

  function loadRecord(deck: DeckId, record: ArchiveRecord, side: RecordSide) {
    const payload = { record, side }
    if (deck === 'A') setDeckA(payload)
    else setDeckB(payload)
    setVisitCount((count) => count + 1)
  }

  return (
    <main className="app-shell">
      <header className="masthead">
        <div>
          <p className="eyebrow">RECORD SHOP ARCHIVE / DEVELOPMENT BUILD 001</p>
          <h1>LATIN SOUNDS</h1>
        </div>
        <div className="visit-stamp">
          <span>YOUR VISIT</span>
          <strong>{visitCount} RECORD LOADS</strong>
        </div>
      </header>

      <p className="intro">
        An independent record shop turned into a digital archive. Browse alphabetically, load two records and test an equal-power mixer before the full Phaser + YouTube listening station is connected.
      </p>

      <section className="rack-browser">
        <div className="section-label">ALPHABETICAL RACK / DEVELOPMENT PLACEHOLDERS</div>
        <div className="records-grid">
          {seedRecords.map((record) => (
            <article className="record-card" key={record.id}>
              <div className="record-sleeve" aria-hidden="true">{record.rack}</div>
              <div>
                <strong>{record.artist}</strong>
                <p>{record.title}</p>
                <small>Replace with verified archive data.</small>
              </div>
              <div className="load-actions">
                {record.sides.map((side) => (
                  <div className="side-row" key={side.id}>
                    <span>SIDE {side.label}</span>
                    <button type="button" onClick={() => loadRecord('A', record, side)}>LOAD A</button>
                    <button type="button" onClick={() => loadRecord('B', record, side)}>LOAD B</button>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="listening-station">
        <div className="section-label">LISTENING STATION / MIXER PROTOTYPE</div>
        <div className="decks-grid">
          <article className="deck"><strong>DECK A</strong><p>{deckA.record ? `${deckA.record.artist} — ${deckA.side?.title}` : 'NO RECORD LOADED'}</p><span>Effective YouTube volume: {volumes.a}</span></article>
          <article className="deck"><strong>DECK B</strong><p>{deckB.record ? `${deckB.record.artist} — ${deckB.side?.title}` : 'NO RECORD LOADED'}</p><span>Effective YouTube volume: {volumes.b}</span></article>
        </div>
        <div className="mixer" aria-label="Mixer controls">
          <label>DECK A VOLUME <output>{Math.round(deckAVolume * 100)}</output><input type="range" min="0" max="1" step="0.01" value={deckAVolume} onChange={(e) => setDeckAVolume(Number(e.target.value))} /></label>
          <label>CROSSFADER <output>{crossfader.toFixed(2)}</output><input type="range" min="0" max="1" step="0.01" value={crossfader} onChange={(e) => setCrossfader(Number(e.target.value))} /></label>
          <label>DECK B VOLUME <output>{Math.round(deckBVolume * 100)}</output><input type="range" min="0" max="1" step="0.01" value={deckBVolume} onChange={(e) => setDeckBVolume(Number(e.target.value))} /></label>
          <label>MASTER <output>{Math.round(masterVolume * 100)}</output><input type="range" min="0" max="1" step="0.01" value={masterVolume} onChange={(e) => setMasterVolume(Number(e.target.value))} /></label>
        </div>
      </section>

      <footer>Development Build 001 · React + TypeScript + Vite + Zustand · Phaser, YouTube and Supabase are the next implementation layers.</footer>
    </main>
  )
}

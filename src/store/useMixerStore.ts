import { create } from 'zustand'

export type MixerState = {
  crossfader: number
  deckAVolume: number
  deckBVolume: number
  masterVolume: number
  setCrossfader: (value: number) => void
  setDeckAVolume: (value: number) => void
  setDeckBVolume: (value: number) => void
  setMasterVolume: (value: number) => void
}

export const useMixerStore = create<MixerState>((set) => ({
  crossfader: 0.5,
  deckAVolume: 1,
  deckBVolume: 1,
  masterVolume: 0.8,
  setCrossfader: (crossfader) => set({ crossfader }),
  setDeckAVolume: (deckAVolume) => set({ deckAVolume }),
  setDeckBVolume: (deckBVolume) => set({ deckBVolume }),
  setMasterVolume: (masterVolume) => set({ masterVolume }),
}))

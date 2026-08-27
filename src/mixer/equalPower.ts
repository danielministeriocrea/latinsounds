export type MixerVolumes = { a: number; b: number }

const clamp01 = (value: number) => Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0))

export function equalPowerCoefficients(crossfader: number): MixerVolumes {
  const x = clamp01(crossfader)
  return { a: Math.cos((x * Math.PI) / 2), b: Math.sin((x * Math.PI) / 2) }
}

export function effectiveDeckVolumes(crossfader: number, deckAVolume: number, deckBVolume: number, masterVolume: number): MixerVolumes {
  const coefficients = equalPowerCoefficients(crossfader)
  const master = clamp01(masterVolume)
  return {
    a: Math.round(clamp01(deckAVolume) * coefficients.a * master * 100),
    b: Math.round(clamp01(deckBVolume) * coefficients.b * master * 100),
  }
}

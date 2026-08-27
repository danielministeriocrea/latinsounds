import { describe, expect, it } from 'vitest'
import { effectiveDeckVolumes, equalPowerCoefficients } from '../src/mixer/equalPower'

describe('equal-power crossfader', () => {
  it('puts all power on deck A at the left edge', () => {
    expect(equalPowerCoefficients(0)).toEqual({ a: 1, b: 0 })
  })

  it('is approximately 0.707 / 0.707 at centre', () => {
    const result = equalPowerCoefficients(0.5)
    expect(result.a).toBeCloseTo(Math.SQRT1_2, 5)
    expect(result.b).toBeCloseTo(Math.SQRT1_2, 5)
  })

  it('combines trim, crossfader and master into YouTube 0–100 volume', () => {
    expect(effectiveDeckVolumes(0, 1, 1, 0.8)).toEqual({ a: 80, b: 0 })
  })
})

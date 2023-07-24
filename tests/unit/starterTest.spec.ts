import { describe, expect, it } from 'vitest'

export function starterFunction(): string {
  return 'starter'
}

describe('starterFunction', () => {
  it('returns starter', () => {
    expect(starterFunction()).toBe('starter')
  })
})


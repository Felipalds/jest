test('two plus two equals four', () => {
    const s = 2 + 2
    expect(s).toBeGreaterThan(3)
    expect(s).toBeGreaterThanOrEqual(3.5)
    expect(s).toBeLessThan(5)
    expect(s).toBeLessThanOrEqual(4.5)

    expect(s).toBe(4)
    expect(s).toEqual(4)
})

test('floating numbers', () => {
    const s = 0.1 + 0.2
    expect(s).toBeCloseTo(0.3)
})
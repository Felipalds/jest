test('null', () => {
    const n = null
    expect(n).toBeNull()
    // expect(n).toBeUndefined()
    expect(n).toBeDefined()
    //expect(n).toBeTruthy()
    expect(n).toBeFalsy()
})

test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})
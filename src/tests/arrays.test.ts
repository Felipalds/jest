const shoppingList = [
    'milk',
    'eggs',
    'bread',
    'meat',
    'water'
]

test('there is milk in the shopping list', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
})
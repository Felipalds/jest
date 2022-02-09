import { sum, objects} from '../sum'

test('adds 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('objects', () => {
    expect(objects({one: 1})).toEqual({
        one: 1,
        two: 2
    })
})

test('adding numbers', () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            expect(a + b).not.toBe(0)
        }
    }
})


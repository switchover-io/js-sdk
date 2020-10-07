
test('playground', () => {

    type Adder = (x: number, y: number) => number;

    const add: Adder = (x, y) => {
        return x + y
    }

    expect(add(2,4)).toBe(6);


})
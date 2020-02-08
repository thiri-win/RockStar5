var math = require('./math.js');

test('Adding 2 and 3', () => {
    expect( math.add([2,3] )).toBe(5);
});

test('Adding 2, 3 and 4', () => {
    expect( math.add([2,3,4,5] )).toBe(14);
});

test('Dividing 10/2', ()=> {
    expect(math.div(10,2)).toBe(5);
});

test('Dividing 10/0', ()=> {
    expect(math.div(10,0)).toBe('Error');
})
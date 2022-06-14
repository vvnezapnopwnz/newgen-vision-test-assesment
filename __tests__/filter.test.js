import filterByPrice from '../src/filter';

const courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

test('Second prices variant', () => {
    const filterResult = [
        { name: 'Courses in England', prices: [ 0, 100 ] },
        { name: 'Courses in Italy', prices: [ 100, 200 ] },
        { name: 'Courses in Russia', prices: [ null, 400 ] },
        { name: 'Courses in China', prices: [ 50, 250 ] },
        { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
        { name: 'Courses in France', prices: [ null, null ] }
    ]
    const requiredRange1 = [null, 200];
    expect(filterByPrice(requiredRange1, courses)).toMatchObject(filterResult);
});

test('Third prices variant', () => {
    const filterResult = [
        { name: 'Courses in Italy', prices: [ 100, 200 ] },
        { name: 'Courses in Russia', prices: [ null, 400 ] },
        { name: 'Courses in China', prices: [ 50, 250 ] },
        { name: 'Courses in USA', prices: [ 200, null ] },
        { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
        { name: 'Courses in France', prices: [ null, null ] }
    ]

    const requiredRange2 = [100, 350];
    expect(filterByPrice(requiredRange2, courses)).toMatchObject(filterResult);
});

test('First prices variant', () => {
    const filterResult = [
        { name: 'Courses in Germany', prices: [ 500, null ] },
        { name: 'Courses in Russia', prices: [ null, 400 ] },
        { name: 'Courses in China', prices: [ 50, 250 ] },
        { name: 'Courses in USA', prices: [ 200, null ] },
        { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
        { name: 'Courses in France', prices: [ null, null ] }
    ];
    const requiredRange3 = [200, null];
    expect(filterByPrice(requiredRange3, courses)).toMatchObject(filterResult);
});

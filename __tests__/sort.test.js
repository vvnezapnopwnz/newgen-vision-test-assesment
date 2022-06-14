import sortByPrice from '../src/sort';

let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

test('Course price in ascending order', () => {
    const coursesByAsc = [
        { name: 'Courses in England', prices: [ 0, 100 ] },
        { name: 'Courses in Russia', prices: [ null, 400 ] },
        { name: 'Courses in France', prices: [ null, null ] },
        { name: 'Courses in China', prices: [ 50, 250 ] },
        { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
        { name: 'Courses in Italy', prices: [ 100, 200 ] },
        { name: 'Courses in USA', prices: [ 200, null ] },
        { name: 'Courses in Germany', prices: [ 500, null ] }
    ]
    expect(sortByPrice(courses, 'asc')).toMatchObject(coursesByAsc);
})

test('Course price in descending order', () => {
    const coursesByDesc = [
        { name: 'Courses in Germany', prices: [ 500, null ] },
        { name: 'Courses in USA', prices: [ 200, null ] },
        { name: 'Courses in Italy', prices: [ 100, 200 ] },
        { name: 'Courses in Kazakhstan', prices: [ 56, 324 ] },
        { name: 'Courses in China', prices: [ 50, 250 ] },
        { name: 'Courses in England', prices: [ 0, 100 ] },
        { name: 'Courses in Russia', prices: [ null, 400 ] },
        { name: 'Courses in France', prices: [ null, null ] }
    ]
    expect(sortByPrice(courses, 'desc')).toMatchObject(coursesByDesc);
})

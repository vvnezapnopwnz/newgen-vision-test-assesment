export default (courses, order = 'asc') => courses.sort((a,b) => {
        let [fromA] = a.prices;
        let [fromB] = b.prices;
        if(order === 'desc') {
            return fromB - fromA
        } else {
            return fromA - fromB
        }
    });


 export default (range, courses) => courses.filter(({ prices }) => {
        let left = false, right = false;
        let [from, to] = prices; // [от определенной цены, до опред. цены]
        let [min, max] = range; // [ граница минимума, граница макс.] - критерии сравнения для поиска подходящего диапазона курсов
        if(min === null || to > min || to === null) left = true;
        if(max > from || max === null) right = true;
        return left && right;
    });

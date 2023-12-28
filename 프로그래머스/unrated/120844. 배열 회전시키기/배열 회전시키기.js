function solution(numbers, direction) {
    let num = 0;
    if (direction === 'right') {
        num = numbers.pop();
        numbers.unshift(num);
        return numbers;
    } else {
        num = numbers.shift();
        numbers.push(num);
        return numbers;
    }
}
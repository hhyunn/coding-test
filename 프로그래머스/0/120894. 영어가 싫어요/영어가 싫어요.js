function solution(numbers) {
    const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    number.forEach((v, i) => {
        numbers = numbers.split(v).join(i);
    })
    return parseInt(numbers);
}
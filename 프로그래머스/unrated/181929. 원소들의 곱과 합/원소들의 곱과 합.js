function solution(num_list) {
    let multiply = num_list.reduce((a, c) => a * c);
    let sum = num_list.reduce((a, c) => a + c) ** 2;
    let answer = multiply < sum ? 1 : 0;
    return answer;
}
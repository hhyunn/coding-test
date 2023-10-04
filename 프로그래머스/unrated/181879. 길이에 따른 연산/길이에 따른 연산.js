function solution(num_list) {
    let answer = 0;
    let sum = 0;
    let multiply = 1;
    num_list.forEach(v => {
        answer = num_list.length >= 11 ? sum += v : multiply *= v;
    });
    return answer;
}
function solution(my_string, num1, num2) {
    let answer = '';
    my_string.split('').forEach((v, i, arr) => {
        if (i === num1) {
            answer += arr[num2];
        } else if (i === num2) {
            answer += arr[num1];
        } else {
            answer += v;
        }
    })
    return answer;
}
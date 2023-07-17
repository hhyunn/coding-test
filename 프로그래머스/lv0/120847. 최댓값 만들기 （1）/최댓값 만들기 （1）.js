function solution(numbers) {
    let answer = 0;
    answer = numbers.sort(function(a,b) {
        return a-b;
    });
    answer = answer.slice(-2);
    answer = answer[0] * answer[1];
    return answer;
}
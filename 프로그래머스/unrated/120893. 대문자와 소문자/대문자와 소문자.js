function solution(my_string) {
    let answer = '';
    my_string.split('').forEach(v => {
        v === v.toLowerCase() ? answer += v.toUpperCase() : answer += v.toLowerCase();
    })
    return answer;
}
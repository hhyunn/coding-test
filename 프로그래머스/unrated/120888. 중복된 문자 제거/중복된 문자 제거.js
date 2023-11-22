function solution(my_string) {
    let answer = '';
    let str = '';
    my_string.split('').forEach(v => {
        str.includes(v) ? null : answer += v;
        str += v;
    })
    return answer;
}
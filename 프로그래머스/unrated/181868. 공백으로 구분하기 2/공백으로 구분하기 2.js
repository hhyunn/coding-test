function solution(my_string) {
    let answer = [];
    my_string.trim().split(' ').forEach(v => {
        v !== '' ? answer.push(v) : null;
    })
    return answer;
}
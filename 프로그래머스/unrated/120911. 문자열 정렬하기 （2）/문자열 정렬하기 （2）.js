function solution(my_string) {
    const answer = [];
    my_string.split('').forEach(v => {
        answer.push(v.toLowerCase());
    })
    return answer.sort().join('');
}
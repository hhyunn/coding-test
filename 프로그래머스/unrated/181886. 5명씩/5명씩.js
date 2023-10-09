function solution(names) {
    const answer = [];
    for (let i = 0; i < Math.ceil(names.length/5); i++) {
        answer.push(names[i*5]);
    }
    return answer;
}
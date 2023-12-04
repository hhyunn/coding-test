function solution(k, m, score) {
    let answer = 0;
    const arr = score.sort((a, b) => b - a);
    for (let i=0; i<parseInt(score.length/m); i++) {
        const num = arr.slice(i*m, (i+1)*m)[m-1];
        answer += num * m;
    }
    return answer;
}
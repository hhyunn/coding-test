function solution(n, m, section) {
    let answer = 0;
    let num = 0;
    section.forEach((v, i) => {
        if (v >= num) {
            answer++;
            num = v + m;
        }
    })
    return answer;
}
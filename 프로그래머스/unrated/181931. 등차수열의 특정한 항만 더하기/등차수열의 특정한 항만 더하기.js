function solution(a, d, included) {
    let answer = 0;
    for (let i=0; i<included.length; i++) {
        included[i] ? answer+= a+(d*i) : null;
    }
    return answer;
}
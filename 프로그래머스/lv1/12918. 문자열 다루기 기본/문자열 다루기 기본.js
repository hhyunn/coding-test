function solution(s) {
    let answer = true;
    if (!s.match(/[a-z, A-Z]/g)) {
        if (s.length === 4 || s.length === 6) {
            answer = true;
        } else {
            answer = false;
        }
    } else {
        answer = false;
    }
    return answer;
}
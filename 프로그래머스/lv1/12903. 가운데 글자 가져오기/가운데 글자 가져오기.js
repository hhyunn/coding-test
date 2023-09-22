function solution(s) {
    let answer = '';
    const i = Math.floor(s.length/2);
    answer = s.length % 2 ? s[i] : s.slice(i-1, i+1);
    return answer;
}
function solution(hp) {
    let answer = 0;
    answer = Math.floor(hp/5) + Math.floor(Math.floor(hp%5)/3) + Math.floor(Math.floor(hp%5)%3);
    return answer;
}
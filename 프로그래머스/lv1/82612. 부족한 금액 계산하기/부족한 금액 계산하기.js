function solution(price, money, count) {
    let answer = -1;
    let total = 0;
    for (let i=1; i<=count; i++) {
        total += price * i;
        answer = (total > money === true) ? total - money : 0;
    }
    return answer;
}
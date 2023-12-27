function solution(d, budget) {
    let answer = 0;
    let money = 0;
    d.sort((a, b) => a - b).forEach(v => {
        money += v;
        money <= budget ? answer++ : answer;
    })
    return answer;
}
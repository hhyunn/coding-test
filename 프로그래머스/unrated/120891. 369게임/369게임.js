function solution(order) {
    let answer = 0;
    order.toString().split('').forEach((v) => {
        for (let i=3; i<=9; i+=3) {
            v.includes(`${i}`) ? answer ++ : null;
        }
    })
    return answer;
}
function solution(food) {
    let answer = '';
    food.forEach((v, index) => {
        for (let i=0; i<parseInt(food[index]/2); i++) {
            answer += index;
        }
    })
    answer += 0 + answer.split('').reverse().join('');
    return answer;
}
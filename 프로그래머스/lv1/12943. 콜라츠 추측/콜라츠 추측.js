function solution(num) {
    let answer = 0;
    let count = 0;
    
    while (num !== 1) {
        num = num%2 === 0 ? num/2 : num*3+1;
        count++;
    }

    answer = count > 500 ? -1 : count;
    
    return answer;
}
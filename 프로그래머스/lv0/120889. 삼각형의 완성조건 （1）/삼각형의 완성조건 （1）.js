function solution(sides) {
    let answer = 0;
    let maxNum = Math.max(...sides);
    let sum = sides[0] + sides[1] + sides[2];
    answer = (sum-maxNum > maxNum) ? 1 : 2 ;
    return answer;
}
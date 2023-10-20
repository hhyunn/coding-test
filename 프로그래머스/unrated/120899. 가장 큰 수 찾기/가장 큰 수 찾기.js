function solution(array) {
    const answer = [];
    const maxNum = Math.max(...array);
    const index = array.indexOf(maxNum);
    answer.push(maxNum, index);
    return answer;
}
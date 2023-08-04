function solution(array, height) {
    let answer = 0;
    let tall = array.filter(x => x > height);
    answer = tall.length;
    return answer;
}
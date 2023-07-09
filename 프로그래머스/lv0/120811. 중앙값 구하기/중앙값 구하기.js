/*
function solution(array) {
    let answer = 0;
    const index = parseInt((array.length)/2);
    const num = array.sort(function(a, b){
        return a - b;
    });
    answer = num[index];
    return answer;
}
*/

/*
const solution = (array) => {
    array = array.sort(function (a, b) {
        return a - b;
    });
    let num = Math.floor(array.length/2);
    let answer = array[num];
    return answer;   
}
*/

const solution = (array) => {
    array = array.sort((a, b) => a - b);
    let num = Math.floor(array.length/2);
    let answer = array[num];
    return answer;   
}
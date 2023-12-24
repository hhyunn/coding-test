function solution(arr1, arr2) {
    let answer = 0;
    if (arr1.length < arr2.length) {
        answer = -1;
    } else if (arr1.length > arr2.length) {
        answer = 1;
    } else {
        arr1.reduce((a, c) => a + c, 0) < arr2.reduce((a, c) => a + c, 0) ? answer = -1 : (arr1.reduce((a, c) => a + c, 0) === arr2.reduce((a, c) => a + c, 0) ? answer = 0 : answer = 1);
    }
    return answer;
}
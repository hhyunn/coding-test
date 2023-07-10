/*
function solution(n) {
    // 반복문. n을 1부터 나눠서. 나머지가 1이면. 나누려했던 그 값을 리턴
    for (let i=0; i<=1000000; i++) {
        if (n%i == 1) {
            return i;
        }
    }
}
*/

function solution(n) {
    for (let i=0; i<n; i++) {
        if (n%i == 1) {
            return i;
        }
    }
}
function solution(n, arr1, arr2) {
    let answer = [];
    // console.log((arr1[1] | arr2[1]).toString(2).replaceAll(0, ' ').replaceAll(1, '#'));
    // console.log((arr1[3] | arr2[3]).toString(2).padStart(6, 0).replaceAll(0, ' ').replaceAll(1, '#'));
    for(let i=0; i<n; i++) {
        answer.push((arr1[i] | arr2[i]).toString(2).padStart(n, 0).replaceAll(0, ' ').replaceAll(1, '#'));
    }
    return answer;
}
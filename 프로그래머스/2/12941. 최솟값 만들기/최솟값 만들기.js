function solution(A,B){
    let answer = 0;
    const sortA = A.sort((a, b) => a - b);
    const sortB = B.sort((a, b) => b - a);
    sortA.forEach((v, i) => {
        answer += v * sortB[i];
    })
    return answer;
}
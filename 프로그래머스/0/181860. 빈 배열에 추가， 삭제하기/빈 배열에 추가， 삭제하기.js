function solution(arr, flag) {
    const answer = [];
    arr.forEach((v, i) => {
        if (flag[i]) {
            for (let idx=0; idx<v*2; idx++) {
                answer.push(v);
            }
        } else {
            answer.splice(answer.length-v, v);
        }
    })
    return answer;
}
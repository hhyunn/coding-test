function solution(arr) {
    let answer = [];
    answer = arr.map(v => {
        if (v>=50 && v%2===0) {
            return v / 2;
        } else if (v<50 && v%2!==0) {
            return v * 2;
        } else {
            return v;
        }
    });
    return answer;
}
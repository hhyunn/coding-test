function solution(s) {
    let answer = 0;
    s.split(' ').forEach((v, i, arr) => {
        v !== 'Z' ? answer += parseInt(arr[i]) : answer -= parseInt(arr[i-1]);
    })
    return answer;
}
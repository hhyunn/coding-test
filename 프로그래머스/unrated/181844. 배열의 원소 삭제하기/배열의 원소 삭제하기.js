function solution(arr, delete_list) {
    const answer = [];
    arr.forEach((v, i) => {
        delete_list.find((e) => e === v ) ? null : answer.push(v);
    })
    return answer;
}
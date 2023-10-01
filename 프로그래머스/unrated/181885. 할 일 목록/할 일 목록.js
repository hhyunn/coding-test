function solution(todo_list, finished) {
    let answer = [];
    todo_list.forEach((v, i, arr) => {
        finished[i] ? null : answer.push(arr[i]);
    })
    return answer;
}
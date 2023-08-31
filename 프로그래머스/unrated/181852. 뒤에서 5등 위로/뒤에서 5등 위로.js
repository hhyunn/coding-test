function solution(num_list) {
    let answer = [];
    answer = num_list.sort(function(a, b){return a - b}).splice(5);
    return answer;
}
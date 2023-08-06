function solution(my_string, is_prefix) {
    let answer = 0;
    answer = my_string.search(is_prefix) ? 0 : 1;
    return answer;
}
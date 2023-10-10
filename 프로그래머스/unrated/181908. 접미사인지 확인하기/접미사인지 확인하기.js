function solution(my_string, is_suffix) {
    let answer = 0;
    answer = my_string.search(is_suffix + '$') !== -1 ? 1 : 0 ;
    return answer;
}
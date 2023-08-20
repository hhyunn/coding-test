function solution(my_string, index_list) {
    let answer = '';
    answer = index_list.map(v => my_string[v]).join('');
    return answer;
}
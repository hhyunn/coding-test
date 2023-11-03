function solution(my_strings, parts) {
    let answer = '';
    my_strings.forEach((v, i) => {
        answer += my_strings[i].slice(parts[i][0], parts[i][1]+1);
    })
    return answer;
}
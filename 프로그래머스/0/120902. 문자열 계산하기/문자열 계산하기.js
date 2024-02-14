function solution(my_string) {
    let answer = 0;
    let str = my_string.split(' ');
    answer = parseInt(str[0]);
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '+') answer += parseInt(str[i + 1]);
        else if (str[i] === '-') answer -= parseInt(str[i + 1]);
    }
    return answer;
}
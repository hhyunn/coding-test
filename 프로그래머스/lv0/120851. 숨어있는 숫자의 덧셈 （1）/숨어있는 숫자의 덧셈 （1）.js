function solution(my_string) {
    let answer = 0;
    my_string.replaceAll(/[a-z, A-Z]/g, '').split('').map(v => answer+=Number(v));
    return answer;
}
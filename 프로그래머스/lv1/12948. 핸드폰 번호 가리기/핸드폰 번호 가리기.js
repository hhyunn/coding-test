function solution(phone_number) {
    let answer = '';
    let last_number = phone_number.slice(-4);
    
    let star_num = phone_number.length - 4;
    let star = '';
    for (let i=0; i<star_num; i++) {
        star += '*';
    }
    
    answer = star + last_number;
    return answer;
}
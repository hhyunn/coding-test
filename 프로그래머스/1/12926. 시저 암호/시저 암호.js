function solution(s, n) {
    let answer = '';
    let num = 0;
    s.split('').forEach(v => {
        if (v !== ' ') {
            num = v.charCodeAt() + n;
            if ((v.charCodeAt() >= 65 && v.charCodeAt() <= 90) && num > 90) {
                num = 65 + (num - 91);
            }
            if ((v.charCodeAt() >= 97 && v.charCodeAt() <= 122) && num > 122) {
                num = 97 + (num - 123);
            }
            answer += String.fromCharCode(num);
        }
        else {
            answer += ' ';
        }
        
    })
    return answer;
}
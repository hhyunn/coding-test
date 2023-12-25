function solution(my_string) {
    const arr = my_string.split('').filter(v => !(v.charCodeAt() >= 97 && v.charCodeAt() <= 122));
    return arr.map(v => parseInt(v)).sort();
}
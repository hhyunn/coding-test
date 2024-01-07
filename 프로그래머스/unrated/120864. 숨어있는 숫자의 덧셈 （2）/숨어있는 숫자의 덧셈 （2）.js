function solution(my_string) {
    return my_string.replace(/[^0-9]/g, ' ').split(' ').reduce((a, c) => a + (c !== '' ? parseInt(c) : 0), 0);
}
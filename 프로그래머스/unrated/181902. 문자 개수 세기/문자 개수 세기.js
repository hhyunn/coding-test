function solution(my_string) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const arr = new Array(52).fill(0);
    my_string.split('').forEach((v, i) => {
        const index = alphabet.split('').indexOf(v);
        arr[index]++;
    })
    return arr;
}
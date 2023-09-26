function solution(n_str) {
    let n_arr = n_str.split('');
    for (let i=0; i<n_str.length; i++) {
        n_arr[0] === '0' ? n_arr.shift() : null;
    }
    return n_arr.join('');
}
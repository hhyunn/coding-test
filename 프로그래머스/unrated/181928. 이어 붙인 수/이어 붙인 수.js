function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach((v, i) => v%2 === 0 ? even+=v : odd+=v);
    return parseInt(even) + parseInt(odd);
}
function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach((v, i) => {
        i%2 ? odd+=v : even+=v;
    })
    return odd > even ? odd : (odd < even ? even : even);
}
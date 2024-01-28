function solution(polynomial) {
    let a = 0, b = 0;
    polynomial.split(' + ').forEach(v => {
        if (v.includes('x')) {
            a += v === 'x' ? 1 : parseInt(v.slice(0, -1));
        } else {
            b += parseInt(v);
        }
    })
    if (a !== 0 && b !== 0) {
        return a === 1 ? `x + ${b}` : `${a}x + ${b}`;
    } else if (a === 0) {
        return `${b}`;
    } else {
        return a === 1 ? `x` : `${a}x`;
    }
}
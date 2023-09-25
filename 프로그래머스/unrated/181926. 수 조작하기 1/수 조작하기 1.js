function solution(n, control) {
    control.split('').forEach(item => {
        switch (item) {
            case 'w': n++; break;
            case 's': n--; break;
            case 'd': n+=10; break;
            case 'a': n-=10; break;
        }
    })
    return n;
}
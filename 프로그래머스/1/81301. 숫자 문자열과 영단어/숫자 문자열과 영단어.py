def solution(s):
    num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for i, v in enumerate(num):
        s = s.replace(v, str(i))
    return int(s)
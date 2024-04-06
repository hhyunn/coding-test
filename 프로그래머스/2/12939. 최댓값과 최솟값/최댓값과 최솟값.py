def solution(s):
    num = list(int(i) for i in s.split(' '))
    return f'{min(num)} {max(num)}'
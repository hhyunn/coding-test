def solution(my_strings, parts):
    answer = ''
    for i, v in enumerate(my_strings):
        s, e = parts[i]
        answer += v[s:e+1]
    return answer
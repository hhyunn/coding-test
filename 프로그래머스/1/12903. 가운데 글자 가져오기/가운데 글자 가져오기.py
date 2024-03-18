import math
def solution(s):
    strLen = len(s)
    num = math.floor(strLen/2)
    if strLen%2:
        return s[num]
    else:
        return s[num-1:num+1]
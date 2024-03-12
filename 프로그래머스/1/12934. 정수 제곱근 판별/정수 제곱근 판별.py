import math
def solution(n):
    x = math.sqrt(n)
    if n%x == 0:
        return pow(x+1, 2)
    return -1
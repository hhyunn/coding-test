def solution(myStr):
    for i in ['a', 'b', 'c']:
        myStr = myStr.replace(i, ' ')
    return myStr.split() or ['EMPTY']
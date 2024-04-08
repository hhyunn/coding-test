def solution(s):
    words = s.split(' ')
    arr = []
    for word in words:
        if word != '':
            arr.append(word[0].upper() + word[1:].lower())
        else:
            arr.append('')
    return ' '.join(arr)
def solution(my_string, is_suffix):
    suffix_len = len(is_suffix)
    return 1 if is_suffix == my_string[-suffix_len:] else 0
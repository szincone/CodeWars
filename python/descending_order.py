def descending_order(num):
    sorted_nums = list(map(lambda x: x, str(num)))
    sorted_nums.sort(reverse = True)
    return int("".join(sorted_nums))

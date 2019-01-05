def persistence(n):
    count = 0
    n_split = "".join(str(n))
    total = 1
    def get_count(
    for x in n_split:
        total *= int(x)
    if total <= 9:
        return count
    else:
        count += 1
        return persistence(total)

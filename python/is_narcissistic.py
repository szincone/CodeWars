def is_narcissistic(i):
    # turn int into string
    number_string = str(i)
    sum_of_digits = 0
    # iterate over string
    for num in number_string:
        # multiply each num by length exponent
        sum_of_digits += int(num) ** len(number_string)
    # if sum of digits to power of n equals i, it's narcissistic
    if sum_of_digits == i:
        return True
    else:
        return False


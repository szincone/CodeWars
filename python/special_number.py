def special_number(number):
    # turn number into string
    number_str = str(number)
    # iterate through string
    for num in number_str:
        # if a character is greater than 5 break challenge
        if int(num) > 5:
            return "NOT!!"
    # makes it through the loop it's special
    return "Special!!"

def get_middle(s):
    if (len(s) % 2 == 0):
        middleChar = s[len(s) / 2 - 1] + s[len(s) / 2]
        return middleChar
    else:
        return s[len(s) / 2]

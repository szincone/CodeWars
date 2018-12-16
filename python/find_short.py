def find_short(s):
    # your code here
    s = s.split()
    l = s[0]
    for x in range(0, len(s)):
        if len(s[x]) <= len(l):
            l = s[x]
    return len(l)  # l: shortest word length

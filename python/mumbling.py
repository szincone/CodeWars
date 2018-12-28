def accum(s):
    results = []
    for x in range(0, len(s)):
        # if first char is upper append, else make it upper and append
        results.append(s[x]) if s[x] == s[x].upper else results.append(s[x].upper())
        # multiply char by index and append
        results.append(x * s[x].lower()) if (x >= 1) else results
        # seperate values w/ a dash
        results.append("-") if (x != len(s)-1) else results
    # turn array into string w/ no spaces between elements
    return "".join(results)

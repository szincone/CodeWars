def ordered_count(input):
    input_list = list(input)
    result = []
    for x in input_list:
        if x not in result:
            count = 0
            for j in input_list:
                if j == x:
                    count += 1
            tup = tuple((x, count))
            if tup not in result:
                result.append(tup)
    return result
                

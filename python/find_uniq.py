def find_uniq(arr):
    temp, result = [], []
    for x in arr:
        if arr[0] == x:
            temp.append(x)
        else:
            result.append(x)
    return result[0] if len(temp) > len(result) else temp[0]


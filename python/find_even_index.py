def find_even_index(arr):
    for x in range(0, len(arr)):
        if  sum(arr[0:x]) == sum(arr[-1:x:-1]):
            return x
    return -1

def spin_words(sentence):
    result = []
    # turn string into list
    new_sentence = sentence.split()
    # iterate over each word
    for word in new_sentence:
        # if greater than 4, reverse
        if len(word) >= 5:
            # [start:end:count] so this reverses the word
            result.append(word[::-1])
        else:
            result.append(word)
    # turn back into string w/ space between each item in list
    return " ".join(result)

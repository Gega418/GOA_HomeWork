#1
def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    x = 0
    y = 0
    for i in walk:
        if i == "n":
            y += 1
        elif i == "s":
            y -= 1
        elif i == "e":
            x += 1
        elif i == "w":
            x -= 1
    return x == 0 and y == 0

#2
def count_correct_characters(correct, guess):
    count = 0
    for i in range(len(correct)):
        if correct[i] == guess[i]:
            count += 1
    return count

#3
def kebabize(st):
    st2 = ""
    for i in st:
        if i.isdigit():
            continue
        if i.isupper():
                st2 += "-"
                st2 = st2 + i.lower()
        else:
            st2 += i
    if st[0].isupper():
        return st2[1:]
    else:
        return st2
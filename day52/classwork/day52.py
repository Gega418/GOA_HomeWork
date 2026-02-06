#1
def create_phone_number(n):
    result = ""
    for i in range(0,10):
        if i == 0:
            result += "("
        if i == 3:
            result += ") "
        if i == 6:
            result += "-"
        
        result = result + str(n[i])
    return result

#2
def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    elif len(names) == 4:
        return f"{names[0]}, {names[1]} and 2 others like this"
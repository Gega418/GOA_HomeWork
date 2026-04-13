# 1
def remove_smallest(numbers):
    if not numbers:
        return []
    res = numbers.copy()
    res.remove(min(res))
    return res

# 2
def get_sum_of_digits(num):
    sum = 0
    digits = list(str(num))
    for x in digits:
        sum += int(x)
    return sum

# 3
# function shortestStepsToNum(num) {
#   let count = 0
#   while(num !== 1){
#     if(num % 2 === 0){
#       num = num / 2
#     }else{
#       num = num - 1
#     }
#     count ++
#   }
#   return count

# }

# 4
def accum(st):
    count= 1
    strng = ""
    for i in st:
        strng+= (i*count) + "-"
        count +=1
    strng = strng[:-1].split("-")
    strng = [i.capitalize() for i in strng]
    return "-".join(strng)
    
# 5
# ?

# 6
def pig_it(text):
    text = text.split(" ")
    txt = ""
    for i in text:
        txt += i[1:]
        txt += i[0] + "ay" + " "
    if txt.endswith("?ay "):
        return txt[0:-3]
    elif txt.endswith("!ay "):
        return txt[0:-3]
    else:
        return txt[0:-1]
    
# 7
# ? 
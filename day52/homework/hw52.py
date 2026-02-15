# 8kyu 

#1
def solution(string):
    return string[::-1]

#2
def square_sum(numbers):
    total = 0
    for i in numbers:
        total = total + i**2
    return total

#3
def find_smallest_int(arr):
    return min(arr)

#4
def summation(num):
    total = 0
    for i in range(1, num + 1):
        total = total + i
    return total

#5
def greet(name):
    return f"Hello, {name} how are you doing today?"

#6
def litres(time):
    return time // 2

#7
def digitize(n):
    s = str(n)
    reversed_s = s[::-1]
    result = []
    for i in reversed_s:
        result.append(int(i))
    return result

#8
def maps(a):
    new_a = []
    for i in a:
        new_a.append(i*2)
    return new_a

#9
def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    else:
        return n * m

#10
def past(h, m, s):
    hours_to_ms = h * 3600000
    minutes_to_ms = m * 60000
    seconds_to_ms = s * 1000
    return hours_to_ms + minutes_to_ms + seconds_to_ms

#11
def find_needle(haystack):
    index = haystack.index("needle")
    return "found the needle at position " + str(index)

#12
def hero(bullets, dragons):
    if bullets // 2 >= dragons:
        return True
    else:
        return False
    
#13
def zero_fuel(distance_to_pump, mpg, fuel_left):
    if mpg * fuel_left >= distance_to_pump:
        return True
    else:
        return False
    
#14
def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)

#15
def check(seq, elem):
    for i in seq:
        if i == elem:
            return True
    else:
        return False
    
#16
def fake_bin(x):
    result = ""
    for i in x:
        if int(i) < 5:
            result += "0"
        elif int(i) >= 5:
            result += "1"
    return result

#17
def count_by(x, n):
    result = []
    for i in range(1, n + 1):
        multiply = x * i
        result.append(multiply)
    return result

#18
def rps(p1, p2):
    if p1 == "rock" and p2 == "scissors":
        return "Player 1 won!"
    elif p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    elif p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    elif p1 == "paper" and p2 == "scissors":
        return "Player 2 won!"
    elif p1 == "rock" and p2 == "paper":
        return "Player 2 won!"
    elif p1 == "scissors" and p2 == "rock":
        return "Player 2 won!"
    else:
        return "Draw!"
    
#19
def count_sheep(n):
    result = ""
    for i in range(1, n + 1):
        result += f"{i} sheep..."
    return result

#20
def greet(name, owner):
    if name == owner:
        return "Hello boss"
    else:
        return "Hello guest"



#7kyu

#1
def disemvowel(string_):
    filter = ""
    for i in string_:
        if i not in "aeiouAEIOU":
            filter += i
    return filter

#2
def square_digits(num):
    result = ""
    for i in str(num):
        squared = int(i) * int(i)
        result += str(squared)
    return int(result)

#3
def descending_order(num):
    sorted_list = sorted(str(num), reverse=True)
    result_str = ""
    for i in sorted_list:
        result_str += i
    return int(result_str)

#4
def is_square(n):    
    if n < 0:
        return False
    return (n **0.5) % 1 == 0

#5
def is_isogram(string):
    string = string.lower()
    for i in string:
        if string.count(i) > 1:
            return False
    return True

#6
def xo(s):
    s = s.lower()
    if s.count("x") == s.count("o"):
        return True
    else:
        return False
    
#7
def DNA_strand(dna):
    result = ""
    for i in dna:
        if i == "A":
            result += "T"
        elif i == "T":
            result += "A"
        elif i == "G":
            result += "C"
        elif i == "C":
            result += "G"
    return result

#8
def validate_pin(pin):
    if len(pin) == 4 or len(pin) == 6:
        for i in pin:
            if i not in "0123456789":
                return False
        return True
    else:
        return False
    
#9
def is_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        return True
    else:
        return False
    
#10
def get_sum(a,b):
    if a == b:
        return a
    elif a < b:
        total = 0
        for i in range(a, b + 1):
            total += i
        return total
    else:
        total = 0
        for i in range(b, a + 1):
            total += i
        return total
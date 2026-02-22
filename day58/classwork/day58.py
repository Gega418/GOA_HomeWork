# შექმენით სია სადაც გექნებათ სახელები და ყველა სახელს მოუწერეთ თქვენი გვარი

names = ["Gega", "Mate", "Nika", "Dato", "Luka"]

names_surnames = map(lambda name: name + " Pirtskhelava", names)

print(list(names_surnames))

#შექმენით რიცხვების სია, შემდეგ შეამოწმეთ ლუწი თუა მნიშვნელობა მხოლოდ ეგ რიცხვები დაგვიბრუნოს ახალმა მასივმა, აუცილებელი პრობაა რომ გამოიყენოთ მასივი

nums = [1,2,3,4,5]

even_nums = filter(lambda num: num % 2 == 0, nums)

print(list(even_nums))

#ჩამოწერეთ თქვენი სკოლის ნიშნები, შემდეგ გამოითვალეთ საშუალო არითმეტიკული, ხოლო შემდეგ გაიგეთ კენტია თუ ლუწი filter-ის საშუალებით, გამოიყენეთ MAP ი დავალებაში

qulebi = [10, 10, 10, 9, 10]

average = map(lambda num: num / len(qulebi), qulebi)

if_even = filter(lambda num: num % 2 == 0, average)

print(sum(average))
print(list(if_even))


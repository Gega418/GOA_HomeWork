# 1)კვადრატი: შექმენი lambda, რომელიც რიცხვს აიყვანს კვადრატში.
# 2)გამრავლება: შექმენი lambda, რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ნამრავლს.
# 3)ტემპერატურა: დაწერე lambda, რომელიც ცელსიუსს გადაიყვანს ფარენჰეიტში ფორმულით:F = C * 1.8 + 32
# 4)ლუწი/კენტი: შექმენი lambda, რომელიც აბრუნებს True-ს, თუ რიცხვი ლუწია და False-ს, თუ კენტია.
# 5)სტრიქონის სიგრძე: შექმენი lambda, რომელიც აბრუნებს ტექსტის სიგრძეს.
# 6)სახელების დალაგება: გაქვს სია ["დათო", "ეკა", "ალექსანდრე", "გია"]. დაალაგე სახელები მათი სიგრძის მიხედვით.
# 7)ბოლო ასო: იგივე სია დაალაგე სახელების ბოლო ასოს მიხედვით.
# 8)კოორდინატები: გაქვს წერტილების სია: [(1, 5), (8, 2), (4, 10)]. დაალაგე ისინი მეორე (Y) კოორდინატის მიხედვით.
# 9) გაქვს პროდუქტების კოლექცია: [{"name": "პური", "price": 1.2}, {"name": "რძე", "price": 4.5}, {"name": "ყველი", "price": 12.0}]. დაალაგე ისინი ფასის მიხედვით ზრდადობით.
# 10)Case-Insensitive: დაალაგე სია ["banana", "Apple", "cherry", "Berry"] ისე, რომ დიდმა და პატარა ასოებმა გავლენა არ მოახდინოს ანბანურ თანმიმდევრობაზე (მინიშნება: .lower()).
# 11)ასაკის კონტროლი: შექმენი lambda, რომელიც იღებს ასაკს და აბრუნებს "Adult"-ს, თუ ასაკი 18 ან მეტია, და "Minor"-ს სხვა შემთხვევაში.
# 12)დადებითი/უარყოფითი: შექმენი lambda, რომელიც რიცხვის მიღებისას აბრუნებს "Positive", "Negative" ან "Zero".
# გამოიყენეთ სინტაქსი: lambda x: "კი" if პირობა else "არა"

#1
multiply = lambda x: x ** 2
print(multiply(int(input("Enter any number: "))))

#2
two_numbers = lambda x, y: x * y
print(two_numbers(int(input("Enter first number: ")), int(input("Enter second number: "))))

#3
c_to_f = lambda C: C * 1.8 + 32
print(c_to_f(int(input("Enter number: "))))

#4
even_odd = lambda x: True if x % 2 == 0 else False
print(even_odd(int(input("Enter any number: "))))

#5
lenght = lambda x: len(x)
print(lenght(input("Enter any words: ")))

#6
names = ["დათო", "ეკა", "ალექსანდრე", "გია"]
names.sort(key=len)
print(names)

#7
names = ["დათო", "ეკა", "ალექსანდრე", "გია"]
sorted_names = sorted(names, key=lambda x: x[-1])
print(sorted_names)

#8
coor = [(1, 5), (8, 2), (4, 10)]
coor1 = sorted(coor, key=lambda y: y[-1])
print(coor1)

#9
products =  [{"name": "პური", "price": 1.2}, {"name": "რძე", "price": 4.5}, {"name": "ყველი", "price": 12.0}]
sorted_products = sorted(products, key=lambda x: x["price"])
print(sorted_products)

#10
fruits = ["banana", "Apple", "cherry", "Berry"]
sorted_fruits = sorted(fruits, key=lambda x: x.lower())
print(sorted_fruits)

#11
adult_minor = lambda x: "Adult" if x >= 18 else "Minor"
print(adult_minor(int(input("Enter your age: "))))

#12
checking = lambda x: "Positive" if x > 0 else "Negative" if x < 0 else "Zero"
print(checking(int("Enter any number: ")))